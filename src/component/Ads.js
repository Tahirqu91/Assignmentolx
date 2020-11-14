import React, { Component } from 'react';
import Logo from './logo/hero.jpg'
import Imglogo from './logo/ads.jpg'


class Ads extends Component {
    render() {
        return (
         <>
         <div>

 
<div className="container-fluid py-1">
<div className="row">
  <div className="col-md-12">
   <img className="ads" src={Logo} /> 
  </div>
</div>
  </div>

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <div className="container-fluid">
<div className="row">
  <div className="col-md-12">
   <img className="ads2" src={Imglogo} /> 
   
  </div>
  
</div>

<br /> <br /><br /><br /> <br /> <br /><br /><br /><br /> <br /><br /><br />


  </div>

            </div>


</>

        );
    }
}

export default Ads;





