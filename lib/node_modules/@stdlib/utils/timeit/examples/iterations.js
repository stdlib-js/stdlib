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
var timeit = require( './../lib' );

var before = readFileSync( join( __dirname, 'before.txt' ), 'utf8' );
var code = readFileSync( join( __dirname, 'code.txt' ), 'utf8' );

var opts = {
	'iterations': null,
	'repeats': 3,
	'before': before
};

// Determine a suitable number of iterations
timeit( code, opts, onResults );

function onResults( error, results ) {
	if ( error ) {
		throw error;
	}
	opts.iterations = results.iterations;

	// Time the snippet using the determined number of iterations:
	timeit( code, opts, done );
}

function done( error, results ) {
	if ( error ) {
		throw error;
	}
	console.dir( results );
}
