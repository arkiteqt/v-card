// const nav = require('./nav');

import backgroundimg from "../../../../../assets/img/uploads/rs-cover.jpg";

const Header = () => { 
    return `<header class="header">
    <div class="head-bg" style="background-image: url('${backgroundimg}')"></div>

    <div class="head-bar">
        <div class="head-bar-inner">
            <div class="row">
                <div class="col-sm-3 col-xs-6">
                    <a class="logo" href="index.html"><span>RS</span>card</a>
                    <!-- <a class="head-logo" href=""><img src="img/rs-logo.png" alt="RScard"/></a> -->
                </div>

                <div class="col-sm-9 col-xs-6">
                    <div class="nav-wrap">
                        <button class="btn-mobile btn-mobile-nav">Menu</button>
                        <button class="btn-sidebar btn-sidebar-open"><i class="rsicon rsicon-menu"></i></button>
                    </div>
                    <!-- .nav-wrap -->
                </div>
            </div>
        </div>
    </div>
</header>
<!-- .header -->`}

export default Header;

