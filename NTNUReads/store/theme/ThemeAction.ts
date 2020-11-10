import { LIGHT_THEME, DARK_THEME } from "./models/actions";

/**
 * Theme action functions
 */

export const lightTheme = () => ({
    type: LIGHT_THEME
})

export const darkTheme = () => ({
    type: DARK_THEME
})
