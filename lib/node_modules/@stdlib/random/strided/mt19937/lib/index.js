/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Fill a strided array with pseudorandom numbers generated using a 32-bit Mersenne Twister pseudorandom number generator.
*
* @module @stdlib/random/strided/mt19937
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var mt19937 = require( '@stdlib/random/strided/mt19937' );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* mt19937( out.length, out, 1 );
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var mt19937 = require( '@stdlib/random/strided/mt19937' );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* mt19937.factory( out.length, out, 1, 0 );
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var mt19937 = require( '@stdlib/random/strided/mt19937' );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* mt19937.normalized( out.length, out, 1 );
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );
var normalized = require( './normalized.js' );
var ndarrayNormalized = require( './normalized.ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );
setReadOnly( main, 'normalized', normalized );
setReadOnly( normalized, 'ndarray', ndarrayNormalized );


// EXPORTS //

module.exports = main;

// exports: { "ndarray": "main.ndarray", "normalized": "main.normalized" }
