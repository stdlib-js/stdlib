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

// MAIN //

/**
* Specifies a sort order for ordering numeric values in ascending order.
*
* ## Notes
*
* -   If `a < b`, then function returns a number less than `0`, which specifies to sort `a` to an index lower than `b`.
* -   If `a > b`, then function returns a number greater than `0`, which specifies to sort `a` to an index higher than `b`.
* -   If `a == b`, then function returns `0`, which specifies that the order of `a` and `b` should remain unchanged (not guaranteed).
*
* @private
* @param {number} a - first value
* @param {number} b - second value
* @returns {number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
}


// EXPORTS //

module.exports = ascending;
