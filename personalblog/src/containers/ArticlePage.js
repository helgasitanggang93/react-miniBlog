import React from 'react';
import { 
    Link, 
    Route,  
    Switch, 
    useRouteMatch} from 'react-router-dom';
import PersonalProfile from '../components/ProfilePageComponent/PersonalProfile';
const ArticlePage = () => {
    return (
        <div>
            <header>
                <div className="d-flex justify-content-center">
                    <h3> MY BLOG </h3>
                </div>
                <ul className="nav justify-content-center">
                    <li className="nav-item p-4">
                        Profile
                    </li>
                    <li className="nav-item p-4">
                        Traveling
                    </li>
                    <li className="nav-item p-4">
                        Side Story
                    </li>
                </ul>
            </header>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <PersonalProfile />
                        </div>
                        <div className="col-9">
                            <ul className="nav justify-content-center">
                                <li className="nav-item p-4">
                                    Portofolio
                                </li>
                                <li className="nav-item p-4">
                                    Education
                                </li>
                                <li className="nav-item p-4">
                                    Job Experience
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ArticlePage;