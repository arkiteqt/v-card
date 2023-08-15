const user = 'rs';

const about = require(`./${user}/about`);
const skills = require(`./${user}/skills`);
const clients = require(`./${user}/clients`);
const references = require(`./${user}/references`);
const prices = require(`./${user}/prices`);
const blog = require(`./${user}/blog`);
const experience = require(`./${user}/experience`);
const education = require(`./${user}/education`);

const userData = {
	about, 
	skills,
	experience,
	education,
	clients,
	references,
	prices,
	blog
}

module.exports = userData;