angular.module('gymManager')
.controller('WorkgroupsCtrl', [
'$scope',
'workgroups',
function($scope, workgroups){
	$scope.workgroups = workgroups.workgroups;
	$scope.deleteWorkgroup = function(id){
		workgroups.delete(id);
	};
}]);
