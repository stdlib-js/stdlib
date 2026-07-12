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

var min = require( '@stdlib/math/base/special/fast/min' );
var isUnionType = require( './is_union_type.js' );


// FUNCTIONS //

/**
* Sets alignment padding for one or more field objects.
*
* ## Notes
*
* -   This function mutates each field object.
*
* @private
* @param {Array<Object>} fields - list of normalized field objects
* @param {NonNegativeInteger} padding - alignment padding
* @returns {Array<Object>} input array
*/
function setPadding( fields, padding ) {
	var i;
	for ( i = 0; i < fields.length; i++ ) {
		fields[ i ].padding = padding;
	}
	return fields;
}


// MAIN //

/**
* Computes the byte offset for each field.
*
* ## Notes
*
* -   This function mutates each field object.
*
* @private
* @param {Array<Object>} fields - list of normalized field objects
* @param {PositiveInteger} max - maximum alignment
* @returns {Array<Object>} input array
*/
function byteOffsets( fields, max ) {
	var alignment;
	var padding;
	var offset;
	var tmp;
	var o;
	var i;
	var j;

	offset = 0;
	for ( i = 0; i < fields.length; i++ ) {
		o = fields[ i ];

		// Resolve the alignment requirement for this field:
		alignment = min( o.alignment, max );

		// Align the current offset to the required boundary:
		padding = ( alignment-(offset%alignment) ) % alignment;
		offset += padding;

		// Set the padding for the previous member:
		if ( i > 0 ) {
			tmp = fields[ i-1 ];
			tmp.padding = padding;
			if ( isUnionType( o ) ) {
				setPadding( tmp.fields, padding );
			}
		}
		// Set the offset for the current member:
		o.byteOffset = offset;

		// If the current member is a union type, propagate the offset to its child field objects...
		if ( isUnionType( o ) ) {
			for ( j = 0; j < o.fields.length; j++ ) {
				o.fields[ j ].byteOffset = offset;
			}
		}
		// Advance the offset by the size, in bytes, of the member:
		offset += o.byteLength;
	}
	// Compute the padding for the last member:
	padding = ( alignment - (offset%alignment) ) % alignment;

	// Set the padding for the last member:
	o.padding = padding;

	// If the last member is a union type, propagate the offset to its child field objects...
	if ( isUnionType( o ) ) {
		setPadding( o.fields, padding );
	}

	return fields;
}


// EXPORTS //

module.exports = byteOffsets;
