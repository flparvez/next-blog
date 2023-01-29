

import { combineReducers } from "@reduxjs/toolkit";
import { userAuthApi } from "./UserAuthApi";





//     const addblogreducer = (state ={ } , action) => {
//           switch (action.type) {
      
//  case ADD_BLOG_START:
//         return { ...state, isLoading: true, error: null };
//       case ADD_BLOG_SUCCESS:
//         return { ...state, data: action.payload, isLoading: false };
//       case ADD_BLOG_FAILURE:
//         return { ...state, error: action.payload, isLoading: false };
//         case ADD_BLOG_RESET:
//         return { };
        
//       default:
//         return state;


//     }
//   }

 
  





  export const Reducer = combineReducers({
    
    [userAuthApi.reducerPath]: userAuthApi.reducer,
   
   
//     auth: authReducer,
//     user: userReducer,
    
//    blogs: blogreducer,
//    addblog: addblogreducer,
  
   

})
