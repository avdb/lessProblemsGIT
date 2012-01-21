var win2 = Ti.UI.currentWindow;

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'Je probleem is gesubmit. Wij zullen dit verder afhandelen.',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:10,
	left:10
});



var buttonVorigeStap = Titanium.UI.createButton({
	title:'Vorige',
	top:380,
	left:15
});

win2.add(buttonVorigeStap);
win2.add(label3);

buttonVorigeStap.addEventListener('click',function(e)
{
	//window openen
	win3.open();
	win2.close();
});

var win3 = Titanium.UI.createWindow({  
    title:'Overzicht',
    backgroundColor:'#fff',
    url:'overzicht.js'
});