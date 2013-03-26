# TiAndroidSMS Module

## Description

This module extends the Appcelerator Titanium Mobile framework, allowing to send text messages directly from your app, by simply providing the recipient's phone number and the message body.

## NOTE

This version of the module completely replaces the old one, which was not compatible with Titanium > 1.8.X. 
This version provides a new API and it has been built and used with Ti SDK 3.0.X

## Building and installing the module ##

First, you must have your Android and Titanium Mobile SDKs in place, and have at least read the first few pages of the [Android Module Developer Guide](http://wiki.appcelerator.org/display/guides/Module+Developer+Guide+for+Android) from Appcelerator.

Before building the module you must change the directory references you find in the `build.properties` file according to your filesystem layout.

The build process can be launched by simply running 

	# ant

from the module's code root directory. 

As a result, the ti.android.sms-android-1.0.0.zip file will be generated in the  `dist/` directory.

You can either copy this file to `$HOME/Library/Application\ Support/Titanium` and reference the module in your application (the Titanium SDK will automatically unzip the file in the right place), or manually launch the command:

     unzip -u -o ti.android.sms-android-1.0.0.zip -d ~/Library/Application\ Support/Titanium/

For your convenience you'll find a pre-built module package in the `dist/` directory.

## Referencing the module in your Titanium Mobile application ##

Simply add the following lines to your `tiapp.xml` file:
    
    <modules>
        <module platform="android">ti.android.sms</module>
    </modules>


## Accessing the module from JavaScript code

### Loading the module

In order to access the module from JavaScript, you should do the following:

    var smsMod = require('ti.android.sms');
    Ti.API.info("module is => " + smsMod);

### Registering events

    smsMod.addEventListener('complete', function(e){
        Ti.API.info('Result: ' + (e.success?'success':'failure') + ' msg: ' + e.resultMessage);
        var result = 'unexpected result...';
        switch (e.result) {
            case smsMod.SENT: 
                result = 'SENT';
                break;
            case smsMod.DELIVERED: 
                result = 'DELIVERED';
                break;
            case smsMod.FAILED:
                result = 'FAILED';
                break;
            case smsMod.CANCELLED:
                result = 'CANCELLED';
                break;
        }
        
        alert('Message sending result: ' + result);
    } );

### Sending a message

Sending a message is as simple as:

    var recipient = '+1 234 567 890';
    var text = 'hello world';
    smsMod.sendSMS(recipient, text);

The result of the operation can be tracked through the `complete` event previously registered.

## License

    Copyright (c) 2011 Olivier Morandi

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.	