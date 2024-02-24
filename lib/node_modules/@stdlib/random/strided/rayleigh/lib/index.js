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

/**
* Fill a strided array with pseudorandom numbers drawn from a Rayleigh distribution.
*
* @module @stdlib/random/strided/rayleigh
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var rayleigh = require( '@stdlib/random/strided/rayleigh' );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* rayleigh( out.length, [ 2.0 ], 0, out, 1 );
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var rayleigh = require( '@stdlib/random/strided/rayleigh' );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* rayleigh.ndarray( out.length, [ 2.0 ], 0, 0, out, 1, 0 );
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;

// exports: { "factory": "main.factory", "ndarray": "main.ndarray" }
