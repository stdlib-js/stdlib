/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Test whether two 64-bit unsigned integers are equal.
*
* @module @stdlib/number/uint64/base/assert/is-equal
*
* @example
* var Uint64 = require( '@stdlib/number/uint64/ctor' );
* var isEqual = require( '@stdlib/number/uint64/base/assert/is-equal' );
*
* var a = new Uint64( 1234 );
* var b = Uint64.of( 0, 1234 );
*
* var v = isEqual( a, b );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
