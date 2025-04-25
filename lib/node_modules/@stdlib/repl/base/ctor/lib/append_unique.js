/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var contains = require( './contains.js' );


// MAIN //

/**
* Appends a value to a list if that value is not already present in the list.
*
* @private
* @param {Array} list - list to which to append
* @param {*} value - value to append
* @returns {Array} input list
*/
function appendUnique( list, value ) {
	if ( contains( list.length, list, 1, 0, value ) === false ) {
		list.push( value );
	}
	return list;
}


// EXPORTS //

module.exports = appendUnique;
