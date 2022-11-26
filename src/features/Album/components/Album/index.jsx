import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Album.propTypes = {
    album: PropTypes.array.isRequired,
};
Album.defaultProp = {
    album: [],
}
function Album({ album }) {
    return (
        <div className="album">
            <div className="album_thumb">
                <img src={album.thumbnailUrl} alt={album.name} />
            </div>
            <p className="album_name">{album.name}</p>
        </div>

    );
}

export default Album;