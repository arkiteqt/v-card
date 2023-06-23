// const logoWithImg = `<img src="./img/rs-logo.png" alt="RScard"/>`;
const logo = (logoData) =>{
	return `<a class="logo" href="/">${logoData.data}</a>`;
}

module.exports = logo;