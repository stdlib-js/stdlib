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
* Create an array containing pseudorandom numbers generated using a 32-bit Mersenne Twister pseudorandom number generator.
*
* @module @stdlib/random/array/mt19937
*
* @example
* var mt19937 = require( '@stdlib/random/array/mt19937' );
*
* var arr = mt19937( 10 );
* // returns <Float64Array>
*
* @example
* var mt19937 = require( '@stdlib/random/array/mt19937' );
*
* var arr = mt19937( 10, {
*     'dtype': 'generic'
* });
* // returns [...]
*
* @example
* var mt19937 = require( '@stdlib/random/array/mt19937' );
*
* var arr = mt19937.normalized( 10 );
* // returns <Float64Array>
*
* @example
* var mt19937 = require( '@stdlib/random/array/mt19937' );
*
* var arr = mt19937.normalized( 10, {
*     'dtype': 'generic'
* });
* // returns [...]
*
* @example
* var mt19937 = require( '@stdlib/random/array/mt19937' );
*
* var rand = mt19937.factory();
* // returns <Function>
*
* var arr = rand( 10 );
* // returns <Float64Array>
*
* @example
* var mt19937 = require( '@stdlib/random/array/mt19937' );
*
* var rand = mt19937.factory();
* // returns <Function>
*
* var arr = rand( 10, {
*     'dtype': 'generic'
* });
* // returns [...]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;

// exports: { "factory": "main.factory", "normalized": "main.normalized" }
