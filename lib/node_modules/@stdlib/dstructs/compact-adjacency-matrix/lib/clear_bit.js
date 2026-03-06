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

// MAIN //

/**
* Clears a bit.
*
* @private
* @param {integer32} value - integer value
* @param {NonNegativeInteger} i - bit to clear
* @returns {integer32} updated integer value
*
* @example
* var v = clearBit( 5, 2 );
* // returns 1
*/
function clearBit( value, i ) {
	value &= ~( 1 << i );
	return value;
}


// EXPORTS //

module.exports = clearBit;
