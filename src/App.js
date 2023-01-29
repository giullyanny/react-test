import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';
import { loadPostsPhotos } from './utils/load-posts-photos';

class App extends Component {

  state = {
    posts: []
  }

  async componentDidMount() {
    const postsPhotosJson = await loadPostsPhotos();

    this.setState({ posts: postsPhotosJson });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className='container'>
        <div className="posts">
          {posts.map(post => (
            <PostCard key={post.id}
              // id={post.body}
              //   title={post.title} 
              //   body={post.id}
              //   photo={post.photo}
              post={post} />
          ))}
        </div>
      </section>
    );
  }
}

// function App() {
//   return (
//     <>
//       <div>Oi</div>
//       <div className="App">
//         <header className="App-header">
//           <img onClick={this.trocaNome} src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//         </header>
//       </div>
//     </>
//   );
// }

export default App;
