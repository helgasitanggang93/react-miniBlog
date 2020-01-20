import React from 'react';
import ListArticle from '../components/AdminPageComponent/ListArticle';
import CreateArticle from '../components/AdminPageComponent/CreateArticle';
import {
    Route,
    Switch,
    useRouteMatch,
    Link
} from 'react-router-dom';

const AdminPaage = () => {
    let match = useRouteMatch();
    const routes = [
        {
            path: `${match.path}`,
            exact: true,
            main: () => (
                <div className="text-center">
                    <h1> WELCOME TO ADMIN </h1>
                </div>
            )
        },
        {
            path: `${match.path}/listarticle`,
            main: () => <ListArticle />
        },
        {
            path: `${match.path}/createarticle`,
            main: () => <CreateArticle />
        }
    ]
    return (

        <div className="container-fluid">
            <div className="row">
                <div id="admin-side-bar" className="col-2" style={{ backgroundColor: '#ff8364', minHeight: '100vh', padding: '0' }}>
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="btn btn-link active">
                            <Link to={`${match.url}/listarticle`}>List Article</Link>
                        </button>
                        <button className="btn btn-link active">
                            <Link to={`${match.url}/createarticle`}>Create Article</Link>
                        </button>
                    </div>
                </div>
                <div id="admin-content" className="col-10">
                    <Switch>
                        {
                            routes.map((route, index) => (
                                <Route
                                    key={index}
                                    exact={route.exact}
                                    path={route.path}
                                    children={<route.main />}
                                />
                            ))
                        }
                    </Switch>
                </div>
            </div>
        </div>

    );
}

export default AdminPaage;