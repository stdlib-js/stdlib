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

var trim = require( '@stdlib/string/base/trim' );
var replace = require( '@stdlib/string/base/replace' );
var MultiSlice = require( '@stdlib/slice/multi' );
var str2multislice = require( '@stdlib/slice/base/str2multislice' );
var seq2multislice = require( '@stdlib/slice/base/seq2multislice' );
var str2slice = require( '@stdlib/slice/base/str2slice' );
var format = require( '@stdlib/string/format' );
var RE_INTEGER = require( './re_integer.js' );
var RE_SUBSEQ = require( './re_subseq.js' );


// MAIN //

/**
* Converts a zero-dimensional ndarray indexing expression to a slice.
*
* @private
* @param {Object} target - target object
* @param {string} property - property name
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @throws {Error} invalid slice operation
* @throws {RangeError} number of slice dimensions must match the number of array dimensions
* @returns {MultiSlice} multi-slice object
*/
function prop2slice( target, property ) {
	var shape;
	var prop;
	var ch;
	var s;

	prop = trim( property );

	// Retrieve the first character in order to to detect how a slice operation was specified:
	ch = prop[ 0 ];

	// Case: slice
	if ( ch === 'S' ) {
		// Convert the string to a slice object:
		s = str2slice( prop );
		if ( s === null ) {
			throw new Error( format( 'invalid operation. Unsupported slice operation. Value: `%s`.', property ) );
		}
		// Create a multi-slice:
		s = new MultiSlice( s );
	}
	// Case: multi-slice
	else if ( ch === 'M' ) {
		// Convert the string to a slice object:
		s = str2multislice( prop );
		if ( s === null ) {
			throw new Error( format( 'invalid operation. Unsupported slice operation. Value: `%s`.', property ) );
		}
	}
	// Case: integer
	else if ( RE_INTEGER.test( prop ) ) {
		// Convert the string to a numeric value:
		s = parseInt( prop, 10 );

		// Create a multi-slice:
		s = new MultiSlice( s );
	}
	// Case: subsequence string (e.g., ':10,1,::-1,:,-5,2::3')
	else if ( RE_SUBSEQ.test( prop ) ) {
		shape = target.shape;
		s = seq2multislice( prop, shape, true );
		if ( s.code ) {
			if ( s.code === 'ERR_SLICE_INVALID_INCREMENT' ) {
				throw new Error( format( 'invalid operation. A subsequence increment must be a non-zero integer. Value: `%s`.', property ) );
			}
			if ( s.code === 'ERR_SLICE_INVALID_ELLIPSIS' ) {
				throw new Error( format( 'invalid operation. A subsequence may only include a single ellipsis. Value: `%s`.', property ) );
			}
			if ( s.code === 'ERR_SLICE_INVALID_SUBSEQUENCE' ) {
				throw new Error( format( 'invalid operation. Unsupported slice operation. Value: `%s`.', property ) );
			}
			// s.code === 'ERR_SLICE_TOO_MANY_DIMENSIONS'
			throw new RangeError( format( 'invalid operation. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.', shape.join( ',' ), replace( prop, /\.\.\.,/, '' ).split( ',' ).length ) );
		}
	}
	// Case: empty string or ellipsis
	else if ( prop.length === 0 || prop === '...' ) {
		s = new MultiSlice();
	}
	// Case: non-empty string
	else { // FIXME: need to gracefully handle non-existent properties
		throw new Error( format( 'invalid operation. Unsupported slice operation. Value: `%s`.', property ) );
	}
	return s;
}


// EXPORTS //

module.exports = prop2slice;
