/* eslint-disable*/
import { useState, useTransition } from 'react';
import './App.css';

function App() {
 
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동 맛집','파이썬독학']);
  let [따봉, 따봉변경] =useState(0);
  let [따봉1, 따봉변경1] =useState(0);
  let [따봉2, 따봉변경2] =useState(0);
  let [title, setTitle]=useState(0);
  let [입력값, 입력값변경] = useState('0');

  let [modal, setModal] = useState(false);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{ 
      let copy=[...글제목];
      copy[0]='여자코트 추천';
      글제목변경(copy) }}>글수정</button>
      {/* <div className="list">
        <div>
        <h4 onClick={ ()=>{setModal(!modal)}}>{글제목[0]} <n></n>
        <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍🏻</span> { 따봉 }</h4>
        <p>2월 17일 발행</p>
        </div>
      </div>

      <div className="list">
        <div>
      <h4 onClick={ ()=>{setModal(!modal)}}>{글제목[1]} <n></n>
      <span onClick={ ()=>{ 따봉변경1(따봉1+1) } }>👍🏻</span> { 따봉1 }</h4>
        <p>2월 17일 발행</p>
      </div>
      </div>
    
      <div className="list">
        <div>
        <h4 onClick={ ()=>{setModal(!modal)}}>{글제목[2]} <n></n>
        <span onClick={ ()=>{ 따봉변경2(따봉2+1) } }>👍🏻</span> { 따봉2 }</h4>
        <p>2월 17일 발행</p>
      </div>
      </div> */}


      {

       글제목.map(function( a, i){
          return(
        <div className="list" key={i}> 
        <h4 onClick={ ()=>{setModal(true); setTitle(i) }}> 
        {글제목[i]} 
        <span onClick={ (e)=>{ e.stopPropagation(); 따봉변경(따봉+1) } }>👍🏻</span> { 따봉 }</h4>
        <p>7월 1일 발행</p>
        <button>삭제</button>
        
        </div>
        )
      })
    }

<input onChange={(e)=>{ 입력값변경(e.target.value)
      console.log(입력값)}}></input> <n></n>
      <button>확인</button>

      {
        modal== true ?  <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null
        
        
      }

    </div>
  );
}
  
function Modal(props){
  return (
    <div className="modal">
    <h4>{props.글제목[props.title]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={()=>{props.글제목변경(['여자코트 추천','강남 우동 맛집','파이썬독학'])}}>글수정</button>
  </div>
  )


  
  
}

export default App;
