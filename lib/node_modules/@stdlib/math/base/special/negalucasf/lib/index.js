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
* Compute the nth negaLucas number in single-precision floating-point format.
*
* @module @stdlib/math/base/special/negalucasf
*
* @example
* var negalucasf = require( '@stdlib/math/base/special/negalucasf' );
*
* var y = negalucasf( 0 );
* // returns 2
*
* y = negalucasf( -1 );
* // returns -1
*
* y = negalucasf( -2 );
* // returns 3
*
* y = negalucasf( -3 );
* // returns -4
*
* y = negalucasf( -4 );
* // returns 7
*
* y = negalucasf( -5 );
* // returns -11
*
* y = negalucasf( -6 );
* // returns 18
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
