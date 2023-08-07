const about = require('./about');
const skills = require('./skills');
const clients = require('./clients');
const references = require('./data/references');
const prices = require('./data/prices')
const blog = require('./data/blog');
const experience = require('./data/experience');
const education = require('./data/education');

const user = {
	about, 
	skills,
	experience,
	education,
	clients,
	references,
	prices,
	blog
}

module.exports = user;