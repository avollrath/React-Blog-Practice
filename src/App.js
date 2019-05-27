import React,{ Component } from 'react';
import { BrowserRouter,Route,Switch }  from 'react-router-dom';
import Posts from "./component/Posts";
import NewPost from "./component/NewPost";
import Error from './component/Error';
import Header from './component/Header'

class App extends Component{
  render(){
      return (
        <BrowserRouter>
          <div>
            <Header />
              <Switch>
                
                <Route path="/post/newpost" component={NewPost} exact/>
                <Route path="/post" component={Posts} />
                <Route component={Error} />
              </Switch>
   
          </div>
        </BrowserRouter>
      );
  }
}

export default App;