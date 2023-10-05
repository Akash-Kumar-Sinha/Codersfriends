import React, { useState } from "react";
import CardList from "./Component/CardList/CardList";
import SearchBox from "./Component/SearchBox/SearchBox";
import { robots } from './robots'; 
import './App.css'
import PopUp from "./Component/Popup/PopUp";
import Register from "./Component/Register/Register";

const App = () => {
    
    const [robotData, setRobots] = useState(robots); 
    const [searchfield, setSearchField] = useState('');
    const [register, setRegister] = useState(false)
    const [route, setRoute] = useState('home');

    const onRegisterClick = () => {
          setRegister(true);
    }

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }



    const filteredRobots = robotData.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    const onRouteChange = (route) =>{
        console.log("Changing route to:", route);
        setRoute(route)
    }

    return (
        <div className="app">
            <PopUp trigger={register === true}>
            <Register onRouteChange={onRouteChange} setRegister={setRegister} />

            </PopUp>
            {route === 'home'
            ?(<div>
                <p className="f4 absolute top-0 right-2 mr2 custom-letter-spacing"
                onClick={onRegisterClick}
                >Register</p>
                    
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox SearchChange={onSearchChange} />
                    <CardList robots={filteredRobots} />
                </div>
                
            </div>): null
            }

            
            
        </div>
    );
}

export default App;
