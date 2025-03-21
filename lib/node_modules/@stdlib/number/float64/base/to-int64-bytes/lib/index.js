/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Convert an integer-valued double-precision floating-point number to a signed 64-bit integer byte array according to host byte order (endianness).
*
* @module @stdlib/number/float64/base/to-int64-bytes
*
* @example
* var float64ToInt64Bytes = require( '@stdlib/number/float64/base/to-int64-bytes' );
*
* var bytes = float64ToInt64Bytes( 1.0 );
* // returns <Uint8Array>
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
* var float64ToInt64Bytes = require( '@stdlib/number/float64/base/to-int64-bytes' );
*
* var out = new Uint8Array( 8 );
* var bytes = float64ToInt64Bytes( 1.0, out, 1, 0 );
* // returns <Uint8Array>
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
