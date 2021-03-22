import React from 'react';
import './VideoItem.scss';


const VideoItem =({video, onVideoSelect})=>{
    return (
        <div className="ui card" onClick={()=>{onVideoSelect(video)}} style={{cursor:"pointer"}}>
            <div className="image">
                <img alt={video.snippet.title} className='ui image' src={video.snippet.thumbnails.medium.url}/>
            </div>
            <div className="content">
                <div className='header'> {video.snippet.title} </div>
            </div>
        </div>
    );

};
export default VideoItem;