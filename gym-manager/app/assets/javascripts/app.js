angular.module('gymManager', ['ui.router','templates','isteven-multi-select'])
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
			//Student states			
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
			//Trainer states
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
			//Workgroup states
			.state('workgroups', {
				url: '/workgroups',
				templateUrl: 'workgroups/_workgroups.html',
				controller: 'WorkgroupsCtrl',
				resolve: {
					workgroupPromise: ['workgroups', function(workgroups){
						return workgroups.getAll();
					}]
				}
			})
			.state('workgroups_new', {
				url: '/workgroups/new',
				templateUrl: 'workgroups/_workgroups_new.html',
				controller: 'WorkgroupsEditCtrl',
				resolve: {
					workgroup: ['$stateParams', 'workgroups', function($stateParams, workgroups){
						return workgroups.getNew();
					}],
					classtypes: ['workgroups', function(workgroups){
						return workgroups.getAllClasstypes();
					}]
				}
			})
			.state('workgroups_edit', {
				url: '/workgroups/{id}',
				templateUrl: 'workgroups/_workgroups_edit.html',
				controller: 'WorkgroupsEditCtrl',
				resolve: {
					workgroup: ['$stateParams', 'workgroups', function($stateParams, workgroups){
						return workgroups.get($stateParams.id);
					}],
					classtypes: ['workgroups', function(workgroups){
						return workgroups.getAllClasstypes();
					}]
				}
			})					
			;

			$urlRouterProvider.otherwise('home');
	}
]);