

function displayMessage() {
	var title = "Vibe Check Delivery"
	// get the values of the input fields
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;

	// get the values of the selected checkboxes
	var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
	var selected = [];
	for (var i = 0; i < checkboxes.length; i++) {
		selected.push(checkboxes[i].value);
	}

	// get the value of the selected option in the dropdown menu
	var dropdown = document.getElementById("dropdown");
	var selectedOption = dropdown.options[dropdown.selectedIndex].value;

	// create an array of names
	var names = ["Smellward", "Poopington", "Fartsman", "Cheesewick", "McLoser", "Hoobitoob", "Cramsworth", "Plooperbum", "Frimblebim", "Feebrizz", "Skibblecheeks", "Crotchworth", "Dummy Dum Dum", "Pooperpants", "Butts", "Peachfuzz", "Diapy", "Noober", "Dingus", "Brickhead", "Garbo", "Crungo", "Gabnon", "Jackanapes", "Wretch", "Peasant"];

	// randomly select two names from the array
	var randomIndex1 = Math.floor(Math.random() * names.length);
	var randomIndex2 = Math.floor(Math.random() * names.length);
	while (randomIndex1 === randomIndex2) {
		randomIndex2 = Math.floor(Math.random() * names.length);
	}
	var randomName1 = names[randomIndex1];
	var randomName2 = names[randomIndex2];

	// construct the message
	var message = "<br><br>Hey " + firstname + " " + lastname + "! Here's a message to cheer you up! You are a(n) " + selected.join(", ") + " little jerk, and " + selectedOption + ". <br><br>You have lost the right to use the name " + firstname + " " + lastname + ", you nerd. You will be henceforth known as " + randomName1 + " " + randomName2 + ". May shame follow your family for 1000 years.";

	var popup = window.open("", "Popup", "width=400,height=800");
	// popup.document.write(title + "\n\n" + message);
	popup.document.write("<html><head>" + title + "</head><body>" + message + "<br><br><img src='catdance.gif'></body></html>");
	function playAudio() {
		var audio = document.getElementById("meme");
		audio.play();
	  }
}