import React from 'react';

const Loading = () => {
    return (
        <div>
            <div class="flex justify-center items-center" >
                <div class="spinner-border animate-spin inline-block border-4 rounded-full w-24 h-24 my-10" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;