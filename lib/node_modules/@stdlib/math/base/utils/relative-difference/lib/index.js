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
* Compute the relative difference of two real numbers.
*
* @module @stdlib/math/base/utils/relative-difference
*
* @example
* var reldiff = require( '@stdlib/math/base/utils/relative-difference' );
*
* var d = reldiff( 2.0, 5.0 ); // => 3/5
* // returns 0.6
*
* d = reldiff( -1.0, 3.14 ); // => 4.14/3.14
* // returns ~1.318
*
* d = reldiff( -2.0, 5.0, 'max-abs' ); // => |-7/5|
* // returns 1.4
*
* d = reldiff( -2.0, 5.0, 'max' ); // => |-7/5|
* // returns 1.4
*
* d = reldiff( -2.0, 5.0, 'min-abs' ); // => |-7/2|
* // returns 3.5
*
* d = reldiff( -2.0, 5.0, 'min' ); // => |-7/-2|
* // returns 3.5
*
* d = reldiff( -2.0, 5.0, 'mean-abs' ); // => |-7/3.5|
* // returns 2.0
*
* d = reldiff( -2.0, 5.0, 'mean' ); // => |-7/1.5|
* // returns ~4.67
*
* d = reldiff( -2.0, 5.0, 'x' ); // => |-7/-2|
* // returns 3.5
*
* d = reldiff( 5.0, -2.0, 'x' ); // => |7/5|
* // returns 1.4
*
* d = reldiff( -2.0, 5.0, 'y' ); // => |-7/5|
* // returns 1.4
*
* d = reldiff( 5.0, -2.0, 'y' ); // => |7/-2|
* // returns 3.5
*/

// MODULES //

var reldiff = require( './main.js' );


// EXPORTS //

module.exports = reldiff;
