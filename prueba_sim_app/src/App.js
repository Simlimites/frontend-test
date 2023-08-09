import './App.css';
import { useEffect, useState } from 'react';
import usePosts from './hooks/usePosts';
import PostList from './components/PostList';
import { Provider } from 'react-redux';
import { store } from './store/store';


const AppState = () => {
  const [isFeching, setIsFeching] = useState(true);
    const { fetchPosts } = usePosts();

    useEffect(() => {
      const getPosts = async() => {
        await fetchPosts();
        setIsFeching(false);
      }
      getPosts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(isFeching) return <></>
    
    return <PostList />
}

function App() {
    return (
      <Provider store={ store }>
        <AppState />
      </Provider>
    )
}

export default App;
