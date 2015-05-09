angular.module('gymManager')
.factory('students', [
	'$http',
	function($http){
		var o = {
			students: []
		};
		o.getAll = function(){
			return $http.get('/students.json').success(function(data){
				angular.copy(data, o.students);

				for (i = 0; i < o.students.length; i++) { 
    			o.students[i] = getTypedStudent(o.students[i]);
				};
			});
		};
		o.create = function(student) {
			return $http.post('/students.json', student).success(function(data){
				o.students.push(data);
			});
		};
		o.update = function(id, student) {
			return $http.put('/students/' + id + '.json', student).success(function(data){
				for (i = 0; i < o.students.length; i++) { 
    			if (o.students[i].id === data.id) {
    				angular.copy(data, o.students[i]);
    				break;
    			};
				};
			});
		};
		o.delete = function(id) {
			return $http.delete('/students/' + id + '.json').success(function(data){
				for (i = 0; i < o.students.length; i++) { 
    			if (o.students[i].id === id) {
    				o.students.splice(i, 1);
    				break;
    			};
				};
			});
		};
		o.get = function(id) {
			return $http.get('/students/' + id + '.json').then(function(res){
				return getTypedStudent(res.data);
			});
		};
		o.getNew = function() {
			return {};
		};
		return o;
}]);

function getTypedStudent(o){
	var result = o;
	if (isValidDate(o.birthDate)){
		result.birthDate = new Date(o.birthDate);
	};
	result.weight = parseInt(o.weight);
	result.height = parseFloat(o.height);
	return result;
}

function isValidDate(d) {
  return ((d) && (new Date(d) !== "Invalid Date" && !isNaN(new Date(d)) ));
}