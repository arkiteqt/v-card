// import navData from '../../../../../../api/db/menu';
const navData = [];

const nav = () => {
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
	
	return `<nav id="nav" class="nav">
		<ul class="clearfix">
			${menu.join('')}
		</ul>
	</nav>`
}

export default nav;