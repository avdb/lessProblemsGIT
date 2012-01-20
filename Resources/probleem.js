var win2 = Ti.UI.currentWindow;

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'Nieuw Probleem melden',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:10,
	left:10
});

var txtName = Titanium.UI.createTextField({
	top:40,
	left: 20,
	width: 285,
	height: 40,
	hintText : "Benaming probleem",
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	suppressReturn:false
	
});

var txtOmschrijving = Titanium.UI.createTextArea({
	top:85,
	left: 20,
	width: 285,
	height: 120,
	hintText : "Omschrijving probleem",
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	suppressReturn:false
	
});

var txtSchoolNummer = Titanium.UI.createTextField({
	top:130,
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

buttonVolgendeStap.addEventListener('click',function(e)
{
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
