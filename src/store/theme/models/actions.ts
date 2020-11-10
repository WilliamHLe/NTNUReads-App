export const LIGHT_THEME = "LIGHT_THEME";
export const DARK_THEME = "DARK_THEME";

interface LightThemeAction {
    type: typeof LIGHT_THEME
}

interface DarkThemeAction {
    type: typeof DARK_THEME
}

//capital letters to signify that this is an action to be dispatched.
//to signify that this is an action TYPE

export type ThemeActionTypes = LightThemeAction | DarkThemeAction;

//if we had two action types: export type SearchActionTypes = ChangeSearchAction | OtherAction;
