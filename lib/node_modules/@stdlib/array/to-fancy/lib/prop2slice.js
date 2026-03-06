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

var trim = require( '@stdlib/string/base/trim' );
var seq2slice = require( '@stdlib/slice/base/seq2slice' );
var str2slice = require( '@stdlib/slice/base/str2slice' );
var startsWith = require( '@stdlib/string/base/starts-with' );
var format = require( '@stdlib/string/format' );
var RE_SUBSEQ = require( './re_subseq.js' );


// FUNCTIONS //

/**
* Tests if an indexing expression is a serialized Slice object.
*
* @private
* @param {string} prop - property name
* @returns {boolean} result
*
* @example
* var out = isSlice( 'Slice(null,null,1)' );
* // returns true
*
* @example
* var out = isSlice( ':' );
* // returns false
*/
function isSlice( prop ) {
	return (
		prop[ 0 ] === 'S' &&
		startsWith( prop, 'Slice(', 0 ) &&
		prop[ prop.length-1 ] === ')'
	);
}

/**
* Tests if an indexing expression is a subsequence.
*
* @private
* @param {string} prop - property name
* @returns {boolean} result
*
* @example
* var out = isSubsequence( '::-2' );
* // returns true
*
* @example
* var out = isSubsequence( '-2' );
* // returns false
*/
function isSubsequence( prop ) {
	// TODO: consider whether to make this check more robust (e.g., should we actually throw if someone tries to access `foo:bar`? If we make this check more exact, how would we distinguish between a non-existent `foo:bar` property and an actual error in the subsequence string?)
	return RE_SUBSEQ.test( prop );
}

/**
* Parses a serialized Slice object.
*
* @private
* @param {string} raw - original unprocessed input string
* @param {string} str - serialized Slice object
* @throws {Error} invalid slice operation
* @returns {Slice} Slice object
*
* @example
* var s = parseSlice( '  Slice(null,null,1)  ', 'Slice(null,null,1)' );
* // returns <Slice>
*/
function parseSlice( raw, str ) {
	var s = str2slice( str );
	if ( s === null ) {
		throw new Error( format( 'invalid operation. Unsupported slice operation. Value: `%s`.', raw ) );
	}
	return s;
}

/**
* Parses a subsequence string.
*
* @private
* @param {string} raw - original unprocessed input string
* @param {string} str - subsequence string
* @param {NonNegativeInteger} max - index upper bound
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @throws {Error} invalid slice operation
* @throws {RangeError} slice exceeds array bounds
* @returns {Slice} Slice object
*
* @example
* var s = parseSubsequence( ' ::-2 ', '::-2', 10, false );
* // returns <Slice>
*/
function parseSubsequence( raw, str, max, strict ) {
	var s = seq2slice( str, max, true );
	if ( s.code ) {
		if ( s.code === 'ERR_SLICE_INVALID_INCREMENT' ) {
			throw new Error( format( 'invalid operation. A subsequence increment must be a non-zero integer. Value: `%s`.', raw ) );
		}
		if ( s.code === 'ERR_SLICE_INVALID_SUBSEQUENCE' ) {
			throw new Error( format( 'invalid operation. Unsupported slice operation. Value: `%s`.', raw ) );
		}
		// NOTE: the following error check must come last due to fall-through when in non-strict mode...
		if ( s.code === 'ERR_SLICE_OUT_OF_BOUNDS' ) {
			if ( strict ) {
				throw new RangeError( format( 'invalid operation. Slice exceeds array bounds.' ) );
			}
			// Repeat parsing, this time allowing for out-of-bounds slices:
			s = seq2slice( str, max, false );
		}
	}
	return s;
}


// MAIN //

/**
* Converts an indexing expression to a Slice object.
*
* @private
* @param {Object} target - target object
* @param {string} property - property name
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @throws {Error} invalid slice operation
* @throws {RangeError} slice exceeds array bounds
* @returns {(Slice|null)} slice object (or null)
*/
function prop2slice( target, property, strict ) {
	var prop = trim( property );
	if ( isSlice( prop ) ) {
		return parseSlice( property, prop );
	}
	if ( isSubsequence( prop ) ) {
		return parseSubsequence( property, prop, target.length, strict );
	}
	// Everything else (including undefined/non-existent properties):
	return null;
}


// EXPORTS //

module.exports = prop2slice;
