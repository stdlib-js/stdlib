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

var format = require( '@stdlib/string/format' );
var MAX_ARRAY_LENGTH = require( './../lib' );

function alloc( len ) {
	var arr;
	var i;
	if ( len > MAX_ARRAY_LENGTH ) {
		throw new RangeError( format( 'invalid argument. The maximum length for a generic array is `%u`. To create a longer array-like data structure, consider either typed arrays or an array-like object.', MAX_ARRAY_LENGTH ) );
	}
	// Manually allocate to ensure "fast" elements...
	arr = [];
	for ( i = 0; i < len; i++ ) {
		arr.push( 0 );
	}
	return arr;
}

var arr = alloc( 10 );
console.log( arr );

try {
	arr = alloc( 1e300 );
} catch ( err ) {
	console.error( err.message );
}
