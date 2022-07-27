import React from 'react'

export interface ITheme {
    id: number
    name: string
}

export type ThemeState = {
    themes: ITheme[]
}

export type ThemeAction = {
    type: string
    theme: ITheme
}

export type DispatchType = (args: ThemeAction) => ThemeAction