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
* Split a 64-bit unsigned integer into a higher order word (32-bit unsigned integer) and a lower order word (32-bit unsigned integer).
*
* @module @stdlib/number/uint64/base/to-words
*
* @example
* var Uint64 = require( '@stdlib/number/uint64/ctor' );
* var toWords = require( '@stdlib/number/uint64/base/to-words' );
*
* var a = new Uint64( 4294967296 );
* var w = toWords( a );
* // returns [ 1, 0 ]
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
* var Uint64 = require( '@stdlib/number/uint64/ctor' );
* var toWords = require( '@stdlib/number/uint64/base/to-words' );
*
* var out = new Uint32Array( 2 );
*
* var a = new Uint64( 4294967296 );
* var w = toWords.assign( a, out, 1, 0 );
* // returns <Uint32Array>[ 1, 0 ]
*
* var bool = ( w === out );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
