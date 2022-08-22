import {INamedModel} from "./model";

export interface IMeal extends INamedModel {
    themeId: string
    notes?: string
}