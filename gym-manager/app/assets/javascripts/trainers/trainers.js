angular.module('gymManager')
.factory('trainers', [
	'$http',
	function($http){
		var o = {
			trainers: []
		};
		o.getAll = function(){
			return $http.get('/trainers.json').success(function(data){
				angular.copy(data, o.trainers);
			});
		};
		o.create = function(trainer) {
			return $http.post('/trainers.json', trainer).success(function(data){
				o.trainers.push(data);
			});
		};
		o.update = function(id, trainer) {
			return $http.put('/trainers/' + id + '.json', trainer).success(function(data){
				for (i = 0; i < o.trainers.length; i++) { 
    			if (o.trainers[i].id === data.id) {
    				angular.copy(data, o.trainers[i]);
    				break;
    			};
				};
			});
		};
		o.delete = function(id) {
			return $http.delete('/trainers/' + id + '.json').success(function(data){
				for (i = 0; i < o.trainers.length; i++) { 
    			if (o.trainers[i].id === id) {
    				o.trainers.splice(i, 1);
    				break;
    			};
				};
			});
		};
		o.get = function(id) {
			return $http.get('/trainers/' + id + '.json').then(function(res){
				return res.data;
			});
		};
		o.getNew = function() {
			return {};
		};
		return o;
}]);