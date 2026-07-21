/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Return the maximum value of two single-precision floating-point numbers, ignoring NaN.
*
* @module @stdlib/math/base/special/nanmaxf
*
* @example
* var nanmaxf = require( '@stdlib/math/base/special/nanmaxf' );
*
* var v = nanmaxf( 3.14, 4.2 );
* // returns 4.2
*
* v = nanmaxf( 4.14, NaN );
* // returns 4.14
*
* v = nanmaxf( NaN, NaN );
* // returns NaN
*/

// MODULES //

var nanmaxf = require( './main.js' );


// EXPORTS //

module.exports = nanmaxf;
