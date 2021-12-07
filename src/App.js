import React, { useState } from 'react';
import "./App.css"


const App = () => {

    // {안에는 함수,상태값들이 들어간다.
    const [date, setDate] = useState("powermovie's second react App")
    //자신이 이름을 정하고 변수를 입력.
    const changeText = () => {
        setDate("나의 세번째 리액트앱")
    }
    
  return (
      <div className={"App"}>
        <hi>
            {date}
        </hi>
          <button onClick={changeText}>
              hi go!
          </button>
      </div>
  );
};

export default App;
