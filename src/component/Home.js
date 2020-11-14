import React  from 'react';
//  import Cardui from './Cardui'
import Header from './Header'
import {Link} from "react-router-dom";
  import { connect } from 'react-redux';
//  import { set_name } from './Redux/action';
 import  image  from './logo/image.webp'
//   import  image1  from './logo/image1.webp'
//  import  image2  from './logo/image2.jpg'
//  import  image3   from './logo/image3.webp'
//  import  image4   from './logo/image4.webp'
//  import  image5  from './logo/image5.webp'
//  import  image6  from './logo/image6.webp'
//  import  image7  from './logo/image7.webp'
//  import  image8  from './logo/image8.webp'
//  import  image9  from './logo/image9.webp'
//  import  image10  from './logo/image10.webp'
//  import  image11  from './logo/image11.webp'
//  import  image12  from './logo/image12.webp'
//  import  image13  from './logo/image13.jpg'
//  import  image14  from './logo/image14.jpg'
//  import  image15  from './logo/image15.jpg'
//  import  image16  from './logo/image16.webp'
//  import  image17  from './logo/image17.webp'
//  import  image18  from './logo/image18.webp' 
//  import  image19  from './logo/image19.webp'
 
 import Footer from './Footer'
 import Ads from './Ads'
 import {set_name} from './Redux/action'
 

class Home extends React.Component{


componentDidMount() {
    this.props.set_name(this.props.current_card)
}





        render(){
            let {current_card} = this.props;

    return(
       <>     
      

           <div>
         
           <Header />
           
          <br />
      <Ads/>

<div className="container-fluid">
    <div className="row">
<div className="col-md-12 ">
          <h4>Fresh recommendations</h4> 
          {current_card.map((item,index)=> {
              return   <Link to={"/" + item.name}><div className="cards">
              <div className="card">
                
       <img src={item.image}   className="card-img"/>
          <h4 className="card-tittle">Rs {item.price}</h4>
          <div className="card-info">{item.name} <br/>
          <span className="card-category">{item.location}</span>  
          
          </div>  
        
            </div>
           </div> 
           </Link> 
          })}
    </div>
</div>
</div>

 
<div className="container-fluid  ">
    <div className="row">
    <div className="col-md-12 ">
  




</div>
</div>
</div>

 

 
<br/><br/><br/><br/><br/><br/>
<Footer/>
       </div>
    

        </>
        )
    }
 } 



 const mapStateToProps =(state)=>({
    current_card:state.current_card,
         
     })
  
  
  const mapDispatchToProps = (dispatch) => {
     return{
  set_name: (product) => dispatch(set_name(product)),
  }
  
  }
   
  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
  
  