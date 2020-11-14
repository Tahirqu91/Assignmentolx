
const iState ={
  current_card:[ {},{} ],
  user_name:[ {} ],
  users: [],
  current_user: {},
  
}


export default (state = iState, action)=>{
  switch (action.type){
    case "SETUSER":
      return({
        ...state,
        current_card: action.payload
      })
      case "SHOW_PROD":
      return({
        ...state,
        current_card: action.payload
      })
    
      case "SET_ID":
        return({
          ...state,
          user_name: action.payload
        })
        case "SETUSERR":
          return ({
              ...state,
              current_user: action.payload
          })
          case "REMOVEUSERR":
            return ({
                ...state,
                current_user: action.payload
            })
      
  }
  return state;
}






// const INITIAL_STATE = {
//     users: [],
//     current_user: {}
// }


// export default (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case "SETUSER":
//             return ({
//                 ...state,
//                 current_user: action.payload
//             })
//     }

//     return state;
//   }
  






