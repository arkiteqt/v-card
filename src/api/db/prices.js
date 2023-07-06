const prices = [{
	label : 'Basic',
	cost : 16,
	frequency : '/mo',
	isPrimary : false,
	features : [{
		name : 'Manage tasks',
		isNew : false,
		isIncluded : true
	},{
		name : 'Discussions in tasks',
		isNew : false,
		isIncluded : true
	},{
		name : 'File sharing',
		isNew : true,
		isIncluded : true
	},{
		name : 'Spreadsheet View',
		isNew : false,
		isIncluded : false
	},{
		name : 'iPhone and Android apps',
		isNew : false,
		isIncluded : false
	},{
		name : 'Advanced email integration',
		isNew : false,
		isIncluded : false
	},{
		name : 'Basic Integration',
		isNew : false,
		isIncluded : false
	}]
},{
	label : 'Professional',
	cost : 50,
	frequency : '/mo',
	isPrimary : true,
	features : [{
		name : 'Manage tasks',
		isNew : false,
		isIncluded : true
	},{
		name : 'Discussions in tasks',
		isNew : false,
		isIncluded : true
	},{
		name : 'File sharing',
		isNew : true,
		isIncluded : true
	},{
		name : 'Spreadsheet View',
		isNew : false,
		isIncluded : true
	},{
		name : 'iPhone and Android apps',
		isNew : false,
		isIncluded : true
	},{
		name : 'Advanced email integration',
		isNew : false,
		isIncluded : false
	},{
		name : 'Basic Integration',
		isNew : false,
		isIncluded : false
	}]
},{
	label : 'Enterprise',
	cost : 250,
	frequency : '/mo',
	isPrimary : false,
	features : [{
		name : 'Manage tasks',
		isNew : false,
		isIncluded : true
	},{
		name : 'Discussions in tasks',
		isNew : false,
		isIncluded : true
	},{
		name : 'File sharing',
		isNew : true,
		isIncluded : true
	},{
		name : 'Spreadsheet View',
		isNew : false,
		isIncluded : true
	},{
		name : 'iPhone and Android apps',
		isNew : false,
		isIncluded : true
	},{
		name : 'Advanced email integration',
		isNew : false,
		isIncluded : true
	},{
		name : 'Basic Integration',
		isNew : false,
		isIncluded : true
	}]
}];

module.exports = prices;