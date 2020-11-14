import React, { Component } from 'react';
 import { connect } from 'react-redux';
import Header from './Header'
import Footer from './Footer'
 
class Post extends Component {
  
 
    render() {
         let userr = this.props.current_user;
         console.log("ye hai login bad",userr)
         let {current_card} = this.props;
     
        return (
           <>
           <div>
  <Header/> <br/><br/>
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-8 ">
        {/* {current_card.map((item,index)=> {
         return   (<div className="bop">
     <div clasNames="card-body ">

<img src={item.image} alt="" width="100%"/>
 
  </div>
  </div>)
          })} */}

<img src={current_card.image} alt="" width="80%"/>
</div>

<div className="col-md-4">

<div className="bop1">
  <div clasNames="card-body ">
 <h1> {current_card.price}</h1>
<p>{current_card.name}</p>
<p> {current_card.location} </p>

  </div>
  </div>
        <br/>
  <div className="bop1">
  <div clasNames="card-body ">
 <h5> Seller description</h5>
<p>profile pic with displayname</p>
<button className="btn btn-success btnnew">Chat with Seller</button>

  </div>
  </div>

</div>




    </div>
</div>
<br/>

<div className="container-fluid">
<div className="row">
    <div className="col-md-8">

  <div className="bop">
  <div clasNames="card-body ">
  <h3>Description</h3>
 <p>{current_card.description}</p>
  </div>
  </div>


    </div>
</div>

</div>

<br/>
           <Footer/>
            </div>

            </>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    let postName  = ownProps.match.params.post;
    return ({
      current_card : state.current_card.find(current_card => current_card.name === postName),
      

    current_user: state.current_user,

    }) 
    
 }


 export default connect(mapStateToProps, null) (Post);
