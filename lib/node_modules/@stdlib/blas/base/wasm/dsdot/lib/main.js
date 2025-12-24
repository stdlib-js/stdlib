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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var Routine = require( './routine.js' );
var Module = require( './module.js' );


// MAIN //

/**
* WebAssembly module to compute the dot product of `x` and `y` with extended accumulation and result.
*
* @name dsdot
* @type {Routine}
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* // Define strided arrays:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* // Perform operation:
* var dot = dsdot.main( x.length, x, 1, y, 1 );
* // returns 15.0
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* // Define strided arrays:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* // Perform operation:
* var dot = dsdot.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // returns 15.0
*/
var dsdot = new Routine();
dsdot.initializeSync(); // eslint-disable-line node/no-sync
setReadOnly( dsdot, 'Module', Module.bind( null ) );


// EXPORTS //

module.exports = dsdot;
