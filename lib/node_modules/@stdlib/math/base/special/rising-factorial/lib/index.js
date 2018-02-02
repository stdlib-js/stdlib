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
* Compute the rising factorial.
*
* @module @stdlib/math/base/special/rising-factorial
*
* @example
* var risingFactorial = require( '@stdlib/math/base/special/rising-factorial' );
*
* var v = risingFactorial( 0.9, 5 );
* // returns ~94.766
*
* v = risingFactorial( -9.0, 3 );
* // returns -504.0
*
* v = risingFactorial( 0.0, 2 );
* // returns 0.0
*
* v = risingFactorial( 3.0, -2 );
* // returns 0.5
*/

// MODULES //

var risingFactorial = require( './rising_factorial.js' );


// EXPORTS //

module.exports = risingFactorial;
