// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base UI tab and root window
//
var winmain = Titanium.UI.createWindow({  
    title:'Less Rooster Home',
    backgroundColor:'#fff'
});

var labelGebouw = Titanium.UI.createLabel({
	color:'#999',
	text:'Gebouw',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:15,
	left:20
});


var pickerGebouw = Ti.UI.createPicker({
	top:10,
	left:200
});

var dataGebouw = [];
dataGebouw[0]=Ti.UI.createPickerRow({title:'De vest',custom_item:'v'});
dataGebouw[1]=Ti.UI.createPickerRow({title:'De ham',custom_item:'h'});
dataGebouw[2]=Ti.UI.createPickerRow({title:'Kruidtuin',custom_item:'k'});

// turn on the selection indicator (off by default)
pickerGebouw.selectionIndicator = true;

pickerGebouw.add(dataGebouw);


var labelVerdiep = Titanium.UI.createLabel({
	color:'#999',
	text:'Verdiep',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:40,
	left:20
});


var pickerVerdiep = Ti.UI.createPicker({
	top:25,
	left:200
});

var dataVerdiep = [];
dataVerdiep[0]=Ti.UI.createPickerRow({title:'Verdiep 1',custom_item:'v1'});
dataVerdiep[1]=Ti.UI.createPickerRow({title:'Verdiep 2',custom_item:'v2'});
dataVerdiep[2]=Ti.UI.createPickerRow({title:'Verdiep 3',custom_item:'v3'});

// turn on the selection indicator (off by default)
pickerVerdiep.selectionIndicator = true;

pickerVerdiep.add(dataVerdiep);


var labelLokaal = Titanium.UI.createLabel({
	color:'#999',
	text:'Lokaal',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:65,
	left:20
});

var pickerLokaal = Ti.UI.createPicker({
	top:50,
	left:200
});

var dataLokaal = [];
dataLokaal[0]=Ti.UI.createPickerRow({title:'Lokaal 1',custom_item:'l1'});
dataLokaal[1]=Ti.UI.createPickerRow({title:'Lokaal 2',custom_item:'l2'});
dataLokaal[2]=Ti.UI.createPickerRow({title:'Lokaal 3',custom_item:'l3'});

// turn on the selection indicator (off by default)
pickerLokaal.selectionIndicator = true;

pickerLokaal.add(dataLokaal);

pickerGebouw.addEventListener ('change',function()
  {
    labelGebouw.text = pickerGebouw.getSelectedRow(0).title;
    labelItemGebouw.text = pickerGebouw.getSelectedRow(0).title;
    labelGebouw.color = "black";
    winmain.remove(pickerGebouw);
    winmain.add(pickerVerdiep);
    winmain.add(labelVerdiep);
  });
  
pickerVerdiep.addEventListener ('change',function()
  {
  	pickerVerdiep.top = 85;
    winmain.add(pickerVerdiep);
    labelVerdiep.text = pickerVerdiep.getSelectedRow(0).title;    
    labelItemVerdiep.text = pickerVerdiep.getSelectedRow(0).title;
    labelVerdiep.color = "black";
    winmain.remove(pickerVerdiep);
    winmain.add(labelLokaal);
    winmain.add(pickerLokaal);
  });
 
pickerLokaal.addEventListener ('change',function()
  {
  	pickerLokaal.top = 115;
    labelLokaal.text = pickerLokaal.getSelectedRow(0).title;
    labelItemLokaal.text = pickerLokaal.getSelectedRow(0).title;
    labelLokaal.color = "black";
    winmain.remove(pickerLokaal);
    winmain.add(button);
  });
  
winmain.add(labelGebouw);
winmain.add(pickerGebouw);

//lijst binnen halen met problemen op die locatie

