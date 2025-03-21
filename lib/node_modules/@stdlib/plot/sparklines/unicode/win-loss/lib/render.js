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

// See [box-drawing characters]{@link https://en.wikipedia.org/wiki/Box-drawing_character}.
var HOME_WIN = [
	'└', // U+2514
	'┴'  // U+2534
];
var HOME_LOSS = [
	'┌', // U+250C
	'┬'  // U+252C
];
var AWAY_WIN = '╵'; // U+2575
var AWAY_LOSS = '╷'; // U+2577

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
	var py;
	var d;
	var i;

	len = this._data.length;
	if ( len === 0 ) {
		return '';
	}
	// Generate the sparkline chart, assigning a glyph to each datum...
	str = '';

	// TODO: "loss" values diff color (red) (?)

	// TODO: specify bkgd color for streaks of a given length (?)

	for ( i = 0; i < len; i++ ) {
		d = this._data[ i ];
		if ( !this._isDefined( d, i ) ) {
			str += MISSING_VALUE;
		} else if ( d === 2 ) {
			if ( py === 2 || py === -2 ) {
				str += HOME_WIN[ 1 ];
			} else {
				str += HOME_WIN[ 0 ];
			}
		} else if ( d === 1 ) {
			str += AWAY_WIN;
		} else if ( d === -1 ) {
			str += AWAY_LOSS;
		} else if ( d === -2 ) {
			if ( py === 2 || py === -2 ) {
				str += HOME_LOSS[ 1 ];
			} else {
				str += HOME_LOSS[ 0 ];
			}
		} else {
			str += MISSING_VALUE;
		}
		py = d; // save the current data value to allow look-back
	}
	return str;
}


// EXPORTS //

module.exports = render;
