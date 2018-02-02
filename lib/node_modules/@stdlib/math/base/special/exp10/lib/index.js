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
* Evaluate the base `10` exponential function.
*
* @module @stdlib/math/base/special/exp10
*
* @example
* var exp10 = require( '@stdlib/math/base/special/exp10' );
*
* var v = exp10( 3.0 );
* // returns 1000.0
*
* v = exp10( -9.0 );
* // returns 1.0e-9
*
* v = exp10( 0.0 );
* // returns 1.0
*
* v = exp10( NaN );
* // returns NaN
*/

// MODULES //

var exp10 = require( './exp10.js' );


// EXPORTS //

module.exports = exp10;
