const data = {
    name : 'Robert Smith',
    position : 'Developer and businessman',
    photo : 'img/uploads/rs-photo-v1.jpg',
    details : [{
        age : '29',
        address : '24058, Belgium, Brussels, Liutte 27, BE',
        email : 'robertsmith@company.com',
        phone : '12562548456',
        freelance : 'till April 15, 2016',
        availability : {
            display : 'button',
            label : 'On Vacation',
            value : 'till March 25, 2016'
        }
    }],
    socialMedia : [{
        platform : 'facebook',
        url : 'https://www.facebook.com'
    },{
        platform : 'twitter',
        url : 'https://twitter.com'
    },{
        platform : 'linkedin',
        url : 'https://www.linkedin.com'
    },{
        platform : 'google-plus',
        url :'https://plus.google.com'
    },{
        platform : 'dribble',
        url : 'https://dribbble.com'
    },{
        platform : 'instagram',
        url : 'https://www.instagram.com'
    }]
}

import ProfileInfo from "./info";
import ProfileList from "./list";
import ProfileSocial from "./social";
import ProfilePhoto from "../../../assets/img/uploads/rs-photo-v1.jpg";

const Profile = () => {
    return `<div class="profile">
    <div class="row">
        <div class="col-xs-5">
            <div class="profile-photo"><img src="${ProfilePhoto}" alt="Robert Smith"/></div>
        </div>
        <div class="col-xs-7">
            ${ProfileInfo()}
            ${ProfileList()}
        </div>
    </div>
</div>
${ProfileSocial()}
`}

export default Profile;