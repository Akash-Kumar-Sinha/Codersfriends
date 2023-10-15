import React, { useState } from "react";
import './Register.css';

const Register =(props) => {

    const[name, setName] = useState('');
    const[link, setLink] = useState('');
    const[role, setRole] = useState('');

    const onRoleChange = (event) => {
        setRole(event.target.value);
    }

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
                role: role,
                name: name,
                link: link
            })
        }).then(response => response.json())
            .then(data => {
                if(data.message){
                    props.fetchData();
                    alert(data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
              });
    }   

    return(
        <div className="login-box">
        <h2>Register</h2>
            <div className="tc">

                <p className="f4 absolute top-0 right-2 mr2 custom-letter-spacing"
                onClick={()=>{props.setRegister(false);}}>
                    Cancel
                    
                </p>

                <div className="user-box">
                    <input 
                        type="text" 
                        name="role"
                        id="role" 
                        placeholder="Enter Role"
                        title="Share new knowledge or insights, or if learned, share here"
                        onChange={onRoleChange}
                        />
                </div>

                <div className="user-box">
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Enter Name"
                        title="Name shoud to be unique"
                        onChange={onNameChange}
                        />
                </div>

                <div className="user-box">
                    <input 
                        type="url" 
                        name="link" 
                        placeholder="Enter Twitter/LinkedIn/..... " 
                        title="Insert only twitter and linkedIn link"
                        onChange={onLinkChange}
                        />
                </div>

                <input
                    className="input bg-transparent grow pointer" 
                    onClick={() => {
                        onSubmitRegister();
                        
                    }}
                    type="submit" 
                    value="Register"
                />
                
            </div>
        </div>

    )
}

export default Register