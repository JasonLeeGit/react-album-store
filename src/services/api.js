export const searchAlbums = async (artistName) => {
    
    const API_ALBUMS_URL = 'v1/music/service/search/albums/';

    const response = await fetch(`${API_ALBUMS_URL}?artistName=${artistName}`);
    const data = await response.json();
    return data;

  }