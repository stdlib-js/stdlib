/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var isgzipBuffer = require( './../lib' );

var buf = new Uint8Array( 20 );
buf[ 0 ] = 31;  // 0x1f => magic number
buf[ 1 ] = 139; // 0x8b
buf[ 2 ] = 8;   // 0x08 => compression method

var bool = isgzipBuffer( buf );
console.log( bool );
// => true

bool = isgzipBuffer( new Float32Array( 20 ) );
console.log( bool );
// => false

bool = isgzipBuffer( new Int8Array( 20 ) );
console.log( bool );
// => false

bool = isgzipBuffer( new Uint8Array( 20 ) );
console.log( bool );
// => false

bool = isgzipBuffer( new Uint8ClampedArray( 20 ) );
console.log( bool );
// => false

bool = isgzipBuffer( new Int16Array( 20 ) );
console.log( bool );
// => false

bool = isgzipBuffer( new Uint16Array( 20 ) );
console.log( bool );
// => false

bool = isgzipBuffer( new Int32Array( 20 ) );
console.log( bool );
// => false

bool = isgzipBuffer( new Uint32Array( 20 ) );
console.log( bool );
// => false

bool = isgzipBuffer( new Float64Array( 20 ) );
console.log( bool );
// => false

bool = isgzipBuffer( new Array( 20 ) );
console.log( bool );
// => false

bool = isgzipBuffer( {} );
console.log( bool );
// => false

bool = isgzipBuffer( null );
console.log( bool );
// => false
