import {IModel} from "./model";

export interface IMeal extends IModel {
    themeId: string
    name: string
    notes?: string
}