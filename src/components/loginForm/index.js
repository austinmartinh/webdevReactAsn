import React, { Component, Fragment } from "react";
import './loginForm.css';

class LoginForm extends Component{
    render() {
        return <fragment>
            <div class="loginBox">
                <form>
                    <div class="form-group row">
                        <label for="usernameEntry" class="col-sm-2 col-form-label">Username</label>
                        <input type="text" placeholder="Username" id="userNameEntry"></input>
                    </div>
                    <div class="form-group row">
                        <label for="passwordEntry" class="col-sm-2 col-form-label">Password</label>
                        <input type="password" placeholder="********" id="passwordEntry"></input>
                    </div>
                    <div class="form-group row">
                        <div class="form-col-10">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>

        </fragment>
    }
}
export default LoginForm;