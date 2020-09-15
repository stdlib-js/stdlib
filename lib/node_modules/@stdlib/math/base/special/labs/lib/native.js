/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes an absolute value of a signed 32-bit integer in two's complement format.
*
* @private
* @param {integer32} x - integer
* @returns {integer32} absolute value
*
* @example
* var v = labs( -10|0 );
* // returns 10
*/
function labs( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = labs;
