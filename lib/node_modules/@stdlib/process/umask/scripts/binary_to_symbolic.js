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

var toBinaryString = require( '@stdlib/number/uint16/base/to-binary-string' );
var lpad = require( '@stdlib/string/left-pad' );

// Set this to "pretty" print results:
var PRETTY_PRINT = false;

var TOTAL;
var masks;
var bstr;
var perm;
var who;
var tmp;
var i;
var j;

// Total number of combinations (octal numbers):
TOTAL = 8 * 8 * 8 * 8;

// For each integer value (octal number), determine the symbolic notation equivalent to the value's binary representation...
masks = new Array( TOTAL );
for ( i = 0; i < TOTAL; i++ ) {
	tmp = '';

	// Convert the octal value to its binary representation:
	bstr = toBinaryString( i );

	// Discard the first four bits (a four digit octal number only uses 12 bits):
	bstr = bstr.substring( 4 );

	// Iterate over each bit starting from the fourth bit (left-to-right; the leftmost three bits are special mode bits, which are ignored when the mask is applied) and determine whether a bit is clear. If the bit is clear, the mask allows a permission to be enabled.
	for ( j = 3; j < bstr.length; j++ ) {
		who = (j-3) / 3;
		if ( who === (who|0) ) { // is integer check
			// Determine the user class:
			who |= 0;
			if ( who === 0 ) {
				who = 'u';
			} else if ( who === 1 ) {
				who = 'g';
			} else {
				who = 'o';
			}
			if ( j >= 6 ) { // who|0 > 0
				tmp += ',';
			}
			tmp += who + '=';
		}
		if ( bstr[ j ] === '0' ) {
			// Determine the permission:
			perm = j % 3;
			if ( perm === 0 ) {
				perm = 'r';
			} else if ( perm === 1 ) {
				perm = 'w';
			} else {
				perm = 'x';
			}
			tmp += perm;
		}
	}
	// [ integer, octal, binary_string, symbolic_notation ]
	masks[ i ] = [ i, lpad( i.toString( 8 ), 4, '0' ), bstr, tmp ];
}

if ( PRETTY_PRINT ) {
	// Print the list of masks in symbolic notation:
	for ( i = 0; i < TOTAL; i++ ) {
		console.log( '%d = %s = %s = %s', masks[i][0], masks[i][1], masks[i][2], masks[i][3] );
	}
} else {
	console.log( JSON.stringify( masks ) );
}
