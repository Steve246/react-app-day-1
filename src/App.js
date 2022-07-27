import logo from './logo.svg';
import './App.css';
import BodyComponent from './component/BodyComponent';
import BodyComponenentFunc from './component/BodyComponenetsfunc.js';

import Header from './component/HeaderComponenents.js'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  // const enigma = 'Enigmacamp'
  // const name = <h1> Hello  {enigma}</h1>

  // function sayHello(name) {
  //   return `Hello ${enigma}`
    
  // }

  // const buttonText = {
  //   text: 'Kirim Message'
  // }

  // const buttonStyle = {
  //   color: 'red',
  //   fontSize: '10px'
  // }

  return (
    <>
      <BodyComponent/>
      <BodyComponenentFunc/>
      <Header title = "Judul Test"/>
      <Header />
      {/* pake prop types */}
      <Header title = {1}/>
      {/* {name}
      <h1 class = "text-title"> {sayHello(enigma)} </h1>
      <h1 class = "text-title"> {sayHello(enigma)} </h1> */}

      <div>
        <h1 class = "text-title"> {sayHello(enigma)} </h1>
        <h1 class = "text-title"> {sayHello(enigma)} </h1>
      </div>

    

      {/* <button style = {buttonStyle}> {buttonText.text} </button> */}
      {/* <button class = "button-name"> {buttonText.text} </button>
      <label htmlFor='name'> Enter Name </label> */}
    </>
  );
}

export default App;
