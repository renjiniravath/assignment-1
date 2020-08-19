import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="row mt-4">
                    <div className="col-4">
                        <hr className="border border-secondary"></hr>
                    </div>
                    <div className="col-4">
                        <h5 className="text-center">CONTACT</h5>
                    </div>
                    <div className="col-4">
                        <hr className="border border-secondary"></hr>
                    </div>
                </div>
                <div className="d-flex mt-2 justify-content-center">
                    <a className="mx-3" href="https://www.linkedin.com/in/renji-joseph-sabu/" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/linkedIn.png" alt="https://www.linkedin.com/in/renji-joseph-sabu/" width="30" height="30" />
                    </a>
                    <a className="mx-3" href="https://github.com/renjiniravath" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/github.webp" alt="https://github.com/renjiniravath" width="30" height="30" />
                    </a>
                </div>
            </div>
        )
    }
}