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

var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
var randu = require( '@stdlib/random/base/randu' );
var Float64Array = require( '@stdlib/array/float64' );
var stridedArrayStream = require( './../lib' );

function log( v ) {
	console.log( v.toString() );
}

// Create an array containing uniformly distributed pseudorandom numbers:
var arr = new Float64Array( 20 );

var i;
for ( i = 0; i < arr.length; i++ ) {
	arr[ i ] = randu();
}

// Create a stream which iterates over every other element from right-to-left:
var opts = {
	'objectMode': true
};
var stream = stridedArrayStream( 10, arr, -2, arr.length-2, opts );

// Create a writable stream for inspecting stream data:
opts = {
	'objectMode': true
};
var iStream = inspectStream( opts, log );

// Begin data flow:
stream.pipe( iStream );
