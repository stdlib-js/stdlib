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
* Compute the nth Tribonacci number.
*
* @module @stdlib/math/base/special/tribonacci
*
* @example
* var tribonacci = require( '@stdlib/math/base/special/tribonacci' );
*
* var y = tribonacci( 0 );
* // returns 0
*
* y = tribonacci( 1 );
* // returns 0
*
* y = tribonacci( 2 );
* // returns 1
*
* y = tribonacci( 3 );
* // returns 1
*
* y = tribonacci( 4 );
* // returns 2
*
* y = tribonacci( 5 );
* // returns 4
*
* y = tribonacci( 6 );
* // returns 7
*/

// MODULES //

var tribonacci = require( './main.js' );


// EXPORTS //

module.exports = tribonacci;
