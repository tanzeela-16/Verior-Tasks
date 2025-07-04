import React from 'react';
import VideoCard from '../components/VideoCard'; // adjust path if needed

const Home = () => {
  const videoData = [
    {
      thumbnail: 'https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg',
      title: 'React JS Crash Course',
      channel: 'Code with Harry',
      views: '1.2M views',
      time: '2 days ago',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/JfVOs4VSpmA/hqdefault.jpg',
      title: 'Spider-Man: No Way Home Official Trailer',
      channel: 'Marvel Entertainment',
      views: '108M views',
      time: '1 year ago',
      avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/mU6anWqZJcc/hqdefault.jpg',
      title: 'HTML & CSS for Beginners',
      channel: 'Frontend Pro',
      views: '2.5M views',
      time: '1 year ago',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/uYPbbksJxIg/hqdefault.jpg',
      title: 'Oppenheimer | Official Trailer',
      channel: 'Universal Pictures',
      views: '22M views',
      time: '11 months ago',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/pBk4NYhWNMM/hqdefault.jpg',
      title: 'Barbie | Main Trailer',
      channel: 'Warner Bros. Pictures',
      views: '18M views',
      time: '9 months ago',
      avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg',
      title: 'Avengers: Endgame Final Trailer',
      channel: 'Marvel Studios',
      views: '146M views',
      time: '4 years ago',
      avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/bMknfKXIFA8/hqdefault.jpg',
      title: 'Learn React in 1 Hour',
      channel: 'Tech World',
      views: '980K views',
      time: '1 week ago',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/6ZfuNTqbHE8/hqdefault.jpg',
      title: 'Avengers: Infinity War Official Trailer',
      channel: 'Marvel Studios',
      views: '240M views',
      time: '5 years ago',
      avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/Way9Dexny3w/hqdefault.jpg',
      title: 'June | Official Trailer',
      channel: 'Paramount Entertainment',
      views: '13M views',
      time: '4 months ago',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
  ];

  return (
    <main className="flex-1 bg-[#f9f9f9] p-4 min-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {videoData.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </main>
  );
};

export default Home;
