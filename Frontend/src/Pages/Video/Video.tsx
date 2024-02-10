import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faGear, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import video from '../../../../../../../youse/Videos/Captures/Sekiro 2024-01-22 00-53-08.mp4'

const Video = () => {
    
    const videoRef = useRef();
    const volumeRef = useRef();

    const [playButton, setPlayButton] = useState<boolean>(true);
    const [volumeButton, setVolumeButton] = useState<boolean>(true);
    const [videoControls, setVideocontrols] = useState<boolean>(false);
    const [videoEnded, setVideoEnded] = useState<boolean>(false);

    const play = () => {
        console.log(videoRef)
        if(videoRef.current?.paused)
        {
            videoRef.current?.play();
            setPlayButton(true);
        }
        else
        {
            videoRef.current?.pause();
            setPlayButton(false);
        }
    }

    const handleVolume = (e) => {
        console.log(e.target.value);
        videoRef.current.volume = e.target.value / 100;
    }

    const mute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        volumeRef.current.value = 0;
        setVolumeButton(!volumeButton);
    }

    const replay = () => {
        console.log('replay');
        setVideoEnded(false);
        play();
    }


  return (
    <div className='flex'>
        
        <div className='w-full lg:w-3/4 p-4'>
            <div className='relative'>
                <video src={video} ref={videoRef} autoPlay className='rounded-md' onEnded={() => setVideoEnded(true)} onMouseOver={() => setVideocontrols(true)} onMouseOut={() => setVideocontrols(false)}/>
                <button className='absolute top-0 w-full h-full bg-black bg-opacity-50 text-white z-10 rounded' onClick={replay} style={{display: videoEnded ? 'block' : 'none'}}>Replay</button>
                <div className='absolute bottom-0 p-2 w-full backdrop-blur-sm bg-glass rounded-md text-white flex justify-between transition-all duration-500' style={{opacity: videoControls ? '100' : '0'}}>
                    <div className='flex gap-2'>
                        <div className='w-4'>
                            {playButton ? 
                            <button onClick={play}>
                                <FontAwesomeIcon icon={faPause} className='text-white' />
                            </button> 
                            : 
                            <button onClick={play}>
                                <FontAwesomeIcon icon={faPlay} className='text-white' />
                            </button>
                            }
                        </div>
                        <div className='flex gap-1'>
                            {volumeButton ? 
                                <button onClick={mute}>
                                    <FontAwesomeIcon icon={faVolumeHigh} className='text-white' />
                                </button> 
                                : 
                                <button onClick={mute}>
                                    <FontAwesomeIcon icon={faVolumeMute} className='text-white' />
                                </button>
                            }
                            <input type='range' ref={volumeRef} className='cursor-pointer' onChange={handleVolume} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <button>
                                <FontAwesomeIcon icon={faGear} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='font-bold text-2xl'>Isshin, The Sowrd Saint</h1>
        </div>
        <div className='hidden lg:flex flex-col w-1/4 p-4'>
            <div className='border w-full flex '>
                <div className='w-12'>
                    <img src='https://assets.hardwarezone.com/img/2022/06/sony-wh1000xm5-intro1.jpg' />
                </div>
                <div>
                    <h2>Video 1 Title</h2>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Video