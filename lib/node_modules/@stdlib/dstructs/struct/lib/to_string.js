/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var join = require( '@stdlib/array/base/join' );
var floor = require( '@stdlib/math/base/special/floor' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var FORMATS = [
	'none',
	'linear'
];
var isFormat = contains( FORMATS );


// FUNCTIONS //

/**
* Serializes a `struct` instance to a linear string format.
*
* ## Notes
*
* -   The output format is a three-column format having the following layout:
*
*     ```text
*     | byte_number | [field|padding] | notes |
*     ```
*
* -   Nested `struct` instances are intentionally treated as opaque types, as we have limited access to struct internals (e.g., packed versus unpacked, field padding, etc), and we would effectively have to recompute all alignments and associated field data for the purposes of rendering. A user can always separately render a nested `struct` instance to a string in order to better understand its layout independently of its surrounding context in a parent `struct` instance.
*
* @private
* @param {Struct} struct - struct instance
* @param {Array<Object>} fields - list of normalized fields
* @returns {string} string representation
*/
function linearFormat( struct, fields ) {
	var nbytes;
	var fmt0;
	var fmt1;
	var fmt2;
	var bfmt;
	var ufmt;
	var fmt;
	var tmp;
	var out;
	var flg;
	var ib;
	var c0;
	var c1;
	var c2;
	var w0;
	var w1;
	var w;
	var N;
	var o;
	var f;
	var i;
	var j;
	var k;

	N = fields.length;

	// Resolve the size of the struct:
	nbytes = struct.constructor.byteLength;

	// Compute the width of the first column:
	w0 = ( nbytes-1 ).toString().length;

	// Define a format string for the first column:
	fmt0 = '%'+w0+'s';

	// Determine the longest field name...
	w1 = 0;
	for ( i = 0; i < N; i++ ) {
		o = fields[ i ];

		// Format: <name>[<byte_number>]
		w = o.name.length + 1 + ( o.byteLength-1 ).toString().length + 1;
		if ( w > w1 ) {
			w1 = w;
		}
	}
	// Define a format string for the second column:
	fmt1 = '%'+w1+'s';

	// Define a format string for the third column:
	fmt2 = '// %s';

	// Define a format string which combines the columns:
	fmt = '%s: %s   %s';

	// Initialize a byte counter:
	ib = 0;

	out = [];
	for ( i = 0; i < N; i++ ) {
		o = fields[ i ];

		// If we are currently processing fields in a union, move along to the next non-union field...
		if ( i > 0 && ( o.byteOffset === fields[ i-1 ].byteOffset ) ) {
			continue;
		}
		// Check whether this field is the first field of a union...
		if ( i < N-1 ) {
			flg = ( o.byteOffset === fields[ i+1 ].byteOffset );
		} else {
			flg = false;
		}
		for ( j = 0; j < o.byteLength; j++ ) {
			// In the first column, render the byte number:
			c0 = format( fmt0, ib.toString() );

			// In the second column, render the field name and the byte number relative to the field:
			c1 = format( fmt1, format( '%s[%u]', o.name, j ) );

			// If a field type spans multiple bytes, render the byte number:
			if ( o.alignment > 1 ) {
				bfmt = ' (byte %u)';
			} else {
				bfmt = '';
			}
			// If a field is part of a union, make that explicit:
			if ( flg ) {
				ufmt = ' => union: %s';
				tmp = [];
				k = i + 1;
				while ( k < N && o.byteOffset === fields[ k ].byteOffset ) {
					f = fields[ k ];
					tmp.push( format( '%s<%s>[%u]', f.name, f.type, j%f.alignment ) );
					k += 1;
				}
				ufmt = format( ufmt, tmp.join( ', ' ) );
			} else {
				ufmt = '';
			}
			tmp = format( bfmt+ufmt, j%o.alignment );

			// If a field contains multiple elements (i.e., is an array), render the field type along with the element number:
			if ( o.length ) {
				c2 = format( fmt2, format( '%s[%u]%s', o.type, floor( j/o.alignment ), tmp ) );
			}
			// Otherwise, just render the field type:
			else {
				c2 = format( fmt2, format( '%s%s', o.type, tmp ) );
			}
			// Render the row string:
			out.push( format( fmt, c0, c1, c2 ) );
			ib += 1;
		}
		for ( j = 0; j < o.padding; j++ ) {
			c0 = format( fmt0, ib.toString() );
			c1 = format( fmt1, '--' );
			c2 = format( fmt2, 'padding' );
			out.push( format( fmt, c0, c1, c2 ) );
			ib += 1;
		}
	}
	return out.join( '\n' );
}


// MAIN //

/**
* Serializes a `struct` instance to a string.
*
* @private
* @param {Struct} struct - struct instance
* @param {Array<Object>} fields - list of normalized fields
* @param {Options} options - function options
* @param {string} [options.format] - serialization format
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {string} string representation
*/
function toString( struct, fields, options ) { // eslint-disable-line stdlib/no-redeclare
	var opts;
	if ( !isPlainObject( options ) ) {
		throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	opts = {
		'format': 'none'
	};
	if ( hasOwnProp( options, 'format' ) ) {
		opts.format = options.format;
		if ( !isFormat( opts.format ) ) {
			throw new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'format', join( FORMATS, ', ' ), options.format ) );
		}
	}
	if ( opts.format === 'linear' ) {
		return linearFormat( struct, fields );
	}
	// Case: opts.format === 'none'
	return '<Struct>';
}


// EXPORTS //

module.exports = toString;
