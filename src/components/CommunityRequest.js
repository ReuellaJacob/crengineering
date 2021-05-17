import React from "react";
import '../style/CommunityRequest.css'

class CommunityRequest extends React.Component {
    constructor(props) {
        super(props);
        this.cardTitle = props.cardTitle;
        this.cardBody = props.cardBody;
        this.cardDate = props.cardDate;
    }

    //TODO add an onClick function
    //
    // handleDisplayInfo(event) {
    //
    // }

    render() {
        return (
            <div className="card">
                <p className="card-title"> {this.cardTitle}</p>
                <p className="card-body"> {this.cardBody} </p>
                <p className="card-date"> {this.cardDate} </p>
            </div>
        );
    }
}

export default CommunityRequest;