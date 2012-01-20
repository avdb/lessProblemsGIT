var win = Ti.UI.currentWindow;

var view2 = Ti.UI.createView({
	left:40,
	height:200,
	width:400,
	backgroundColor:'#212121',
	visible:false
});

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'PROBLEEM',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var button2 = Titanium.UI.createButton({
	title:'Vorige stap',
	top:10,
	left:10
});

button2.addEventListener('click',function(e)
{
	//window openen
	view2.hide();
	win.view1.show();
});

view2.add(label3);
view2.add(button2);
win.add(view2);