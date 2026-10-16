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
* Compute the bitwise XOR of two 64-bit unsigned integers.
*
* @module @stdlib/number/uint64/base/xor
*
* @example
* var Uint64 = require( '@stdlib/number/uint64/ctor' );
* var xor = require( '@stdlib/number/uint64/base/xor' );
*
* var a = new Uint64( 5 );
* var b = new Uint64( 15 );
*
* var v = xor( a, b );
* // returns <Uint64>[ 10n ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );
var strided = require( './strided.js' );


// MAIN //

setReadOnly( main, 'assign', assign );
setReadOnly( main, 'strided', strided );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign", "strided": "main.strided" }
