angular.module('gymManager')
.controller('WorkgroupsEditCtrl', [
'$scope',
'workgroups',
'workgroup',
function($scope, workgroups, workgroup){
	$scope.classtypes = workgroups.classtypes;
	$scope.workgroups = workgroups.workgroups;
	$scope.workgroup = workgroup;
	$scope.addWorkgroup = function(){
		if(!workgroup.name || workgroup.name === '') { return; }
		workgroups.create(workgroup);
	};
	$scope.updateWorkgroup = function(){
		if(!workgroup.name || workgroup.name === '') { return; }
		workgroups.update(workgroup.id, workgroup);
	};
}]);
