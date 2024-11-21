/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var logger = require( 'debug' );
var app = require( 'electron' ).app;
var BrowserWindow = require( 'electron' ).BrowserWindow;
var ENV = require( '@stdlib/process/env' );


// VARIABLES //

var debug = logger( 'plot:view:electron:main-process' );
var mainWindow = null;


// FUNCTIONS //

/**
* Creates a browser window.
*
* @private
*/
function createWindow() {
	var opts;
	var url;

	opts = {
		'width': parseInt( ENV.PLOT_WIDTH, 10 ) + 80,
		'height': parseInt( ENV.PLOT_HEIGHT, 10 ) + 20,
		'title': ENV.PLOT_TITLE,

		// 'minWidth': parseInt( ENV.PLOT_MIN_WIDTH, 10 ), // TODO: needed?

		// 'minHeight': parseInt( ENV.PLOT_MIN_HEIGHT, 10 ), // TODO: needed?

		// 'titleBarStyle': 'hidden-inset', // hide title bar on OS X

		'useContentSize': true // specify web page size only considering the content
	};
	debug( 'Creating a new browser window configured with the following options: %s.', JSON.stringify( opts ) );
	mainWindow = new BrowserWindow( opts );

	mainWindow.on( 'close', onClose );

	url = 'http://'+ENV.SERVER_ADDRESS+':'+ENV.SERVER_PORT+'/index.html';
	debug( 'Loading %s.', url );
	mainWindow.loadURL( url );
}

/**
* Callback invoked once a window closes.
*
* @private
*/
function onClose() {
	debug( 'Window closed. Dereferencing window object to allow for GC...' );
	mainWindow = null;
}

/**
* Quits the application.
*
* @private
*/
function quit() {
	debug( 'Quitting application...' );
	app.quit();
}


// MAIN //

/**
* Runs the application.
*
* @private
*/
function main() {
	app.on( 'ready', createWindow );
	app.on( 'window-all-closed', quit );
}

debug( 'Running application...' );
main();
