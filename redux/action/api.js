import axios from "axios";
import { LOGIN, SIGNUP, RESPONSE_OK } from "./type";


export const loginUser = (formdata) => async (dispatch) => {
    if (formdata) {
        console.log(formdata);
        const { data } = await axios.post(`/api/auth/login`,
            formdata
        );;
        try {
            if (data?.token) {
                localStorage.setItem("token", data?.token);
                dispatch({ type: LOGIN, payload: data })
                window.location.reload();
            }

        } catch (error) {
            console.log(error);
        }
    }
}


export const signUp = (formdata) => async (dispatch) => {
    if (formdata) {
        console.log(formdata, 'formdata');
        const { data } = await axios.post(`/api/auth/register`,
            formdata
        );
        if (data?.token) {
            localStorage.setItem("token", data?.token)
            try {
                dispatch({ type: SIGNUP, payload: data })
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export const loginOut = () => async (dispatch) => {
    const { data } = await axios.get(`api/auth/logout`);
    try {
        localStorage.clear()
        window.location.reload();
        dispatch({ type: RESPONSE_OK, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deleteTopic = (id) =>async(dispatch)=>{
    if(id){
        try {
            const {data} = await axios.delete(`/api/route/delete/?_id=${id}`);
    
            dispatch({ type: RESPONSE_OK, payload: data })
            // if (response.status === 200) {
            //     window.location.reload();
            //     return toast.success(response?.message);
            // }
        } catch (error) {
            return toast.success(error);
        }
    }
    
}

