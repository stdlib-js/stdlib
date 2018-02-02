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
* Compute the hyperbolic arctangent of a number.
*
* @module @stdlib/math/base/special/atanh
*
* @example
* var atanh = require( '@stdlib/math/base/special/atanh' );
*
* var v = atanh( 0.0 );
* // returns 0.0
*
* v = atanh( 0.9 );
* // returns ~1.472
*
* v = atanh( 1.0 );
* // returns Infinity
*
* v = atanh( -1.0 );
* // returns -Infinity
*
* v = atanh( NaN );
* // returns NaN
*/

// MODULES //

var atanh = require( './atanh.js' );


// EXPORTS //

module.exports = atanh;
