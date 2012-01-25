var win2 = Ti.UI.currentWindow;

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'De melding is verzonden en zal zo spoedig mogelijk behandeld worden. Hartelijk dank voor uw medewerking',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:100,
	left:40
});



var buttonVorigeStap = Titanium.UI.createButton({
	title:'Home',
	top:380,
	left:55
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
    title:'Home',
    backgroundColor:'#fff',
    url:'app.js'
});


