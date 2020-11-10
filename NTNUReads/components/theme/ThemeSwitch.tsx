import React from "react";
import {Form} from "react-bootstrap";

import {AppState} from "../../store/rootStore";
import {useDispatch, useSelector} from "react-redux";
import {lightTheme, darkTheme} from "../../store/theme/ThemeAction";

/**
 * Switch for toggling theme, will update state in Redux store
 */

const ThemeSwitch = () => {

    const theme = useSelector((state:AppState) => state.themeReducer.theme)
    //console.log(theme)
    const dispatch = useDispatch();

    const handleChange = () => {
        if (theme === "light") {
            dispatch(lightTheme());
        }
        else {
            dispatch(darkTheme());
        }
    }


    return (
        <div style={{paddingTop: "8px"}}>
            <Form>
                <Form.Check inline
                    type="switch"
                    id="theme-switch"
                    label={theme==="light" ? "🔆" : "🌙"}
                    value={theme}
                    onChange={handleChange}
                />
            </Form>
        </div>
    );
}

export default ThemeSwitch;
