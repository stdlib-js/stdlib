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

/* eslint-disable object-curly-newline */

'use strict';

var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var isEmptyCollection = require( './../lib' );

console.log( isEmptyCollection( [] ) );
// => true

console.log( isEmptyCollection( new Float64Array( [] ) ) );
// => true

console.log( isEmptyCollection( new Float32Array( [] ) ) );
// => true

console.log( isEmptyCollection( new Int32Array( [] ) ) );
// => true

console.log( isEmptyCollection( new Uint32Array( [] ) ) );
// => true

console.log( isEmptyCollection( new Int16Array( [] ) ) );
// => true

console.log( isEmptyCollection( new Uint16Array( [] ) ) );
// => true

console.log( isEmptyCollection( new Int8Array( [] ) ) );
// => true

console.log( isEmptyCollection( new Uint8Array( [] ) ) );
// => true

console.log( isEmptyCollection( new Uint8ClampedArray( [] ) ) );
// => true

console.log( isEmptyCollection( { 'length': 0 } ) );
// => true

console.log( isEmptyCollection( [ 1, 2, 3 ] ) );
// => false

console.log( isEmptyCollection( {} ) );
// => false
