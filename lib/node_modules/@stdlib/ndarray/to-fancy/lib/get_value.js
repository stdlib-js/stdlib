/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var isFunction = require( '@stdlib/assert/is-function' );


// MAIN //

/**
* Returns the property value associated with a specified property.
*
* @private
* @param {Object} target - target object
* @param {(string|symbol)} property - property
* @param {Object} receiver - the proxy object or an object inheriting from the proxy
* @returns {*} result
*/
function getValue( target, property, receiver ) {
	var value = target[ property ];
	if ( isFunction( value ) ) {
		// FIXME: handle constructor (see array/to-fancy)
		return wrapper;
	}
	return value;

	/**
	* Method wrapper.
	*
	* @private
	* @returns {*} results
	*/
	function wrapper() {
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return value.apply( ( this === receiver ) ? target : this, args ); // eslint-disable-line no-invalid-this
	}
}


// EXPORTS //

module.exports = getValue;
