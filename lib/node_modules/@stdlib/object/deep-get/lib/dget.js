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

var isObjectLike = require( '@stdlib/assert/is-object-like' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Returns a nested property value.
*
* @private
* @param {ObjectLike} obj - input object
* @param {Array} props - list of properties defining a key path
* @returns {*} nested property value
*/
function deepGet( obj, props ) {
	var len = props.length;
	var v = obj;
	var i;
	for ( i = 0; i < len; i++ ) {
		if (
			isObjectLike( v ) &&
			hasOwnProp( v, props[ i ] )
		) {
			v = v[ props[ i ] ];
		} else {
			return;
		}
	}
	return v;
}


// EXPORTS //

module.exports = deepGet;
