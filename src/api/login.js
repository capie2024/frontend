import axios from "axios"

const API_URL = 'http://localhost:7890/api'

const login = async (email, password) => {
    const result= {
        status: 1,
        token: ""
    }

    const data = {
        email,
        password
    }

    const res = await axios.post(API_URL, data)
    if(res.data.status){
        result.status = 0
        result.token = res.data.token
        setLoginStore({
            isLogin: true,
            token: result.token,
            email: res.data.email
        })
    }

    return result
}

// async function authToken(token){
//     const result = {
//         status: "",
//         token: "",
//         email: ""
//     }
    
//     const data = {
//         token: token
//     }
//     const res = await axios.post(API_URL, data)
//     if(res.status){
//         result.status = "jwt verify success"
//         result.token = res.data.token
//         result.email = res.data.email
//         setLoginStore({
//             isLogin: true,
//             token: result.token,
//             email: result.email
//         })
//     }else{
//         setLoginStore({
//             isLogin: false,
//             token: "",
//             email: ""
//         })
//     }

//     return result
// }


// const setLoginStore = (options) => {
//     if(options.isLogin){
//         window.localStorage.setItem("isLogin", options.isLogin)
//     }
//     if(options.token){
//         window.localStorage.setItem("token", options.token)
//     }
//     if(options.email){
//         window.localStorage.setItem("email", options.email)
//     }
// }

// export {login, authToken}