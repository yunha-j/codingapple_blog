// eslint-disable : warning 메세지 제거

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "강남 우동 맛집";
  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);  //변수 있는데 state 왜 써?: 변수가 변경되면 자동으로 바뀌지 않음. state는 바뀌면 자동으로 바뀜. 
  let [따봉, 따봉변경] = useState(0);  //state는 등호로 변경하면 안됨, 뒷 변수를 통해 변경

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize: '16px'}}>ReactBlog</h4>
      </div>

      <button onClick = {()=>{
        let copy2 = [...글제목.sort()];
        글제목변경(copy2)
      }}>가나다순정렬</button>

      <button onClick={()=>{
         let copy = [...글제목];
         copy[0] = '여자 코트 추천';
         글제목변경(copy);
      }}>글수정</button>

      <div className = "list">
        <h4>{글제목[0]} <span onClick={ function(){ 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>


      <div className = "list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = "list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
  

    </div>
  );
}


function Modal(){
  return(
    <>
      <div className = "modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div className = "comments">
        <h4>작성자</h4>
        <p>날짜</p>
        <p>내용</p>
      </div>
    </>
  )
}

export default App;
