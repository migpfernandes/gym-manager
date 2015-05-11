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
	$scope.modernBrowsers = [
    { name: "Opera",              maker: "(Opera Software)",        ticked: true  },
    { name: "Internet Explorer",  maker: "(Microsoft)",             ticked: false },
    { name: "Firefox",            maker: "(Mozilla Foundation)",    ticked: true  },
    { name: "Safari",             maker: "(Apple)",                 ticked: false },
    { name: "Chrome",             maker: "(Google)",                ticked: true  }
	]; 
}]);
