// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base UI tab and root window
//
var winmain = Titanium.UI.createWindow({  
    title:'Less Rooster Home',
    backgroundColor:'#fff'
});

var labelPlaats = Titanium.UI.createLabel({
	color:'#999',
	text:'Plaats',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:15,
	left:20
});


var picker1_1 = Ti.UI.createPicker({
	top:10,
	left:200
});

var data1_1 = [];
data1_1[0]=Ti.UI.createPickerRow({title:'De vest',custom_item:'v'});
data1_1[1]=Ti.UI.createPickerRow({title:'De ham',custom_item:'h'});
data1_1[2]=Ti.UI.createPickerRow({title:'Kruidtuin',custom_item:'k'});

// turn on the selection indicator (off by default)
picker1_1.selectionIndicator = true;

picker1_1.add(data1_1);

picker1_1.setSelectedRow(0,0,true);

var labelGebouw = Titanium.UI.createLabel({
	color:'#999',
	text:'Gebouw',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:85,
	left:20
});


var picker1_2 = Ti.UI.createPicker({
	top:80,
	left:200
});

var data1_2 = [];
data1_2[0]=Ti.UI.createPickerRow({title:'Verdiep 1',custom_item:'v1'});
data1_2[1]=Ti.UI.createPickerRow({title:'Verdiep 2',custom_item:'v2'});
data1_2[2]=Ti.UI.createPickerRow({title:'Verdiep 3',custom_item:'v3'});

// turn on the selection indicator (off by default)
picker1_2.selectionIndicator = true;

picker1_2.add(data1_2);

picker1_2.setSelectedRow(0,0,true);


var labelVerdiep = Titanium.UI.createLabel({
	color:'#999',
	text:'Verdiep',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:155,
	left:20
});

var picker1_3 = Ti.UI.createPicker({
	top:150,
	left:200
});

var data1_3 = [];
data1_3[0]=Ti.UI.createPickerRow({title:'Lokaal 1',custom_item:'l1'});
data1_3[1]=Ti.UI.createPickerRow({title:'Lokaal 2',custom_item:'l2'});
data1_3[2]=Ti.UI.createPickerRow({title:'Lokaal 3',custom_item:'l3'});

// turn on the selection indicator (off by default)
picker1_3.selectionIndicator = true;

picker1_3.add(data1_3);

picker1_3.setSelectedRow(0,0,true);


winmain.add(labelPlaats);
winmain.add(picker1_1);
winmain.add(labelGebouw);
winmain.add(picker1_2);
winmain.add(labelVerdiep);
winmain.add(picker1_3);


//lijst binnen halen met problemen op die locatie

var label1_4 = Titanium.UI.createLabel({
	text:'Bestaande Problemen',
	color: 'black',
	backgroundColor: 'grey',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:235,
	left:20
});

var nodeTable = Ti.UI.createTableView({
  	height: '80%',
  	width: '80%',
  	align: 'center',
  	top:270
  	
});

winmain.add(label1_4);
winmain.add(nodeTable);


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

//knop nieuw probleem
var button = Titanium.UI.createButton({
	title:'Nieuw Probleem',
	color: '#A90329',
	align: 'center',
	top:650,
});


button.addEventListener('click',function(e)
{
	Ti.API.info('open window');
	//window openen
	winmain.close();
	win2.open();
});


winmain.add(button);


winmain.open();


//
// create 2nd window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff',
    url:'probleem.js'
});