import React from 'react';

const QuestionTwo = () => {
    return (
        <div className='border-4 m-5 p-10'>
            <h4 className='mb-5 text-lg font-semibold'> Q2: Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>Authentication is very importmant for realtime projects. We can do user authentication very easily with firebase. We can implement user authentication with multiple providers as well. We use firebase for authentication becuase it is very reliable and well organised to use. There are also some alternative options for performing authentication except. Some of the are Okta, Auth0, Mongodb and so on.  </p>
        </div>
    );
};

export default QuestionTwo;