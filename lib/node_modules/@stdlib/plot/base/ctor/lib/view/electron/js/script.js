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

var path = require( 'path' );
var readDir = require( '@stdlib/fs/read-dir' );
var extname = require( '@stdlib/utils/extname' );
var ENV = require( '@stdlib/process/env' );
var logger = require( './debug.js' );


// VARIABLES //

var DIR = path.join( ENV.PLOT_APP_PATH, 'css' );
var debug = logger( 'plot:base:view:electron:script' );


// FUNCTIONS //

/**
* Inserts stylesheets.
*
* @private
*/
function stylesheets() {
	var files;
	var link;
	var i;

	debug( 'Stylesheet directory: %s.', DIR );
	files = readDir.sync( DIR );
	for ( i = 0; i < files.length; i++ ) {
		if ( extname( files[i] ) !== '.css' ) {
			continue;
		}
		debug( 'Found a CSS file: %s.', files[i] );

		debug( 'Generating link element...' );
		link = document.createElement( 'link' );
		link.setAttribute( 'rel', 'stylesheet' );
		link.setAttribute( 'href', path.join( DIR, files[i] ) );

		debug( 'Appending link element to the document head...' );
		document.head.appendChild( link );
	}
}


// MAIN //

/**
* Main script.
*
* @private
*/
function main() {
	debug( 'Injecting stylesheets into the document...' );
	stylesheets();
}

debug( 'Running main script...' );
main();
