var winOverzicht = Ti.UI.currentWindow;

var win3 = Titanium.UI.createWindow({  
    title:'Probleem',
    backgroundColor:'#fff',
    url:'probleem.js'
});
var win4 = Titanium.UI.createWindow({  
    title:'Einde',
    backgroundColor:'#fff',
    url:'submit.js'
});

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'Jou probleem:',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:10,
	left:10
});

var label4 = Titanium.UI.createLabel({
	color:'#999',
	text:'Je naam: ',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:60,
	left:10
});

var label5 = Titanium.UI.createLabel({
	color:'#999',
	text:'Je schoolnr: ',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:110,
	left:10
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

winOverzicht.add(buttonVolgendeStap);
winOverzicht.add(buttonVorigeStap);
winOverzicht.add(label3);
winOverzicht.add(label4);
winOverzicht.add(label5);


buttonVolgendeStap.addEventListener('click',function(e)
{
	//window openen
	win4.open();
	winOverzicht.close();
});

buttonVorigeStap.addEventListener('click',function(e)
{
	//window openen
	win3.open();
	winOverzicht.close();
});