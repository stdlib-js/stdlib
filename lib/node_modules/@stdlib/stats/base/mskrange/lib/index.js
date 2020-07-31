/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Compute the range of a strided array according to a mask.
*
* @module @stdlib/stats/base/mskrange
*
* @example
* var mskrange = require( '@stdlib/stats/base/mskrange' );
*
* var x = [ 1.0, -2.0, 4.0, 2.0 ];
* var mask = [ 0, 0, 1, 0 ];
*
* var v = mskrange( x.length, x, 1 );
* // returns 4.0
*
* @example
* var floor = require( '@stdlib/math/base/special/floor' );
* var mskrange = require( '@stdlib/stats/base/mskrange' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var mask = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ];
* var N = floor( x.length / 2 );
*
* var v = mskrange.ndarray( N, x, 2, 1, mask, 2, 1 );
* // returns 6.0
*/

// MODULES //

var mskrange = require( './main.js' );


// EXPORTS //

module.exports = mskrange;
