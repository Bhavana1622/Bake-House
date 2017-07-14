angular.module("AngAppl")

.controller("homeCtrl", [ '$scope', 'homeService',function($scope,homeService){

$scope.promodish = homeService.getPromodish();

// $scope.discount = homeService.getDiscount(0);
$scope.discount = homeService.getDiscount(0);
$scope.chef = homeService.getChef();
}])



.controller("aboutCtrl" ,['$scope','aboutFactory',function($scope,aboutFactory){

$scope.chefs = aboutFactory.getChefs();

}])


.controller("contactCtrl" ,function($scope){

$scope.form = [{}];
$scope.submission = function(feedback){
alert("submitted");
	$scope.form.push({
fullname:$scope.feedback.fullname,
email:$scope.feedback.email,
message:$scope.feedback.message

	});
	$scope.feedback.fullname = "";
	$scope.feedback.email = "";
	$scope.feedback.message = "";

}
})


;