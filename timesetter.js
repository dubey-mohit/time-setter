/**
 * Created by dell on 13/12/17.
 */

angular.module('myApp',[])

    .controller("baseController",function ($scope) {
        $scope.mohit = 10;
    })

    .directive("timeSetter",function () {
        return{
            templateUrl:"/timesetter/templateSetter.html",
            controller:["$scope",function ($scope) {
                console.log("MOHT",$scope.mohit);

                $scope.currenHrsNumber = 12;
                $scope.currentMinNumber = 55;
                $scope.currentSecNumber = 55;
                $scope.upClicked = function () {
                    if($scope.hr){
                        $scope.clickedClass = true;
                        if($scope.currenHrsNumber === 23){
                            $scope.currenHrsNumber = -1;
                        }
                        $scope.currenHrsNumber ++
                    }
                    else if($scope.min){
                        if($scope.currentMinNumber === 59){
                            $scope.currentMinNumber = -1;
                        }
                        $scope.currentMinNumber ++
                    }
                    else if($scope.sec) {
                        if($scope.currentSecNumber === 59){
                            $scope.currentSecNumber = -1;
                        }
                        $scope.currentSecNumber ++;
                    }
                };

                $scope.downClicked = function () {
                    if($scope.hr){
                        if($scope.currenHrsNumber === 0){
                            $scope.currenHrsNumber = 24;
                        }
                        $scope.currenHrsNumber --;
                    }
                    else if($scope.min){
                        if($scope.currentMinNumber === 0){
                            $scope.currentMinNumber = 60;
                        }
                        $scope.currentMinNumber --;
                    }
                    else if($scope.sec) {
                        if($scope.currentSecNumber === 0){
                            $scope.currentSecNumber = 60;
                        }
                        $scope.currentSecNumber --;
                    }
                };


            }]
        }

    })