// comp/Counter.js
// prop


import logo from './logo.svg';
import './App.css';
import Counter from './comp/Counter';
import React,{useState} from 'react';

function App() {

  const [nameStr, setNameStr] = useState('변경');
  const [chgName, setChgName] = useState('');
  const [titleName, setTitleName] = useState('');
  const [stuName, setStuName] = useState('');
  const [chgStuName, setChgStuName] = useState('홍길동');

  const stuBtn = () => {
    setChgStuName(stuName);
  }

  const nameBtn = () => {
    setTitleName(chgName);
    setChgName('');
  }
  const keyUp = (e) => {
    if(e.keyCode == 13){
      nameBtn();
    }
  }

  return (
    <div className="App">
      <h2>메인페이지</h2>
      <label>이름: 홍길동</label>
      <br/>
      <input type="text" value={stuName} onChange={(e)=>setStuName(e.target)}/>
      <br/>
      <button onClick={stuBtn}>학생이름변경</button>

      <hr/>
      <input type="text" value={chgName} onKeyUp={keyUp} onChange={(e)=>setChgName(e.target)}/>
      <br/>
      <button onClick={nameBtn}>이름변경</button>
      <br/>
      <br/>
      <Counter btnName="클릭" num='1' id='aaa'/>
      <Counter btnName={nameStr}/>
      <Counter btnName={titleName}/>

    </div>
  );
}

export default App;
