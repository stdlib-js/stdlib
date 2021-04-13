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

var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var array = require( '@stdlib/ndarray/array' );
var Uint8Array = require( '@stdlib/array/uint8' );
var fromInt64Bytes = require( '@stdlib/number/float64/base/from-int64-bytes' );
var serialize = require( './../lib' );

// Create an ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

// Print various properties:
console.log( 'dtype: %s', x.dtype );
console.log( 'ndims: %d', x.ndims );
console.log( 'shape: [ %s ]', x.shape.join( ', ' ) );
console.log( 'strides: [ %s ]', x.strides.join( ', ' ) );
console.log( 'offset: %d', x.offset );
console.log( 'order: %s', x.order );

// Serialize ndarray meta data to a DataView:
var dv = serialize( x );
// returns <DataView>

// Create a Uint8Array view:
var bytes = new Uint8Array( dv.buffer );

// Extract the data type (enum):
var dtype = dv.getInt16( 1, IS_LITTLE_ENDIAN );
console.log( 'dtype (enum): %d', dtype );

// Extract the number of dimensions:
var ndims = fromInt64Bytes( bytes, 1, 3 );
console.log( 'ndims: %d', x.ndims );

// Extract the shape:
var shape = [];
var i;
for ( i = 0; i < ndims; i++ ) {
	shape.push( fromInt64Bytes( bytes, 1, 11+(i*8) ) );
}
console.log( 'shape: [ %s ]', shape.join( ', ' ) );

// Extract the strides (in units of bytes):
var strides = [];
for ( i = 0; i < ndims; i++ ) {
	strides.push( fromInt64Bytes( bytes, 1, 11+(ndims*8)+(i*8) ) );
}
console.log( 'strides (bytes): [ %s ]', strides.join( ', ' ) );

// Extract the index offset (in bytes):
var offset = fromInt64Bytes( bytes, 1, 11+(ndims*16) );
console.log( 'offset (bytes): %d', offset );

// Extract the order (enum):
var order = dv.getInt8( 19+(ndims*16) );
console.log( 'order (enum): %d', order );
