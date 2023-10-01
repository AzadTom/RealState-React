import  {LOGIN,LOGOUT} from '../utils/constant.js';


export const  authReducer  = (state,action)=>{

    switch(action.type)
    {
    
        case LOGIN:{

            const {payload} = action;
            console.log("reducer",payload);
            const {info} = payload;
            
                return {
                    ...state,
                    token:info.token,
                    currentUser:info.user,
                    isLoggedIn: info.status
                }

        }
       
            
        case LOGOUT:{


            return {
                ...state,
                token:null,
                currentUser:null,
                isLoggedIn:false
            }

        }
           

             default:
                return state;
         
    }


   

}


