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

var ctors = require( '@stdlib/array/ctors' );
var format = require( '@stdlib/string/format' );
var MAX_TYPED_ARRAY_LENGTH = require( './../lib' );

function fill( dtype, len, value ) {
	var ctor;
	var arr;
	var i;
	if ( len > MAX_TYPED_ARRAY_LENGTH ) {
		throw new RangeError( format( 'invalid argument. The maximum length for a typed array is `%u`.', MAX_TYPED_ARRAY_LENGTH ) );
	}
	ctor = ctors( dtype );
	arr = new ctor( len );
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = value;
	}
	return arr;
}

var arr = fill( 'float64', 10, 3.14 );
console.log( arr );

try {
	arr = fill( 'float64', 1e300, 3.14 );
} catch ( err ) {
	console.error( err.message );
}
