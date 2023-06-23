const nav = (navData) => {
	const menu = navData.map((item, index) => {
		let subMenuHTML = '';
		if(item.menu){
			const subMenu = item.menu.map((subItem, i) => {
				return `<ul><li><a href="${subItem.link}">${subItem.name}</a></li></ul>`;
			});
			subMenuHTML = subMenu.join('')
		}
		return `<li><a href="${item.link}">${item.name}</a>${subMenuHTML}</li>`;
	})
	
	return `<nav id="nav" class="nav">
		<ul class="clearfix">
			${menu.join('')}
		</ul>
	</nav>`
}

module.exports = nav;