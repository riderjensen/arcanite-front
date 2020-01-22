import React from 'react';

import NoAuthNavigation from '../../components/navigation/NoAuthNavigation';

import './PostContainer.css';


function Post() {
    return (
        <div>
            <NoAuthNavigation />
            <div className="post-header">
                <p>
                    One Post
                </p>
            </div>
        </div>
    )
}

export default Post;