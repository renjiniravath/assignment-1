import React from 'react';

export default class WorkExperience extends React.Component {
    render() {
        return (
            <div>
                <div className="row mt-4">
                    <div className="col-4">
                        <hr className="border border-secondary"></hr>
                    </div>
                    <div className="col-4">
                        <h5 className="text-center">WORK EXPERIENCE</h5>
                    </div>
                    <div className="col-4">
                        <hr className="border border-secondary"></hr>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <h5 className="text-secondary font-weight-bold">July 2018 - Present</h5>
                    </div>
                    <div className="col-8">
                        <h5 className="font-weight-bold">Software Engineer</h5>
                        <h6>HIFX IT and Media Services</h6>
                        <h6>Full Stack Developer</h6>
                    </div>
                </div>
            </div>
        )
    }
}