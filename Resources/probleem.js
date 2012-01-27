var win2 = Ti.UI.currentWindow;
var labelTitle = Titanium.UI.createLabel({
	text:'Probleem Melden',
	color: '#4c2d4e',
	backgroundColor: '#4fc6dc',
	font:{fontSize:26,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:15,
	left:10
});

var labelItemGebouw = Titanium.UI.createLabel({
	color: '#4fc6dc',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:65,
	left:20
});
var labelItemVerdiep = Titanium.UI.createLabel({
	color: '#4fc6dc',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:65,
	left:100
});
var labelItemLokaal = Titanium.UI.createLabel({
	color: '#4fc6dc',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:65,
	left:185

});

var txtName = Titanium.UI.createTextField({
	top:100,
	left: 20,
	width: 270,
	height: 55,
	hintText : "Benaming probleem",
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	suppressReturn:false
	
});

var txtOmschrijving = Titanium.UI.createTextArea({
	top:160,
	left: 20,
	width: 270,
	height: 120,
	hintText : "Omschrijving probleem",
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	suppressReturn:false
	
});

var txtSchoolNummer = Titanium.UI.createTextField({
	top:280,
	left: 20,
	width: 270,
	height: 55,
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
win2.add(labelTitle);
win2.add(txtName);
win2.add(txtOmschrijving);
win2.add(txtSchoolNummer);

win2.add(labelItemGebouw);
win2.add(labelItemVerdiep);
win2.add(labelItemLokaal);
//variable in label stoppen
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