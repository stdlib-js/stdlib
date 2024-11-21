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

// MODULES //

var hasProp = require( '@stdlib/assert/has-property' );


// MAIN //

/**
* Returns a boolean indicating whether an object has a nested property.
*
* @private
* @param {*} v - value to test
* @param {Array} props - list of properties defining a key path
* @returns {boolean} boolean indicating whether an object has a nested property
*/
function deepHasProp( v, props ) {
	var len = props.length;
	var i;
	if ( len === 0 ) {
		return false;
	}
	for ( i = 0; i < len; i++ ) {
		if ( hasProp( v, props[i] ) ) {
			v = v[ props[ i ] ];
		} else {
			return false;
		}
	}
	return true;
}


// EXPORTS //

module.exports = deepHasProp;
