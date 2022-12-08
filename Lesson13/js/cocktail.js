(function() {
    var app = angular.module('todoapp', []);
  
    app.controller('todocontroller', function($scope) {
      
      $scope.mainTitle = 'Make Me a Cocktail';
      $scope.backgroundColor = '#cce5cc';
      $scope.showMethod = false;
      
      $scope.cocktails =[
         
        {
          text: "Tom Collins;",
          ingredients:["60 ml Gin","25 ml lemon juice","15 ml sugar syrup"," Topped with soda water"], 
          method:"Build in a Collins glass over cubed ice and finish with a lemon wedge garnish"
         
        },
        {
          text: "Martini;",
          ingredients:["60 ml Gin","10 ml sweet/dry vermouth"], 
          method:"Stir and fine strain into a Martini Glass. Garnish of morello cherry or olive optional."
          
        },
        {
          text: "Clover Club;",
          ingredients:["37.5 ml Gin", "muddled raspberrys","1 egg white", "12.5 ml raspberry syrup", "25 ml lemon juice" ], 
          method:"Shake and fine strain the beverage into a Martini or Coupe glass and finish with a Raspberry garnish"
        },
        
        {
          text:"Gizmaloma;",
          method:"Build in Collins glass over cubed ice. Garnish with a photo of Giz",
          ingredients:[
            "50 ml Gin",
            "12.5 ml Lime Juice",
            "Topped with Ting"
          ]
        },
        
        {
          text:"Moscow Mule;",
          ingredients:[
            "50 ml Vodka", 
            "25 ml lime juice",
            "2 dashes of Angostora Bitters", 
  "topped with Ginger Beer"
          ],
          method:"Build in a Collins glass, served over cubed ice with a lime wedge garnish"
        },
        {
        text:"White Russian;",
          ingredients:[
            "25 ml Vodka",
            "25 ml Kahlua",
            "topped with milk and/or cream"
          ],
          method:"Build and layer the drink starting with the Kahlua and serve in a Rocks glass over cubed ice."
        },
        
        {
          text:"Harvey Wallbanger;",
          ingredients:[
            "37.5 ml Vodka",
            "12.5 ml Galliano",
            "70 ml Orange Juice"
          ],
          method:"Stir, serve in a Collins glass over ice cubed and garnish with an orange wedge"
        },
         
        {
        text:"Paloma;",
          ingredients:[
            "50 ml Tequila",
            "15 ml Lime Juice",
            "Topped with Ting"
          ]
        },
        {
          text:"Margarita;",
          ingredients:[
            "37.5 ml Tequila",
            "12.5 ml Triple Sec",
            "25 ml Lime Juice",
            "12.5 ml Sugar Syrup"
          ],
          method:"Shake and fine strain into a Martini glass. Salted rim is optional."
        },
        {
          text:"Tequila Sunrise;",
          method:"Build in a Collins glass over cubed ice. Sink Grenadine through drink and garnish with an orange wheel",
          ingredients:[
            "50 ml Tequila",
            "Topped with Orange Juice",
            "5 ml Grenadine Sink"
          ]
        },
        {
          text:"Daiquiri;",
          method:"Shake and fine strain into a Martini glass",
          ingredients:[
            "50 ml Rum",
            "25 ml Lime Juice",
            "12.5 ml Sugar Syrup"          
          ]
        },
        {
          text:"Mojito;",
          method:"Build in a Collins glass starting with the mint. Fill with crushed ice and garnish with a lime wedge",
          ingredients:[
            "50 ml White Rum",
            "8-10 Mint leaves",
            "25 ml Lime Juice",
            "12.5 ml Sugar Syrup"
          ]
        },
        {
          text:"Ting Wray;",
          method:"Build in a Collins glass over cubed ice. Garnish with a lime wedge",
          ingredients:[
            "50 ml Wray and Nephew Over Proof Rum",
            "Topped with Ting"
          ]
        },
        {
          text:"Pina Colada;",
        method:"If you like Pina Colada, then you simpley shake and strain... into a Collins glass or Hurricane over crushed ice and garnish with an umbrella",
        ingredients:[
          "25 ml Malibu",
          "25 ml White Rum",
          "70 ml Pineapple Juice",
          "10 ml Coconut Syrup",
          "25 ml Cream and/or Milk"
        ]
        },
        {
          text:"Whiskey Sour;",
          method:"Shake and strain into a Rocks glass over cubed ice. Garnish with a lemon wedge",
          ingredients:[
            "50 ml Whiskey",
            "25 ml Lemon Juice",
            "12.5 ml Sugar Syrup",
            "1 Egg White"
          ]
        },
        
        {
          text:"Old Fashioned;",
          method:"Stir over cubed ice and serve in a Rocks glass over cubed ice. Rim and garnish glass with orange peel.",
          ingredients:[
            "50 ml Whiskey",
            "Orange peel",
            "2 dash Angostora Bitters",
            "2 dash Orange Bitters",
            "5 ml Sugar Syrup"
          ]
        },
        {
          text:"Rusty Nail;",
          method:"Stir and strain into a Rocks glass over cubed ice. Rim and garnish with orange peel",
          ingredients:[
            "25 ml Whiskey",
            "25 ml Drambuie",
            "5 ml Sugar Syrup",
            "Orange peel"
          ]
     
        },
        {
          text:"Jaeger Bomb;",
          method:"Place shot glass in rocks glass and shoot it",
          ingredients:[
            "25ml Jaeger",
            "Half a can of Red Bull or Energy Drink"
          ]
        },
        {
          text:"Mai Tai;",
          method:"Shake and strain into a Rocks glass, over crushed ice. Garnish with an orange wedge and cherry",
          ingredients:[
            "20 ml Appleton VX Rum",
            "20 ml Appleton White Rum",
            "10 ml Wray and Nephew Over Proof Rum",
            "12.5 ml Dry Curacao",
            "20 ml Lime Juice",
            "15 ml Orgeat"
          ]
        },
        {
          text:"Elderflower Collins",
          method:"Build in a Collins glass over cubed ice and garnish with a lemon wedge.",
          ingredients:[
            "50 ml Gin",
            "25 ml Lemon Juice",
            "15 ml Elderflower Cordial",
            "Topped with soda water"
          ]
        },
        {
        text:"Brandy Alexander or The Panama;",
        Method:"Shake and fine strain into a Martini glass. ",
          ingredients:[
            "50 ml Cognac or Brandy",
            "12.5 ml Dark Creme de Cacao Liquer",
            "12.5 ml White Creme de Cacao",
            "12.5 ml Double Cream",
            "12.5 ml  Milk"
            
          ],
        },
        {
          text:"Brandy Buck",
          method:"Shake and strain into a Collins glass over cubed ice and top with Ginger Ale",
          ingredients:[
            "60 ml Cognac or Brandy",
            "20 ml Grand Marnier",
            "20 ml Lemon Juice",
            "Top with Ginger Ale"
            
          ],
        },
        {
          text:"Brandy Flip",
          method:"Shake and strain into a Wine glass",
          ingredients:[
            "50 ml Cognac or Brandy",
            "12.5 ml Sugar Syrup",
            "1 Egg"
          ]
          
        },
        
        
      ];
      
    }); // End Controller
  
  })();