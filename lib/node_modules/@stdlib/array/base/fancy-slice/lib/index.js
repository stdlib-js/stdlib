/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Return a shallow copy of a portion of an array.
*
* @module @stdlib/array/base/fancy-slice
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var slice = require( '@stdlib/array/base/fancy-slice' );
*
* var x = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var y = slice( x, s, false );
* // returns [ 8, 6, 4, 2 ]
*
* var out = ( y === x );
* // returns false
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var Slice = require( '@stdlib/slice/ctor' );
* var slice = require( '@stdlib/array/base/fancy-slice' );
*
* var x = new Int32Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var y = slice( x, s, false );
* // returns <Int32Array>[ 8, 6, 4, 2 ]
*
* var out = ( y === x );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
