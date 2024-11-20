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

var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var isArrayBuffer = require( './../lib' );

var bool = isArrayBuffer( new ArrayBuffer( 10 ) );
console.log( bool );
// => true

bool = isArrayBuffer( new Float32Array( 10 ) );
console.log( bool );
// => false

bool = isArrayBuffer( new Int8Array( 10 ) );
console.log( bool );
// => false

bool = isArrayBuffer( new Uint8Array( 10 ) );
console.log( bool );
// => false

bool = isArrayBuffer( new Uint8ClampedArray( 10 ) );
console.log( bool );
// => false

bool = isArrayBuffer( new Int16Array( 10 ) );
console.log( bool );
// => false

bool = isArrayBuffer( new Uint16Array( 10 ) );
console.log( bool );
// => false

bool = isArrayBuffer( new Int32Array( 10 ) );
console.log( bool );
// => false

bool = isArrayBuffer( new Uint32Array( 10 ) );
console.log( bool );
// => false

bool = isArrayBuffer( new Float64Array( 10 ) );
console.log( bool );
// => false

bool = isArrayBuffer( new Array( 10 ) );
console.log( bool );
// => false

bool = isArrayBuffer( {} );
console.log( bool );
// => false

bool = isArrayBuffer( null );
console.log( bool );
// => false
