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

// MODULES //

var lpad = require( '@stdlib/string/left-pad' );


// VARIABLES //

// Regular expression to parse a mask expression:
var RE_MASK_EXPRESSION = /^(u{0,1}g{0,1}o{0,1}a{0,1}|)([+\-=])(r{0,1}w{0,1}x{0,1})$/;

// Table of permission bit mask offsets:
var PERMS = {
	'r': 2, // read
	'w': 1, // write
	'x': 0  // execute
};

// Table of class indices in the octal format (e.g., `0o0077`):
var WHO = {
	's': 0, // special mode (ignored; see http://man7.org/linux/man-pages/man2/umask.2.html)
	'u': 1, // user
	'g': 2, // group
	'o': 3  // other/non-group
};


// FUNCTIONS //

/**
* Returns a bit mask.
*
* @private
* @param {NonNegativeInteger} offset - bit offset (right-to-left)
* @returns {NonNegativeInteger} bit mask
*
* @example
* var y = bitMask( 3 );
* // returns 8
*/
function bitMask( offset ) {
	return ( 1 << offset )>>>0; // asm type annotation
}

/**
* Sets a bit.
*
* @private
* @param {NonNegativeInteger} value - value
* @param {NonNegativeInteger} offset - bit offset (right-to-left)
* @returns {NonNegativeInteger} updated value
*
* @example
* var y = setBit( 8, 2 );
*/
function setBit( value, offset ) {
	return ( value | bitMask( offset ) )>>>0; // asm type annotation
}

/**
* Clears a bit.
*
* @private
* @param {NonNegativeInteger} value - value
* @param {NonNegativeInteger} offset - bit offset (right-to-left)
* @returns {NonNegativeInteger} updated value
*/
function clearBit( value, offset ) {
	return ( value & ~bitMask( offset ) )>>>0; // asm type annotation
}


// MAIN //

/**
* Converts a mask expression in symbolic notation to an integer.
*
* @private
* @param {NonNegativeInteger} mask - current mask
* @param {string} expr - mask expression
* @returns {(NonNegativeInteger|Error)} integer mask or parse error
*/
function fromSymbolic( mask, expr ) {
	var digits;
	var parts;
	var perm;
	var who;
	var tmp;
	var idx;
	var op;
	var w;
	var o;
	var i;
	var j;
	var k;

	// Split the mask into octal digits (e.g., [ '0', '0', '7', '7' ]):
	digits = lpad( mask.toString( 8 ), 4, '0' ).split( '' );

	// Convert each octal digit to an integer value:
	for ( i = 0; i < digits.length; i++ ) {
		digits[ i ] = parseInt( digits[ i ], 10 );
	}

	// See if we can easily split the mask into separate mask expressions (e.g., `u+x,g=rw,o=` => [ 'u+x', 'g=rw', 'o=' ] ):
	parts = expr.split( ',' );

	// For each expression, split into "class", "operator", and "symbols" and update the mask octal digits:
	for ( i = 0; i < parts.length; i++ ) {
		tmp = parts[ i ].match( RE_MASK_EXPRESSION );
		if ( tmp === null ) {
			return new Error( 'invalid argument. Unable to parse mask expression. Ensure the expression is properly formatted, only uses the class letters "u", "g", "o", and "a", only uses the operators "+", "-", and "=", and only uses the permission symbols "r", "w", and "x". Value: `' + expr + '`.' );
		}
		// Extract the expression parts:
		who = tmp[ 1 ];
		if ( who === '' ) {
			// If a user class is not specified (e.g., `+x`), "ugo" (user, group, other) is implied...
			who = 'ugo';
		} else {
			// Replace `a` (all) user class letter with "ugo" (user, group, other) equivalent...
			w = '';
			for ( k = 0; k < who.length; k++ ) {
				if ( who[ k ] === 'a' ) {
					w += 'ugo';
				} else {
					w += who[ k ];
				}
			}
			who = w;
		}
		op = tmp[ 2 ];
		perm = tmp[ 3 ];

		// NOTE: the algorithm below is from the perspective of the mask. If implemented for, say, `chmod`, the "disabling"/"enabling" logic would be reversed. Recall that a "1" in the mask, serves to **disable** a permission setting, not enable.

		// Disable permissions...
		if ( op === '-' ) {
			if ( perm === '' ) {
				// The `-` operation by itself does not change any bits...
				continue;
			}
			for ( j = 0; j < perm.length; j++ ) {
				o = PERMS[ perm[j] ];
				for ( k = 0; k < who.length; k++ ) {
					idx = WHO[ who[k] ];
					digits[ idx ] = setBit( digits[ idx ], o ); // to disable, we flip on mask bits
				}
			}
		}
		// Enable permissions...
		else if ( op === '+' ) {
			if ( perm === '' ) {
				// The `+` operation by itself does not change any bits...
				continue;
			}
			for ( j = 0; j < perm.length; j++ ) {
				o = PERMS[ perm[j] ];
				for ( k = 0; k < who.length; k++ ) {
					idx = WHO[ who[k] ];
					digits[ idx ] = clearBit( digits[ idx ], o ); // to enable, we clear mask bits
				}
			}
		}
		// Disable all permissions by flipping on all permission mask bits...
		else if ( perm === '' ) { // op === '='
			for ( k = 0; k < who.length; k++ ) {
				idx = WHO[ who[k] ];
				digits[ idx ] = 7;
			}
		}
		// Explicitly set permissions...
		else { // op === '='
			// First, disable all permissions by flipping on all permission mask bits...
			for ( k = 0; k < who.length; k++ ) {
				idx = WHO[ who[k] ];
				digits[ idx ] = 7;
			}
			// Then, explicitly enable permissions by clearing mask bits...
			for ( j = 0; j < perm.length; j++ ) {
				o = PERMS[ perm[j] ];
				for ( k = 0; k < who.length; k++ ) {
					idx = WHO[ who[k] ];
					digits[ idx ] = clearBit( digits[ idx ], o );
				}
			}
		}
	}
	// Convert the digits to an integer value...
	for ( i = 0; i < digits.length; i++ ) {
		digits[ i ] = digits[ i ].toString();
	}
	return parseInt( digits.join( '' ), 8 );
}


// EXPORTS //

module.exports = fromSymbolic;
