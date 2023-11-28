import React from 'react';
import Header from './Header';
import Notification from './Notification';
import UserData from './UserData';

const Card =  () => {
    let count = 0;
    const notify = () => {
        for (let i = 0; i< UserData.length; i++) {
        if(UserData[i].live) {
            count = count+1;
        }}
        return count;
  } ;
  
    return (<>
        <div className="card">
           <Header
            counting={notify()}
           /> 
           {UserData.map((value, index) => {
                return (<Notification
                    key= {value.id}
                    imgscr= {value.imgscr}
                    user = {value.user}
                    action= {value.action}
                    highlight= {value.highlight}
                    time= {value.time}
                    live= {value.live}
                    liveImg={value.liveImg}
                    comment= {value.comment}
                    />)
           })}
        </div>
    </>)
}

export default Card;