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
* Evaluate a Chebyshev series using double-precision floating-point arithmetic.
*
* @module @stdlib/math/base/tools/chebyshev-series
*
* @example
* var chebyshevSeries = require( '@stdlib/math/base/tools/chebyshev-series' );
*
* var v = chebyshevSeries( 1.0, [ 1.0, 0.5 ] ); // 1*T_0(1/2) + 0.5*T_1(1/2)
* // returns 0.75
*
* @example
* var chebyshevSeries = require( '@stdlib/math/base/tools/chebyshev-series' );
*
* var polyval = chebyshevSeries.factory( [ 1.0, 0.5 ] );
*
* var v = polyval( 1.0 ); // 1*T_0(1/2) + 0.5*T_1(1/2)
* // returns 0.75
*
* var v = polyval( 0.0 ); // 1*T_0(0) + 0.5*T_1(0)
* // returns 0.25
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
