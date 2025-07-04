import React from 'react';

const VideoCard = ({ thumbnail, title, channel, views, time, avatar }) => {
  return (
    <div className="w-full transition-transform duration-200 transform hover:scale-105 cursor-pointer">
      <div className="aspect-video">
        <img src={thumbnail} alt="thumbnail" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="flex mt-2 gap-2">
        <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-gray-600">{channel}</p>
          <p className="text-xs text-gray-500">{views} • {time}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
