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

var objectKeys = require( '@stdlib/utils/keys' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var invertBy = require( './../lib' );

function transform( key, value ) {
	return value;
}

// Create an array of random integers:
var arr = discreteUniform( 1000, 0, 100, {
	'dtype': 'generic'
});

// Invert the array to determine value frequency...
var out = invertBy( arr, transform );
var keys = objectKeys( out );

var i;
for ( i = 0; i < keys.length; i++ ) {
	if ( out[ i ] ) {
		out[ i ] = out[ i ].length;
	} else {
		out[ i ] = 0;
	}
}
console.dir( out );
