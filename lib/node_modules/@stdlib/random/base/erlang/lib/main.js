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
* Returns a pseudorandom number drawn from an Erlang distribution.
*
* @name erlang
* @type {PRNG}
* @param {PositiveInteger} k - shape parameter
* @param {PositiveNumber} lambda - rate parameter
* @returns {number} pseudorandom number
*
* @example
* var v = erlang( 2, 1.0 );
* // returns <number>
*
* @example
* var v = erlang( NaN, 1.0 );
* // returns NaN
*
* v = erlang( 2, NaN );
* // returns NaN
*
* v = erlang( 3.14, 1.0 );
* // returns NaN
*
* v = erlang( 3, 0.0 );
* // returns NaN
*/
var erlang = factory();


// EXPORTS //

module.exports = erlang;
