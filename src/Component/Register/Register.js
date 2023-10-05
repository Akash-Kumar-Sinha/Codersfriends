import React from "react";
import './Register.css'; 

const Register =(props) => {

    const handleRegisterClick = () => {
        // Call the onRouteChange function to change the route in the App component
        props.onRouteChange('home');
        // Set the register state to false in the App component
        props.setRegister(false);
    }

    return(
        <div class="login-box">
        <h2>Login</h2>
            <div className="tc">

                <p className="f4 absolute top-0 right-2 mr2 custom-letter-spacing">
                    Cancel
                </p>

                <div className="user-box">
                <input type="text" name="name" id="name" placeholder="Enter Name" required/>
                </div>

                <div className="user-box">
                <input type="password" name="" placeholder="Enter Twitter/Instagram/LinkedIn link " required/>
                </div>

                <input
                    className="input bg-transparent grow pointer" 
                    onClick={handleRegisterClick}
                    type="submit" 
                    value="Register"
                />
                
            </div>
        </div>

    )
}

export default Register