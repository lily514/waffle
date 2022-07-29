import React from 'react'

export interface IMeal {
    id: number
    name: string
    notes: string
}

export type MealState = {
    Meals: IMeal[]
}

export type MealAction = {
    type: string
    Meal: IMeal
}

export type DispatchType = (args: MealAction) => MealAction