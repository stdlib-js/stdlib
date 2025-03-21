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
* Create a factory function for filling strided arrays with pseudorandom values drawn from a unary PRNG.
*
* @module @stdlib/random/strided/tools/unary-factory
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var exponential = require( '@stdlib/random/base/exponential' );
* var unaryFactory = require( '@stdlib/random/strided/tools/unary-factory' );
*
* var factory = createFactory( exponential );
* // returns <Function>
*
* var random = factory();
* // returns <Function>
*
* var out = new Float64Array( 10 );
* // returns <Float64Array>
*
* random( out.length, [ 2.0 ], 0, out, 1 );
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var exponential = require( '@stdlib/random/base/exponential' );
* var unaryFactory = require( '@stdlib/random/strided/tools/unary-factory' );
*
* var factory = createFactory( exponential );
* // returns <Function>
*
* var random = factory();
* // returns <Function>
*
* var out = new Float64Array( 10 );
* // returns <Float64Array>
*
* random.ndarray( out.length, [ 2.0 ], 0, 0, out, 1, 0 );
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
