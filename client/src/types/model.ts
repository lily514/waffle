import {ITheme} from "./theme";
import {IMeal} from "./meal";

export interface IModel {
    id?: number
}

export interface ModelAction {
    type: string
    model: IModel
}

export type DispatchType = (args: ModelAction) => ModelAction

export interface ModelState {
    themes: ITheme[]
    meals: IMeal[]
}