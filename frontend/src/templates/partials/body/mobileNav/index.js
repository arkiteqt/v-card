const navData = [{
	link : "#about",
	name : "About"
},{
	link : "#skills",
	name : "Skills"
},{
	link : "#portfolio",
	name : "Portfolio"
},{
	link : "#experience",
	name : "Experience"
},{
	link : "#references",
	name : "References"
},{
	link : "#blog",
	name : "Blog",
	menu : [{
		link : "#category",
		name : "Post Title"
	}]
}];

const mobileNav = () => {
	const menu = navData.map((item, index) => {
		let subMenuHTML = '';
		if(item.menu){
			const subMenu = item.menu.map((subItem, i) => {
				return `<li><a href="${subItem.link}">${subItem.name}</a></li>`;
			});
			subMenuHTML = `<ul>${subMenu.join('')}</ul>`
		}
		return `<li><a href="${item.link}">${item.name}</a>${subMenuHTML}</li>`;
	})
	
	return `
		<button class="btn-mobile mobile-nav-close"><i class="rsicon rsicon-close"></i></button>
		<div class="mobile-nav-inner">
			<nav id="mobile-nav" class="nav">
				<ul class="clearfix">
					${menu.join('')}
				</ul>
			</nav>
		</div>`
}

export default mobileNav;