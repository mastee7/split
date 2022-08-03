import axios from "axios"
import { loginStart, loginSuccess, loginFailure, logoutStart  } from "./AuthActions"
export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5000/api/auth/login", user);
        dispatch(loginSuccess(res.data));
        return res.data;
    } catch (err) {
        dispatch(loginFailure());
        return null;
    }
}

export const logout = async (dispatch) => {
    dispatch(logoutStart());
}