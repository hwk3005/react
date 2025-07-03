import logo from './logo.svg';
import './App.css';

function App() {
  
  // 화살표 함수 (js 6버전에서 나옴)
  // const btn1 = () => {
  //   alert('경고창')
  // }

  const btn1 = function(){
    alert('안녕하세요.');
  }

  return (
    <div className="App">
      <h2>안녕하세요.</h2>
      <button onClick={btn1}>버튼</button>
    </div>
  );
}

export default App;


// 중괄호{} 쓰면 자바스크립트 쓸 수 있음
// 자바스크립트에 html 포함?
// className 처럼 2단어 조합시 대문자 사용