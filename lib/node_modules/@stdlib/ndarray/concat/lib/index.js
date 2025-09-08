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
* Concatenate a list of ndarrays along a specified ndarray dimension.
*
* @module @stdlib/ndarray/concat
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var concat = require( '@stdlib/ndarray/concat' );
*
* var xbuf = new Float64Array( [ -1.0, 2.0, -3.0, 4.0 ] );
* var x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
*
* var ybuf = new Float64Array( [ -5.0, 6.0, -7.0, 8.0, -9.0, 10.0 ] );
* var y = new ndarray( 'float64', ybuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
*
* var out = concat( [ x, y ], -1 );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ [ -1.0, 2.0, -5.0, 6.0, -7.0 ], [ -3.0, 4.0, 8.0, -9.0, 10.0 ] ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign" }
