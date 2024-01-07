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
* Create a factory function for generating pseudorandom values drawn from a binary PRNG.
*
* @module @stdlib/random/array/tools/binary-factory
*
* @example
* var arcsine = require( '@stdlib/random/base/arcsine' );
* var binaryFactory = require( '@stdlib/random/array/tools/binary-factory' );
*
* var dtypes = [ 'float64', 'float32', 'generic' ];
*
* var factory = binaryFactory( arcsine, dtypes, 'float64' );
* // returns <Function>
*
* var random = factory();
* // returns <Function>
*
* var x = random( 10, 2.0, 5.0 );
* // returns <Float64Array>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
