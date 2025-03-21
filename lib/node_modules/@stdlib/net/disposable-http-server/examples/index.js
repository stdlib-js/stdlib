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

var join = require( 'path' ).join;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var httpServer = require( './../lib' );

var html = join( __dirname, 'fixtures', 'index.html' );
var js = join( __dirname, 'fixtures', 'script.js' );

var opts = {
	'html': readFileSync( html ),
	'javascript': readFileSync( js ),
	'port': 7331,
	'hostname': 'localhost',
	'open': false
};

httpServer( opts, clbk );

function clbk( error, server ) {
	if ( error ) {
		throw error;
	}
	// Give the user a few seconds to open her web browser before closing the server...
	setTimeout( onTimeout, 5000 );

	function onTimeout() {
		server.close();
	}
}
