var win2 = Ti.UI.currentWindow;


var label3 = Titanium.UI.createLabel({
	color:'#fff',
	text:'Probleem melden',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:5,
	left:10
});

var labelItemGebouw = Titanium.UI.createLabel({
	color: '#4fc6dc',
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:30,
	left:10
});
var labelItemVerdiep = Titanium.UI.createLabel({
	color: '#4fc6dc',
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:30,
	left:200
});
var labelItemLokaal = Titanium.UI.createLabel({
	color: '#4fc6dc',
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:50,
	left:10

});

var txtName = Titanium.UI.createTextField({
	top:80,
	left: 20,
	width: 285,
	height: 40,
	hintText : "Benaming probleem",
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	suppressReturn:false
	
});

var txtOmschrijving = Titanium.UI.createTextArea({
	top:120,
	left: 20,
	width: 285,
	height: 120,
	hintText : "Omschrijving probleem",
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	suppressReturn:false
	
});

var txtSchoolNummer = Titanium.UI.createTextField({
	top:240,
	left: 20,
	width: 285,
	height: 40,
	hintText : "Studenten nummer",
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	suppressReturn:false
	
});



var buttonVolgendeStap = Titanium.UI.createButton({
	title:'Volgende',
	color: '#4c2d4e',
	top:380,
	right:15
});

var buttonVorigeStap = Titanium.UI.createButton({
	title:'Vorige',
	color: '#4c2d4e',
	top:380,
	left:15
});

win2.add(buttonVolgendeStap);
win2.add(buttonVorigeStap);
win2.add(label3);
win2.add(txtName);
win2.add(txtOmschrijving);
win2.add(txtSchoolNummer);

var labelTitle = Titanium.UI.createLabel({
	color:'black',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:450,
	left:10
});
win2.add(labelTitle);
win2.add(labelItemGebouw);
win2.add(labelItemVerdiep);
win2.add(labelItemLokaal);
//variable in label stoppen
labelTitle.text = win2.titleProblem;
labelItemGebouw.text = win2.gebouwProblem;
labelItemVerdiep.text = win2.verdiepProblem;
labelItemLokaal.text = win2.lokaalProblem;
txtName.value = win2.titleProblem;
txtOmschrijving.value = win2.omschrijvingProblem;
txtSchoolNummer.value = win2.sNummerProbleem;

	var name;
	var schoolNumber;
    var description; 
 	var gebouwProblem;
 	var verdiepProblem;
 	var lokaalProblem;
 	var omschrijvingProblem;
 	
buttonVolgendeStap.addEventListener('click',function(e)
{
	//variables om data naar overzicht en submit te sturen
	
	if (txtName.value != "" && txtSchoolNummer != "" && txtOmschrijving != "")
	{
		winOverzicht.name = txtName.value;
		winOverzicht.schoolNumber = txtSchoolNummer.value;
		winOverzicht.description = txtOmschrijving.value;
 		winOverzicht.gebouwProblem = win2.gebouwProblem;
 		winOverzicht.verdiepProblem = win2.verdiepProblem;
 		winOverzicht.lokaalProblem = win2.lokaalProblem;
 		winOverzicht.idNode = win2.idNode;
	}
	
	//window openen
	winOverzicht.open();
	win2.close();
});

buttonVorigeStap.addEventListener('click',function(e)
{
	//window openen
	winmain.open();
	win2.close();
});
var winmain = Titanium.UI.createWindow({  
    title:'Main',
    backgroundColor:'#393838',
    url:'app.js'
});
var winOverzicht= Titanium.UI.createWindow({  
    title:'Overzicht',
    backgroundColor:'#393838',
    url:'overzicht.js'
});