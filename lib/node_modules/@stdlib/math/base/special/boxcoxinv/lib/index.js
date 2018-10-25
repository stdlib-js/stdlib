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
* Compute the inverse of a one-parameter Box-Cox transformation.
*
* @module @stdlib/math/base/special/boxcoxinv
*
* @example
* var boxcoxinv = require( '@stdlib/math/base/special/boxcoxinv' );
*
* var v = boxcoxinv( 1.0, 2.5 );
* // returns ~1.6505
*
* v = boxcoxinv( 4.0, 2.5 );
* // returns ~2.6095
*
* v = boxcoxinv( 10.0, 2.5 );
* // returns ~3.6812
*
* v = boxcoxinv( 2.0, 0.0 );
* // returns ~7.3891
*
* v = boxcoxinv( -1.0, 2.5 );
* // returns NaN
*
* v = boxcoxinv( 0.0, -1.0 );
* // returns 1.0
*
* v = boxcoxinv( 1.0, NaN );
* // returns NaN
*
* v = boxcoxinv( NaN, 3.1 );
* // returns NaN
*/

// MODULES //

var boxcoxinv = require( './main.js' );


// EXPORTS //

module.exports = boxcoxinv;
