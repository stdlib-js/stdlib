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
* WebAssembly module to apply a plane rotation.
*
* @name csrot
* @type {Routine}
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* // Define strided arrays...
* var cx = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var cy = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* csrot.main( cx.length, cx, 1, cy, 1, 0.8, 0.6 );
*
* var v = cx.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns ~-0.2
*
* var im = imagf( v );
* // returns ~-0.4
*
* v = cy.get( 0 );
* // returns <Complex64>
*
* re = realf( v );
* // returns ~1.4
*
* im = imagf( v );
* // returns ~2.8
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* // Define a strided arrays...
* var cx = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var cy = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, 0.6 );
*
* var v = cx.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns ~-0.2
*
* var im = imagf( v );
* // returns ~-0.4
*
* v = cy.get( 0 );
* // returns <Complex64>
*
* re = realf( v );
* // returns ~1.4
*
* im = imagf( v );
* // returns ~2.8
*/
var csrot = new Routine();
csrot.initializeSync(); // eslint-disable-line node/no-sync


// EXPORTS //

module.exports = csrot;
