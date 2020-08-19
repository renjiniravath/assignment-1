import React from 'react';

export default class Skills extends React.Component {
    render() {
        return (
            <div>
                <div className="row  mt-4">
                    <div className="col-4">
                        <hr className="border border-secondary"></hr>
                    </div>
                    <div className="col-4">
                        <h5 className="text-center">SKILLS</h5>
                    </div>
                    <div className="col-4">
                        <hr className="border border-secondary"></hr>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <h5 className="text-secondary font-weight-bold">Languages</h5>
                    </div>
                    <div className="col-8">
                        <h5>Javascript, Golang</h5>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <h5 className="text-secondary font-weight-bold">Databases</h5>
                    </div>
                    <div className="col-8">
                        <h5>MySQL, Redis</h5>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <h5 className="text-secondary font-weight-bold">Technology</h5>
                    </div>
                    <div className="col-8">
                        <h5>HTML, CSS, React.js, Bootstrap, Socket.IO, Echo(Golang)</h5>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <h5 className="font-weight-bold text-secondary">Tools</h5>
                    </div>
                    <div className="col-8">
                        <h5>VS Code, Phpmyadmin</h5>
                    </div>
                </div>
            </div>
        )
    }
}