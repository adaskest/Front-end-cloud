import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import Header from "./components/Header";
import GetGifPage from "./pages/GetGifPage";
import context from "./context/context";
import React, {useEffect, useState} from "react";
import http from "./plugins/http";

function App() {

    const [user, setUser] = useState('')
    const [gifs, setGifs] = useState([])
    const [loading,setLoading] = useState(true)

    const info = {user, setUser, gifs, setGifs}

    useEffect(async () => {
        const userIn = await http.get('get-user')
        if (userIn.success) {
            setUser(userIn.user)
            setGifs(userIn.gifs)
        }
        setLoading(false)
    }, [])
    if (loading) return (<div/>)

    return (
        <Router>
            <context.Provider value={info}>
                <Header/>
                <Routes>
                    <Route path='/authentication' element={<AuthenticationPage/>}/>
                    <Route path='/' element={<GetGifPage/>}/>
                </Routes>
            </context.Provider>
        </Router>
    );
}

export default App;
