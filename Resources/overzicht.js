var winOverzicht = Ti.UI.currentWindow;

var winmain = Titanium.UI.createWindow({  
    title:'Main',
    backgroundColor:'#393838',
    url:'app.js'
});
var win4 = Titanium.UI.createWindow({  
    title:'Einde',
    backgroundColor:'#393838',
    url:'submit.js'
});

var label3 = Titanium.UI.createLabel({
	color:'#fff',
	text:'Overzicht melding',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:5,
	left:10
});

var label4 = Titanium.UI.createLabel({
	color:'#4fc6dc',
	text:'Probleem:',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:30,
	left:10
});

var label5 = Titanium.UI.createLabel({
	color:'#4fc6dc',
	text:'Beschrijving:',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:70,
	left:10
});

var label6 = Titanium.UI.createLabel({
	color:'#4fc6dc',
	text:'Snummer:',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:180,
	left:10
});

var label7 = Titanium.UI.createLabel({
	color:'#4fc6dc',
	text:'gebouw:',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:230,
	left:10
});

var label8 = Titanium.UI.createLabel({
	color:'#4fc6dc',
	text:'verdiep:',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:280,
	left:10
});

var label9 = Titanium.UI.createLabel({
	color:'#4fc6dc',
	text:'lokaal:',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	width:'auto',
	top:330,
	left:10
});


var buttonVolgendeStap = Titanium.UI.createButton({
	title:'Bevestigen',
	color: '#4c2d4e',
	top:380,
	right:15
});

var buttonVorigeStap = Titanium.UI.createButton({
	title:'Annuleren',
	color: '#4c2d4e',
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
label5.text = "Beschrijving: " + winOverzicht.description; 
label6.text = "Snummer: "+winOverzicht.schoolNumber;
label7.text = "Gebouw: "+winOverzicht.gebouwProblem;
label8.text = "Verdiep: "+winOverzicht.verdiepProblem;
label9.text = "Lokaal: "+winOverzicht.lokaalProblem;


buttonVolgendeStap.addEventListener('click',function(e)
{
	//window openen
	win4.open();
	winOverzicht.close();
	
	// senden nr drupal!
	//					drupal service post
//-------------------------------------------------------

	//posten naar drupal service:
	var xhrTest = Titanium.Network.createHTTPClient();

	var loginObject = {
		"title" : winOverzicht.name,
		"type" : "node",
		"body" : {
			"und" : [{
				"value" : winOverzicht.description,
				"summary" : "",
				"format" : "filtered_html",
				"safe_value" : "<p>"+winOverzicht.description+"</p>\n",
				"safe_summary" : ""
			}]
		},
		"field_snummer" : {
			"und" : [{
				"value" : winOverzicht.schoolNumber,
				"format" : null,
				"safe_value" : winOverzicht.schoolNumber
			}]
		},
		"field_gebouw" : {
			"und" : [{
				"value" : winOverzicht.gebouwProblem,
				"format" : null,
				"safe_value" : winOverzicht.gebouwProblem
			}]
		},
		"field_verdiep" : {
			"und" : [{
				"value" : winOverzicht.verdiepProblem,
				"format" : null,
				"safe_value" : winOverzicht.verdiepProblem
			}]
		},
		"field_lokaal" : {
			"und" : [{
				"value" : winOverzicht.lokaalProblem,
				"format" : null,
				"safe_value" : winOverzicht.lokaalProblem
			}]
		}
	}
	var loginString = JSON.stringify(loginObject);
	xhrTest.open('POST', 'http://www.vandenboschan2011.dreamhosters.com/drupal-7.10/api/node');
	// set the content-type header
	xhrTest.setRequestHeader('content-type', 'application/json');

	// send the data
	xhrTest.send(loginString);
});

buttonVorigeStap.addEventListener('click',function(e)
{
	//window openen
	winmain.open();
	winOverzicht.close();
});