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

// MODULES //

var Routine = require( './routine.js' );


// MAIN //

/**
* WebAssembly module to compute the dot product of `x` and `y`.
*
* @name ddot
* @type {Routine}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Define strided arrays:
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* // Perform operation:
* var dot = ddot.main( x.length, x, 1, y, 1 );
* // returns 15.0
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Define strided arrays:
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* // Perform operation:
* var dot = ddot.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // returns 15.0
*/
var ddot = new Routine();
ddot.initializeSync(); // eslint-disable-line node/no-sync


// EXPORTS //

module.exports = ddot;
