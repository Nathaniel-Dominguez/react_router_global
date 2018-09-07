import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Homepage';
import Post from './Mainblog';
import FavoriteMovie from './FavoriteMovie';
import FavoriteFood from './FavoriteFood';
import About from './About';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/post">Blog</Link>
              <Link to="/favoritefood">Favorite Food</Link>
              <Link to="/favoritemovie">Favorite Movie</Link>
            </nav>
            <Route exact path="/" component={Home}/>
            <Route path="/post" component={ () => 
              <Post title="whateva"
                    author="me"
                    body="the body boi" 
                    comments={["first","second","bleh"]}
                    />
            }/>
            <Route path="/favorite/food" component={ () =>
              <FavoriteFood food="Food" />
            }/>
            <Route path="/favorite/movie" component={ () => 
              <FavoriteMovie title="The Best Movie of All" about="It's the best" />
            }/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
