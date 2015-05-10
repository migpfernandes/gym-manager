angular.module('gymManager')
.controller('StudentsCtrl', [
'$scope',
'students',
function($scope, students){
	$scope.students = students.students;
	$scope.deleteStudent = function(id){
		students.delete(id);
	};
}]);
