import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
      super(props);

      this.state = {
          email: '',
          password: '',
      }
  }

  render() {
      return (
          <div>
              <p>I'm the sign in component</p>
          </div>
      )
  }
}

export default SignIn;

// import { withRouter } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { Input } from 'reactstrap';
// import firebase from 'firebase';

// class SignIn extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: '',
//     };
//   }

//   onEmailChange = (event) => {
//     this.setState({ email: event.target.value });
//   }

//   onPasswordChange= (event) => {
//     this.setState({ password: event.target.value });
//   }

//   handleSigninButtonClick = (event) => {
//     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
//       alert(error);
//     });
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.props.history.push('/');
//       }
//     });
//   }

//   handleCancelButtonClick = (event) => {
//     this.props.history.push('/');
//   }

//   render() {
//     return (
//       <div className="displaySignInInfoContainer">
//         <div className="displaySignInInfo">
//           <div className="leftJustify" style={{ width: '100%' }}>
//             <div className="prompt"> Email: </div>
//             <Input className="response" id="emailInputBar" placeholder="Dartmouth Email" onChange={this.onEmailChange} value={this.state.email} />
//             <div className="prompt"> Password: </div>
//             <Input type="password" className="response" id="passwordInput" placeholder="Password" onChange={this.onPasswordChange} value={this.state.password} />
//           </div>
//           <div>
//             <Button className="signupButtons" id="createButton" onClick={this.handleSigninButtonClick}>Log In</Button>
//             <Button className="signupButtons" id="cancelButton" onClick={this.handleCancelButtonClick}>Cancel</Button>
//           </div>
//         </div>
//         <p>I'm the sign in component</p>
//       </div>
//     );
//   }
// }

// // export default NewPost;
// export default withRouter((SignIn));