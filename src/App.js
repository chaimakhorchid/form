import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


 
class App extends React.Component {
	constructor() {
      super(); 
      this.state = {
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        rememberMe: false,
        emailIsValid: false,
        passwordIsValid: false,
        isSubmitted: false,
      }

      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    
    }

      handleEmailChange(e){
        var regex = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
        this.setState({email:e.target.value})
        if (regex){
          this.setState({emailIsValid:true})
        }
      }

      handlePasswordChange(e){
        this.setState({password:e.target.value})
        if(e.target.value.lenght>5){
          this.setState({passwordIsValid:true})
        }
      }

      handleRememberMeChange(e){
        this.setState({rememberMe:true})
      }

      handleSubmit(e){
        e.preventDefault()
        //test les deux conditions le ==//
       if(this.state.emailIsValid == true & this.state.passwordIsValid == true){
        this.setState({isSubmitted:true})
       } if(this.state.isSubmitted == true)
       console.log("Connexion réussie")
      }

      handleFirstNameChange(e){
        this.setState({firstName:e.target.value})
      }

      handleLastNameChange(e){
        this.setState({lastName:e.target.value})
      }



  render() {
    return (
			<>
      <h1>Login</h1>
      <form>
      <div class="mb-3">
          <label for="exampleInputfirstName" class="form-label">
            FirstName
            <input type="name" class="form-control" id="exampleInputfirstname" aria-describedby="namelHelp" placeholder="Enter firstname ..." onChange={this.handleFirstNameChange}></input>
          </label>
        </div>
        <div class="mb-3">
          <label for="examplelastName" class="form-label">
            lastName
            <input type="lastName" class="form-control" id="exampleInputlastName" aria-describedby="lastNameHelp" placeholder="Enter lastName ..." onChange={this.handleLastNameChange}></input>
          </label>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email ..." onChange={this.handleEmailChange}></input>
          </label>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password ..." onChange={this.handlePasswordChange}></input>
            </label>
        </div>
        <div class="mb-3 form-check">
          <label class="form-check-label" for="exampleCheck1">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" input={this.handleRememberMeChange}></input>
            Remember me
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
			</>
		)
  };
}

export default App;
