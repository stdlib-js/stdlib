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

var floor = require( '@stdlib/math/base/special/floor' );
var exp10 = require( '@stdlib/math/base/special/exp10' );


// FUNCTIONS //

/**
* Comparator function to sort numeric array in ascending order.
*
* @private
* @param {number} a - first number
* @param {number} b - second number
* @returns {number} a - b
*
* @example
* var arr = [ 3, 1, 2, 5, 4 ];
* var sorted = arr.sort( ascending );
* // returns [ 1, 2, 3, 4, 5 ]
*/
function ascending( a, b ) {
	return a - b;
}

/**
* Comparator function to sort object data array in ascending order.
*
* @private
* @param {Object} a - first data object
* @param {Object} b - second data object
* @returns {number} a.val - b.val
*
* @example
* var arr = [
*    { 'val': 2, 'class': 'x' },
*    { 'val': 3, 'class': 'y' },
*    { 'val': 7, 'class': 'y' },
*    { 'val': 2, 'class': 'x' },
* ];
* var sorted = arr.sort( ascending2 );
* // returns [...]
*/
function ascending2( a, b ) {
	return a.val - b.val;
}

/**
* Generates a sequence of whitespace characters.
*
* @private
* @param {integer} n - number of characters
* @returns {string} sequence of whitespace characters
*
* @example
* var str = spaces( 3 );
* // returns '   '
*/
function spaces( n ) {
	return new Array( n ).join( ' ' );
}

/**
* Create string representation of stem-and-leaf plot for a single data vector.
*
* @private
* @param {(Array|TypedArray)} x - input data
* @param {PositiveInteger} interval - 10**leafDigits
* @returns {string} chart representation
*/
function constructSingleDisplay( x, interval ) {
	var stemWidth;
	var leafWidth;
	var lastStem;
	var chrs;
	var len;
	var str;
	var stm;
	var lf;
	var i;
	var v;
	var n;

	x.sort( ascending );

	len = x.length;
	stm = new Array( len );
	lf = new Array( len );
	stemWidth = 0;
	leafWidth = 0;

	for ( i = 0; i < len; i++ ) {
		stm[ i ] = floor( x[ i ] / interval );
		chrs = stm[ i ].toString().length;
		if ( chrs > stemWidth ) {
			stemWidth = chrs;
		}
		lf[ i ] = x[ i ] % interval;
		chrs = lf[ i ].toString().length;
		if ( chrs > leafWidth ) {
			leafWidth = chrs;
		}
	}

	str = '';
	for ( i = 0; i < len; i++ ) {
		while ( lastStem < stm[ i ] ) {
			lastStem += 1;
			str += '\n';
			n = lastStem.toString().length - 1;
			str += ' ' + lastStem + spaces( stemWidth - n );
			str += ' | ';
		}
		if ( stm[ i ] !== lastStem ) {
			str += '\n';
			v = stm[ i ].toString();
			n = v.length - 1;
			str += ' ' + v + spaces( stemWidth - n );
			str += ' | ';
		}
		v = lf[ i ].toString();
		n = v.length;
		str += v + spaces( leafWidth - n ) + ' ';
		lastStem = stm[ i ];
	}
	return str;
}

/**
* Create string representation of stem-and-leaf plot for two data vectors.
*
* @private
* @param {(Array|TypedArray)} x - first input data
* @param {(Array|TypedArray)} y - second input data
* @param {PositiveInteger} interval - 10**leafDigits
* @returns {string} chart representation
*/
function constructDoubleDisplay( x, y, interval ) {
	var xLeafWidth;
	var yLeafWidth;
	var stemWidth;
	var lastStem;
	var nSpaces;
	var lines;
	var line;
	var lmax;
	var chrs;
	var data;
	var arr;
	var lfs;
	var len;
	var stm;
	var i;
	var v;
	var n;

	data = [];
	for ( i = 0; i < x.length; i++ ) {
		v = {
			'val': x[ i ],
			'class': 'x'
		};
		data.push( v );
	}
	for ( i = 0; i < y.length; i++ ) {
		v = {
			'val': y[ i ],
			'class': 'y'
		};
		data.push( v );
	}
	len = data.length;

	data.sort( ascending2 );

	stemWidth = 0;
	xLeafWidth = 0;
	yLeafWidth = 0;

	stm = new Array( len );
	lfs = new Array( len );
	for ( i = 0; i < len; i++ ) {
		stm[ i ] = floor( data[ i ].val / interval );
		chrs = stm[ i ].toString().length;
		if ( chrs > stemWidth ) {
			stemWidth = chrs;
		}
		if ( data[i].class === 'x' ) {
			lfs[ i ] = data[ i ].val % interval;
			chrs = lfs[ i ].toString().length;
			if ( chrs > xLeafWidth ) {
				xLeafWidth = chrs;
			}
		} else if ( data[i].class === 'y' ) {
			lfs[ i ] = data[ i ].val % interval;
			chrs = lfs[ i ].toString().length;
			if ( chrs > yLeafWidth ) {
				yLeafWidth = chrs;
			}
		}
	}

	lines = [];
	line = '';
	for ( i = 0; i < len; i++ ) {
		while ( lastStem < stm[ i ] ) {
			lines.push( line );
			lastStem += 1;
			n = lastStem.toString().length - 1;
			line = '& | ' + spaces( stemWidth - n ) + lastStem + ' | ';
		}
		if ( stm[ i ] !== lastStem ) {
			if ( line ) {
				lines.push( line );
			}
			v = stm[ i ].toString();
			n = v.length - 1;
			line = '& | ';
			line += spaces( stemWidth - n ) + v;
			line += ' | ';
		}
		v = lfs[ i ].toString();
		n = v.length;
		if ( data[i].class === 'x' ) {
			line = v + spaces( xLeafWidth - n ) + ' ' + line;
		} else if ( data[i].class === 'y' ) {
			line = line + v + spaces( xLeafWidth - n ) + ' ';
		}
		lastStem = stm[ i ];
	}

	// Align lines...
	lmax = 0;
	for ( i = 0; i < lines.length; i++ ) {
		v = lines[ i ].indexOf( '|' );
		if ( v > lmax ) {
			lmax = v;
		}
	}
	for ( i = 0; i < lines.length; i++ ) {
		arr = lines[ i ].split( '&', 2 );
		nSpaces = lmax - arr[ 0 ].length;
		arr[ 0 ] = spaces( nSpaces ) + arr[ 0 ];
		lines[ i ] = arr[ 0 ] + arr[ 1 ];
	}

	return lines.join( '\n' );
}


// MAIN //

/**
* Renders a chart.
*
* @private
* @returns {string} rendered chart
*/
function render() {
	/* eslint-disable no-invalid-this */
	var interval;
	var digits;
	var ret;
	var x;
	var y;

	x = this._x;
	y = this._y;

	digits = this._leafDigits;
	interval = exp10( digits );

	if ( x.length && y.length ) {
		ret = constructDoubleDisplay( x, y, interval );
	} else if ( x.length && !y.length ) {
		ret = constructSingleDisplay( x, interval );
	} else if ( y.length && !x.length ) {
		ret = constructSingleDisplay( y, interval );
	}

	ret += '\n\n';
	ret += 'Legend: ';
	ret += '\n X | Y  => ' + interval + ' * X + Y\n';
	return ret;
}


// EXPORTS //

module.exports = render;
