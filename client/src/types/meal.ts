import React from 'react'
import {IModel} from "./model";

export interface IMeal extends IModel {
    themeId?: number
    name?: string
    notes?: string
}

export type MealState = {
    Meals: IMeal[]
}

export type MealAction = {
    type: string
    model: IMeal
}

export type MealDispatchType = (args: MealAction) => MealAction