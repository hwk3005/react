import logo from './logo.svg';
import './App.css';
import './css/style.css';

function App() {
  const btn = () => {
    alert('로그인 진행합니다.');
  }

  // 화살표 함수 (js 6버전에서 나옴)
  // const btn1 = () => {
  //   alert('경고창')
  // }

  return (
    <div className="App">
      <h2>로그인</h2>
      <form>
        <label>아이디</label>
        <input type='text' name='id'/><br/>
        <label>패스워드</label>
        <input type='pw' name='pw'/><br/><br/>
      </form>
      <button>로그인</button>
    </div>
  );
}

export default App;


// 중괄호{} 쓰면 자바스크립트 쓸 수 있음
// 자바스크립트에 html 포함?
// className 처럼 2단어 조합시 대문자 사용