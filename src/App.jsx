import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<BlogPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
