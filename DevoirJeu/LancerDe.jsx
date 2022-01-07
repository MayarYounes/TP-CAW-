import {Component} from 'react' ;
import React ,{ useState } from 'react' ;
import d1 from './images/d1.png' ;
import d2 from './images/d2.png' ;
import d3 from './images/d3.png' ;
import d4 from './images/d4.png' ;
import d5 from './images/d5.png' ;
import d6 from './images/d6.png' ;
import De from './De';
function LancerDe() {
  let thePics =[d1,d2,d3,d4,d5,d6];
    const [pic1 , setPic1] = useState(d2);
    const [pic2 , setPic2] = useState(d3);
    const [res , setRes] = useState();
    
    const lancer =()=> {
  const randomOne= Math.floor(Math.random()*6);
  const randomTwo= Math.floor(Math.random()*6);
  //
  if (randomOne == randomTwo){
    setRes('You are a winner ');
  }else{
    setRes('Try again');
  }
//changement de state de pics randomly 
  setPic1(thePics[randomOne]);
  setPic2(thePics[randomTwo]);

   };
    return (
      <>
      <div className='first'> 
      <De theFace={pic1}/>
      </div>
      <div className='first'> 
      <De theFace={pic2}/>
      </div>
        <button onClick={lancer}> lancer les dés </button>
        <p>{res}</p>
      </>
    );
}

export default LancerDe;