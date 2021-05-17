import './App.css';
import CommunityRequest from './components/CommunityRequest';
import Modal from "./components/ModalViewForm";
import React from "react";
import {useState} from "react";

class App extends React.Component {
    state = {
        isLoading: true,
        communityRequests: []
    };

    async componentDidMount() {
        const response = await fetch('/requests');
        const body = await response.json;
        this.setState({communityRequests: body, isLoading: false});
    }

    render() {
        let introductionText = "Welcome to the community request page. We are so glad to see you here. " +
            "This page is a platform for people to share what they are struggling with. " +
            "You can be as specific as you would like or as anonymous as you want to be. " +
            "We only ask that you close out your requests when you can. We hope this platform " +
            "gives you a safe space to share your needs.";
        const {communityRequests, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>
        }

        return (
            <div className="App">
                <h1 className='textOnMainPage' id='websiteName'>Community Helper</h1>
                <p className='textOnMainPage' id='introduction'>{introductionText}</p>
                <button className='buttons' id='newRequestButton'>New Request</button>
                <Modal/>
                {communityRequests.map(communityRequests =>
                    <div className="requestCards">
                        <CommunityRequest cardTitle={"CommunityRequests"} cardBody={communityRequests.content}
                                          cardDate={communityRequests.entryDate}/>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
