angular.module('mainApp')

.controller('detailController', function ($scope, $rootScope, $routeParams, localData, dataService) {
  var categoryId = $routeParams.catId
  $scope.categoryId = $routeParams.catId
  $scope.localData = localData[categoryId]
  $scope.subCategory = localData[categoryId].subCategory
})
