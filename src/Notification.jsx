import React from 'react';
import Live from './images/circle-solid.svg';

const Notification =  (prop) => {
  const Color = 'hsl(210, 60%, 98%)';
  const divStyle = {
    backgroundColor: Color,
  };

    return (<>
        <section className="notification">
            <div className='box'  style={prop.live ? divStyle : null}>
                <picture>
                    <img src={prop.imgscr} alt="userimg"/>
                </picture>
                <article className="text">
                    <p><span className="user">{prop.user}</span>&nbsp;&nbsp;{prop.action}&nbsp;<span className="highlight">{prop.highlight}</span>&nbsp;&nbsp;{prop.live && <img src={Live} alt="live"/>}<br/><span className="time">{prop.time}</span></p>
                </article>
                <div className="live-img">
                    <img src={prop.liveImg}  alt="."/>
                </div>
            </div>     
            {prop.comment && <div className="message">
                <p>{prop.comment}</p>
            </div>}
        </section>
    </>)
}

export default Notification;