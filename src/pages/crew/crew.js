import './crew.style.scss'

import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/scss/alice-carousel.scss"
import crewImg from '../../assets/crew/image-douglas-hurley.webp'


const Crew = ({data}) => {
    return<div className='crew'>
<AliceCarousel  animationDuration={200} autoPlay autoPlayInterval={5000} infinite={true} disableButtonsControls={true}>

     {data.crew.map((person,idx) => {return(
         <>
     <div key={idx} className='crew-info'>
        <div className='crew-text'>
        <h4><span>02</span> MEET YOUR CREW</h4>
            <h3>{person.role}</h3>
            <h2>{person.name}</h2>
            <p>{person.bio}</p>

        </div>
        <div className='crew-img'>
            <img src={require('../../assets/crew/'+person.images.png+'.png')}></img>
        </div>
           
        </div>

        </>)
     })
     
     
}
     </AliceCarousel>

    </div>
}

export default Crew;