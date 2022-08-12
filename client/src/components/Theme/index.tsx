import React, {FunctionComponent} from "react";
import {useGetAllThemesQuery} from "../../store/api";
import {ITheme} from "../../types/theme";
import {ThemeListItem} from "./ThemeListItem";
import {Link} from "react-router-dom";

export const Themes: FunctionComponent = () => {
    const {data: themes, isLoading, isFetching} = useGetAllThemesQuery()

    return (
        <>
            <div className="Themes">
                <h1>My food themes</h1>
                {isLoading && <div>Loading</div>}
                {isFetching && <div>Fetching</div>}
                {!themes ? <div>No themes</div> : themes.map((theme: ITheme) => {
                    return (
                        <div key={theme.id}>
                            <ThemeListItem
                                theme={theme}/>
                        </div>
                    )
                })
                }
            </div>
            <Link to={"/themes/new"}>Add new theme</Link>
        </>
    )
}