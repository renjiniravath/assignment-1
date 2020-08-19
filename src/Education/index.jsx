import React from 'react';

export default class Education extends React.Component {
    render() {
        return (
            <div>
                <div className="row mt-4">
                    <div className="col-4">
                        <hr className="border border-secondary"></hr>
                    </div>
                    <div className="col-4">
                        <h5 className="text-center">EDUCATION</h5>
                    </div>
                    <div className="col-4">
                        <hr className="border border-secondary"></hr>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <h5 className="text-secondary font-weight-bold">August 2014 - June 2018</h5>
                    </div>
                    <div className="col-8">
                        <h5 className="font-weight-bold">B.Tech in Electrical and Electronics Engineering</h5>
                        <h6>Mar Athanasius College of Engineering</h6>
                        <h6>Kothamangalam, Kerala</h6>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <h5 className="text-secondary font-weight-bold">2014</h5>
                    </div>
                    <div className="col-8">
                        <h5 className="font-weight-bold">12th ISC</h5>
                        <h6>Kuriakose Elias School, Mannanam</h6>
                        <h6>Kottayam, Kerala</h6>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <h5 className="text-secondary font-weight-bold">2012</h5>
                    </div>
                    <div className="col-8">
                        <h5 className="font-weight-bold">10th ICSE</h5>
                        <h6>Kuriakose Elias School, Mannanam</h6>
                        <h6>Kottayam, Kerala</h6>
                    </div>
                </div>
            </div>
        )
    }
}