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

/**
* Compute the relative difference in units of double-precision floating-point epsilon.
*
* @module @stdlib/math/base/utils/float64-epsilon-difference
*
* @example
* var epsdiff = require( '@stdlib/math/base/utils/float64-epsilon-difference' );
*
* var d = epsdiff( 12.15, 12.149999999999999 ); // => ~0.658ε
* // returns ~0.658
*
* d = epsdiff( 2.4341309458983933, 2.4341309458633909, 'mean-abs' ); // => ~64761.5ε => ~1.438e-11
* // returns ~64761.5
*
* function scale( x, y ) {
*      // Return the minimum value:
*      return ( x > y ) ? y : x;
* }
*
* d = epsdiff( 1.0000000000000002, 1.0000000000000100, scale ); // => ~44ε
* // returns ~44
*/

// MODULES //

var epsdiff = require( './main.js' );


// EXPORTS //

module.exports = epsdiff;
