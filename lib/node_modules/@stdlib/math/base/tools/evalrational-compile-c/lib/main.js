/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var join = require( 'path' ).join;
var readFile = require( '@stdlib/fs/read-file' ).sync;
var replace = require( '@stdlib/string/replace' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var uppercase = require( '@stdlib/string/base/uppercase' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// VARIABLES //

var opts = {
	'encoding': 'utf8'
};
var dir = join( __dirname, 'templates' );

// Templates:
var COEFFICIENT_RATIO_TEMPLATE = readFile( join( dir, 'coefficient_ratio.c.txt' ), opts ); // eslint-disable-line id-length
var EVALRATIONAL_TEMPLATE = readFile( join( dir, 'evalrational.c.txt' ), opts );
var LOOP_TEMPLATE = readFile( join( dir, 'loop.c.txt' ), opts );
var NAN_TEMPLATE = readFile( join( dir, 'nan.c.txt' ), opts );


// FUNCTIONS //

/**
* Serializes a single value to a string.
*
* @private
* @param {number} x - value to serialize
* @returns {string} serialized value
*/
function value2string( x ) {
	var str;
	if ( x === PINF ) {
		return '1.0{{dtype_suffix}} / 0.0{{dtype_suffix}}';
	}
	if ( x === NINF ) {
		return '-1.0{{dtype_suffix}} / 0.0{{dtype_suffix}}';
	}
	str = x.toString();
	if ( isInteger( x ) ) {
		str += '.0';
	}
	str += '{{dtype_suffix}}';
	return str;
}

/**
* Serializes an array of numbers to an indented newline separated list.
*
* @private
* @param {NumericArray} x - array of numbers
* @returns {string} serialized value
*/
function array2list( x ) {
	var str;
	var n;
	var m;
	var i;

	n = x.length;
	m = n - 1;
	str = '';
	for ( i = 0; i < n; i++ ) {
		str += '\t' + x[ i ].toString();
		if ( isInteger( x[ i ] ) ) {
			str += '.0';
		}
		str += '{{dtype_suffix}}';
		if ( i < m ) {
			str += ',\n';
		}
	}
	return str;
}

/**
* Serializes an array of coefficients to a string implementing Horner's method.
*
* @private
* @param {NumericArray} x - coefficients sorted in ascending degree
* @returns {string} output string
*/
function hornerAscending( x ) {
	var str;
	var n;
	var m;
	var i;

	n = x.length;
	m = n - 1;
	str = x[ 0 ].toString();
	if ( isInteger( x[ 0 ] ) ) {
		str += '.0';
	}
	str += '{{dtype_suffix}}';
	for ( i = 1; i < n; i++ ) {
		str += ' + (x * ';
		if ( i < m ) {
			str += '(';
		}
		str += x[ i ].toString();
		if ( isInteger( x[ i ] ) ) {
			str += '.0';
		}
		str += '{{dtype_suffix}}';
	}
	// Close all the parentheses...
	for ( i = 0; i < (2*m)-1; i++ ) {
		str += ')';
	}
	return str;
}

/**
* Serializes an array of coefficients to a string implementing Horner's method.
*
* @private
* @param {NumericArray} x - coefficients sorted in descending degree
* @returns {string} output string
*/
function hornerDescending( x ) {
	var str;
	var m;
	var i;

	m = x.length - 1;
	str = x[ m ].toString();
	if ( isInteger( x[ m ] ) ) {
		str += '.0';
	}
	str += '{{dtype_suffix}}';
	for ( i = m-1; i >= 0; i-- ) {
		str += ' + (ix * ';
		if ( i > 0 ) {
			str += '(';
		}
		str += x[ i ].toString();
		if ( isInteger( x[ i ] ) ) {
			str += '.0';
		}
		str += '{{dtype_suffix}}';
	}
	// Close all the parentheses...
	for ( i = 0; i < (2*m)-1; i++ ) {
		str += ')';
	}
	return str;
}


// MAIN //

/**
* Compiles a C function string for evaluating a rational function.
*
* @param {NumericArray} P - numerator polynomial coefficients sorted in ascending degree
* @param {NumericArray} Q - denominator polynomial coefficients sorted in ascending degree
* @param {Options} [options] - function options
* @param {string} [options.dtype='double'] - input value floating-point data type
* @param {string} [options.name='evalrational'] - function name
* @returns {string} module string exporting a function for evaluating a rational function
*
* @example
* var P = [ -6.0, -5.0 ];
* var Q = [ 3.0, 0.5 ];
*
* var str = compile( P, Q );
* // returns <string>
*/
function compile( P, Q, options ) {
	var opts;
	var str;
	var n;

	opts = {
		'dtype': 'double',
		'name': 'evalrational',
		'suffix': ''
	};
	if ( arguments.length > 2 ) {
		opts.dtype = options.dtype || opts.dtype;
		opts.name = options.name || opts.name;
	}
	if ( opts.dtype === 'float' ) {
		opts.suffix = 'f';
	}
	n = P.length;

	// If no coefficients, the function always returns NaN...
	if ( n === 0 ) {
		str = replace( NAN_TEMPLATE, '{{dtype}}', opts.dtype );
		str = replace( str, '{{dtype_suffix}}', opts.suffix );
		return replace( str, '{{fname}}', opts.name );
	}
	// If P and Q have different lengths, the function always returns NaN...
	if ( n !== Q.length ) {
		str = replace( NAN_TEMPLATE, '{{dtype}}', opts.dtype );
		str = replace( str, '{{dtype_suffix}}', opts.suffix );
		return replace( str, '{{fname}}', opts.name );
	}
	// If P and Q only have one coefficient, the function always returns the ratio of those coefficients...
	if ( n === 1 ) {
		str = replace( COEFFICIENT_RATIO_TEMPLATE, '{{ratio}}', value2string( P[0] / Q[0] ) );
		str = replace( str, '{{dtype}}', opts.dtype );
		str = replace( str, '{{dtype_suffix}}', opts.suffix );
		return replace( str, '{{fname}}', opts.name );
	}
	// Avoid exceeding the maximum stack size on V8 by using a simple loop :(. Note that the choice of `500` was empirically determined...
	if ( n > 500 ) {
		str = replace( LOOP_TEMPLATE, '{{P}}', array2list( P ) );
		str = replace( str, '{{Q}}', array2list( Q ) );
		str = replace( str, '{{ratio}}', value2string( P[0] / Q[0] ) );
		str = replace( str, '{{num_coefficients}}', n.toString() );
		str = replace( str, '{{dtype}}', opts.dtype );
		str = replace( str, '{{dtype_suffix}}', opts.suffix );
		str = replace( str, '{{fname}}', opts.name );
		return replace( str, '{{FNAME}}', uppercase( opts.name ) );
	}
	// If more than one coefficient, apply Horner's method...
	str = replace( EVALRATIONAL_TEMPLATE, '{{P_ASCENDING}}', hornerAscending( P ) );
	str = replace( str, '{{Q_ASCENDING}}', hornerAscending( Q ) );
	str = replace( str, '{{P_DESCENDING}}', hornerDescending( P ) );
	str = replace( str, '{{Q_DESCENDING}}', hornerDescending( Q ) );
	str = replace( str, '{{ratio}}', value2string( P[0] / Q[0] ) );
	str = replace( str, '{{dtype}}', opts.dtype );
	str = replace( str, '{{dtype_suffix}}', opts.suffix );
	return replace( str, '{{fname}}', opts.name );
}


// EXPORTS //

module.exports = compile;
