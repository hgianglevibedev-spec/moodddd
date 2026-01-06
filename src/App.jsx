import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Layout/Common
import Header from './components/Common/Header';

// Import Pages
import Home from './pages/Home';
import Library from './pages/Library';
import Location from './pages/Location';
import Trip from './pages/Trip';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      {/* Header nằm ngoài Routes để luôn hiển thị ở mọi trang */}
      <Header /> 

      <main>
        <Routes>
          {/* Các trang hiển thị trên Nav bar */}
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Các trang nằm sâu bên trong (Sub-pages) */}
          <Route path="/library/location" element={<Location />} />
          <Route path="/library/location/trip" element={<Trip />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;