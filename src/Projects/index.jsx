import React from 'react';

export default class Projects extends React.Component {
    render() {
        return (
            <div>
                <div className="row mt-4">
                    <div className="col-4">
                        <hr className="border border-secondary"></hr>
                    </div>
                    <div className="col-4">
                        <h5 className="text-center">PROJECTS</h5>
                    </div>
                    <div className="col-4">
                        <hr className="border border-secondary"></hr>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <h5 className="text-secondary font-weight-bold">Online Doctor Consultation</h5>
                        <h6 className="text-secondary">Backend</h6>
                    </div>
                    <div className="col-8">
                        <h6>An application which is used by doctors and patients for online appointment booking and video consultation. Built in Golang, Echo, Redis, MySQL and Twilio.</h6>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <h5 className="text-secondary font-weight-bold">Recipe Management</h5>
                        <h6 className="text-secondary">Frontend</h6>
                    </div>
                    <div className="col-8">
                        <h6>A website which maintains a set of recipes and production charts for a restaurant chain company. Built in React.js, NVD3.</h6>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <h5 className="text-secondary font-weight-bold">Job Scheduler</h5>
                        <h6 className="text-secondary">Full Stack</h6>
                    </div>
                    <div className="col-8">
                        <h6>A website is used to schedule jobs to different teams to different dates. Built using Golang, MSSQL and React</h6>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <h5 className="text-secondary font-weight-bold">Inventory Management</h5>
                        <h6 className="text-secondary">Full Stack</h6>
                    </div>
                    <div className="col-8">
                        <h6>A website to manage rentable items used in an office. Built using Golang, MySQL and React</h6>
                    </div>
                </div>
            </div>
        )
    }
}