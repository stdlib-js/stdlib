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

// VARIABLES //

// See [Block Elements]{@link https://en.wikipedia.org/wiki/Block_Elements}.
var UPPER_BLOCK = '▀'; // U+2580
var LOWER_BLOCK = '▄'; // U+2584

var MIDDLE = '─'; // U+2500
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
	var str;
	var len;
	var d;
	var i;

	len = this._data.length;
	if ( len === 0 ) {
		return '';
	}
	// Generate the sparkline chart, assigning a glyph to each datum...
	str = '';

	// TODO: color encoding: one color for both pos and neg or two colors for separate colors

	// TODO: "loss" values diff color (red)

	for ( i = 0; i < len; i++ ) {
		d = this._data[ i ];
		if ( !this._isDefined( d, i ) ) {
			str += MISSING_VALUE;
		} else if ( d < 0.0 ) {
			str += LOWER_BLOCK;
		} else if ( d === 0.0 ) {
			str += MIDDLE;
		} else {
			str += UPPER_BLOCK;
		}
	}
	return str;
}


// EXPORTS //

module.exports = render;
