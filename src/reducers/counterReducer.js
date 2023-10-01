


export const counterReducer = (state,action )=>{


     switch(action.type)
     {

        case "INCREMENT":
            return {
                ...state,
                count:action.payload
            }

            case "DECREMENT":
                return {
                    ...state,
                    count:action.payload
                }

                default:
                    return state;

     }

}