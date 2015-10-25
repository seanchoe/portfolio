var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

portfolioApp.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
	$routeProvider.when('/:workId', {
        templateUrl : './work.html',
        controller: 'ContentCtrl',
    })
}]);

portfolioApp.controller('NavigationCtrl', ['$scope', '$http', '$routeParams', '$location',
function($scope, $http, $routeParams, $location) {
	$http.get('./js/companies.json').success(function(companies) {
    	$scope.companies = companies;
    	$scope.homeId = companies[0].works[0].id;
    	
    	if ($location.path() == '' || $location.path() == '/' || $location.path() == '#') {
			$location.path("/"+$scope.homeId);
		}
    });
    
    $scope.isActive = function(workId) {
		if ($routeParams.workId == workId) {
			return "active";
		}
		else {
			return "";
		}
	}
}]);

portfolioApp.controller('ContentCtrl', ['$scope', '$routeParams', '$http', '$sce',
function($scope, $routeParams, $http, $sce) {
	$http.get('./js/companies.json').success(function(companies) {
		var currentCompany;
		var currentWork;
    	for (i in companies) {
	    	var company = companies[i];
	    	for (j in company.works) {
		    	var work = company.works[j];
		    	if (work.id == $routeParams.workId) {
			    	currentCompany = company;
			    	currentWork = work;
			    	break;
		    	}
	    	}
    	}
    	
    	$scope.company = currentCompany;
		$scope.work = currentWork;
		
		$http.get('./works/'+$routeParams.workId+'.html').success(function(content) {
			$scope.content = $sce.trustAsHtml(content);
	    });
    });
}]);

/*
var currentImageArray = [];
function addImageGalleyToCurrentPage() {
	$("#content figure").each(function(index) {
		$(this).data("index", {index});
		currentImageArray.push($(this));
		$(this).click(function() {
			var galleryWrapper = $("#image-gallery");
			galleryWrapper.fadeIn();
			galleryWrapper.css("display", "flex");
			$("#image-galley-content").html($(this));
		});
	});
}
*/