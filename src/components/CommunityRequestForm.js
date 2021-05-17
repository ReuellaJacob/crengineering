import React from 'react';
import "../style/CommunityRequestForm.css"

class CommunityRequestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entryDate: null,
            content: '',
            closeDate: null,
        };
    }

    handleChange(event) {
        let stateName = event.target.name;
        let stateValue = event.target.value;
        this.setState({[stateName]: stateValue});
    }

    onFormSubmit(event) {
        event.preventDefault();
        alert("Thank you for submitting your request!");
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <p>Enter the content: </p>
                    <input type='date' name='entryDate' className='dateObject'/>
                    <input type='date' name='closeDate' className='dateObject'/>
                    <br/>
                    <input type='text' name='content' id='contentObject' placeholder='Enter your request'/>
                    <br/>
                    <input className="formButton" type='submit'/>
                </form>
            </div>
        );
    }
}

export default CommunityRequestForm;