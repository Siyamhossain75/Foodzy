import React from 'react';

const Title = ({title ,subtitle}) => {
    return (
        <div className='text-center'>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='max-w-lg mx-auto mt-4 text-black/70'>{subtitle}</p>
        </div>
    );
};

export default Title;