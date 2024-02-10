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
* @param {Object} ctx - context object
* @param {Function} ctx.array2fancy - function for creating a proxied array
* @returns {*} result
*/
function getValue( target, property, receiver, ctx ) {
	var value = target[ property ];
	if ( isFunction( value ) ) {
		if ( value === target.constructor ) {
			return ctor;
		}
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

	/**
	* Constructor wrapper.
	*
	* @private
	* @returns {*} results
	*/
	function ctor() {
		var x;
		var a;
		var i;

		a = [];
		for ( i = 0; i < arguments.length; i++ ) {
			a.push( arguments[ i ] );
		}
		switch ( a.length ) {
		case 0:
			x = new value();
			break;
		case 1:
			x = new value( a[0] );
			break;
		case 2:
			x = new value( a[0], a[1] );
			break;
		case 3:
			x = new value( a[0], a[1], a[2] );
			break;
		case 4:
			x = new value( a[0], a[1], a[2], a[3] );
			break;
		case 5:
			x = new value( a[0], a[1], a[2], a[3], a[4] );
			break;
		case 6:
			x = new value( a[0], a[1], a[2], a[3], a[4], a[5] );
			break;
		case 7:
			x = new value( a[0], a[1], a[2], a[3], a[4], a[5], a[6] );
			break;
		case 8:
			x = new value( a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7] );
			break;
		case 9:
			x = new value( a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8] ); // eslint-disable-line max-len
			break;
		case 10:
			x = new value( a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9] ); // eslint-disable-line max-len
			break;
		default:
			// Fallback to using `apply`; however, some constructors may error if the constructor is not callable (i.e., always requires `new`):
			x = value.apply( null, a );
		}
		return ctx.array2fancy( x );
	}
}


// EXPORTS //

module.exports = getValue;
