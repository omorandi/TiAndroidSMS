# TiAndroidSMS Module

## Description

This module extends the Appcelerator Titanium Mobile framework, allowing to send text messages directly from your app, by simply providing the recipient's phone number and the message body.

The code still needs testing and documentation. Use it at your own peril ;-) 

The module is licensed under the MIT license.

If you find it useful you might want to follow me on twitter: [olivier_morandi](http://twitter.com/olivier_morandi)

For any problem/complaint/etc. just drop me a line at olivier.morandi [[at]] gmail.com


## Building and installing the module ##

First, you must have your Android and Titanium Mobile SDKs in place, and have at least read the first few pages of the [Android Module Developer Guide](http://wiki.appcelerator.org/display/guides/Module+Developer+Guide+for+Android) from Appcelerator.

The build process can be launched by simply running 

	# ant

from the module's code root directory. 

As a result, the com.omorandi-android-0.1.zip file will be generated in the  `dist/` directory.

You can either copy this file to `/Library/Application\ Support/Titanium` and reference the module in your application (the Titanium SDK will automatically unzip the file in the right place), or manually launch the command:

     unzip -u -o com.omorandi-android-0.1.zip -d /Library/Application\ Support/Titanium/

For your convenience you'll find a pre-built module package in the `dist/` directory.

## Referencing the module in your Titanium Mobile application ##

Simply add the following lines to your `tiapp.xml` file:
    
    <modules>
        <module version="0.1" platform="android">com.omorandi</module> 
    </modules>



## Accessing the SMSDialog Module

This section is still to be done, however you can simply check out the `app.js` file you find in the `example` directory for understanding how to invoke the simple API exposed by the module.

## Author

**Olivier Morandi**

    email: olivier.morandi [[[at]]] gmail.com
    twitter: olivier_morandi

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