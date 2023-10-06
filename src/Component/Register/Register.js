import React, { useState } from "react";
import './Register.css';

const Register =(props) => {

    const[name, setName] = useState('');
    const[link, setLink] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState(null);

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onLinkChange = (event) => {
        setLink(event.target.value);
    }

    const onSubmitRegister = () => {
        props.setRegister(false);
        fetch('http://localhost:3000/register',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                link: link
            })
        }).then(response => response.json())
            .then(user => {
                console.log("User object:", user);
                console.log(user.id)
                if(user.id){
                    setRegistrationStatus(true);
                    // console.log(registrationStatus)
                    props.onRouteChange('home');
                }else{
                    setRegistrationStatus(false);
                }
            })
            .catch(error => {
                setRegistrationStatus(false);
                console.error('Error:', error);
              });
              console.log(name );
    }

    return(
        <div className="login-box">
        <h2>Login</h2>
            <div className="tc">

                <p className="f4 absolute top-0 right-2 mr2 custom-letter-spacing"
                onClick={()=>{props.setRegister(false);}}>
                    Cancel
                    
                </p>

                <div className="user-box">
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Enter Name" 
                        required
                        onChange={onNameChange}
                        />
                </div>

                <div className="user-box">
                    <input 
                        type="url" 
                        name="link" 
                        placeholder="Enter Twitter/Instagram/LinkedIn link " 
                        required
                        onChange={onLinkChange}
                        />
                </div>

                <input
                    className="input bg-transparent grow pointer" 
                    onClick={() => {
                        onSubmitRegister();
                        props.fetchData();
                    }}
                    type="submit" 
                    value="Register"
                />
                
            </div>
        </div>

    )
}

export default Register