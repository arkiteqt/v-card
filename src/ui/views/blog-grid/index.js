import posts from '../../../api/db/posts';

import PostBox from './post-box';

const BlogGrid = () => {
    const PostsHTML = posts.map((post) => {
        return PostBox(post)
    });
    return (`<div class="blog-grid">
        <div class="grid-sizer"></div>
        ${PostsHTML.join('')}
    </div>`);
}

export default BlogGrid;

