"use client"

import { TitleSection } from '../titleSection/page';

export default function CarouselVideos() {

  const videos = [
    {id: 1, videoSrc: '/videos/1.mp4' },
    {id: 2, videoSrc: '' },
    {id: 3, videoSrc: '/videos/3.mp4' },
    {id: 4, videoSrc: '/videos/4.mp4' },
    {id: 5, videoSrc: '/videos/5.mp4' },
    {id: 6, videoSrc: '/videos/6.mp4' },
    {id: 7, videoSrc: '/videos/7.mp4' },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4">
      <TitleSection
        title="Video Gallery" 
        subtitle="Watch our tattoo designs from all angles in motion"
      />

      <div className="flex space-x-3 overflow-x-auto scrollbar-custom">
        {videos.map((video) => (
          <div key={video.id} className="min-w-max flex-shrink-0">
            <div className="relative h-[28rem] w-[20rem]">
              <video
                src={video.videoSrc}
                alt="Tattoo Video"
                loop
                muted
                autoPlay
                className="w-full h-full object-cover hover:opacity-75"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}