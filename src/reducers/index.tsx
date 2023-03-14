import { combineReducers } from "redux";
import todos from './todos';
import counter from './counter' 
import posts from './posts' 
const rootReducer = combineReducers({//여러 reducer를 하나로 묶어주는 메소드
  todos,
  counter,
  posts
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;