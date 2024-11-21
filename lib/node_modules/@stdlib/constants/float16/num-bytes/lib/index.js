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
* Size (in bytes) of a half-precision floating-point number.
*
* @module @stdlib/constants/float16/num-bytes
* @type {integer32}
*
* @example
* var FLOAT16_NUM_BYTES = require( '@stdlib/constants/float16/num-bytes' );
* // returns 2
*/


// MAIN //

/**
* Size (in bytes) of a half-precision floating-point number.
*
* @constant
* @type {integer32}
* @default 2
*/
var FLOAT16_NUM_BYTES = 2|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT16_NUM_BYTES;
