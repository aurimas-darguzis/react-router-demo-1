import React, { Component } from 'react';
import axios from '../../../axios';
import { Route } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import './Posts.css';

export default class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log('/posts', this.props);
    axios
      .get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Aurimas'
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log( response );
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    this.props.history.push({ pathname: '/' + id });
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }} Something went wrong />;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }

    return (
      <div>
        <section className='Posts'>{posts}</section>
        <Route path='/:id' exact component={FullPost} />
      </div>
    );
  }
}
