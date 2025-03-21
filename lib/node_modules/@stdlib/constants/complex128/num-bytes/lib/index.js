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
* Size (in bytes) of a 128-bit complex number.
*
* @module @stdlib/constants/complex128/num-bytes
* @type {integer32}
*
* @example
* var COMPLEX128_NUM_BYTES = require( '@stdlib/constants/complex128/num-bytes' );
* // returns 16
*/


// MAIN //

/**
* Size (in bytes) of a 128-bit complex number.
*
* @constant
* @type {integer32}
* @default 16
*/
var COMPLEX128_NUM_BYTES = 16|0; // asm type annotation


// EXPORTS //

module.exports = COMPLEX128_NUM_BYTES;
