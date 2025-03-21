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

// TODO: clean-up

// MODULES //

var divide = require( 'compute-divide' );
var mean = require( 'compute-mean' );
var subtract = require( 'compute-subtract' );
var abs = require( '@stdlib/math/base/special/abs' );
var log2 = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// MAIN //

var customErrs;
var nativeErrs;
var yexpected;
var ycustom;
var ynative;
var x;
var i;

x = data.x;
yexpected = data.expected;
ycustom = new Array( x.length );
ynative = new Array( x.length );
for ( i = 0; i < x.length; i++ ) {
	if ( yexpected[ i ] === 0.0 ) {
		yexpected[ i ] += 1e-16;
	}
	ycustom[ i ] = log2( x[ i ] );
	ynative[ i ] = Math.log2( x[ i ] );
}

customErrs = abs( divide( subtract( ycustom, yexpected ), yexpected ) );
nativeErrs = abs( divide( subtract( ynative, yexpected ), yexpected ) );

console.log( 'The mean relative error of Math.log2 compared to Julia is %d', mean( nativeErrs ) );
console.log( 'The mean relative error of this module compared to Julia is %d', mean( customErrs ) );
