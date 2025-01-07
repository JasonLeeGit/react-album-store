import React from 'react';

const AlbumCard = ({ album: { id, artistName, albumName, imagePath } }) => {
    // return the html
    console.log(imagePath)
    return (
        <div className="album" key={id}>
            <div>
                <p>{artistName}</p>
            </div>

            <div>
                <img src={'src/images/'+imagePath !== "N/A" ? 'src/images/'+imagePath : "https://via.placeholder.com/400"} alt={artistName} />
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