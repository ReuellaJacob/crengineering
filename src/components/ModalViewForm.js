import React from 'react';
import "../style/Modal.scss";
import CommunityRequestForm from "./CommunityRequestForm";

const Modal = props => {
    if(!props.show) {
        return null
    }
    return (
        <div className='modal'>
            <div className='modal-container'>
                <div className='modal-content'>
                    <div className='modal-title'>
                        <h1>Modal Title</h1>
                    </div>
                        <div className='modal-body'>
                            <p>This is the modal body</p>
                            <CommunityRequestForm/>
                        </div>
                    <button className="formButton" onClick={props.onClose}> Close </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;