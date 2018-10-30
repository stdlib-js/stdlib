/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var factory = require( './factory.js' );


// MAIN //

/**
* Returns a pseudorandom number from an F distribution with parameters `d1` and `d2`.
*
* @name f
* @type {PRNG}
* @param {PositiveNumber} d1 - degrees of freedom
* @param {PositiveNumber} d2 - degrees of freedom
* @returns {NonNegativeNumber} pseudorandom number
*
* @example
* var v = f( 3.0, 2.0 );
* // returns <number>
*
* @example
* var r = f( -2.0, 5.0 );
* // returns NaN
*/
var f = factory();


// EXPORTS //

module.exports = f;
