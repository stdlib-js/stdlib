/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Compute the mid-range of a strided array according to a mask.
*
* @module @stdlib/stats/strided/mskmidrange
*
* @example
* var mskmidrange = require( '@stdlib/stats/strided/mskmidrange' );
*
* var x = [ 1.0, -2.0, 4.0, 2.0 ];
* var mask = [ 0, 0, 1, 0 ];
*
* var v = mskmidrange( x.length, x, 1, mask, 1 );
* // returns 0.0
*
* @example
* var mskmidrange = require( '@stdlib/stats/strided/mskmidrange' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var mask = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ];
*
* var v = mskmidrange.ndarray( 5, x, 2, 1, mask, 2, 1 );
* // returns 1.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var mskmidrange = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( mskmidrange, 'ndarray', ndarray );


// EXPORTS //

module.exports = mskmidrange;
