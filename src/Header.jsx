import React from 'react';

const Header =  (prop) => {
    return (<>
            <header>
            <div className="haeder-left"><h3>Notifications <span>{prop.counting}</span></h3></div>
            <div className="haeder-right"><p>Mark all as read</p></div>
            </header>
    </>)
}

export default  Header;