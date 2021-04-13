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
* Convert a signed 64-bit integer byte array to a double-precision floating-point number.
*
* @module @stdlib/number/float64/base/from-int64-bytes
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
* var fromInt64Bytes = require( '@stdlib/number/float64/base/from-int64-bytes' );
*
* var bytes = new Uint8Array( [ 255, 255, 255, 255, 255, 255, 255, 255 ] );
* var x = fromInt64ByteArray( bytes, 1, 0 );
* // returns -1.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
