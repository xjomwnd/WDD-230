window.onload = () =>  {
	
	function ask() {
	let query = $("#input").val();
	fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`)
		.then(res => res.json())
		.then((out) => {
		   //console.log(out)

	 results = "<li>" +  "<p>" +  out.drinks[0].strDrink +   "</p>" + "<img src='" + out.drinks[0].strDrinkThumb + 
	"'>"+ "</li>";
		
	for(i in out.drinks) {
		if( i != 0) {
				 results += "<li>" +  "<p>" + out.drinks[i].strDrink + "</p>" + "<img src='" + out.drinks[i].strDrinkThumb + 
	"'>"+ "</li>";
				
		}
	}
		
		 document.getElementById("output").innerHTML = results;
		
		
	})
	}
	
document.getElementById('submit').addEventListener('click', function() { 
	 ask()	
	})
}
	
