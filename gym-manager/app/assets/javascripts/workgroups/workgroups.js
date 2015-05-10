angular.module('gymManager')
.factory('workgroups', [
	'$http',
	function($http){
		var o = {
			workgroups: [],
			classtypes: []
		};
		o.getAll = function(){
			return $http.get('/workgroups.json').success(function(data){
				angular.copy(data, o.workgroups);
			});
		};
		o.getAllClasstypes = function(){
			return $http.get('/classtypes.json').success(function(data){
				angular.copy(data, o.classtypes);
			});
		};
		o.create = function(workgroup) {
			return $http.post('/workgroups.json', workgroup).success(function(data){
				o.workgroups.push(data);
			});
		};
		o.update = function(id, workgroup) {
			return $http.put('/workgroups/' + id + '.json', workgroup).success(function(data){
				for (i = 0; i < o.workgroups.length; i++) { 
    			if (o.workgroups[i].id === data.id) {
    				angular.copy(data, o.workgroups[i]);
    				break;
    			};
				};
			});
		};
		o.delete = function(id) {
			return $http.delete('/workgroups/' + id + '.json').success(function(data){
				for (i = 0; i < o.workgroups.length; i++) { 
    			if (o.workgroups[i].id === id) {
    				o.workgroups.splice(i, 1);
    				break;
    			};
				};
			});
		};
		o.get = function(id) {
			return $http.get('/workgroups/' + id + '.json').then(function(res){
				return res.data;
			});
		};
		o.getNew = function() {
			return {};
		};
		return o;
}]);