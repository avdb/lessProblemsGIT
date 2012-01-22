var winOverzicht = Ti.UI.currentWindow;

var winmain = Titanium.UI.createWindow({  
    title:'Main',
    backgroundColor:'#fff',
    url:'app.js'
});
var win4 = Titanium.UI.createWindow({  
    title:'Einde',
    backgroundColor:'#fff',
    url:'submit.js'
});

var label3 = Titanium.UI.createLabel({
	color:'black',
	text:'Overzicht melding',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:5,
	left:10
});

var label4 = Titanium.UI.createLabel({
	color:'#999',
	text:'Probleem:',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:30,
	left:10
});

var label5 = Titanium.UI.createLabel({
	color:'#999',
	text:'Beschrijving:',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:70,
	left:10
});

var label6 = Titanium.UI.createLabel({
	color:'#999',
	text:'Snummer:',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:180,
	left:10
});

var label7 = Titanium.UI.createLabel({
	color:'#999',
	text:'gebouw:',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:230,
	left:10
});

var label8 = Titanium.UI.createLabel({
	color:'#999',
	text:'verdiep:',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:280,
	left:10
});

var label9 = Titanium.UI.createLabel({
	color:'#999',
	text:'lokaal:',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:330,
	left:10
});


var buttonVolgendeStap = Titanium.UI.createButton({
	title:'Bevestigen',
	top:380,
	right:15
});

var buttonVorigeStap = Titanium.UI.createButton({
	title:'Annuleren',
	top:380,
	left:15
});

winOverzicht.add(buttonVolgendeStap);
winOverzicht.add(buttonVorigeStap);
winOverzicht.add(label3);
winOverzicht.add(label4);
winOverzicht.add(label5);
winOverzicht.add(label6);
winOverzicht.add(label7);
winOverzicht.add(label8);
winOverzicht.add(label9);

label4.text = "Probleem: " +winOverzicht.name;
label5.text = "beschrijving: " + winOverzicht.description; 
label6.text = "Snummer: "+winOverzicht.schoolNumber;
label7.text = winOverzicht.gebouwProblem;
label8.text = winOverzicht.verdiepProblem;
label9.text = winOverzicht.lokaalProblem;


buttonVolgendeStap.addEventListener('click',function(e)
{
	//window openen
	win4.open();
	winOverzicht.close();
});

buttonVorigeStap.addEventListener('click',function(e)
{
	//window openen
	winmain.open();
	winOverzicht.close();
});