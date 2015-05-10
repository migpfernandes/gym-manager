angular.module('gymManager')
.controller('TrainersCtrl', [
'$scope',
'trainers',
function($scope, trainers){
	$scope.trainers = trainers.trainers;
	$scope.deleteTrainer = function(id){
		trainers.delete(id);
	};
}]);
