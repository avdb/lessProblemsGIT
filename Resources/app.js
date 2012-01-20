// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1_1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Plaats',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:10,
	left:20
});

var label1_2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Gebouw',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:60,
	left:20
});

var label1_3 = Titanium.UI.createLabel({
	color:'#999',
	text:'Verdiep',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:110,
	left:20
});

var picker1_1 = Ti.UI.createPicker({
	top:10,
	left:100
});

var data1_1 = [];
data1_1[0]=Ti.UI.createPickerRow({title:'De vest',custom_item:'v'});
data1_1[1]=Ti.UI.createPickerRow({title:'De ham',custom_item:'h'});
data1_1[2]=Ti.UI.createPickerRow({title:'Kruidtuin',custom_item:'k'});

// turn on the selection indicator (off by default)
picker1_1.selectionIndicator = true;

picker1_1.add(data1_1);

picker1_1.setSelectedRow(0,0,true);

var visible=false;
picker1_1.addEventListener('change',function(e)
{
	if (visible)
	{
		picker1_2.hide();
		label1_2.hide();
		visible=false;
	}
	else
	{
		picker1_2.show();
		label1_2.show();
		visible=true;
	}
});


var picker1_2 = Ti.UI.createPicker({
	top:60,
	left:100,
	visible:false
});

var data1_2 = [];
data1_2[0]=Ti.UI.createPickerRow({title:'Verdiep 1',custom_item:'v1'});
data1_2[1]=Ti.UI.createPickerRow({title:'Verdiep 2',custom_item:'v2'});
data1_2[2]=Ti.UI.createPickerRow({title:'Verdiep 3',custom_item:'v3'});

// turn on the selection indicator (off by default)
picker1_2.selectionIndicator = true;

picker1_2.add(data1_2);

picker1_2.setSelectedRow(0,0,true);

var visible2=false;
picker1_2.addEventListener('change',function(e)
{
	if (visible2)
	{
		picker1_3.hide();
		label1_3.hide();
		visible=false;
	}
	else
	{
		picker1_3.show();
		label1_3.show();
		visible=true;
	}
});



var picker1_3 = Ti.UI.createPicker({
	top:110,
	left:100
});

var data1_3 = [];
data1_3[0]=Ti.UI.createPickerRow({title:'Lokaal 1',custom_item:'l1'});
data1_3[1]=Ti.UI.createPickerRow({title:'Lokaal 2',custom_item:'l2'});
data1_3[2]=Ti.UI.createPickerRow({title:'Lokaal 3',custom_item:'l3'});

// turn on the selection indicator (off by default)
picker1_3.selectionIndicator = true;

picker1_3.add(data1_3);

picker1_3.setSelectedRow(0,0,true);


win1.add(label1_1);
win1.add(label1_2);
win1.add(label1_3);
win1.add(picker1_1);
win1.add(picker1_2);
win1.add(picker1_3);


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});


var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var nodeTable = Ti.UI.createTableView({
  height: '100%',
  width: '100%',
});

win2.add(label2);
win2.add(nodeTable);


var xhr = Titanium.Network.createHTTPClient();

var nodes = [];

  xhr.onload = function()
  {
    //Just log the responseText for fun
    Ti.API.info(this.responseText);
    
    //We translate the json string into a neat object
    var response = JSON.parse(this.responseText);
 
    for (var i in response) {
      node = response[i];
      var row = Ti.UI.createTableViewRow({
        title : node.title,
      });
      nodes.push(row);
    }
    nodeTable.data = nodes; 
  };
  
  xhr.onerror = function () 
  {
    Ti.API.info('Unable to fetch nodes from Drupal');
    nodeTable.data = nodes; 
  };
// open the client
xhr.open('GET','http://www.vandenboschan2011.dreamhosters.com/drupal-7.10/api/node');

// send the data
xhr.send();




//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
