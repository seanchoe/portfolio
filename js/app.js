var portfolioApp = angular.module('portfolioApp', []);
var blogsy = {
	name: 'Blogsy'
}
portfolioApp.controller('PortfolioController', function() {
	this.work = blogsy;
});