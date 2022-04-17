import React from 'react';

const Loading = () => {
    return (
        <div className=''>
            <div class="flex justify-center items-center h-screen" >
                <div class="spinner-border animate-spin inline-block border-4 rounded-full w-24 h-24" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;