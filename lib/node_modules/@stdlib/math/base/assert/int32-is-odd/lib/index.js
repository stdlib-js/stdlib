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
* Test if a 32-bit integer is odd.
*
* @module @stdlib/math/base/assert/int32-is-odd
*
* @example
* var isOdd = require( '@stdlib/math/base/assert/int32-is-odd' );
*
* var bool = isOdd( 5 );
* // returns true
*
* bool = isOdd( -2 );
* // returns false
*
* bool = isOdd( 0 );
* // returns false
*/

// MODULES //

var isOdd = require( './is_odd.js' );


// EXPORTS //

module.exports = isOdd;
