import React, { Component } from 'react';

export class Signup extends Component {

    state = {
        username: "",
        emailid: "",
        mobile: "",
        password: "",
        confirmpassword: "",
        rememberMe: false
    }
    handleChange= (event) => {
        const input =event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({[input.name]: value});
    };

    handleFormSubmit = () => {
        const { username, emailid, mobile, password, rememberMe} = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('username', rememberMe ? username: '');
        localStorage.setItem('emailid', rememberMe ? emailid : '');
        localStorage.setItem('mobile', rememberMe ? mobile : '');
        localStorage.setItem('password', rememberMe ? password : '');
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
                <form class="my-5" onSubmit={this.handleFormSubmit}>
                    <div class="form-group">
                        <label class="form-label">Your name</label>
                        <input name="username" type="text" class="form-control" value={this.state.username} onChange={this.handleChange}/> 
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Your email</label>
                        <input name="emailid" type="text" class="form-control" value={this.state.emailid} onChange={this.handleChange}/>
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Your Mobile Number</label>
                        <input name="mobile" type="text" class="form-control" value={this.state.mobile} onChange={this.handleChange}/>
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input name="password" type="password" class="form-control" value={this.state.password} onChange={this.handleChange}/>
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Confirm Password</label>
                        <input name="confirmpassword" type="password" class="form-control" value={this.state.confirmpassword} onChange={this.handleChange}/>
                        <div class="clearfix"></div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mt-4" onClick={() => { if (window.confirm('You have been registered successfully!')) this.onCancel() } }>Sign Up</button>
                    <div class="bg-lightest text-muted small p-2 mt-4">
                        <label class="custom-control custom-checkbox m-0">
                            <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" class="custom-control-input" />
                            <span class="custom-control-label">I agree to the Terms and Conditions</span>
                        </label>
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
