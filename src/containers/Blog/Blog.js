import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to='/'
                  exact
                  activeClassName='my-active'
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline'
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path='/new-post' exact component={NewPost} />
          <Route path='/' component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
