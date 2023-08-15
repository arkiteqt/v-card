const posts = [{
    id : 1,
    type : 'image',
    image : 'http://localhost:3001/img/uploads/thumb-449x286-1.jpg',
    date : '2015-03-13T07:44:01+00:00',
    tags : [{
        url : '',
        label : '#Photo'
    },{
        url : '',
        label : '#Architect'
    }],
    title : 'Image Post',
    author : 'by admin',
    comments : '56',
    link : 'single-image.html'
},{
    id : 2,
    type : 'video',
    image : 'http://localhost:3001/img/uploads/thumb-449x286-5.jpg',
    date : '2015-03-13T07:44:01+00:00',
    tags : [{
        url : '',
        label : '#Photo'
    },{
        url : '',
        label : '#Architect'
    }],
    title : 'Vimeo Video Post',
    author : 'by admin',
    comments : '56',
    link : 'single-vimeo.html'
}]

module.exports = posts;