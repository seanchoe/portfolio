var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

var blocksObj = {
	name: 'Blocks',
	year: '2014 - 2015',
	link: 'blocks'
};
var qualityTimeObj = {
	name: 'QualityTime',
	year: '2014',
	link: 'qualitytime'
};
var dinnerTimeObj = {
	name: 'DinnerTime Plus',
	year: '2013',
	link: 'dinnertimeplus'
};
var miiPcObj = {
	name: 'MiiPC',
	year: '2012 - 2013',
	link: 'miipc'
};
var zeroPcObj = {
	name: 'ZeroPC',
	year: '2012 - 2013',
	link: 'zeropc'
};
var blogsyObj = {
	name: 'Blogsy',
	year: '2010 - 2012',
	link: 'blogsy'
};
var dfxObj = {
	name: 'Developer Festival X',
	year: '2012',
	link: 'dfx'
};
var theValleyObj = {
	name: 'The Valley',
	year: '2010',
	link: 'thevalley'
};

function getCompanyName(link) {
	if (link == 'blocks' ||
	link == 'qualitytime' ||
	link == 'dinnertimeplus' ||
	link == 'miipc' ||
	link == 'zeropc') {
		return 'ZeroDesktop';
	}
	else if (link == 'blogsy') {
		return 'Fomola';
	}
	else if (link == 'dfx') {
		return 'Google Developer Group';
	}
	else if (link == 'thevalley') {
		return 'Personal Works';
	}
}

var companies = [
	{
		name: getCompanyName(blocksObj.link),
		works: [ blocksObj, qualityTimeObj, dinnerTimeObj, miiPcObj, zeroPcObj ]
	},
	{
		name: getCompanyName(blogsyObj.link),
		works: [ blogsyObj ]
	},
	{
		name: getCompanyName(dfxObj.link),
		works: [ dfxObj ]
	},
	{
		name: getCompanyName(theValleyObj.link),
		works: [ theValleyObj ]
	}
];

portfolioApp.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
	$routeProvider.when('/blocks', {
        templateUrl : 'works/blocks.html',
        controller: 'ContentCtrl',
        controllerAs: 'content',
        resolve: {
	        content: function() {
		        return blocksObj;
		    }
        }
    })
    .when('/qualitytime', {
        templateUrl : 'works/qualitytime.html',
        controller: 'ContentCtrl',
        controllerAs: 'content',
        resolve: {
	        content: function() {
		        return qualityTimeObj;
		    }
        }
    })
    .when('/dinnertimeplus', {
        templateUrl : 'works/dinnertimeplus.html',
        controller: 'ContentCtrl',
        controllerAs: 'content',
        resolve: {
	        content: function() {
		        return dinnerTimeObj;
		    }
        }
    })
    .when('/miipc', {
        templateUrl : 'works/miipc.html',
        controller: 'ContentCtrl',
        controllerAs: 'content',
        resolve: {
	        content: function() {
		        return miiPcObj;
		    }
        }
    })
    .when('/zeropc', {
        templateUrl : 'works/zeropc.html',
        controller: 'ContentCtrl',
        controllerAs: 'content',
        resolve: {
	        content: function() {
		        return zeroPcObj;
		    }
        }
    })
    .when('/blogsy', {
        templateUrl : 'works/blogsy.html',
        controller: 'ContentCtrl',
        controllerAs: 'content',
        resolve: {
	        content: function() {
		        return blogsyObj;
		    }
        }
    })
    .when('/dfx', {
        templateUrl : 'works/dfx.html',
        controller: 'ContentCtrl',
        controllerAs: 'content',
        resolve: {
	        content: function() {
		        return dfxObj;
		    }
        }
    })
    .when('/thevalley', {
        templateUrl : 'works/thevalley.html',
        controller: 'ContentCtrl',
        controllerAs: 'content',
        resolve: {
	        content: function() {
		        return theValleyObj;
		    }
        }
    }) 
}]);

portfolioApp.controller('NavigationCtrl', ['$route', '$location',
function($route, $location) {
	this.companies = companies;
	this.isActive = function(viewLocation) {
		if ($location.path() == viewLocation) {
			return "active";
		}
		else {
			return "";
		}
	}
}]);

portfolioApp.controller('ContentCtrl', ['content',
function(content) {
	this.data = content;
	this.company = getCompanyName(content.link);
}]);