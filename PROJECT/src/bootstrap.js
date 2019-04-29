import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";
import AddMovie from './components/addMovie';
import MovieIndex from './components/movie-index';
import RemoveMovie from './components/removeMovie';
import ViewMovie from "./components/viewMovie";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div className="nav-bar-wrap">
          <div className="nav-bar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/add_movie'>Add Movie</NavLink>
            <NavLink to='/movie_index'>All Movies</NavLink>
          </div>
          <div>
            <Route exact path='/' component={App}/>
            <Route path='/add_movie' component={AddMovie}/>
            <Route path='/view_movie/:id' component={ViewMovie}/>
            <Route path='/remove_movie/:id' component={RemoveMovie}/>
            <Route path='/movie_index' component={MovieIndex}/>
          </div>
        </div>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
