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

var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var abs = require( '@stdlib/math/base/special/abs' );
var SMALLEST_NORMAL = require( '@stdlib/constants/float64/smallest-normal' );
var BIAS = require( '@stdlib/constants/float64/exponent-bias' );
var toBinaryString = require( './../lib' );

var frac;
var sign;
var exp;
var b;
var x;
var i;

// Convert random numbers to literal bit representations...
for ( i = 0; i < 100; i++ ) {
	if ( randu() < 0.5 ) {
		sign = -1.0;
	} else {
		sign = 1.0;
	}
	frac = randu() * 10.0;
	exp = round( randu()*100.0 );
	if ( randu() < 0.5 ) {
		exp = -exp;
	}
	x = sign * frac * pow( 2.0, exp );
	b = toBinaryString( x );
	log( x, b );
}

function log( x, b ) {
	var sign;
	var frac;
	var tmp;
	var exp;

	console.log( '%d => %s', x, b );

	tmp = b.substring( 0, 1 );
	sign = ( tmp === '1' ) ? -1.0 : 1.0;
	console.log( 'sign: %s', tmp );

	tmp = b.substring( 1, 12 );
	exp = parseInt( tmp, 2 ) - BIAS;
	console.log( 'exp: %s => %d', tmp, exp );

	tmp = b.substring( 12 );
	frac = parseInt( tmp, 2 );
	console.log( 'frac: %s => %d', tmp, frac );

	frac = tmp;
	if ( abs(x) < SMALLEST_NORMAL ) {
		frac = '0.' + frac;
		exp = 1 - BIAS; // subnormals are special
	} else {
		frac = '1.' + frac;
	}
	x = sign * frac2double( frac ) * pow( 2.0, exp );

	console.log( '%d*%s*2^%d = %d\n', sign, frac, exp, x );
}

function frac2double( frac ) {
	var sum;
	var i;
	if ( frac[ 0 ] === '1' ) {
		sum = 1.0; // 2^0
	} else {
		sum = 0.0; // subnormals
	}
	for ( i = 2; i < frac.length; i++ ) {
		if ( frac[ i ] === '1' ) {
			sum += pow( 2.0, -(i-1) );
		}
	}
	return sum;
}
