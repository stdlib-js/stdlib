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
* Number of milliseconds in a day.
*
* @module @stdlib/constants/time/milliseconds-in-day
* @type {integer32}
*
* @example
* var MILLISECONDS_IN_DAY = require( '@stdlib/constants/time/milliseconds-in-day' );
* // returns 86400000
*/


// MAIN //

/**
* The number of milliseconds in a day.
*
* ```tex
* 1000 \cdot 60 \cdot 60 \cdot 24 = 86400000
* ```
*
* @constant
* @type {integer32}
* @default 86400000
*/
var MILLISECONDS_IN_DAY = 86400000|0; // asm type annotation


// EXPORTS //

module.exports = MILLISECONDS_IN_DAY;
