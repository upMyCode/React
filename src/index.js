import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';



// const abc = (
//   <div>
//     <h2>Hello World </h2>
//     <input type="text" placeholder="Type here"/>
//     <button/>
//   </div>
  
//   )


const Abc  = ()=> { 
  return <h2>Hello World </h2>
}
const Cba = ()=> {
  return  <input type="text" placeholder="Type here"/>
}
const Button = ()=> {
  const text = 'text';
  const dd = false;
  return <button>{ dd ? 'Oh my god' : 'Eprst'}</button>
}

const Nat = ()=>{
  return (
    <div>
      <Abc/>
      <Cba/>
      <Button/>
    </div>
  )

}

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);