var label1_4 = Titanium.UI.createLabel({
	text:'Bestaande Problemen',
	color: 'black',
	backgroundColor: '#999',
	font:{fontSize:21,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:100,
	left:20
});

var nodeTable = Ti.UI.createTableView({
  	height: '80%',
  	width: '80%',
  	align: 'center',
  	top:130
  	
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
        path : node.uri
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


var xhrNode = Titanium.Network.createHTTPClient();
var nodePath;

//item van lijst wordt geselecteerd --> extra info tonen.
nodeTable.addEventListener("click", function(e){
	
	nodePath = e.rowData.path;
	
	// open the client
	xhrNode.open('GET',nodePath);
	
	// send the data
	xhrNode.send();
	

}
);

xhrNode.onload = function()
{
	//Just log the responseText for fun
	Ti.API.info(this.responseText);
	
	//We translate the json string into a neat object
	var response = JSON.parse(this.responseText);
	labelItem.text = response.title;
	//gebouw, verdiep en lokaal
	for (var i in response.field_gebouw) {
		//gebouw
      gebouw = response.field_gebouw[i];
      labelItemGebouw.text = "gebouw: "+gebouw[0].value;
      
      //verdiep
      verdiep = response.field_verdiep[i];
      labelItemVerdiep.text = "verdiep: "+verdiep[0].value;
      
      //lokaal
      lokaal = response.field_lokaal[i];
      labelItemLokaal.text = "lokaal: "+lokaal[0].value;
      
      //variables meesturen
	win2.titleProblem = labelItem.text;
	win2.gebouwProblem = labelItemGebouw.text;
	win2.verdiepProblem = labelItemVerdiep.text;
	win2.lokaalProblem = labelItemLokaal.text;
	//window openen
	win2.open();
    }
    
/*
	//posten naar drupal service:
	var xhrTest = Titanium.Network.createHTTPClient();

	var loginObject = {
		"title" : labelItem.text,
		"type" : "node",
		"body" : {
			"und" : [{
				"value" : "testen posten via titanium",
				"summary" : "",
				"format" : "filtered_html",
				"safe_value" : "<p>Beamer wil niet meer afsluiten.</p>\n",
				"safe_summary" : ""
			}]
		},
		"field_gebouw" : {
			"und" : [{
				"value" : "" + gebouw[0].value + "",
				"format" : null,
				"safe_value" : "De vest"
			}]
		},
		"field_verdiep" : {
			"und" : [{
				"value" : "" + verdiep[0].value + "",
				"format" : null,
				"safe_value" : "3"
			}]
		},
		"field_lokaal" : {
			"und" : [{
				"value" : "" + lokaal[0].value + "",
				"format" : null,
				"safe_value" : "12"
			}]
		}
	}
	var loginString = JSON.stringify(loginObject);
	xhrTest.open('POST', 'http://www.vandenboschan2011.dreamhosters.com/drupal-7.10/api/node');
	// set the content-type header
	xhrTest.setRequestHeader('content-type', 'application/json');

	// send the data
	xhrTest.send(loginString);
	
----- einde posten naar drupal service!----
*/

};
	  
xhrNode.onerror = function () 
{
	Ti.API.info('Unable to fetch nodes from Drupal');
};
var labelItem = Titanium.UI.createLabel({
	color: 'black',
	backgroundColor: 'grey',
	font:{fontSize:21,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:450,
	left:10
});
var labelItemGebouw = Titanium.UI.createLabel({
	color: 'black',
	backgroundColor: 'grey',
	font:{fontSize:21,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:500,
	left:10
});
var labelItemVerdiep = Titanium.UI.createLabel({
	color: 'black',
	backgroundColor: 'grey',
	font:{fontSize:21,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:550,
	left:10
});
var labelItemLokaal = Titanium.UI.createLabel({
	color: 'black',
	backgroundColor: 'grey',
	font:{fontSize:21,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:600,
	left:10

});
winmain.add(labelItem);
winmain.add(labelItemLokaal);
winmain.add(labelItemVerdiep);
winmain.add(labelItemGebouw);


//knop nieuw probleem
var button = Titanium.UI.createButton({
	title:'Nieuw Probleem',
	color: '#A90329',
	top:45,
	right:20
});


button.addEventListener('click',function(e)
{
	//variables meesturen
	win2.titleProblem = labelItem.text;	
	win2.gebouwProblem = labelItemGebouw.text;
	win2.verdiepProblem = labelItemVerdiep.text;
	win2.lokaalProblem = labelItemLokaal.text;
	//window openen
	//window openen
	win2.open();
});

winmain.open();





// create 2nd window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff',
    url:'probleem.js'
});