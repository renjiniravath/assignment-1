import React, { Fragment } from 'react';

export default class ImageBox extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="col-3 bio-pic">
                    <div className="d-flex flex-column bio-box">
                        <img src="/images/profilePicture.png" alt="profile" width="232" height="232" />
                        <div className="name-block">
                            <h5 className="text-center font-weight-bold">Renji Joseph Sabu</h5>
                            <h6 className="text-center text-secondary">Full Stack Developer</h6>
                        </div>
                        <div className="link-block d-flex justify-content-center p-2">
                            <a className="mx-3" href="https://www.linkedin.com/in/renji-joseph-sabu/" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/linkedIn.png" alt="https://www.linkedin.com/in/renji-joseph-sabu/" width="30" height="30" />
                            </a>
                            <a className="mx-3" href="https://github.com/renjiniravath" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/github.webp" alt="https://github.com/renjiniravath" width="30" height="30" />
                            </a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}