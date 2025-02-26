import { useEffect, useState } from 'react';
import { searchAlbums } from './services/api';

import SearchIcon from './search.svg';
import AlbumCard from './components/AlbumCard';
import './App.css';

const App = () => {
  //useState (like session objects)
  const [searchTerm, setSearchTerm] = useState("");
  const [albums, setAlbums] = useState([]);
  //useEffect will run on first load then only when album state changes not everytime page changes
  useEffect(() => {
    defaultLoad();
  }, []);
  const defaultLoad = async () => {
    const response = await searchAlbums("") //"oasis"
    setAlbums(response);
  }
  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(e.target.value)
      const response = await searchAlbums(searchTerm)
      setAlbums(response);
    }
  }
  const searchInputClear = (e) => {
    setSearchTerm("")
    e.target.value = ""
  }
  // html to return
  return (
    //className is converted to class in the html
    <div className="app">
      <h1>AlbumLand</h1>
      <div className="search">
        <input
          placeholder='Search for Albums'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          onClick={(e) => searchInputClear(e)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={async () => {
            const response = await searchAlbums(searchTerm)
            setAlbums(response);
          }
          }
        />
      </div>
      {albums?.length > 0
        ? (
          <div className="container">
            {albums.map((album) => (
              //here we inject our component and add any required props
              <AlbumCard album={album} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Albums Found</h2>
          </div>
        )}
    </div>
  );
}

// expose the component to other modules
export default App;
