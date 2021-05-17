import './App.css';
import CommunityRequest from './components/CommunityRequest';
import Modal from "./components/ModalViewForm";
import React from "react";
import {useState} from "react";
import CommunityRequestForm from "./components/CommunityRequestForm";

function App() {
        let introductionText = "Welcome to the community request page. We are so glad to see you here. " +
            "This page is a platform for people to share what they are struggling with. " +
            "You can be as specific as you would like or as anonymous as you want to be. " +
            "We only ask that you close out your requests when you can. We hope this platform " +
            "gives you a safe space to share your needs.";
        const [show, setShow] = useState(false);

        return (
            <div className="App">
                <h1 className='textOnMainPage' id='websiteName'>Community Helper</h1>
                <p className='textOnMainPage' id='introduction'>{introductionText}</p>
                <button className='buttons' id='newRequestButton' onClick={() => setShow(true)}>New Request</button>
                <Modal onClose={() => setShow(false)} show={show}/>
                <div className="requestCards">
                     <CommunityRequest cardTitle="Card 1" cardBody="Body of Card 1" cardDate="Date of Card 1"/>
                     <CommunityRequest cardTitle="Card 2" cardBody="Body of Card 1" cardDate="Date of Card 2"/>
                     <CommunityRequest cardTitle="Card 3" cardBody="Body of Card 1" cardDate="Date of Card 3"/>
                     <CommunityRequest cardTitle="Card 4" cardBody="Body of Card 1" cardDate="Date of Card 4"/>
                     <CommunityRequest cardTitle="Card 5" cardBody="Body of Card 1" cardDate="Date of Card 5"/>
                     <CommunityRequest cardTitle="Card 6" cardBody="Body of Card 1" cardDate="Date of Card 6"/>
                     <CommunityRequest cardTitle="Card 7" cardBody="Body of Card 1" cardDate="Date of Card 7"/>
                     <CommunityRequest cardTitle="Card 7" cardBody="Body of Card 1" cardDate="Date of Card 8"/>
                </div>
            </div>
        );
}

export default App;
