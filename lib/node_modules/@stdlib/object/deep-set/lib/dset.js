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
var isFunction = require( '@stdlib/assert/is-function' );


// MAIN //

/**
* Sets a nested property.
*
* @private
* @param {ObjectLike} obj - input object
* @param {Array} props - list of properties defining a key path
* @param {boolean} create - boolean indicating whether to create a path if the key path does not already exist
* @param {*} val - value to set
* @returns {boolean} boolean indicating if the property was successfully set
*/
function deepSet( obj, props, create, val ) {
	var bool;
	var len;
	var v;
	var p;
	var i;

	len = props.length;
	bool = false;
	v = obj;
	for ( i = 0; i < len; i++ ) {
		p = props[ i ];
		if ( isObjectLike( v ) ) {
			if ( !hasOwnProp( v, p ) ) {
				if ( create ) {
					v[ p ] = {};
				} else {
					break;
				}
			}
			if ( i === len-1 ) {
				if ( isFunction( val ) ) {
					v[ p ] = val( v[ p ] );
				} else {
					v[ p ] = val;
				}
				bool = true;
			} else {
				v = v[ p ];
			}
		} else {
			break;
		}
	}
	return bool;
}


// EXPORTS //

module.exports = deepSet;
