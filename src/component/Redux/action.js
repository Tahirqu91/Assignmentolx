import firebase from '../firebase/firebase'
 

export const set_name = (productsItem) => {
    return dispatch => {
      firebase.database().ref("Product").on("value", snapshot => {
             let productsItem = []
        // console.log(productsItem)
         snapshot.forEach(snap => {
         
             
               productsItem.push(snap.val()); 
                        
                });
              // console.log("Cards",productsItem)
             dispatch({type:"SHOW_PROD",payload:productsItem})       
             })        
    } 
}



const facebook_login = (history)=>{
  return(dispatch)=>{
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
       var token = result.credential.accessToken;
         var user = result.user;
         
    let create_user = {
      name: user.displayName,
      email:user.email,
      profile:user.photoURL,
      userid:user.uid
    }
    firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
    .then(()=>{
    dispatch({ type: "SETUSERR" ,payload: create_user})
            alert("User Login SuccessFully!")
            
    
  })
  

        }).catch(function(error) {
          var errorMessage = error.message;
         console.log("error====>",errorMessage)
        });
  }
}

const facebook_logout = ()=>{
  return dispatch => {
firebase.auth().signOut().then(function() {
  dispatch({ type: "REMOVEUSERR" ,payload: null})
}).catch(function(error) {
  // An error happened.
});
}
}

export{
  facebook_login,
  facebook_logout

}

 