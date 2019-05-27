import React,{ Component } from 'react';
import { BrowserRouter,Route,Switch }  from 'react-router-dom';
import Main from "./component/Main";
import NewPost from "./component/NewPost";
import Post from "./component/Post";
import Error from './component/Error';
import Header from './component/Header'

class App extends Component{
  render(){
      return (
        <BrowserRouter>
          <div>
            <Header />
              <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/post/newpost" component={NewPost} exact/>
                <Route path="/post/" component={Post} />
                <Route component={Error} />
              </Switch>
   
          </div>
        </BrowserRouter>
      );
  }
}

export default App;