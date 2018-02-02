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
* Test if a finite double-precision floating-point number is a nonpositive integer.
*
* @module @stdlib/math/base/assert/is-nonpositive-integer
*
* @example
* var isNonPositiveInteger = require( '@stdlib/math/base/assert/is-nonpositive-integer' );
*
* var bool = isNonPositiveInteger( -1.0 );
* // returns true
*
* bool = isNonPositiveInteger( 0.0 );
* // returns true
*
* bool = isNonPositiveInteger( 10.0 );
* // returns false
*/

// MODULES //

var isNonPositiveInteger = require( './is_nonpositive_integer.js' );


// EXPORTS //

module.exports = isNonPositiveInteger;
