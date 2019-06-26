import React, { Component } from 'react';

export class Signup extends Component {

    state = {
        username: "",
        emailid: "",
        mobile: "",
        password: "",
        confirmpassword: ""
    }
    confirmation= () =>{
        if(this.state.confirmpassword === this.state.password){
            return true;
        }
    }
    handleSignupSubmit = () => {
        const { username, emailid, mobile, password, confirmpassword } = this.state;
        localStorage.setItem('username', this.confirmation ? username: '');
        localStorage.setItem('emailid', this.confirmation ? emailid : '');
        localStorage.setItem('mobile', this.confirmation ? mobile : '');
        localStorage.setItem('password', this.confirmation ? password : '');
    };
  render() {
    return (
      <div>
         {/* <!-- [ Preloader ] Start --> */}
        <div class="page-loader">
            <div class="bg-primary"></div>
        </div>
        {/* <!-- [ Preloader ] End --> */}

        {/* <!-- [ content ] Start --> */}
        <div class="authentication-wrapper authentication-1 px-4">
            <div class="authentication-inner py-5">

                {/* <!-- [ Logo ] Start --> */}
                <div class="d-flex justify-content-center align-items-center">
                    <div class="ui-w-60">
                        <div class="w-100 position-relative">
                            <img src="assets/img/logo-dark.png" alt="Brand Logo" class="img-fluid" />
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                {/* <!-- [ Logo ] End --> */}

                {/* <!-- [ Form ] Start --> */}
                <form class="my-5" onSubmit={this.handleSignupSubmit}>
                    <div class="form-group">
                        <label class="form-label">Your name</label>
                        <input value={this.state.username} id="username" type="text" class="form-control" /> 
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Your email</label>
                        <input id="emailid" type="text" class="form-control" value={this.state.emailid}/>
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Your Mobile Number</label>
                        <input id="mobile" type="text" class="form-control" value={this.state.mobile}/>
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input id="password" type="password" class="form-control" value={this.state.password}/>
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Confirm Password</label>
                        <input id="confirmpassword" type="text" class="form-control" value={this.state.confirmpassword}/>
                        <div class="clearfix"></div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mt-4">Sign Up</button>
                    <div class="bg-lightest text-muted small p-2 mt-4">
                        By clicking "Sign Up", you agree to our
                        <a href="javascript:void(0)">terms of service and privacy policy</a>. We’ll occasionally send you account related emails.
                    </div>
                </form>
                {/* <!-- [ Form ] End --> */}

                <div class="text-center text-muted">
                    Already have an account?
                    <a href="Login">Sign In</a>
                </div>

            </div>
        </div>
        {/* <!-- [ content ] End --> */}

    </div>
    );
  }
}


export default Signup;
