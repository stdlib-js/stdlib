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
* Compute the minimum value of a strided array according to a mask.
*
* @module @stdlib/stats/base/mskmin
*
* @example
* var mskmin = require( '@stdlib/stats/base/mskmin' );
*
* var x = [ 1.0, -2.0, -4.0, 2.0 ];
* var mask = [ 0, 0, 1, 0 ];
*
* var v = mskmin( x.length, x, 1 );
* // returns -2.0
*
* @example
* var floor = require( '@stdlib/math/base/special/floor' );
* var mskmin = require( '@stdlib/stats/base/mskmin' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, -5.0, -6.0 ];
* var mask = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ];
* var N = floor( x.length / 2 );
*
* var v = mskmin.ndarray( N, x, 2, 1, mask, 2, 1 );
* // returns -2.0
*/

// MODULES //

var mskmin = require( './main.js' );


// EXPORTS //

module.exports = mskmin;
