import logo from './logo.svg';
import './App.css';


let mynum=1000;
// react component에서는 하나의 DOM만 return 가능.
function App2() {
    const mystyle = {
        color: "red"
    }
    let num=2000;
  return (
    <>
    {/* JSX에서 외부 변수를 사용할 때, 혹은 속성값을 정의하는 경우 {}를 씀 */}
      <div style={mystyle}>이게 됨?</div>
      <div>이게 되네 ㅋㅋ</div>
      <div>value1: {mynum}</div>
      <div>value2: {num}</div>
    </>
  );
}

export default App2;
