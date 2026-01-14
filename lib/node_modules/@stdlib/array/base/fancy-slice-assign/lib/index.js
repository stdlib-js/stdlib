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
* Assign element values from a broadcasted input array to corresponding elements in an output array.
*
* @module @stdlib/array/base/fancy-slice-assign
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var sliceAssign = require( '@stdlib/array/base/fancy-slice-assign' );
*
* var x = [ 1, 2, 3, 4 ];
* var y = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns [ 0, 4, 0, 3, 0, 2, 0, 1 ]
*
* var bool = ( out === y );
* // returns true
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var Slice = require( '@stdlib/slice/ctor' );
* var sliceAssign = require( '@stdlib/array/base/fancy-slice-assign' );
*
* var x = new Int32Array( [ 5 ] );
* var y = new Int32Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns <Int32Array>[ 0, 5, 0, 5, 0, 5, 0, 5 ]
*
* var bool = ( out === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
