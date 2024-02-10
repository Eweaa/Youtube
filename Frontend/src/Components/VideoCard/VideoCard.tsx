import React from 'react'
import { Link } from 'react-router-dom'
type props = {
    img: string,
    title: string,
    id: string
}

const VideoCard: React.FC<props> = ({ img, title, id }) => {
  return (
    <Link to={`/video/${id}`} className='rounded-2xl w-full overflow-hidden relative md:w-1/3 lg:w-1/4'>
        <img src={img} className=' object-cover w-full'/>
        <div className='absolute bottom-0 p-2 w-full backdrop-blur-sm bg-glass text-white'>
            <h4 className='font-medium text-lg truncate'>{title}</h4>
            <div className='flex'>
                <p className='mr-2'>112K Views</p>
                <p>4 Weeks Ago</p>
            </div>
        </div>
    </Link>
  )
}

export default VideoCard