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

// MODULES //

var Routine = require( './routine.js' );


// MAIN //

/**
* WebAssembly module to multiply a vector `x` by a constant `alpha`.
*
* @name sscal
* @type {Routine}
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* // Define a strided array:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* // Perform operation:
* sscal.main( x.length, 5.0, x, 1 );
* // x => <Float32Array>[ 5.0, 10.0, 15.0, 20.0, 25.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* // Define a strided array:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* // Perform operation:
* sscal.ndarray( x.length, 5.0, x, 1, 0 );
* // x => <Float32Array>[ 5.0, 10.0, 15.0, 20.0, 25.0 ]
*/
var sscal = new Routine();
sscal.initializeSync(); // eslint-disable-line node/no-sync


// EXPORTS //

module.exports = sscal;
