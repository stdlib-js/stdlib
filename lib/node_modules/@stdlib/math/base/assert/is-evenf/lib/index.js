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
* Test if a finite single-precision floating-point number is an even number.
*
* @module @stdlib/math/base/assert/is-evenf
*
* @example
* var isEvenf = require( '@stdlib/math/base/assert/is-evenf' );
*
* var bool = isEvenf( 5.0 );
* // returns false
*
* bool = isEvenf( -2.0 );
* // returns true
*
* bool = isEvenf( 0.0 );
* // returns true
*
* bool = isEvenf( NaN );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
