var win2 = Ti.UI.currentWindow;

var view1 = Ti.UI.createView({
	left:10,
	height:50,
	width:100
});
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


var buttonTestView = Titanium.UI.createButton({
	title:'Volgende stap',
	top:10,
	right:10
});

var button2 = Titanium.UI.createButton({
	title:'Nog volgendere stap',
	top:10,
	left:10
});

view1.add(buttonTestView);
view2.add(label3);
view2.add(button2);
win2.add(view1);
win2.add(view2);

buttonTestView.addEventListener('click',function(e)
{
	//window openen
	view1.hide();
	view2.show();
});

button2.addEventListener('click',function(e)
{
	//window openen
	view2.hide();
	view1.show();
});
