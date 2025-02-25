import { useEffect, useState } from 'react'

import SearchIcon from './search.svg'
import AlbumCard from './AlbumCard'
import './App.css'

const API_ALBUMS_URL = 'v1/music/service/search/albums/';

const App = () => {
  //useState (like session objects)
  const [searchTerm, setSearchTerm] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    searchAlbums("Oasis");
  }, []);

  //new way to create js function "call back function" also uses lamda method style, () => {}
  const searchAlbums = async (artistName) => {
    const response = await fetch(`${API_ALBUMS_URL}?artistName=${artistName}`);
    const data = await response.json();

    // add data to useState 
    setAlbums(data);
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
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => {searchAlbums(searchTerm)}}
          />
        </div>
        {albums?.length > 0
          ? (
            <div className="container">
              {albums.map((album) => (
                //here we inject our compnent and add any required props
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
