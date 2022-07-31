import React from 'react'
import {IModel} from "./model";

export interface ITheme extends IModel {
    id: number
    name: string
}

export type ThemeState = {
    themes: ITheme[]
}

export type ThemeAction = {
    type: string
    model: ITheme
}

export type ThemeDispatchType = (args: ThemeAction) => ThemeAction