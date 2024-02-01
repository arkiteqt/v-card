import headLogo from '../../assets/img/rs-logo.png';

const Logo = ({displayLogoAsImg = false}) =>{
	return displayLogoAsImg ? `<a class="head-logo" href="/"><img src=${headLogo} alt="RScard"/></a>` :  `<a class="logo" href="/"><span>RS</span>card</a>`;
}

export default Logo;