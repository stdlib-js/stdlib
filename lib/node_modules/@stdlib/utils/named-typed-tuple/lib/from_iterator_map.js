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
* Returns an array of iterated values.
*
* @private
* @param {StringArray} fields - tuple fields
* @param {Object} it - iterator
* @param {Function} clbk - callback to invoke for each iterated value
* @param {*} thisArg - invocation context
* @returns {Array} output array
*/
function fromIteratorMap( fields, it, clbk, thisArg ) {
	var out;
	var v;
	var i;

	out = [];
	i = -1;
	while ( true ) {
		i += 1;
		v = it.next();
		if ( v.value !== void 0 ) {
			out.push( clbk.call( thisArg, v.value, i, fields[ i ] ) );
		}
		if ( v.done ) {
			break;
		}
	}
	return out;
}


// EXPORTS //

module.exports = fromIteratorMap;
