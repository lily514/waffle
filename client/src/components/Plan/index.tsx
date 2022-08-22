import React, {FunctionComponent, useState, useEffect} from "react";
import Typography from "@mui/material/Typography";
import {useGetAllThemesAndMealsQuery, useGetWeeklyPlanQuery} from "../../store/api";
import Grid2 from "@mui/material/Unstable_Grid2";
import {IWeekdayPlan, IWeeklyPlan, IWeekdayDictionary, WEEKDAY} from "../../types/plan";
import {InputLabel, NativeSelect} from "@mui/material";
import {IMeal} from "../../types/meal";
import Button from "@mui/material/Button";
import update from "immutability-helper"

const getWeeklyPlanDictionary = (weekPlan?: IWeeklyPlan) => {
    const dict: IWeekdayDictionary = {
        [WEEKDAY.MONDAY]: {},
        [WEEKDAY.TUESDAY]: {},
        [WEEKDAY.WEDNESDAY]: {},
        [WEEKDAY.THURSDAY]: {},
        [WEEKDAY.FRIDAY]: {},
        [WEEKDAY.SATURDAY]: {},
        [WEEKDAY.SUNDAY]: {},
        
    }
    weekPlan?.forEach((dayPlan) => {
        const weekdayName = dayPlan.weekday?.name
        if (!weekdayName) return
        dict[weekdayName] = {
            id: dayPlan.id ?? undefined, 
            themeId: dayPlan.theme?.id ?? undefined, 
            mealId: dayPlan.meal?.id ?? undefined
        }
    })
    return dict
}

const getRandomInt = (max: number) =>  Math.floor(Math.random() * max)

export const WeeklyPlan: FunctionComponent = () => {
    const {data: weeklyPlan, isLoading: isLoadingWeeklyPlan} = useGetWeeklyPlanQuery()
    const {data, isLoading: isLoadingThemesAndMeals} = useGetAllThemesAndMealsQuery()
    const themes = data?.themes
    const meals = data?.meals
    const isLoading = isLoadingWeeklyPlan || isLoadingThemesAndMeals
    const [planState, setPlanState] = useState<IWeekdayDictionary>(getWeeklyPlanDictionary(weeklyPlan))
    useEffect(() => {
        setPlanState(getWeeklyPlanDictionary(weeklyPlan))
    }, [weeklyPlan])
    

    const getRandomMealId = (themeId: string) => {
        if(!meals) return undefined
        const themeMeals = meals.filter(m => m.themeId === themeId)
        const randomIndex = getRandomInt(themeMeals.length)
        return themeMeals[randomIndex].id
    }
    
    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>, weekdayName: WEEKDAY) => {
        const dayPlan = planState[weekdayName] ?? {}
        const themeName = event.target.value
        const themeId = themes?.filter((t) => t.name === themeName)[0].id ?? undefined
        setPlanState(update(planState, { [weekdayName]: { themeId : {$set: themeId}}}))
    }

    const handleRandomizeMeals = () => {
        if(!meals) return
        const diff = {}
        for (const [weekdayName, dayPlan] of Object.entries(planState)) {
            if(!!dayPlan?.themeId) {
                const mealId = getRandomMealId(dayPlan.themeId)
                // @ts-ignore
                diff[weekdayName] = { mealId: {$set: mealId}}
            }
        }
        setPlanState(update(planState, diff))
    }

    return (
        <>
            <Grid2 container spacing={2}>
                <Typography variant="h1" sx={{mr: 2}}>WeeklyPlan</Typography>
            </Grid2>
            <Grid2 container spacing={2}>
                {isLoading && <div>Loading</div>}
                {!weeklyPlan && !themes && !meals && <div>No themes</div>}
                {!!weeklyPlan && !!themes && !!meals
                    && weeklyPlan.map((weekdayPlan: IWeekdayPlan, i: number) => {
                        const weekdayName = weekdayPlan.weekday.name
                        const dayPlanState = planState[weekdayName]
                        const meal: IMeal | undefined = dayPlanState?.mealId ? meals?.filter(m => m.id === dayPlanState?.mealId)[0] : undefined
                        const defaultThemeName = dayPlanState?.themeId ? themes?.filter(t => t.id === dayPlanState?.themeId)[0].name : themes[0].id
                        return <Grid2 key={weekdayPlan.id} xs={12} display="flex" flexDirection="row">
                            <Grid2 xs={6}>
                                <InputLabel htmlFor={`select-theme-${weekdayName}`}>{weekdayName}</InputLabel>
                                <NativeSelect 
                                    id={`select-theme-${weekdayName}`} 
                                    onChange={(event) => handleThemeChange(event, weekdayName)}
                                    defaultValue={undefined}
                                >
                                    {themes?.map((t, j) => 
                                        <option key={`select-theme-${weekdayName}-${j}`} value={t.name}>{t.name}</option>
                                    )}
                                </NativeSelect>
                            </Grid2>
                            <Grid2 xs={6}><p>{meal ? meal.name : 'none'}</p></Grid2>
                        </Grid2>})
                }
            </Grid2>
            <Button onClick={handleRandomizeMeals}>Randomize Meals</Button>
        </>
    )
}