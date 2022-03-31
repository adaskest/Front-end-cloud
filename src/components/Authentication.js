import React, {useState} from 'react';import {Button, ButtonGroup, Container} from "@mui/material";import Register from "./Register";import Login from "./Login";const Authentication = () => {    const [showComponent, setShowComponent] = useState(true)    return (        <Container maxWidth='sm'                   style={{                       display: "flex",                       flexDirection: "column",                       justifyContent: "center",                       alignItems: "center",                       marginTop: 50                   }}>            <ButtonGroup>                <Button onClick={() => setShowComponent(true)} style={{backgroundColor: showComponent ? 'darkred' : ""}}                        color='error' variant='contained'>register</Button>                <Button onClick={() => setShowComponent(false)}                        style={{backgroundColor: showComponent ? '' : "darkred"}}                        color='error' variant='contained'>login</Button>            </ButtonGroup>            {showComponent && <Register setShowComponent={setShowComponent}/>}            {!showComponent && <Login setShowComponent={setShowComponent}/>}        </Container>    );};export default Authentication;