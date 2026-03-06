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
var toHTML = require( 'vdom-to-html' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var httpServer = require( '@stdlib/net/disposable-http-server' );


// MAIN //

/**
* Opens a plot in a browser window.
*
* @private
* @param {VTree} vtree - virtual DOM tree
*/
function view( vtree ) {
	var index;
	var html;

	// Transform the virtual DOM tree to HTML:
	html = toHTML( vtree );

	// Inject the HTML:
	index = path.join( __dirname, 'index.html' );
	index = readFileSync( index, {
		'encoding': 'utf8'
	});

	index = index.replace( /\{\{plot\}\}/, html );

	// Create a disposable HTTP server:
	httpServer({
		'html': index,
		'open': true
	});
}


// EXPORTS //

module.exports = view;
