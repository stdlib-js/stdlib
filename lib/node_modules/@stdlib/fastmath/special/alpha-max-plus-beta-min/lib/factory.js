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

var hypot1a = require( './hypot1a.js' );
var hypot1b = require( './hypot1b.js' );
var hypot2a = require( './hypot2a.js' );
var hypot2b = require( './hypot2b.js' );
var closure1a = require( './closure1a.js' );
var closure1b = require( './closure1b.js' );


// MAIN //

/**
* Returns a function to compute a hypotenuse using the alpha max plus beta min algorithm.
*
* @param {number} alpha - alpha
* @param {number} beta - beta
* @param {boolean} [nonnegative] - boolean indicating whether input values are always nonnegative
* @param {boolean} [ints] - boolean indicating whether input values are always 32-bit integers
* @returns {Function} function to compute a hypotenuse
*
* @example
* var hypot = factory( 1.0, 0.5 );
* // returns <Function>
*/
function factory( alpha, beta, nonnegative, ints ) {
	if ( ints ) {
		if ( alpha === 1.0 && beta === 0.5 ) {
			if ( nonnegative ) {
				return hypot1a;
			}
			return hypot1b;
		}
		if ( alpha === 1.0 && beta === 0.25 ) {
			if ( nonnegative ) {
				return hypot2a;
			}
			return hypot2b;
		}
	}
	if ( nonnegative ) {
		return closure1a( alpha, beta );
	}
	return closure1b( alpha, beta );
}


// EXPORTS //

module.exports = factory;
