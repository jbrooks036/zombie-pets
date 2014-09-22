(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Zombie Pets';

    $scope.weapon = {};
    $scope.weapons = [];
    $scope.pet= {health:100};
    $scope.pet= {isZombie:false};
    $scope.pets = [];

    $scope.player1 = null;
    $scope.player2 = null;

    $scope.addWeapon = function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      $('#name').focus();
    };

    $scope.addPet = function(){
      var index = $scope.pet.weapon * 1;
      $scope.pet.weapon = $scope.weapons[index];
      $scope.pets.push($scope.pet);
      $scope.pet= {health:100};
    };

    $scope.setPlayer = function(num){
      $scope['player' + num] = this.p;
    };

    $scope.fight = function(){
      $scope.oneRound($scope.player1, $scope.player2);
      $scope.oneRound($scope.player2, $scope.player1);
    };

    $scope.oneRound = function(attacker, prey){
      debugger;
      var dmg, maxDmg;

      // is the attacker a zombie?
      maxDmg = (attacker.isZombie) ? 3 : prey.weapon.damage;

      // compute and implement the damage to the prey
      dmg = Math.floor(Math.random() * (maxDmg + 1));
      prey.health -= dmg;
      if (prey.health < 0) {
        prey.isZombie = true;
      }
    };

    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };

    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };

  }]);
})();

