var win2 = Ti.UI.currentWindow;


var label3 = Titanium.UI.createLabel({
	color:'black',
	text:'Nieuw Probleem melden',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:5,
	left:10
});

var labelItemGebouw = Titanium.UI.createLabel({
	color: 'black',
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:30,
	left:10
});
var labelItemVerdiep = Titanium.UI.createLabel({
	color: 'black',
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:30,
	left:200
});
var labelItemLokaal = Titanium.UI.createLabel({
	color: 'black',
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
	top:380,
	right:15
});

var buttonVorigeStap = Titanium.UI.createButton({
	title:'Vorige',
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

var name;
var schoolNumber;
var description;

buttonVolgendeStap.addEventListener('click',function(e)
{
	//variables om data naar overzicht en submit te sturen
	
	if (txtName.value != "" && txtSchoolNummer != "" && txtOmschrijving != "")
	{
		name = txtName.value;
		schoolNumber = txtSchoolNummer.value;
		description = txtOmschrijving.value;
	}
	
	//window openen
	win3.open();
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
    backgroundColor:'#fff',
    url:'app.js'
});
var win3 = Titanium.UI.createWindow({  
    title:'Overzicht',
    backgroundColor:'#fff',
    url:'overzicht.js'
});