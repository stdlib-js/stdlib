/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Cumulatively test whether every element along one or more ndarray dimensions is falsy.
*
* @module @stdlib/blas/ext/cunone
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var cunone = require( '@stdlib/blas/ext/cunone' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 4.0, 0.0, 0.0 ] );
*
* // Define the shape of the input array:
* var sh = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 2, 1 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create an input ndarray:
* var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );
*
* // Perform operation:
* var out = cunone( x );
* // returns <ndarray>[ [ [ true, true ] ], [ [ true, false ] ], [ [ false, false ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign" }
