import React from 'react';

const Card = ({ name, id, email }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* robohash receives id and makes a robot from it */}
            <img alt='' src={`https://robohash.org/${id}?150x150`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;