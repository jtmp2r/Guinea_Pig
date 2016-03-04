// When any section is clicked the output target text should be 
// "You clicked on the {text of the section} section"

var outPut = document.getElementById("output-target");

var articleEl = document.getElementsByClassName("article-section");	

articleEl[0].style.fontWeight = "bold";
articleEl[5].style.fontWeight = "bold";
articleEl[5].style.fontStyle = "italic";

for (var i = 0; i < articleEl.length; i++) {
	articleEl[i].addEventListener("click", function() {
		outPut.innerHTML = "You clicked on the " + event.target.innerHTML + " section.";	
	});
};

// When the mouse is over the h1 tag, the output element should contain the text
// "You moved your mouse over the header".

var tagName = document.getElementsByTagName("h1")
for (var t = 0; t < tagName.length; t++) {
	tagName[t].addEventListener("mouseover", function() {
			outPut.innerHTML = "You moved your mouse over the header";
	});
};

for (var t = 0; t < tagName.length; t++) {
	tagName[t].addEventListener("mouseout", function() {
			outPut.innerHTML = "You left me!!";
	});
};

// When you type characters into the input field, 
// the output element should mirror the text in the input field.

document.getElementById("keypress-input").addEventListener("keyup", function(edit) { 
	outPut.innerHTML = edit.target.value;
});

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.

document.getElementById("add-color").addEventListener("click", function() {
  document.getElementById("guinea-pig").style.color = "blue";
});


// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
 document.getElementById("make-large").addEventListener("click", function() {
 	document.getElementById("guinea-pig").style.fontSize = "390%";
 	document.getElementById("guinea-pig").style.color = "green";
 });
 
 // When you click the "Capture it" button, the guinea-pig element should have a border added to it.
 document.getElementById("add-border").addEventListener("click", function() {
 	document.getElementById("guinea-pig").style.border = "5px solid red";
 });
 
 // When you click the "Rounded" button, the guinea-pig element's border should become rounded.
 document.getElementById("add-rounding").addEventListener("click", function() {
 	document.getElementById("guinea-pig").style.border = "thick solid aqua";
 	document.getElementById("guinea-pig").style.borderRadius = "25px";
});


