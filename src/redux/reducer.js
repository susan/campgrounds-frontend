import { ADD_USER, ADD_REVIEW, DELETE_REVIEW, LOAD_PARKS} from './types'


const initialState =  {
  users: [],
  parks: [],
};

//using the word function below instead of arrow
export default function reducer(state = initialState, action){
  switch(action.type) {
    case LOAD_PARKS: {
     return { ...state, parks: action.payload}
    }

    case ADD_USER: {
      return {...state, users: [...state.users, action.payload] }
    }

    case ADD_REVIEW: {
      return {...state, reviews: [...state.reviews, action.payload] }
    }

    case DELETE_REVIEW: {
       let review = action.payload
      return {...state, reviews: state.reviews.filter(reviewObj =>
        reviewObj.id !== review.id
         )
       }
    }
    default: {
      return state;
    }
  }//end of switch
}//end of export



