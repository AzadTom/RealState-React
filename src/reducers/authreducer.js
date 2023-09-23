import  {SIGNUP,LOGIN,LOGOUT} from '../utils/constant.js';


const authreducer = (state,action)=>{

    switch(action.type)
    {
        case SIGNUP:
            return {
                ...state,
                token:action.payload.token,
                currentUser:action.payload.user,
                isLoggedIn:true
            }

        case LOGIN:
            return {
                ...state,
                token:action.payload.token,
                currentUser:action.payload.user,
                isLoggedIn:true
            }
            
        case LOGOUT:
            return {
                ...state,
                token:null,
                currentUser:null,
                isLoggedIn:false
            }
         default:
            return state;   
    }

}

export default authreducer;
