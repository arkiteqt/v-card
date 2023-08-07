import posts from '../../../api/db/user/posts';

import PostBox from './post-box';

const Blog = () => {
    const PostsHTML = posts.map((post) => {
        return PostBox(post)
    });
    return (`<div class="blog-grid">
        <div class="grid-sizer"></div>
        ${PostsHTML.join('')}
    </div>`);
}

export default Blog;

