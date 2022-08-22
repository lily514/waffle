import {INamedModel, IModel} from "./model";
import {ITheme} from "./theme";
import {IMeal} from "./meal";
import {Dictionary} from "@reduxjs/toolkit";

export interface IWeekday extends INamedModel {
    name: WEEKDAY
}

export type IWeeklyPlan = IWeekdayPlan[]

export type WEEKDAY_STRING = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

export enum WEEKDAY {
    MONDAY = 'Monday', 
    TUESDAY = 'Tuesday',
    WEDNESDAY = 'Wednesday',
    THURSDAY = 'Thursday',
    FRIDAY = 'Friday',
    SATURDAY = 'Saturday',
    SUNDAY = 'Sunday'
}

export type IWeekdayPlanRelations = {id?: string, themeId?: string, mealId?: string}

export type IWeekdayDictionary = Dictionary<IWeekdayPlanRelations>

export interface IWeekdayPlan extends IModel {
    id: string
    weekday: IWeekday
    theme: ITheme
    meal: IMeal
}