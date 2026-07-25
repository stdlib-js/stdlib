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

var abs = require( '@stdlib/math/base/special/abs' );
var round = require( '@stdlib/math/base/special/round' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// VARIABLES //

// See [Braille Patterns]{@link https://en.wikipedia.org/wiki/Braille_Patterns}.
var UNICODE_BRAILLE_ELEMENTS = [
	[ '⣀', '⡠', '⡐', '⡈' ], // U+28C0, U+2860, U+2850, U+2848
	[ '⢄', '⠤', '⠔', '⠌' ], // U+2884, U+2824, U+2814, U+2802
	[ '⢂', '⠢', '⠒', '⠊' ], // U+2882, U+2822, U+2812, U+280A
	[ '⢁', '⠡', '⠑', '⠉' ]  // U+2881, U+2821, U+2811, U+2809
];
var UNICODE_INF = '∞'; // U+221E
var MISSING_VALUE = ' ';


// MAIN //

/**
* Renders a chart.
*
* @private
* @returns {string} rendered chart
*/
function render() {
	/* eslint-disable no-invalid-this */
	var glyphs;
	var range;
	var str;
	var min;
	var max;
	var len;
	var idx;
	var FLG;
	var d;
	var v;
	var n;
	var i;
	var j;

	len = this._data.length;
	if ( len === 0 ) {
		return '';
	}
	min = this.yMin;
	max = this.yMax;
	range = abs( max-min );

	// Check if data is constant...
	if ( range === 0.0 ) {
		// If `max` is `0`, encode each finite datum as the lowest Braille glyph...
		if ( max === 0.0 ) {
			glyphs = [ [ UNICODE_BRAILLE_ELEMENTS[0][0] ] ];
		}
		// Otherwise, encode each finite datum as a mid-sized Braille glyph...
		else {
			glyphs = [ [ UNICODE_BRAILLE_ELEMENTS[2][2] ] ];
		}
	} else {
		glyphs = UNICODE_BRAILLE_ELEMENTS;
	}
	// Assign each datum to a bin...
	idx = new Array( len );
	FLG = new Array( len );
	n = glyphs.length - 1;
	for ( i = 0; i < len; i++ ) {
		d = this._data[ i ];
		if ( !this._isDefined( d, i ) || d === PINF || d === NINF ) {
			FLG[ i ] = true;
			continue;
		}
		// Normalize the datum (aka feature scaling):
		if ( range ) {
			v = ( d-min ) / range;
		} else {
			v = 0.0;
		}
		// Determine the bin index:
		j = round( v*n );
		if ( j < 0 ) {
			j = 0;
		} else if ( j > n ) {
			j = n;
		}
		idx[ i ] = j;
	}

	// TODO: color encoding: one color for both pos and neg or two colors for separate colors
	// TODO: negative values diff color (red)

	// For each datum, we peek ahead to determine if the next value is greater than or less than the current value. The magnitude of the difference determines the glyph slope.
	str = '';
	for ( i = 0; i < len; i++ ) {
		d = this._data[ i ];
		if ( this._infinities && ( d === PINF || d === NINF ) ) {
			str += UNICODE_INF;
			continue;
		}
		if ( FLG[ i ] ) {
			str += MISSING_VALUE;
			continue;
		}
		if ( i === len-1 ) {
			// The final glyph is flat, as the next value is unknown...
			j = idx[ i ];
			str += glyphs[ j ][ j ];
			break;
		}
		j = i + 1;
		n = this._data[ j ];
		if ( n === PINF ) {
			j = 3; // highest bin
		} else if ( n === NINF ) {
			j = 0; // lowest bin
		} else if ( FLG[ j ] ) {
			j = idx[ i ]; // same bin, as no slope can be inferred from a missing value
		} else {
			j = idx[ j ]; // slope toward the next value's bin
		}
		str += glyphs[ idx[i] ][ j ];
	}
	return str;
}


// EXPORTS //

module.exports = render;
