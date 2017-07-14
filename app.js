// angular.module("AngAppl",['ngRoute'])


// .config(function($routeProvider){
// $routeProvider
// .when('/',{
// 	templateUrl : 'home.html',
// 	controller : 'homeCtrl'
// })
// .when('/contact',{
// 	templateUrl : 'contact.html',
// 	controller : 'contactCtrl'
// })
// .when('/about',{
// 	templateUrl: 'about.html',
// 	controller : 'aboutCtrl'
// })
// .when('/home',{
// 	templateUrl : 'home.html',
// 	controller : 'homeCtrl'
// })


// })


angular.module("AngAppl",['ui.router'])

.config(function($stateProvider,$urlRouterProvider){
$stateProvider
.state('app',{
	url : '/',
	views: {
		'header' : {

			templateUrl : 'header.html'
		},
		'content':{
			templateUrl : 'home.html',
			controller : 'homeCtrl'
		},
		'footer': {
		templateUrl : 'footer.html'
		}

	}
})
.state('app.contact',{
	url : 'contact',
	views: {
		
		'content@':{
			templateUrl : 'contact.html',
			controller : 'contactCtrl'
		}

	}
})

.state('app.about',{
	url : 'about',
	views: {
		
		'content@':{
			templateUrl : 'about.html',
			controller : 'aboutCtrl'
		}

	}
})


.state('app.home',{
	url : 'home',
	views: {
		
		'content@':{
			templateUrl : 'home.html',
			controller : 'homeCtrl'
		}

	}
})

})

;