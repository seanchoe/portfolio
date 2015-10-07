var portfolioApp = angular.module('portfolioApp', ['ngRoute']);
var companies = [
	{
		name: 'ZERODESKTOP',
		works: [
			{
				name: 'Blocks',
				year: '2014 - 2015',
				link: 'blocks'
			},
			{
				name: 'QualityTime',
				year: '2014',
				link: 'qualitytime'
			},
			{
				name: 'DinnerTime Plus',
				year: '2013',
				link: 'dinnertimeplus'
			},
			{
				name: 'MiiPC',
				year: '2012 - 2013',
				link: 'miipc'
			},
			{
				name: 'ZeroPC',
				year: '2012 - 2013',
				link: 'zeropc'
			}
		]
	},
	{
		name: 'FOMOLA',
		works: [
			{
				name: 'Blogsy',
				year: '2010 - 2012',
				link: 'blogsy'
			}
		]
	},
	{
		name: 'GOOGLE DEVELOPER GROUP',
		works: [
			{
				name: 'Developer Festival X',
				year: '2012',
				link: 'dfx'
			}
		]
	},
	{
		name: 'PRIVATE WORKS',
		works: [
			{
				name: 'The Valley',
				year: '2010',
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