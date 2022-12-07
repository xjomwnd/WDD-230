fruit = angular.module("fruit", ["ngRoute"]);

fruit.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/fruits/:fruitName', {templateUrl: 'templates/recipe.html', controller: "ShowFruitCtrl"});
  }]);

fruit.factory("Fruit", function() {
  return {
    fruits: [
      {name: "Bananas", description: "Yellow and peely"}, 
      {name: "Canteloupe", description: "Tell if its ripe by smelling them"}, 
      {name: "Cherries", description: "Dont try to make jam out of sweet ones"}, 
      {name: "Strawberries", description: "Picking them is murder on your back"},
      {name: "Tomatoes", description: "People used to think they were poisonous" }
     ],
    getFruit: function(fruitName) { 
      return _.findWhere(this.fruits, {name: fruitName});
    }
  };
});


fruit.controller("FruitCtrl", function($scope, Fruit) {
  $scope.fruits = Fruit.fruits;
});

fruit.controller("ShowFruitCtrl", function($scope, Fruit, $routeParams, $http) {
  $scope.fruit = Fruit.getFruit($routeParams.fruitName);
  $scope.flavours = []
  $http.get("flavours.json").then(function(flavours) { $scope.flavours flavours;} );
});
