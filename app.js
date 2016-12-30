angular.module('kode',[])

.controller("appCtrl", ["$scope", function($scope)
{
  $scope.temans = [
    {nama:'agus', age:'21'},
    {nama:'aceng', age:'70'},
    {nama:'maman', age:'22'},
    {nama:'yadi', age:'43'},
    {nama:'nana', age:'54'},
  ];

  $scope.baru = function(event){
    event.preventDefault();
    $scope.temans.push({nama:$scope.nameInput, age:$scope.ageInput});
    $scope.nameInput = "";
    $scope.ageInput = "";
  }

  $scope.hapus = function(index){
  $scope.temans.splice(index, 1);
  }
}]);
