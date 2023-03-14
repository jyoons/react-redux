import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// store.dispatch({
//   type:'ADD_TODO',
//   text:'Use Redux'
// })
const loggerMiddleware = (store:any) => (next:any) => (action:any)=>{
  console.log('store', store)
  console.log('action', action)
  next(action)
};

const middleWare = applyMiddleware(thunk, loggerMiddleware);//미들웨어 생성
const store = createStore(rootReducer, middleWare);//store생성
console.log(store.getState())
const render = () => root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* 앱상위에 store (저장소를 넣어 줌) */}
      <App
        value={store.getState()}
        onIncrement={()=>store.dispatch({type:'INCREMENT'})}
        onDecrement={()=>store.dispatch({type:'DECREMENT'})}
      />
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
render();
store.subscribe(render);//subscribe():change listener를 추가