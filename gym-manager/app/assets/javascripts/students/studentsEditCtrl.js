angular.module('gymManager')
.controller('StudentsEditCtrl', [
'$scope',
'students',
'student',
function($scope, students, student){
	$scope.students = students.students;
	$scope.student = student;
	$scope.addStudent = function(){
		if(!student.name || student.name === '' || !student.idDocument || student.idDocument === '' ) { return; }
		students.create(student);
	};
	$scope.updateStudent = function(){
		if(!student.name || student.name === '' || !student.idDocument || student.idDocument === '' ) { return; }
		students.update(student.id, student);
	};
}]);
