/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var join = require( 'path' ).join;
var REPL = require( '@stdlib/repl' );
var Presentation = require( './../lib' ); // eslint-disable-line stdlib/no-redeclare

function onExit() {
	console.log( '' );
	console.log( 'REPL closed.' );
}

// Create a new REPL:
var repl = new REPL();
repl.on( 'exit', onExit );

// Create a new REPL presentation:
var pres = new Presentation( repl, {
	'counter': 'progress'
});

// Load a presentation file:
pres.load( join( __dirname, 'presentation.txt' ) );

// Get the number of slides:
var len = pres.length;

// Render the first slide:
pres.show();

// Automate the slide show:
setTimeout( next, 2000 );

function next() {
	// If we are finished with the slide show, close the REPL...
	if ( pres.currentSlide === len ) {
		return repl.close();
	}
	pres.next().show();
	setTimeout( next, 2000 );
}
