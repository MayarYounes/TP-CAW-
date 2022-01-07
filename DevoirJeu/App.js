import { render } from "@testing-library/react";
import React, {Component} from "react";
import './index.css';
import d1 from './images/d1.png' ;

import LancerDe from './LancerDe.jsx';


 class App extends Component{  
  render(){
  return(
    <div className="App">
           <LancerDe/>
       </div>

    // <Home />
  );
  }
}
export default App; 