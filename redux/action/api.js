import axios from "axios";
import { LOGIN, SIGNUP, RESPONSE_OK, ALL_TOPICS } from "./type";


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
    try {
        const { data } = await axios.get(`api/auth/logout`);
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

export const googleAuthenticate = (formdata) =>async(dispatch)=>{
    if(formdata){
        try {
            const {data} = await axios.post(`/api/auth/googleAuth`,formdata);
            if (data?.token) {
                localStorage.setItem("token", data?.token)
                try {
                    dispatch({ type: RESPONSE_OK, payload: data })
                    window.location.reload();
                } catch (error) {
                    console.log(error);
                }
            }
        } catch (error) {
            return toast.success(error);
        }
    }
}
export const getAllTopic = () =>async(dispatch)=>{
   
        try {
            const {data} = await axios.get(`/api/route/all`);
                    dispatch({ type: ALL_TOPICS, payload: data })
        } catch (error) {
            return toast.success(error);
        }
}
// http://localhost:3000/api/feedback/createfeedback
export const FeedbackHandle = (formdata) =>async(dispatch)=>{
    console.log(formdata,'formdata');
   if(formdata){
    try {
            const {data} = await axios.post(`/api/feedback/createfeedback`,formdata);
                    dispatch({ type: RESPONSE_OK, payload: data })
        } catch (error) {
            return toast.success(error);
        }
   }
        
}

