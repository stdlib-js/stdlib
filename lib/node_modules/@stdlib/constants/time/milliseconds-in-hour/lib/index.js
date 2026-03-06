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
* Number of milliseconds in an hour.
*
* @module @stdlib/constants/time/milliseconds-in-hour
* @type {integer32}
*
* @example
* var MILLISECONDS_IN_HOUR = require( '@stdlib/constants/time/milliseconds-in-hour' );
* // returns 3600000
*/


// MAIN //

/**
* The number of milliseconds in an hour.
*
* ```tex
* 1000 \cdot 60 \cdot 60 = 3600000
* ```
*
* @constant
* @type {integer32}
* @default 3600000
*/
var MILLISECONDS_IN_HOUR = 3600000|0; // asm type annotation


// EXPORTS //

module.exports = MILLISECONDS_IN_HOUR;
