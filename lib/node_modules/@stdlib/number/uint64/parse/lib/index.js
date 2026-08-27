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
* Parse a string representation of a 64-bit unsigned integer.
*
* @module @stdlib/number/uint64/parse
*
* @example
* var parseUint64 = require( '@stdlib/number/uint64/parse' );
*
* var a = parseUint64( '1234' );
* // returns <Uint64>[ 1234n ]
*
* a = parseUint64( '0xffffffffffffffff' );
* // returns <Uint64>[ 18446744073709551615n ]
*
* a = parseUint64( '123abcxyz', 36 );
* // returns <Uint64>[ 2984992324091n ]
*/

// MAIN //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
