import React from 'react';
// used to access props album fields once so no need to prefix with album.id etc
const AlbumCard = ({ album: { id, artistName, albumName, imagePath } }) => {
    // return the html
    return (
        <div className="album" key={id}>
            <div>
                <p>{artistName}</p>
            </div>
            <div>
                <img src={'images' + imagePath !== "imagesN/A" ? 'images' + imagePath : "https://placehold.in/300x200@2x.png/dark"} alt={artistName} />
            </div>
            <div>
                <span>{artistName}</span>
                <h3>{albumName}</h3>
            </div>
        </div>
    );
}

// expose the component to other modules
export default AlbumCard;