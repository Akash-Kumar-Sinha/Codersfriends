import React, { useState, useEffect } from "react";
import CardList from "./Component/CardList/CardList";
import SearchBox from "./Component/SearchBox/SearchBox";
import './App.css'
import PopUp from "./Component/Popup/PopUp";
import Register from "./Component/Register/Register";

const App = () => {
    
    const [searchfield, setSearchField] = useState('');
    const [register, setRegister] = useState(false)
    const [route, setRoute] = useState('home');
    const [fetchedData, setFetchedData] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:3000/', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setFetchedData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    };


    useEffect(() => {
        fetchData();
    }, []);

    

    const onRegisterClick = () => {
          setRegister(true);
    }

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    const filteredRobots = fetchedData.filter(data => {
        return data.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    

    const onRouteChange = (route) =>{
        console.log("Changing route to:", route);
        setRoute(route)
    }

    return (
        <div className="app">
            <PopUp trigger={register}>

                <Register onRouteChange={onRouteChange} setRegister={setRegister} fetchData={fetchData} />

            </PopUp>
            {route === 'home'
            ?<div>
                <p className="f4 absolute top-0 right-2 mr2 custom-letter-spacing"
                onClick={onRegisterClick}
                >Register</p>
                    
                <div className="tc">
                    <h1 className="f1">CodersFriends</h1>
                    <SearchBox SearchChange={onSearchChange} />
                    <CardList filteredRobots={filteredRobots} />
                </div>
                
            </div>: null
            }

            
            
        </div>
    );
}

export default App;
