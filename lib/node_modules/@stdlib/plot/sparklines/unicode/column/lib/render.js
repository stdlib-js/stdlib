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

// See [Block Elements]{@link https://en.wikipedia.org/wiki/Block_Elements}.
var UNICODE_BLOCK_ELEMENTS = [
	'▁', // U+2581, lower 1/8
	'▂', // U+2582, lower 2/8
	'▃', // U+2583, lower 3/8
	'▄', // U+2584, lower 4/8
	'▅', // U+2585, lower 5/8
	'▆', // U+2586, lower 6/8
	'▇', // U+2587, lower 7/8
	'█'  // U+2588, full block
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
	var blocks;
	var range;
	var str;
	var min;
	var max;
	var len;
	var idx;
	var d;
	var v;
	var n;
	var i;

	len = this._data.length;
	if ( len === 0 ) {
		return '';
	}
	min = this.yMin;
	max = this.yMax;
	range = abs( max-min );

	// Check if data is constant...
	if ( range === 0.0 ) {
		// If `max` is `0`, encode each finite datum as the smallest block glyph...
		if ( max === 0.0 ) {
			blocks = [ UNICODE_BLOCK_ELEMENTS[ 0 ] ];
		}
		// Otherwise, encode each finite datum as a mid-sized block glyph...
		else {
			blocks = [ UNICODE_BLOCK_ELEMENTS[ 3 ] ];
		}
	} else {
		blocks = UNICODE_BLOCK_ELEMENTS;
	}
	// Generate the sparkline chart, assigning a glyph to each datum...
	n = blocks.length - 1;
	str = '';

	// TODO: color encoding: one color for both pos and neg or two colors for separate colors

	// TODO: negative values diff color (red)

	for ( i = 0; i < len; i++ ) {
		d = this._data[ i ];
		if ( this._infinities && ( d === PINF || d === NINF ) ) {
			str += UNICODE_INF;
			continue;
		}
		if ( !this._isDefined( d, i ) || d === PINF || d === NINF ) {
			str += MISSING_VALUE;
			continue;
		}
		// Normalize the datum (aka feature scaling):
		if ( range ) {
			v = ( d-min ) / range;
		} else {
			v = 0.0;
		}
		// Determine the glyph index:
		idx = round( v*n );
		if ( idx < 0 ) {
			idx = 0;
		} else if ( idx > n ) {
			idx = n;
		}
		// Add the glyph to the chart:
		str += blocks[ idx ];
	}
	return str;
}


// EXPORTS //

module.exports = render;
