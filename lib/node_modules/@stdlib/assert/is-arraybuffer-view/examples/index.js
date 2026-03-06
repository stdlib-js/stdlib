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

// MODULES //

var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var isArrayBufferView = require( './../lib' );


// MAIN //

var bool = isArrayBufferView( new Int8Array( 10 ) );
console.error( bool );
// => true

bool = isArrayBufferView( new Int16Array( 10 ) );
console.error( bool );
// => true

bool = isArrayBufferView( new Uint16Array( 10 ) );
console.error( bool );
// => true

bool = isArrayBufferView( new Int32Array( 10 ) );
console.error( bool );
// => true

bool = isArrayBufferView( new Float64Array( 10 ) );
console.error( bool );
// => true

bool = isArrayBufferView( new Float32Array( 10 ) );
console.error( bool );
// => true

bool = isArrayBufferView( new ArrayBuffer( 10 ) );
console.error( bool );
// => false

bool = isArrayBufferView( [] );
console.error( bool );
// => false

bool = isArrayBufferView( {} );
console.error( bool );
// => false

bool = isArrayBufferView( null );
console.error( bool );
// => false
