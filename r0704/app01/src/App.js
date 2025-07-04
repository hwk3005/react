import logo from './logo.svg';
import './App.css';
import './css/style.css';

function App() {

  // javascript 변수선언: var_변수(예전v_변수중복가능), let_변수(현재v_중복불가), const_상수(중복불가)
  // app.js에서 css적용문법
  const style = {
    color:'#000',
    fontSize: '40px',
    // backgroundColor: 'green',
    // textAlign: 'center',
  }

  let count = 10;
  
  const btn = function(){
    alert('경고창 열기');
  }

  return (
    // html 소스 부분 -- 빈공백태그 <></>
    // 부모요소 1개만 들어올 수 있음.
    <>
      <div className="App">
        <h2 style = {style}>메인페이지</h2>
        <div className='d01'>숫자: {count}</div>
        <br/>
        <button id='btn' onClick={btn}>확인</button>
      </div>
    </>
  );
}

export default App;
