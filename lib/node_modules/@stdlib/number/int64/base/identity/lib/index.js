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
* Evaluate the identity function for a 64-bit signed integer.
*
* @module @stdlib/number/int64/base/identity
*
* @example
* var Int64 = require( '@stdlib/number/int64/ctor' );
* var identity = require( '@stdlib/number/int64/base/identity' );
*
* var x = new Int64( 1 );
* var v = identity( x );
* // returns <Int64>[ 1n ]
*
* x = new Int64( 0 );
* v = identity( x );
* // returns <Int64>[ 0n ]
*
* x = new Int64( 4294967296 );
* v = identity( x );
* // returns <Int64>[ 4294967296n ]
*
* x = new Int64( -1000000000000 );
* v = identity( x );
* // returns <Int64>[ -1000000000000n ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
