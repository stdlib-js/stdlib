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


// VARIABLES //

var opts = {
	'encoding': 'utf8'
};
var dir = join( __dirname, 'templates' );

// Templates:
var SINGLE_COEFFICIENT_TEMPLATE = readFile( join( dir, 'single_coefficient.c.txt' ), opts ); // eslint-disable-line id-length
var EVALPOLY_TEMPLATE = readFile( join( dir, 'evalpoly.c.txt' ), opts );
var EMPTY_TEMPLATE = readFile( join( dir, 'empty.c.txt' ), opts );
var LOOP_TEMPLATE = readFile( join( dir, 'loop.c.txt' ), opts );


// MAIN //

/**
* Compiles a C function string for evaluating a polynomial.
*
* @param {NumericArray} c - polynomial coefficients sorted in ascending degree
* @param {Options} [options] - function options
* @param {string} [options.dtype='double'] - input value floating-point data type
* @param {string} [options.name='evalpoly'] - function name
* @returns {string} function string for evaluating a polynomial
*
* @example
* var str = compile( [ 3.0, 2.0, 1.0 ] );
* // returns <string>
*/
function compile( c, options ) {
	var horner;
	var opts;
	var str;
	var n;
	var m;
	var i;

	opts = {
		'dtype': 'double',
		'name': 'evalpoly',
		'suffix': ''
	};
	if ( arguments.length > 1 ) {
		opts.dtype = options.dtype || opts.dtype;
		opts.name = options.name || opts.name;
	}
	if ( opts.dtype === 'float' ) {
		opts.suffix = 'f';
	}
	n = c.length;

	// If no coefficients, the function always returns 0...
	if ( n === 0 ) {
		str = replace( EMPTY_TEMPLATE, '{{dtype}}', opts.dtype );
		str = replace( str, '{{dtype_suffix}}', opts.suffix );
		return replace( str, '{{fname}}', opts.name );
	}
	// If only one coefficient, the function always returns that coefficient...
	if ( n === 1 ) {
		str = c[ 0 ].toString();
		if ( isInteger( c[ 0 ] ) ) {
			str += '.0';
		}
		str = replace( SINGLE_COEFFICIENT_TEMPLATE, '{{coefficient}}', str );
		str = replace( str, '{{dtype}}', opts.dtype );
		str = replace( str, '{{dtype_suffix}}', opts.suffix );
		return replace( str, '{{fname}}', opts.name );
	}
	m = n - 1;

	// Avoid exceeding the maximum stack size on V8 by using a simple loop :(. Note that the choice of `500` was empirically determined...
	if ( n > 500 ) {
		str = '';
		for ( i = 0; i < n; i++ ) {
			str += '\t' + c[ i ].toString();
			if ( isInteger( c[ i ] ) ) {
				str += '.0';
			}
			str += '{{dtype_suffix}}';
			if ( i < m ) {
				str += ',\n';
			}
		}
		str = replace( LOOP_TEMPLATE, '{{coefficients}}', str );
		str = replace( str, '{{num_coefficients}}', n.toString() );
		str = replace( str, '{{dtype}}', opts.dtype );
		str = replace( str, '{{dtype_suffix}}', opts.suffix );
		str = replace( str, '{{fname}}', opts.name );
		return replace( str, '{{FNAME}}', uppercase( opts.name ) );
	}
	// If more than one coefficient, apply Horner's method...
	horner = c[ 0 ].toString();
	if ( isInteger( c[ 0 ] ) ) {
		horner += '.0';
	}
	horner += '{{dtype_suffix}}';
	for ( i = 1; i < n; i++ ) {
		horner += ' + (x * ';
		if ( i < m ) {
			horner += '(';
		}
		horner += c[ i ].toString();
		if ( isInteger( c[ i ] ) ) {
			horner += '.0';
		}
		horner += '{{dtype_suffix}}';
	}
	// Close all the parentheses...
	for ( i = 0; i < (2*(n-1))-1; i++ ) {
		horner += ')';
	}
	str = c[ 0 ].toString();
	if ( isInteger( c[ 0 ] ) ) {
		str += '.0';
	}
	str = replace( EVALPOLY_TEMPLATE, '{{coefficient}}', str );
	str = replace( str, '{{horner}}', horner );
	str = replace( str, '{{dtype}}', opts.dtype );
	str = replace( str, '{{dtype_suffix}}', opts.suffix );
	return replace( str, '{{fname}}', opts.name );
}


// EXPORTS //

module.exports = compile;
