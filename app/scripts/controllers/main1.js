angular.module('homeApp')
  .controller('a', function ($scope,$http) {
    $http({
		method:"get",
		url:"http://www.somenote.cn:1602/list1"
//		url:"http://localhost:9999/ajax/ajax414xinwen"
	}).success(function (e){
		$scope.data=e[0].content;
	})
			
  });