import React from 'react'

const YoutubeEnbeded = ({ embedId, width, height }) => {
  return (
    <div className="video-responsive">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className='w-full md:w-3/4 aspect-video mx-auto' 
      />
    </div>
  )
}

export default YoutubeEnbeded
