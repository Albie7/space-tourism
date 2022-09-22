import './technology.style.scss'


import { useState } from 'react';


    
    const Technology = ({Data}) => {
        const [i,seti] = useState(0)
        return(
            <div className='technology'>
                <h3>03 SPACE LAUNCH 101</h3>
                <div className='launcher-info'>
                <div className='buttons'>
                    <button className={i==0?'active-btn':null} onClick={()=>seti(0)}>1</button>
                    <button className={i==1?'active-btn':null} onClick={()=>seti(1)}>2</button>
                    <button className={i==2?'active-btn':null} onClick={()=>seti(2)}>3</button>
                </div>
                    <div className='launcher-text'>
                <h4>THE TERMINOLOGY...</h4>
                        <h2>{Data.technology[i].name}</h2>
                        <p>{Data.technology[i].description}</p>
                    </div>
                    <div className='launcher-image'>
                        <img src={require('../../assets/technology/'+Data.technology[i].images.portrait+'.jpg')}></img>
                    </div>
                   

                </div>
            </div>
        )
    }
export default Technology;