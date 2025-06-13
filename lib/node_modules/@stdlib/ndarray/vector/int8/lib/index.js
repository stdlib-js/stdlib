/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/**
* Create a signed 8-bit integer vector (i.e., a one-dimensional ndarray).
*
* @module @stdlib/ndarray/vector/int8
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var Int8Vector = require( '@stdlib/ndarray/vector/int8' );
*
* var v = new Int8Vector();
* // returns <ndarray>
*
* var len = numel( v );
* // returns 0
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var Int8Vector = require( '@stdlib/ndarray/vector/int8' );
*
* var v = new Int8Vector( 2 );
* // returns <ndarray>
*
* var len = numel( v );
* // returns 2
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var Int8Vector = require( '@stdlib/ndarray/vector/int8' );
*
* var v = new Int8Vector( [ 1, 2 ] );
* // returns <ndarray>
*
* var len = numel( v );
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var numel = require( '@stdlib/ndarray/numel' );
* var Int8Vector = require( '@stdlib/ndarray/vector/int8' );
*
* var buf = new ArrayBuffer( 32 );
* var v = new Int8Vector( buf );
* // returns <ndarray>
*
* var len = numel( v );
* // returns 32
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var numel = require( '@stdlib/ndarray/numel' );
* var Int8Vector = require( '@stdlib/ndarray/vector/int8' );
*
* var buf = new ArrayBuffer( 32 );
* var v = new Int8Vector( buf, 16 );
* // returns <ndarray>
*
* var len = numel( v );
* // returns 16
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var numel = require( '@stdlib/ndarray/numel' );
* var Int8Vector = require( '@stdlib/ndarray/vector/int8' );
*
* var buf = new ArrayBuffer( 64 );
* var v = new Int8Vector( buf, 16, 2 );
* // returns <ndarray>
*
* var len = numel( v );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
