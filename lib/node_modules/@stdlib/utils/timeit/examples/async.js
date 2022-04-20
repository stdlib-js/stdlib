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

var timeit = require( './../lib' );

var opts = {
	'iterations': 1e2,
	'repeats': 5,
	'asynchronous': true
};

var code = '';
code += 'var err;';
code += 'var x = Math.pow( Math.random(), 3 );';
code += 'if ( x !== x ) {';
code += 'err = new Error( \'Something went wrong.\' );';
code += 'next( err );';
code += '}';
code += 'setTimeout( next, 0 );';

timeit( code, opts, done );

function done( error, results ) {
	if ( error ) {
		throw error;
	}
	console.dir( results );
}
