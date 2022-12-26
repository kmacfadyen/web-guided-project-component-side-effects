import React from 'react';

const Friend = props => {
    return (
        <div className='friend'>
            {props.info.name}
            <button onClick={() => props.openDetails(props.info.id)}>
                See details
            </button>
        </div>
  )
}

export default Friend;


/* 
* openDetails is undefined, needs to be passed within JSX of app.js
* need to add props before openDetails!
* props is data that's passed from a parent to a child, app.js is the parent
*/
