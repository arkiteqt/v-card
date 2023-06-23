/**
 * Page Data
 */
const stylesheets = require('./stylesheets.js');
const scripts = require('./scripts.js');

 const PageData = {
	theme : {
		code : '07cb79',
		mode : 'light'
	},
	head : {
		meta : [],
		title : 'RScard',
		links : stylesheets,
		scripts : scripts	
	},
	body : {
		sidebar : {},
		header : {
			backgroundImg : '',
			logo : {
				type : 'text',
				data : "<span>RS</span>Card"
			},
			menu : [{
				'name' : 'About',
				'link' : '#about'
			},{
				'name' : 'Skills',
				'link' : '#skills'
			},{
				'name' : 'Portfolio',
				'link' : '#portfolio'
			},{
				'name' : 'Experience',
				'link' : '#experience'
			},{
				'name' : 'References',
				'link' : '#references'
			},{
				'name' : 'Blog',
				'link' : 'category.html',
				'menu' : [{
					'name' : 'Image Post',
					'link' : 'single.html'
				},{
					'name' : 'Slider Post',
					'link' : 'single-slider.html'
				},{
					'name' : 'Video Post',
					'link' : 'single-video.html'
				},{
					'name' : 'Audio Post',
					'link' : 'single-audio.html'
				},{
					'name' : 'Vimeo Post',
					'link' : 'single-vimeo.html'
				},{
					'name' : 'Youtube Post',
					'link' : 'single-youtube.html'
				},{
					'name' : 'Dailymotion Post',
					'link' : 'single-dailymotion.html'
				},{
					'name' : 'Without Media Post',
					'link' : 'single.html'
				},{
					'name' : 'Typography Page',
					'link' : 'typography.html'
				},{
					'name' : '404 Page',
					'link' : '404.html'
					}]
			},{
				'name' : 'Calendar',
				'link' : '#calendar'
			},{
				'name' : 'Contact',
				'link' : '#contact'
			}]
		}
	}
};

module.exports = PageData;