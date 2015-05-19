angular.module('gymManager')
.controller('WorkgroupsEditCtrl', [
'$scope',
'workgroups',
'workgroup',
function($scope, workgroups, workgroup){
	$scope.classtypes = workgroups.classtypes;
	
	$scope.workgroups = workgroups.workgroups;
	$scope.workgroup = workgroup;
	
	$scope.trainers = workgroups.trainers;	
	$scope.selectedTrainers = [];
	setSelectedTrainers();

	$scope.students = workgroups.students;	
	$scope.selectedStudents = [];
	setSelectedStudents();

	$scope.addWorkgroup = function(){
		if(!workgroup.name || workgroup.name === '') { return; }
		workgroup.trainers = $scope.selectedTrainers;
		workgroup.students = $scope.selectedStudents;
		workgroups.create(workgroup);
	};
	$scope.updateWorkgroup = function(){
		if(!workgroup.name || workgroup.name === '') { return; }
		workgroup.trainers = $scope.selectedTrainers;
		workgroup.students = $scope.selectedStudents;
		workgroups.update(workgroup.id, workgroup);
	};

	function setSelectedTrainers(){
		if ($scope.workgroup.trainers) {
			for (i = 0; i < $scope.workgroup.trainers.length; i++) { 
  	  	for (j = 0; j < $scope.trainers.length; j++) { 
    			if ($scope.workgroup.trainers[i].id === $scope.trainers[i].id) {
    				$scope.trainers[i].ticked = true;
    				break;
    			}
    		};
			};
		};
	};	

	function setSelectedStudents(){
		if ($scope.workgroup.students) {
			for (i = 0; i < $scope.workgroup.students.length; i++) { 
  	  	for (j = 0; j < $scope.students.length; j++) { 
    			if ($scope.workgroup.students[i].id === $scope.students[i].id) {
    				$scope.students[i].ticked = true;
    				break;
    			}
    		};
			};
		};
	};
}]);
