var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

portfolioApp.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
	$routeProvider.when('/:workId', {
        templateUrl : function(urlattr){
            return './works/' + urlattr.workId + '.html';
        },
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

portfolioApp.controller('ContentCtrl', ['$scope', '$routeParams', '$http', 'contentService', 'galleryService',
function($scope, $routeParams, $http, contentService, galleryService) {	
	$http.get('./js/companies.json').success(function(companies) {
    	for (i in companies) {
	    	var company = companies[i];
	    	for (j in company.works) {
		    	var work = company.works[j];
		    	if (work.id == $routeParams.workId) {
			    	contentService.setCurrentCompanyAndWork(company, work);
			    	break;
		    	}
	    	}
    	}
    });
    
    $scope.companyName = function() {
	    return contentService.getCurrentCompanyName();
    }
    $scope.workName = function() {
	    return contentService.getCurrentWorkName();
    }
    $scope.workYear = function() {
	    return contentService.getCurrentWorkYear();
    }
    $scope.showGallery = function(index) {
	    var galleryWrapper = $("#image-gallery");
		galleryWrapper.fadeIn();
		galleryWrapper.css("display", "flex");
		var galleyContent = $("#image-galley-content");
		galleyContent.html(galleryService.getFigureWithIndex(index));
	}
    
    var figureArray = [];
    $('#content figure').each(function(index) {
	    var images = $(this).children('img');
	    images.each(function() {
		    $(this).css('width', $(this).data('width'));
	    });
	    $(this).data('index', index);
	    figureArray.push($(this).clone());
    })
    galleryService.setFigureList(figureArray);
    
}]);

portfolioApp.controller('GalleryCtrl', ['$scope', 'galleryService',
function($scope, galleryService) {		
	$scope.onBackgroundClick = function() {
		var galleryWrapper = $("#image-gallery");
		galleryWrapper.fadeOut(function() {
			$(this).css('display', 'none');
		});
		var galleyContent = $("#image-galley-content");
		galleyContent.html("");
	};
}]);

portfolioApp.factory('contentService', function() {
	var currentCompany;
	var currentWork;
	
	var setCurrentCompanyAndWork = function(company, work) {
		currentCompany = company;
		currentWork = work;
	};
	
	var getCurrentCompanyName = function() {
		if (currentCompany != null) {
			return currentCompany.name;
		}
		return "";
	};
	
	var getCurrentWorkName = function() {
		if (currentWork != null) {
			return currentWork.name;
		}
		return "";
	};
	
	var getCurrentWorkYear = function() {
		if (currentWork != null) {
			return currentWork.year;
		}
		return "";
	};
	
	return {
		setCurrentCompanyAndWork: setCurrentCompanyAndWork,
		getCurrentCompanyName: getCurrentCompanyName,
		getCurrentWorkName: getCurrentWorkName,
		getCurrentWorkYear: getCurrentWorkYear
	};
});

portfolioApp.factory('galleryService', function() {
	var figureList = [];
	
	var setFigureList = function(list) {
		figureList = list;
	}
	
	var getFigureWithIndex = function(index) {
		var currentFigure = figureList[index];
		currentFigure.children('img').css('width', '');
		return figureList[index];
	}
	
	return {
		setFigureList: setFigureList,
		getFigureWithIndex: getFigureWithIndex
	}
});