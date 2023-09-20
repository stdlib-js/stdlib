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
var seq2multislice = require( '@stdlib/slice/base/seq2multislice' );
var format = require( '@stdlib/string/format' );
var hasProperty = require( './has_property.js' );
var RE_SUBSEQ = require( './re_subseq.js' );
var multisliceWrap = require( './wrap_multislice_arguments.js' );
var sliceView = require( './view.nd.js' );
var empty = require( './empty.js' );


// FUNCTIONS //

/**
* Trap for retrieving property values.
*
* @private
* @param {Object} target - target object
* @param {(string|symbol)} property - property name
* @param {Object} receiver - the proxy object or an object inheriting from the proxy
* @throws {Error} invalid slice operation
* @throws {RangeError} number of slice dimensions must match the number of array dimensions
* @throws {RangeError} slice exceeds array bounds
* @throws {Error} slice increment must be a non-zero integer
* @returns {*} result
*/
function get( target, property, receiver ) {
	var strict;
	var shape;
	var value;
	var prop;
	var ch;
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
	strict = false; // TODO: support strict mode

	// Retrieve the first character in order to to detect how a slice operation was specified:
	ch = prop[ 0 ];

	// Case: multi-slice (e.g., 'MultiSlice(Slice(0,10,2),null,2,Slice(10,5,-1))')
	if ( ch === 'M' ) {
		// TODO: => @stdlib/ndarray/base/slice: return slice( receiver, str2multislice( prop ).data ); // TODO: handle `null`

		return sliceView( target, property, receiver, str2multislice( prop ) );
	}
	// Case: subsequence string (e.g., ':10,1,::-1,:,-5,2::3')
	if ( RE_SUBSEQ.test( prop ) ) {
		shape = target.shape;
		s = seq2multislice( prop, shape, true );
		if ( s.code ) {
			if ( s.code === 'ERR_SLICE_OUT_OF_BOUNDS' ) {
				if ( strict ) {
					throw new RangeError( format( 'invalid operation. Slice exceeds array bounds. Array shape: (%s).', shape.join( ',' ) ) );
				}
				// Return an empty zero-dimensional array:
				return empty( receiver.constructor, target.dtype, [], target.order );
			}
			if ( s.code === 'ERR_SLICE_INVALID_INCREMENT' ) {
				throw new Error( format( 'invalid operation. A subsequence increment must be a non-zero integer. Value: `%s`.', property ) );
			}
			if ( s.code === 'ERR_SLICE_INVALID_ELLIPSIS' ) {
				throw new Error( format( 'invalid operation. A subsequence may only include a single ellipsis. Value: `%s`.', property ) );
			}
			if ( s.code === 'ERR_SLICE_INVALID_SUBSEQUENCE' ) {
				throw new Error( format( 'invalid operation. Unsupported slice operation. Value: `%s`.', property ) );
			}
		}
		// TODO: => @stdlib/ndarray/base/slice: return slice( receiver, s.data );

		return sliceView( target, property, receiver, s );
	}
	// Case: array syntax (e.g., [ Slice(0,10,1), null, Slice(4,null,-1) ])

	// TODO: => @stdlib/ndarray/base/slice: return slice( receiver, str2multislice( multisliceWrap( prop ) ).data ); // TODO: handle `null`

	return sliceView( target, '['+property+']', receiver, str2multislice( multisliceWrap( prop ) ) );

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
