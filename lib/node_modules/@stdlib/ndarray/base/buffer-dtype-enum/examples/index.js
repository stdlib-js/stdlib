/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var dtypes = require( '@stdlib/ndarray/dtypes' );
var bufferCtors = require( '@stdlib/ndarray/base/buffer-ctors' );
var isFunction = require( '@stdlib/assert/is-function' );
var dtypeEnum = require( './../lib' );

var DTYPES;
var ctor;
var buf;
var len;
var c;
var i;

// Get a list of supported ndarray buffer data types:
DTYPES = dtypes();

// Buffer length:
len = 10;

// For each supported data type, create a buffer and retrieve its data type enumeration constant...
for ( i = 0; i < DTYPES.length; i++ ) {
	ctor = bufferCtors( DTYPES[ i ] );
	if ( DTYPES[ i ] === 'binary' && isFunction( ctor.alloc ) ) {
		buf = ctor.alloc( len );
	} else {
		buf = new ctor( len );
	}
	c = dtypeEnum( buf );
	console.log( '%s => %d', DTYPES[ i ], c );
}

// Try an array-like object...
buf = {
	'length': 10
};
c = dtypeEnum( buf );
console.log( '%s => %s', 'generic', c );
