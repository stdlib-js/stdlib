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
* WebAssembly module to apply a plane rotation.
*
* @name zdrot
* @type {Routine}
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* // Define strided arrays...
* var zx = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var zy = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* zdrot.main( zx.length, zx, 1, zy, 1, 0.8, 0.6 );
// zx => <Complex128Array>[ ~-0.2, ~-0.4, ~-0.6, ~-0.8, -1.0, ~-1.2 ]
// zy => <Complex128Array>[ 1.4, 2.8, 4.2, 5.6, 7.0, 8.4 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* // Define a strided arrays...
* var zx = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var zy = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, 0.6 );
// zx => <Complex128Array>[ ~-0.2, ~-0.4, ~-0.6, ~-0.8, -1.0, ~-1.2 ]
// zy => <Complex128Array>[ 1.4, 2.8, 4.2, 5.6, 7.0, 8.4 ]
*/
var zdrot = new Routine();
zdrot.initializeSync(); // eslint-disable-line node/no-sync
setReadOnly( zdrot, 'Module', Module.bind( null ) );


// EXPORTS //

module.exports = zdrot;
