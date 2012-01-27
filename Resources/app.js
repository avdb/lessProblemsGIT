// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base UI tab and root window
//
var winmain = Titanium.UI.createWindow({  
    title:'Less Rooster Home',
    backgroundColor:'#393838'
});

var labelTitle = Titanium.UI.createLabel({
	text:'Locatie',
	color: '#4c2d4e',
	backgroundColor: '#4fc6dc',
	font:{fontSize:26,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:15,
	left:10
});

var labelGebouw = Titanium.UI.createLabel({
	color:'#fff',
	text:'Gebouw',
	font:{fontSize:22,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:50,
	left:20
});


var pickerGebouw = Ti.UI.createPicker({
	top:25,
	left:250
});

var dataGebouw = [];
dataGebouw[0]=Ti.UI.createPickerRow({title:'Gebouw',custom_item:'g'});
dataGebouw[1]=Ti.UI.createPickerRow({title:'De vest',custom_item:'v'});
dataGebouw[2]=Ti.UI.createPickerRow({title:'De ham',custom_item:'h'});
dataGebouw[3]=Ti.UI.createPickerRow({title:'Kruidtuin',custom_item:'k'});

// turn on the selection indicator (off by default)
pickerGebouw.add(dataGebouw);

var labelVerdiep = Titanium.UI.createLabel({
	color:'#fff',
	text:'Verdiep',
	font:{fontSize:22,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:75,
	left:20
});


var pickerVerdiep = Ti.UI.createPicker({
	top:25,
	left:250
});

var dataVerdiep = [];

dataVerdiep[0]=Ti.UI.createPickerRow({title:'Verdiep',custom_item:'0'});
dataVerdiep[1]=Ti.UI.createPickerRow({title:'Verdiep 1',custom_item:'Verdiep 1'});
dataVerdiep[2]=Ti.UI.createPickerRow({title:'Verdiep 2',custom_item:'Verdiep 2'});
dataVerdiep[3]=Ti.UI.createPickerRow({title:'Verdiep 3',custom_item:'Verdiep 3'});

// turn on the selection indicator (off by default)
pickerVerdiep.selectionIndicator = true;
pickerVerdiep.add(dataVerdiep);


var labelLokaal = Titanium.UI.createLabel({
	color:'#fff',
	text:'Lokaal',
	font:{fontSize:22,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:100,
	left:20
});

var pickerLokaal = Ti.UI.createPicker({
	top:25,
	left:250
});

var dataLokaal = [];
dataLokaal[0]=Ti.UI.createPickerRow({title:'Lokaal',custom_item:'0'});
dataLokaal[1]=Ti.UI.createPickerRow({title:'Lokaal 1',custom_item:'Lokaal 1'});
dataLokaal[2]=Ti.UI.createPickerRow({title:'Lokaal 2',custom_item:'Lokaal 2'});
dataLokaal[3]=Ti.UI.createPickerRow({title:'Lokaal 3',custom_item:'Lokaal 3'});
dataLokaal[4]=Ti.UI.createPickerRow({title:'Lokaal 4',custom_item:'Lokaal 4'});
dataLokaal[5]=Ti.UI.createPickerRow({title:'Lokaal 5',custom_item:'Lokaal 5'});
dataLokaal[6]=Ti.UI.createPickerRow({title:'Lokaal 6',custom_item:'Lokaal 6'});
dataLokaal[7]=Ti.UI.createPickerRow({title:'Lokaal 7',custom_item:'Lokaal 7'});
dataLokaal[8]=Ti.UI.createPickerRow({title:'Lokaal 8',custom_item:'Lokaal 8'});
dataLokaal[9]=Ti.UI.createPickerRow({title:'Lokaal 9',custom_item:'Lokaal 9'});
dataLokaal[10]=Ti.UI.createPickerRow({title:'Lokaal 10',custom_item:'Lokaal 10'});

// turn on the selection indicator (off by default)
pickerLokaal.selectionIndicator = true;
pickerLokaal.add(dataLokaal);


pickerGebouw.addEventListener ('change',function()
  {
    labelGebouw.text = pickerGebouw.getSelectedRow(0).title;
    labelGebouw.color = '#4fc6dc';
    winmain.remove(pickerGebouw);
    winmain.add(pickerVerdiep);
    winmain.add(labelVerdiep);

    
    //lijst sorteren op gebouw
    // send the data
	xhrGebouw.send();
  });
  
pickerVerdiep.addEventListener ('change',function()
  {
    winmain.add(pickerVerdiep);
    labelVerdiep.text = pickerVerdiep.getSelectedRow(0).custom_item;
    labelVerdiep.color = '#4fc6dc';
    winmain.remove(pickerVerdiep);
    winmain.add(labelLokaal);
    winmain.add(pickerLokaal);
    
    //lijst sorteren op verdiep
    // send the data
	xhrVerdiep.send();
  });
 
pickerLokaal.addEventListener ('change',function()
  {
    labelLokaal.text = pickerLokaal.getSelectedRow(0).custom_item;    
    labelLokaal.color = '#4fc6dc';
    winmain.remove(pickerLokaal);
    
    winmain.add(button);
    //lijst sorteren op lokaal
    // send the data
	xhrLokaal.send();
  });
winmain.add(labelTitle);
winmain.add(labelGebouw);
winmain.add(pickerGebouw);

//lijst binnen halen met problemen op die locatie

var label1_4 = Titanium.UI.createLabel({
	text:'Bestaande Problemen',
	color: '#4c2d4e',
	backgroundColor: '#4fc6dc',
	font:{fontSize:26,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:150,
	left:10
});

var nodeTable = Ti.UI.createTableView({
	color: '#fff',
  	height: '70%',
  	width: '80%',
  	align: 'center',
  	top:180
  	
});

winmain.add(label1_4);
winmain.add(nodeTable);



var xhrNode = Titanium.Network.createHTTPClient();
var nodePath;

//item van lijst wordt geselecteerd --> extra info tonen.
nodeTable.addEventListener("click", function(e){
	win2.titleProblem = e.rowData.title;  
 	win2.gebouwProblem = e.rowData.gebouw;
 	win2.verdiepProblem = e.rowData.verdiep;
 	win2.lokaalProblem = e.rowData.lokaal;
 	win2.omschrijvingProblem = e.rowData.omschrijving;
 	win2.sNummerProbleem = e.rowData.snummer;
 	win2.idNode = e.rowData.path;
	win2.open();
});



//knop nieuw probleem
var button = Titanium.UI.createButton({
	title:'Nieuwe melding',
	color: '#4c2d4e',
	align: 'center',
	top:10,
	left:220
});


button.addEventListener('click',function(e)
{
	//variables meesturen
 	win2.gebouwProblem = labelGebouw.text;
 	win2.verdiepProblem = labelVerdiep.text;
 	win2.lokaalProblem = labelLokaal.text;
	//window openen
	win2.open();
});

winmain.open();



// create 2nd window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#393838',
    url:'probleem.js'
});



// alle HTTPClients:

//					alle nodes binnen halen
//-------------------------------------------------------
var xhrAlleNodes = Titanium.Network.createHTTPClient();

var alleNodes = [];
var rowNode;
var gebouw;
var verdiep;
var lokaal;

xhrAlleNodes.onload = function()
  {
    //We translate the json string into a neat object
    var response = JSON.parse(this.responseText);
 
    for (var i in response) {
      node = response[i];
      
      //aparte HTTPClient voor de juiste gegevens
      var xhrNode = Titanium.Network.createHTTPClient();
      // open the client
      xhrNode.open('GET',node.uri);
      
      // send the data
      xhrNode.send();
      
      //onload:
      xhrNode.onload = function()
		{
			//Just log the responseText for fun
			Ti.API.info(this.responseText);
			
			//We translate the json string into a neat object
			var response = JSON.parse(this.responseText);
			
			//gebouw, verdiep en lokaal
			for (var i in response.field_gebouw) {
				//body
		      bodyInfo = response.body[i];
		      
		      //gebouw
		      gebouwInfo = response.field_gebouw[i];
		      
		      //verdiep
		      verdiepInfo = response.field_verdiep[i];
		      
		      //lokaal
		      lokaalInfo = response.field_lokaal[i];
		      
		      //sNummer
		      sNummerInfo = response.field_snummer[i];
		      
		      //lijst sorteren als picker is aangeduid
		      
		      rowNode = Ti.UI.createTableViewRow({
		        title : response.title,
		        omschrijving : bodyInfo[0].value,
		        gebouw : gebouwInfo[0].value,
		        verdiep : verdiepInfo[0].value,
		        lokaal : lokaalInfo[0].value,
		        snummer: sNummerInfo[0].value,
		        path: response.vid
		      });
		      
		      alleNodes.push(rowNode);
		    }
		    // tabel opvullen
		    nodeTable.data = alleNodes;
		  };
      xhrNode.onerror = function () 
		{
			Ti.API.info('Unable to fetch nodes from Drupal');
		};
     
    }
  };
  
  xhrAlleNodes.onerror = function () 
  {
    Ti.API.info('Unable to fetch nodes from Drupal');
  };
// open the client
xhrAlleNodes.open('GET','http://www.vandenboschan2011.dreamhosters.com/drupal-7.10/api/node');

// send the data
xhrAlleNodes.send();


//					gebouw HTTPClient
//-------------------------------------------------------

var xhrGebouw = Titanium.Network.createHTTPClient();

var alleNodesGebouw = [];
var rowNodeGebouw;

xhrGebouw.onload = function()
  {
    //We translate the json string into a neat object
    var response = JSON.parse(this.responseText);
 
    for (var i in response) {
      node = response[i];
      
      //aparte HTTPClient voor de juiste gegevens
      var xhrNodeGebouw = Titanium.Network.createHTTPClient();
      // open the client
      xhrNodeGebouw.open('GET',node.uri);
      
      // send the data
      xhrNodeGebouw.send();
      
      //onload:
      xhrNodeGebouw.onload = function()
		{
			//Just log the responseText for fun
			Ti.API.info(this.responseText);
			
			//We translate the json string into a neat object
			var response = JSON.parse(this.responseText);
			
			//gebouw, verdiep en lokaal
			for (var i in response.field_gebouw) {
				//body
		      bodyInfo = response.body[i];
		      
		      //gebouw
		      gebouwInfo = response.field_gebouw[i];
		      
		      //verdiep
		      verdiepInfo = response.field_verdiep[i];
		      
		      //lokaal
		      lokaalInfo = response.field_lokaal[i];
		      
		      //lijst sorteren als picker is aangeduid
		      
		      rowNodeGebouw = Ti.UI.createTableViewRow({
		        title : response.title,
		        omschrijving : bodyInfo[0].value,
		        gebouw : gebouwInfo[0].value,
		        verdiep : verdiepInfo[0].value,
		        lokaal : lokaalInfo[0].value,
		        path: response.uri
		      });
		      //checken of gebouw overeen komt
		      // De vest; De ham; Kruidtuin
		      if(labelGebouw.text == gebouwInfo[0].value){
		       alleNodesGebouw.push(rowNodeGebouw);
		      }
		    }
		    // tabel opvullen
		    nodeTable.data = alleNodesGebouw;
		  };
      xhrNodeGebouw.onerror = function () 
		{
			Ti.API.info('Unable to fetch nodes from Drupal');
		};
     
    }
  };
  
  xhrGebouw.onerror = function () 
  {
    Ti.API.info('Unable to fetch nodes from Drupal');
  };
// open the client
xhrGebouw.open('GET','http://www.vandenboschan2011.dreamhosters.com/drupal-7.10/api/node');


//					verdiep HTTPClient
//-------------------------------------------------------

var xhrVerdiep = Titanium.Network.createHTTPClient();

var alleNodesVerdiep = [];
var rowNodeVerdiep;

xhrVerdiep.onload = function()
  {
    //We translate the json string into a neat object
    var response = JSON.parse(this.responseText);
 
    for (var i in response) {
      node = response[i];
      
      //aparte HTTPClient voor de juiste gegevens
      var xhrNodeVerdiep = Titanium.Network.createHTTPClient();
      // open the client
      xhrNodeVerdiep.open('GET',node.uri);
      
      // send the data
      xhrNodeVerdiep.send();
      
      //onload:
      xhrNodeVerdiep.onload = function()
		{
			//Just log the responseText for fun
			Ti.API.info(this.responseText);
			
			//We translate the json string into a neat object
			var response = JSON.parse(this.responseText);
			
			//gebouw, verdiep en lokaal
			for (var i in response.field_gebouw) {
				//body
		      bodyInfo = response.body[i];
		      
				//gebouw
		      gebouwInfo = response.field_gebouw[i];
		      
		      //verdiep
		      verdiepInfo = response.field_verdiep[i];
		      
		      //lokaal
		      lokaalInfo = response.field_lokaal[i];
		      
		      //lijst sorteren als picker is aangeduid
		      
		      rowNodeVerdiep = Ti.UI.createTableViewRow({
		        title : response.title,
		        omschrijving : bodyInfo[0].value,
		        gebouw : gebouwInfo[0].value,
		        verdiep : verdiepInfo[0].value,
		        lokaal : lokaalInfo[0].value,
		        path: response.uri
		      });
		      //checken of verdiep overeen komt
		      if(labelGebouw.text == gebouwInfo[0].value && labelVerdiep.text == (verdiepInfo[0].value)){
		       alleNodesVerdiep.push(rowNodeVerdiep);
		      }
		    }
		    // tabel opvullen
		    nodeTable.data = alleNodesVerdiep;
		  };
      xhrNodeVerdiep.onerror = function () 
		{
			Ti.API.info('Unable to fetch nodes from Drupal');
		};
     
    }
  };
  
  xhrVerdiep.onerror = function () 
  {
    Ti.API.info('Unable to fetch nodes from Drupal');
  };
// open the client
xhrVerdiep.open('GET','http://www.vandenboschan2011.dreamhosters.com/drupal-7.10/api/node');



//					lokaal HTTPClient
//-------------------------------------------------------

var xhrLokaal = Titanium.Network.createHTTPClient();

var alleNodesLokaal = [];
var rowNodeLokaal;

xhrLokaal .onload = function()
  {
    //We translate the json string into a neat object
    var response = JSON.parse(this.responseText);
 
    for (var i in response) {
      node = response[i];
      
      //aparte HTTPClient voor de juiste gegevens
      var xhrNodeLokaal = Titanium.Network.createHTTPClient();
      // open the client
      xhrNodeLokaal.open('GET',node.uri);
      
      // send the data
      xhrNodeLokaal.send();
      
      //onload:
      xhrNodeLokaal.onload = function()
		{
			//Just log the responseText for fun
			Ti.API.info(this.responseText);
			
			//We translate the json string into a neat object
			var response = JSON.parse(this.responseText);
			
			//gebouw, verdiep en lokaal
			for (var i in response.field_gebouw) {
				//body
		      bodyInfo = response.body[i];
		      
				//gebouw
		      gebouwInfo = response.field_gebouw[i];
		      
		      //verdiep
		      verdiepInfo = response.field_verdiep[i];
		      
		      //lokaal
		      lokaalInfo = response.field_lokaal[i];
		      
		      //lijst sorteren als picker is aangeduid
		      
		      rowNodeLokaal = Ti.UI.createTableViewRow({
		        title : response.title,
		        omschrijving : bodyInfo[0].value,
		        gebouw : gebouwInfo[0].value,
		        verdiep : verdiepInfo[0].value,
		        lokaal : lokaalInfo[0].value,
		        path: response.uri
		      });
		      //checken of verdiep overeen komt
		      if(labelGebouw.text == gebouwInfo[0].value && labelVerdiep.text == (verdiepInfo[0].value) && labelLokaal.text == (lokaalInfo[0].value)){
		       alleNodesLokaal.push(rowNodeLokaal);
		      }
		    }
		    // tabel opvullen
		    nodeTable.data = alleNodesLokaal;
		  };
      xhrNodeLokaal.onerror = function () 
		{
			Ti.API.info('Unable to fetch nodes from Drupal');
		};
     
    }
  };
  
  xhrLokaal.onerror = function () 
  {
    Ti.API.info('Unable to fetch nodes from Drupal');
  };
// open the client
xhrLokaal.open('GET','http://www.vandenboschan2011.dreamhosters.com/drupal-7.10/api/node');