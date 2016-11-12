angular.module('homeApp')
  .controller('b', function ($scope,$http) {
    $http({
		method:"get",
		url:"http://www.somenote.cn:1602/list2"
//		url:"http://localhost:9999/ajax/ajax414xinwen"
	}).success(function (e){
		$scope.data2=e[0].content;
	})
			
});