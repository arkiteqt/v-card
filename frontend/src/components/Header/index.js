import backgroundimg from "../../assets/img/uploads/rs-cover.jpg";
import Logo from "../Logo";
import Nav from "../Nav";

const Header = (backgroundImg = true ) => {
    const backgroundImgHTML =  backgroundImg ? `<div class="head-bg" style="background-image: url('${backgroundimg}')"></div>` : ''; 
        return `<header class="${backgroundImg ? 'header-has-img' : ''} header">
                    ${backgroundImgHTML}

        <div class="head-bar animated">
            <div class="head-bar-inner">
                <div class="row">
                    <div class="col-sm-3 col-xs-6">
                        ${Logo()}
                    </div>
                    <div class="col-sm-9 col-xs-6">
                    <div class="nav-wrap">
                        ${Nav()}
                        <button class="btn-mobile btn-mobile-nav">Menu</button>
                        <button class="btn-sidebar btn-sidebar-open"><i class="rsicon rsicon-menu"></i></button>
                    </div>
                    <!-- .nav-wrap -->
                </div>
                </div>
            </div>
        </div>
    </header>
    <!-- .header -->`
}

export const createHeader = ({backgroundImg}) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  console.log(backgroundImg)
  const header = Header(backgroundImg);
  wrapper.insertAdjacentHTML('beforeend', header);

  return wrapper;
};
