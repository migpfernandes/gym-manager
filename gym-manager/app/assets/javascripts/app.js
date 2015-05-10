angular.module('gymManager', ['ui.router','templates'])
.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'home/_home.html',
				controller: 'MainCtrl',
				resolve: {
					postPromise: ['posts', function(posts){
						return posts.getAll();
					}]
				}
			})
			.state('posts', {
				url: '/posts/{id}',
				templateUrl: 'posts/_posts.html',
				controller: 'PostsCtrl',
				resolve: {
					post: ['$stateParams', 'posts', function($stateParams, posts){
						return posts.get($stateParams.id);
					}]
				}
			})
			.state('students', {
				url: '/students',
				templateUrl: 'students/_students.html',
				controller: 'StudentsCtrl',
				resolve: {
					studentPromise: ['students', function(students){
						return students.getAll();
					}]
				}
			})
			.state('students_new', {
				url: '/students/new',
				templateUrl: 'students/_students_new.html',
				controller: 'StudentsEditCtrl',
				resolve: {
					student: ['$stateParams', 'students', function($stateParams, students){
						return students.getNew();
					}]
				}
			})
			.state('students_edit', {
				url: '/students/{id}',
				templateUrl: 'students/_students_edit.html',
				controller: 'StudentsEditCtrl',
				resolve: {
					student: ['$stateParams', 'students', function($stateParams, students){
						return students.get($stateParams.id);
					}]
				}
			})
			.state('trainers', {
				url: '/trainers',
				templateUrl: 'trainers/_trainers.html',
				controller: 'TrainersCtrl',
				resolve: {
					studentPromise: ['trainers', function(trainers){
						return trainers.getAll();
					}]
				}
			})
			.state('trainers_new', {
				url: '/trainers/new',
				templateUrl: 'trainers/_trainers_new.html',
				controller: 'TrainersEditCtrl',
				resolve: {
					trainer: ['$stateParams', 'trainers', function($stateParams, trainers){
						return trainers.getNew();
					}]
				}
			})
			.state('trainers_edit', {
				url: '/trainers/{id}',
				templateUrl: 'trainers/_trainers_edit.html',
				controller: 'TrainersEditCtrl',
				resolve: {
					trainer: ['$stateParams', 'trainers', function($stateParams, trainers){
						return trainers.get($stateParams.id);
					}]
				}
			})			
			;

			$urlRouterProvider.otherwise('home');
	}
]);