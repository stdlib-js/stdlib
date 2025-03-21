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
* Removes and returns the last element of an array-like object.
*
* @private
* @param {Object} obj - input array-like object
* @returns {Array} input object and the removed element
*
* @example
* var obj = {
*     'length': 2,
*     '0': 1.0,
*     '1': 2.0
* };
*
* var out = pop( obj );
* // returns [ { 'length': 1, '0': 1.0 }, 2.0 ]
*/
function pop( obj ) {
	var len;
	var v;
	if ( obj.length === 0 ) {
		return [ obj, void 0 ];
	}
	len = obj.length - 1;
	v = obj[ len ];
	delete obj[ len ];
	obj.length = len;
	return [ obj, v ];
}


// EXPORTS //

module.exports = pop;
