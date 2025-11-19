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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var Routine = require( './routine.js' );
var Module = require( './module.js' );


// MAIN //

/**
* WebAssembly module to apply a plane rotation.
*
* @name csrot
* @type {Routine}
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* // Perform operation:
* csrot.main( cx.length, cx, 1, cy, 1, 0.8, 0.6 );
* // cx => <Complex64Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
* // cy => <Complex64Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* // Define a strided arrays...
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* // Perform operation:
* csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, 0.6 );
* // cx => <Complex64Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
* // cy => <Complex64Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
*/
var csrot = new Routine();
csrot.initializeSync(); // eslint-disable-line node/no-sync
setReadOnly( csrot, 'Module', Module.bind( null ) );


// EXPORTS //

module.exports = csrot;
