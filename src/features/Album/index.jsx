import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    albumList: PropTypes.array.isRequired,
};

AlbumFeature.defaultProps = {
    albumList: [],
}
function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc cho Thứ Bảy',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/0/b/8/c0b80cd2ebe754aece9f4fc3ad219c50.jpg'
        }, {
            id: 2,
            name: 'Tiềm năng V-Pop',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/a/a/f/0aafb49c861d25a60354bf3d92272cd4.jpg'
        }, {
            id: 3,
            name: 'Chrismas Pop',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/d/0/3/bd03ab6f177b1e19dc9e4b0cdf77d659.jpg'
        }, {
            id: 4,
            name: 'Indie Việt',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/f/3/8/3f38c08769f2f80d8ac6e98453f92c76.jpg'
        },
    ]
    return (
        <div>
            <h3>Album List</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;