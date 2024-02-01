import defaultBackgroundImg from "../../assets/img/uploads/rs-cover.jpg";
import Logo from "../Logo";
import Nav from "../Nav";

const Header = ({hasBackgroundImg,backgroundImg,displayLogoAsImg,hasSidebar = true}) => {

    const img = hasBackgroundImg && backgroundImg ? backgroundImg[0] : defaultBackgroundImg;
    const backgroundImgHTML =  `<div class="head-bg" style="background-image: url('${img}')"></div>`; 
    return `<header class="${hasBackgroundImg ? 'header-has-img' : ''} header">
                ${backgroundImgHTML}

        <div class="head-bar animated">
            <div class="head-bar-inner">
                <div class="row">
                    <div class="col-sm-3 col-xs-6">
                        ${Logo({displayLogoAsImg})}
                    </div>
                    <div class="col-sm-9 col-xs-6">
                    <div class="nav-wrap">
                        ${Nav()}
                        <button class="btn-mobile btn-mobile-nav">Menu</button>
                        ${hasSidebar ? `<button class="btn-sidebar btn-sidebar-open"><i class="rsicon rsicon-menu"></i></button>` : ''}
                    </div>
                    <!-- .nav-wrap -->
                </div>
                </div>
            </div>
        </div>
    </header>
    <!-- .header -->`
}

export const createHeader = (settings) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  const header = Header(settings);
  wrapper.insertAdjacentHTML('beforeend', header);

  return wrapper;
};
