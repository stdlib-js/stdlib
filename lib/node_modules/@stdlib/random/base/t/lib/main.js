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
* Returns a pseudorandom number drawn from a Student's t-distribution with degrees of freedom `v`.
*
* @name t
* @type {PRNG}
* @param {PositiveNumber} v - degrees of freedom
* @returns {number} pseudorandom number
*
* @example
* var v = t( 3.0 );
* // returns <number>
*
* @example
* var v = t( 0.0 );
* // returns NaN
*
* @example
* var v = t( NaN );
* // returns NaN
*/
var t = factory();


// EXPORTS //

module.exports = t;
