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
* Compute the nth Fibonacci number.
*
* @module @stdlib/math/base/special/fibonacci
*
* @example
* var fibonacci = require( '@stdlib/math/base/special/fibonacci' );
*
* var y = fibonacci( 0 );
* // returns 0
*
* y = fibonacci( 1 );
* // returns 1
*
* y = fibonacci( 2 );
* // returns 1
*
* y = fibonacci( 3 );
* // returns 2
*
* y = fibonacci( 4 );
* // returns 3
*
* y = fibonacci( 5 );
* // returns 5
*
* y = fibonacci( 6 );
* // returns 8
*/

// MODULES //

var fibonacci = require( './fibonacci.js' );


// EXPORTS //

module.exports = fibonacci;
