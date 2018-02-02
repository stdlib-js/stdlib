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
* Compute the nth negaFibonacci number.
*
* @module @stdlib/math/base/special/negafibonacci
*
* @example
* var negafibonacci = require( '@stdlib/math/base/special/negafibonacci' );
*
* var y = negafibonacci( 0 );
* // returns 0
*
* y = negafibonacci( -1 );
* // returns 1
*
* y = negafibonacci( -2 );
* // returns -1
*
* y = negafibonacci( -3 );
* // returns 2
*
* y = negafibonacci( -4 );
* // returns -3
*
* y = negafibonacci( -5 );
* // returns 5
*
* y = negafibonacci( -6 );
* // returns -8
*/

// MODULES //

var negafibonacci = require( './negafibonacci.js' );


// EXPORTS //

module.exports = negafibonacci;
