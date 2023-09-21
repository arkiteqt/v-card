export const toggleSidebar = () => {
    // simple jquery for toggling sidebar
    $('body').on('click','.btn-sidebar',(evt)=>{
        evt.preventDefault();
        if(!$('body').hasClass('sidebar-opened')){
            $('body').addClass('sidebar-opened');
        }else{
            $('body').removeClass('sidebar-opened');
        }
    })
}

export const toggleMenu = () => {
    // simple jquery for toggling sidebar
    $('body').on('click','.btn-mobile',(evt)=>{
        evt.preventDefault();
        if(!$('body').hasClass('mobile-nav-opened')){
            $('body').addClass('mobile-nav-opened');
        }else{
            $('body').removeClass('mobile-nav-opened');
        }
    })
}

export const stickyNav = () => {
    const header = $('.header');
    const stickyNav = $('.head-bar');
    let stickyNavHeight = 0;

    if(stickyNav.length > 0) {
        stickyNav.addClass('animated');				
        if ($(window).width() > 767 && !isMobile()) {
            if (stickyNavHeight < stickyNav.outerHeight()) {
                stickyNavHeight = stickyNav.outerHeight();
                header.css('min-height', stickyNavHeight + 'px');
            }

            if ($(window).scrollTop() > stickyNav.outerHeight()) {
                stickyNav.addClass('head-sticky');
            } else {
                stickyNav.removeClass('head-sticky');
            }
        } else {
            stickyNav.removeClass('head-sticky');
            header.css('min-height', '0px');
        }
        
    }	
}

export const isMobile = () => {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent);
}