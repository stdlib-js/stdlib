/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Compute the mid-range of a strided array according to a mask, ignoring `NaN` values.
*
* @module @stdlib/stats/strided/nanmskmidrange
*
* @example
* var nanmskmidrange = require( '@stdlib/stats/strided/nanmskmidrange' );
*
* var x = [ 1.0, -2.0, NaN, 4.0, 2.0 ];
* var mask = [ 0, 0, 0, 1, 0 ];
*
* var v = nanmskmidrange( x.length, x, 1, mask, 1 );
* // returns 0.0
*
* @example
* var nanmskmidrange = require( '@stdlib/stats/strided/nanmskmidrange' );
*
* var x = [ 2.0, 1.0, 2.0, NaN, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];
* var mask = [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ];
*
* var v = nanmskmidrange.ndarray( 5, x, 2, 1, mask, 2, 1 );
* // returns 1.5
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var nanmskmidrange = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( nanmskmidrange, 'ndarray', ndarray );


// EXPORTS //

module.exports = nanmskmidrange;
