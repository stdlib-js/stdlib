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
var str2multislice = require( '@stdlib/slice/base/str2multislice' );
var seq2multislice = require( '@stdlib/slice/base/seq2multislice' );
var sargs2multislice = require( '@stdlib/slice/base/sargs2multislice' );
var format = require( '@stdlib/string/format' );
var RE_SUBSEQ = require( './re_subseq.js' );


// MAIN //

/**
* Converts an n-dimensional ndarray indexing expression to a slice.
*
* @private
* @param {Object} target - target object
* @param {string} property - property name
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @throws {Error} invalid slice operation
* @throws {RangeError} number of slice dimensions must match the number of array dimensions
* @returns {MultiSlice} multi-slice object
*/
function prop2slice( target, property, strict ) {
	var shape;
	var prop;
	var ch;
	var s;

	prop = trim( property );

	// Retrieve the first character in order to to detect how a slice operation was specified:
	ch = prop[ 0 ];

	// Case: multi-slice (e.g., 'MultiSlice(Slice(0,10,2),null,2,Slice(10,5,-1))')
	if ( ch === 'M' ) {
		s = str2multislice( prop );
		if ( s === null ) {
			throw new Error( format( 'invalid operation. Unsupported slice operation. Value: `%s`.', property ) );
		}
	}
	// Case: subsequence string (e.g., '...' or ':10,1,::-1,:,-5,2::3')
	else if ( RE_SUBSEQ.test( prop ) || prop === '...' ) {
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
			// NOTE: the following error check must come last due to fall-through when in non-strict mode...
			if ( s.code === 'ERR_SLICE_OUT_OF_BOUNDS' ) {
				if ( strict ) {
					throw new RangeError( format( 'invalid operation. Slice exceeds array bounds. Array shape: (%s).', shape.join( ',' ) ) );
				}
				// Repeat parsing, this time allowing for out-of-bounds slices:
				s = seq2multislice( prop, shape, false );
			}
		}
	}
	// Case: array syntax (e.g., [ Slice(0,10,1), null, Slice(4,null,-1) ]) or Slice or integer or arbitrary string (where the latter three are not valid for >2d arrays)
	else {
		s = sargs2multislice( prop );
		if ( s === null ) { // FIXME: need to gracefully handle non-existent properties
			throw new Error( format( 'invalid operation. Unsupported slice operation. Value: `%s`.', property ) );
		}
	}
	return s;
}


// EXPORTS //

module.exports = prop2slice;
