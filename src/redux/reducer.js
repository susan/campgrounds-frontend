import { ADD_USER, LOGIN_USER, LOGOUT_USER, LOAD_REVIEWS, ADD_REVIEW, REMOVE_REVIEW, EDIT_REVIEW, LOAD_PARKS, SELECT_PARK, LOAD_CAMPGROUNDS, SELECT_CAMPGROUND} from './types'


const initialState =  {
  user: {},
  users: [],
  parks: [],
  campgrounds: [],
  selectedPark: {},
  selectedCampground: {},
  reviews: [],
  selectReview: {}
};

//using the word function below instead of arrow
export default function reducer(state = initialState, action){
  console.log("initialstate is", state, "Action", action)
  switch(action.type) {
    case LOAD_PARKS: {
     return { ...state, parks: action.payload}
    }

    case SELECT_PARK: {
     return { ...state, selectedPark: action.payload}
    }

    case LOAD_CAMPGROUNDS: {
     return { ...state, campgrounds: action.payload}
    }


    case SELECT_CAMPGROUND: {
     return { ...state, selectedCampground: action.payload}
    }

    case ADD_USER: {
      return {...state, user: action.payload }
    }

    case LOGIN_USER: {
      return {...state, user: action.payload }
    }

    case LOGOUT_USER: {
      return { ...state, user: {} }
    }

    case LOAD_REVIEWS: {
     return { ...state, reviews: action.payload}
    }

    case ADD_REVIEW: {
      return {...state, reviews:[...state.reviews, action.payload]};
    }

    case REMOVE_REVIEW: {
       let review = action.payload
      return {...state, reviews: state.reviews.filter(reviewObj =>
        reviewObj.id !== review.id
         )
       }
    }

   case EDIT_REVIEW: {
     const newReviews= state.reviews.map(review=> {
       if(review.id === action.payload.id){
         return action.payload
       }
       return review //in array return all reviews plus edited review
     })
     return  {...state, reviews: newReviews}

   }


    default: {
      return state;
    }
  }//end of switch
}//end of export



