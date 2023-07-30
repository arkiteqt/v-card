const PostBox = (post) => {
	const postDate = new Date(post.date);
	let postTags = '';
	for(let i=0; i < post.tags.length; i++){
		postTags += `<a href="${post.tags[i].url}">${post.tags[i].label}</a>`;
	}
	return `<div class="grid-item">
		<article class="post-box">
			<div class="post-media">
				<div class="post-image">
					<a href="${post.link}">
						<img src="${post.image}" alt="">
						${post.type == 'video' ? '<span class="post-type-icon"><i class="rsicon rsicon-play"></i></span>' : ''}
					</a>
				</div>
			</div>

			<div class="post-data">
				<time class="post-datetime" datetime="${postDate}">			
					<span class="day">${postDate.toLocaleString('numeric', {day:'2-digit'})}</span>
					<span class="month">${postDate.toLocaleString('default', { month: 'short' })}</span>
				</time>

				<div class="post-tag">
					${postTags}
				</div>

				<h3 class="post-title">
					<a href="${post.link}">${post.title}</a>
				</h3>

				<div class="post-info">
					<a href=""><i class="rsicon rsicon-user"></i>${post.author}</a>
					<a href=""><i class="rsicon rsicon-comments"></i>${post.comments}</a>
				</div>
			</div>
		</article>
	</div>`;
}

export default PostBox;