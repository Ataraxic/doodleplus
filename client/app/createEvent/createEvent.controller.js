'use strict';

angular.module('doodleplusApp')
  .controller('CreateEventCtrl', function ($scope, storeEvent, time) {
    $scope.message = function(){
      console.log('hi');
    }

    var ceCtrl = this;

    $scope.invitedEmails = [];
    $scope.eventOptions = {};
    $scope.userOptions = {};
    $scope.timeOptions = [{
      label: '15 Minutes',
      timeIncrement: 900000
    },{
      label: '30 Minutes',
      timeIncrement: 1800000
    },{
      label: '1 Hour',
      timeIncrement: 3600000
    },{
      label: '1 Day',
      timeIncrement: 86400000
    }];
    $scope.date = {};
    $scope.dateToggle = {value: true};
    $scope.dayTimes = [];

    $scope.timeOptions.times = [];

    $scope.toggleDate = function()
    {
      $scope.dateToggle.value = !$scope.dateToggle.value;
    }

    $scope.dayView = function()
    {
      var increment = $scope.selected ? $scope.selected.timeIncrement : 900000;
      var currentTime = $scope.date.value.getTime();
      var today = currentTime;

      $scope.dayTimes = [];

      while(currentTime < today + 86400000)
      {
        $scope.dayTimes.push(new Date(currentTime));
        currentTime += increment;
      }
      
      $scope.toggleDate();
    }


    $scope.genTimes =function(){
      $scope.times = time.genTime(1422898264,$scope.selected.timeIncrement);
      storeEvent.save({
        event: $scope.eventOptions,
        user: $scope.userOptions,
        time: $scope.times
      }, function(res){
        console.log("response",res);
      });
    };

    // $scope.storeEvent = function()
    // {
    //   storeEvent.save({
    //       event: $scope.eventOptions,
    //       user: $scope.userOptions,
    //       time: $scope.date
    //     }, function(something) {
    //       console.log(something);
    //     });
    // };

    $scope.addEmail = function(){
      if ($scope.emailToAdd){
        $scope.invitedEmails.push($scope.emailToAdd);
      }
    }
  });
