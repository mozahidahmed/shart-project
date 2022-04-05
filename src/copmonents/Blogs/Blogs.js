import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='bloag-grid'>
                <div className='bloge'>
                 <h3>What is semantic tag?</h3>
                 <p>Semantic HTML tags allow you to add meaning to your markup so that search engines, screen readers, and web browsers can make sense of it. By default, when a user agent reads your content it doesn’t understand the context and meaning. Semantic HTML tags let you serve structured content to your users</p>
                </div>
                <div className='bloge'>
                    <h3>What is Inline and inline-block?</h3>
                <h4>Inline</h4>
              <p>  inline The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height.</p><br/>
                <h5>Inline-block</h5>

              <p>   inline-block It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values.</p>

                 
                </div>
                <div className='bloge'>
                   <h3>What is Context APi?</h3>
                   <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>
                </div>
        </div>
    );
};

export default Blogs;