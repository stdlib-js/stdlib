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
* Fill a strided array with pseudorandom numbers drawn from a discrete uniform distribution.
*
* @module @stdlib/random/strided/discrete-uniform
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var discreteUniform = require( '@stdlib/random/strided/discrete-uniform' );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* discreteUniform( out.length, [ -10 ], 0, [ 10 ], 0, out, 1 );
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var discreteUniform = require( '@stdlib/random/strided/discrete-uniform' );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* discreteUniform.ndarray( out.length, [ -10 ], 0, 0, [ 10 ], 0, 0, out, 1, 0 );
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;

// exports: { "ndarray": "main.ndarray" }
