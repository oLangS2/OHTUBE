import React from 'react'; //react 라이브러리에서 react 객체를 가져온다.
import ReactDOM from 'react-dom/client'; //react의 DOM 조작 메서드를 가져오기 위해 react-dom 라이브러리에서 ReactDom을 가져온다.
//"react-dom/client"로부터 React 18 이상의 Concurrent Mode와 같이 사용되는 새로운 렌더링 API
import App from './App'; //현재 디렉토리에서 "App" 이라는 컴포넌트를 가져온다.
import './assets/scss/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root')); //createRoot 메서드를 사용하여 root 변수를 생성한다.
root.render( //root를 사용하여 앱의 렌더링을 시작한다. render 메서드는 앱의 최상위 컴포넌트를 렌더링한다.
  <React.StrictMode> 
    <App />
  </React.StrictMode>
  //React.StrictMode는 앱 내의 컴포넌트들을 엄격한 모드로 실행하도록 돕는 React 구성 요소이다. 이는 앱 개발 시 경고 및 잠재적인 문제를 식별하는 도구입니다.
);

