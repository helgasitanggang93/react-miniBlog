import React from 'react';
import ArticlePage from './containers/ArticlePage'
import Navbar from './components/OtherComponent/Navbar';
import Footer from './components/OtherComponent/Footer';
import NoMatch from './components/OtherComponent/NoMatch';
import AdminPage from './containers/AdminPage';
import {
  BrowserRouter, 
  Route, 
  Link,
  Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Navbar/>
      </header>
      <section>
        <Switch>
          <Route path="/admin">
            <AdminPage/>
          </Route>
          <Route path="/" exact>
            <ArticlePage/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </section>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
