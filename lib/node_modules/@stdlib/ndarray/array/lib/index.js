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

/**
* Multidimensional array.
*
* @module @stdlib/ndarray/array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var arr = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>
*
* var v = arr.get( 0, 0 );
* // returns 1
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var opts = {
*     'dtype': 'generic',
*     'flatten': false
* };
*
* var arr = array( [ [ 1, 2 ], [ 3, 4 ] ], opts );
* // returns <ndarray>
*
* var v = arr.get( 0 );
* // returns [ 1, 2 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var array = require( '@stdlib/ndarray/array' );
*
* var opts = {
*     'shape': [ 2, 2 ]
* };
*
* var arr = array( new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] ), opts );
* // returns <ndarray>
*
* var v = arr.get( 0, 0 );
* // returns 1.0
*/

// MODULES //

var array = require( './main.js' );


// EXPORTS //

module.exports = array;
