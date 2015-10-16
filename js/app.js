var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

// Companies
var zeroDesktopObj = {
	id: 'zerodesktop',
	name: 'ZeroDesktop'
}

var fomolaObj = {
	id: 'fomola',
	name: 'Fomola'
}

var gdgObj = {
	id: 'gdg',
	name: 'Google Developer Group'
}

var personalWorksObj = {
	id: 'personalworks',
	name: 'Personal Works'
}

// Works
var blocksObj = {
	name: 'Blocks',
	year: '2014 - 2015',
	id: 'blocks',
	companyId: 'zerodesktop'
};
var qualityTimeObj = {
	name: 'QualityTime',
	year: '2014',
	id: 'qualitytime',
	companyId: 'zerodesktop'
};
var dinnerTimeObj = {
	name: 'DinnerTime Plus',
	year: '2013',
	id: 'dinnertimeplus',
	companyId: 'zerodesktop'
};
var miiPcObj = {
	name: 'MiiPC',
	year: '2012 - 2013',
	id: 'miipc',
	companyId: 'zerodesktop'
};
var zeroPcObj = {
	name: 'ZeroPC',
	year: '2012 - 2013',
	id: 'zeropc',
	companyId: 'zerodesktop'
};
var blogsyObj = {
	name: 'Blogsy',
	year: '2010 - 2012',
	id: 'blogsy',
	companyId: 'fomola'
};
var dfxObj = {
	name: 'Developer Festival X',
	year: '2012',
	id: 'dfx',
	companyId: 'gdg'
};
var theValleyObj = {
	name: 'The Valley',
	year: '2010',
	link: 'thevalley',
	companyId: 'personalworks'
};

var companies = [zeroDesktopObj, fomolaObj, gdgObj, personalWorksObj];
var works = [blocksObj, qualityTimeObj, dinnerTimeObj, miiPcObj, zeroPcObj, blogsyObj, dfxObj, theValleyObj];

var navigation = [];

for (index in companies) {
	var company = companies[index];
	navigation.push({
		company: company,
		works: getWorksArrayWithCompanyId(company.id)
	});
}

function getWorksArrayWithCompanyId(companyId) {
	var returnArray = Array();
	for (index in works) {
		var work = works[index];
		if (work.companyId == companyId) {
			returnArray.push(work);
		}
	}
	return returnArray;
}

function getCompanyNameWithId(companyId) {
	for (index in companies) {
		var company = companies[index];
		if (company.id == companyId) {
			return company.name;
		}
	}
}

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
	this.navigation = navigation;
	this.homeUrl = "#blocks";
	this.isActive = function(viewLocation) {
		if ($location.path() == viewLocation) {
			return "active";
		}
		else {
			return "";
		}
	}
	
	if ($location.path() == '' || $location.path() == '/' || $location.path() == '#') {
		$location.path("/blocks");
	}
}]);

portfolioApp.controller('ContentCtrl', ['content',
function(content) {
	this.data = content;
	this.company = getCompanyNameWithId(content.companyId);
}]);