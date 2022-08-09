import React from 'react'
import {IModel} from "./model";

export interface IMeal extends IModel {
    themeId?: number
    name?: string
    notes?: string
}