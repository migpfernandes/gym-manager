angular.module('gymManager')
.controller('TrainersEditCtrl', [
'$scope',
'trainers',
'trainer',
function($scope, trainers, trainer){
	$scope.trainers = trainers.trainers;
	$scope.trainer = trainer;
	$scope.addTrainer = function(){
		if(!trainer.name || trainer.name === '' || !trainer.idDocument || trainer.idDocument === '' ) { return; }
		trainers.create(trainer);
	};
	$scope.updateTrainer = function(){
		if(!trainer.name || trainer.name === '' || !trainer.idDocument || trainer.idDocument === '' ) { return; }
		trainers.update(trainer.id, trainer);
	};
}]);
