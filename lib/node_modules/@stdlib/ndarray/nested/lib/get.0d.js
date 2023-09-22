/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var trim = require( '@stdlib/string/base/trim' );
var str2multislice = require( '@stdlib/slice/base/str2multislice' );
var format = require( '@stdlib/string/format' );
var hasProperty = require( './has_property.js' );
var options = require( './array_options.js' );
var RE_INTEGER = require( './re_integer.js' );


// MAIN //

/**
* Trap for retrieving property values.
*
* @private
* @param {Object} target - target object
* @param {(string|symbol)} property - property name
* @param {Object} receiver - the proxy object or an object inheriting from the proxy
* @throws {Error} invalid slice operation
* @throws {RangeError} number of slice dimensions must match the number of array dimensions
* @returns {*} result
*/
function get( target, property, receiver ) {
	var dtype;
	var value;
	var prop;
	var ch;
	var sh;
	var s;
	if ( hasProperty( property ) ) {
		value = target[ property ];
		if ( isFunction( value ) ) {
			return wrapper;
		}
		return value;
	}
	prop = trim( property );

	// Resolve target meta data:
	dtype = target.dtype;
	sh = target.shape;

	// Retrieve the first character in order to to detect how a slice operation was specified:
	ch = prop[ 0 ];

	// Case: multi-slice
	if ( ch === 'M' ) {
		// Convert the string to a slice object:
		s = str2multislice( prop );
		if ( s === null ) {
			throw new Error( format( 'invalid operation. Unsupported slice operation. Value: `%s`.', property ) );
		}
		// TODO: => @stdlib/ndarray/base/slice: return slice( receiver, s.data );

		// Ensure that we were provided an empty multi-slice:
		if ( s.ndims !== sh.length ) {
			throw new RangeError( format( 'invalid operation. Number of array dimensions does not match the number of slice dimensions. Array shape: (%s). Slice dimensions: %u.', sh.join( ',' ), s.ndims ) );
		}
	}
	// Case: non-empty string
	else if ( prop.length !== 0 ) {
		// TODO: the following can be generalized by going ahead and parsing the slice string or integer and passing to a functional API which then verifies that s.ndims !== sh.length. We need only retain the error raised for an invalid operation.

		// Case: slice or an integer
		if ( ch === 'S' || RE_INTEGER.test( prop ) ) {
			throw new RangeError( format( 'invalid operation. Number of array dimensions does not match the number of slice dimensions. Array shape: (%s). Slice dimensions: %u.', sh.join( ',' ), 1 ) );
		}
		throw new Error( format( 'invalid operation. Unsupported slice operation. Value: `%s`.', property ) );
	}
	// TODO: => @stdlib/ndarray/base/slice: return slice( receiver, [] );

	// Return an zero-dimensional array view:
	return new receiver.constructor( dtype, target.data, sh, target.strides, target.offset, target.order, options() ); // eslint-disable-line max-len

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

module.exports = get;
