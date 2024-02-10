import React from 'react'
import VideoCard from '../../Components/VideoCard/VideoCard'

const Home:React.FC = () => {
  return (
    <div className='w-full flex flex-col p-4 md:flex-row flex-wrap'>
        <VideoCard title='Italy Vlog' img='https://www.state.gov/wp-content/uploads/2023/07/shutterstock_433413835v2.jpg' id='1' />
        <VideoCard title='Samsung S23 Ultra Review' img='https://m-cdn.phonearena.com/images/reviews/247714-image/BK6A4486.jpg?w=1' id='2'/>
        <VideoCard title='VW ID Buzz Review' img='https://uploads.vw-mms.de/system/production/images/vwn/074/790/images/96916cfe27e8f53b1a39a39d0132753b0c2f0fe3/DB2022AU00712_web_1600.jpg?1662460601' id='3'/>
        <VideoCard title='Sekiro Shadows Die Twice Speedrun' img='https://www.digitaltrends.com/wp-content/uploads/2019/03/sekirobull.jpg?p=1' id='4'/>
        <VideoCard title='Italy Vlog' img='https://www.state.gov/wp-content/uploads/2023/07/shutterstock_433413835v2.jpg' id='1'/>
        <VideoCard title='Samsung S23 Ultra Review' img='https://m-cdn.phonearena.com/images/reviews/247714-image/BK6A4486.jpg?w=1' id='2'/>
        <VideoCard title='VW ID Buzz Review' img='https://uploads.vw-mms.de/system/production/images/vwn/074/790/images/96916cfe27e8f53b1a39a39d0132753b0c2f0fe3/DB2022AU00712_web_1600.jpg?1662460601' id='3'/>
        <VideoCard title='Sekiro Shadows Die Twice Speedrun' img='https://www.digitaltrends.com/wp-content/uploads/2019/03/sekirobull.jpg?p=1' id='4'/>
        <VideoCard title='Italy Vlog' img='https://www.state.gov/wp-content/uploads/2023/07/shutterstock_433413835v2.jpg' id='1'/>
        <VideoCard title='Samsung S23 Ultra Review' img='https://m-cdn.phonearena.com/images/reviews/247714-image/BK6A4486.jpg?w=1' id='2'/>
        <VideoCard title='VW ID Buzz Review' img='https://uploads.vw-mms.de/system/production/images/vwn/074/790/images/96916cfe27e8f53b1a39a39d0132753b0c2f0fe3/DB2022AU00712_web_1600.jpg?1662460601' id='4'/>
        <VideoCard title='Sekiro Shadows Die Twice Speedrun' img='https://www.digitaltrends.com/wp-content/uploads/2019/03/sekirobull.jpg?p=1' id='4'/>
    </div>
  )
}

export default Home