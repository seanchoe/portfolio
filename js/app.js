var portfolioApp = angular.module('portfolioApp', ['ngRoute']);
var companies = [
	{
		name: 'ZERODESKTOP',
		works: [
			{
				name: 'BLOCKS',
				year: '2014 - 2015',
				link: 'blocks'
			},
			{
				name: 'QUALITYTIME',
				year: '2014 - 2015',
				link: 'qualitytime'
			},
			{
				name: 'DINNERTIME PLUS',
				year: '2014 - 2015',
				link: 'dinnertimeplus'
			},
			{
				name: 'MIIPC',
				year: '2014 - 2015',
				link: 'miipc'
			},
			{
				name: 'ZEROPC',
				year: '2014 - 2015',
				link: 'zeropc'
			}
		]
	},
	{
		name: 'FOMOLA',
		works: [
			{
				name: 'BLOGSY',
				year: '2014 - 2015',
				link: 'blogsy'
			}
		]
	},
	{
		name: 'GOOGLE DEVELOPER GROUP',
		works: [
			{
				name: 'DEVELOPER FESTIVAL X',
				year: '2014 - 2015',
				link: 'dfx'
			}
		]
	},
	{
		name: 'PRIVATE WORKS',
		works: [
			{
				name: 'THE VALLEY',
				year: '2014 - 2015',
				link: 'thevalley'
			}
		]
	}
];

portfolioApp.config(function($routeProvider) {
	$routeProvider.when('/blocks', {
        templateUrl : 'works/blocks.html'
    })
    $routeProvider.when('/qualitytime', {
        templateUrl : 'works/qualitytime.html'
    })
    $routeProvider.when('/dinnertimeplus', {
        templateUrl : 'works/dinnertimeplus.html'
    })
    $routeProvider.when('/miipc', {
        templateUrl : 'works/miipc.html'
    })
    $routeProvider.when('/zeropc', {
        templateUrl : 'works/zeropc.html'
    })
    $routeProvider.when('/blogsy', {
        templateUrl : 'works/blogsy.html'
    })
    $routeProvider.when('/dfx', {
        templateUrl : 'works/dfx.html'
    })
    $routeProvider.when('/thevalley', {
        templateUrl : 'works/thevalley.html'
    }) 
});

portfolioApp.controller('NavigationController', function($scope) {
	$scope.companies = companies;
});