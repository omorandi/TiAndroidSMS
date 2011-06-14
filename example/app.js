// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
window.add(label);
window.open();

// TODO: write your module tests here
var smsMod = require('com.omorandi');
Ti.API.info("module is => " + smsMod);


if (Ti.Platform.name == "android") {
	
	var tf = Ti.UI.createTextField({top: 10, width: 200, height: 40});
	window.add(tf);	
	
	var bt = Ti.UI.createButton({title: 'send', width: 100, height: 40});
	window.add(bt);
	bt.addEventListener('click', function(){
		if (tf.value) {
			var sms = smsMod.createSms({recipient: tf.value, messageBody: "Test sms"});
			
			sms.addEventListener('complete', function(e){
				Ti.API.info('Result: ' + (e.success?'success':'failure') + ' msg: ' + e.resultMessage);
				switch (e.result) {
					case sms.SENT: 
						Ti.API.info('SENT');
						break;
					case sms.FAILED:
						Ti.API.info('FAILED');
						break;
					case sms.CANCELLED:
						Ti.API.info('CANCELLED');
						break;
						
				}
			} );
			
			sms.send();
		}
		else {
			Ti.API.error('textfield with no value');
		}
	});
	
	
}