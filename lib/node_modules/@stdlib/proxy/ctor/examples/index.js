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

var Float64Array = require( '@stdlib/array/float64' );
var Proxy = require( './../lib' );

var handlers;
var arr;
var p;
var i;

// Create a new typed array:
arr = new Float64Array( 10 );
for ( i = 0; i < arr.length; i++ ) {
	arr[ i ] = i;
}

// Define a "trap" when retrieving property values:
function get( obj, prop ) {
	if ( prop === 'length' ) {
		return obj.length;
	}
	return obj[ prop ] * 2.0;
}

// Define the proxy handlers:
handlers = {
	'get': get
};

// Create a proxy:
p = new Proxy( arr, handlers );

// Access array values...
for ( i = 0; i < p.length; i++ ) {
	console.log( 'arr[%d] = %d', i, p[ i ] );
}
