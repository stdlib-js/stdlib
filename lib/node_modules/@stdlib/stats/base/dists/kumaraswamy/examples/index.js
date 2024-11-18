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

var kumaraswamy = require( './../lib' );

// Create a Kumaraswamy distribution object:
var a = 2.0;
var b = 5.0;
var dist = new kumaraswamy.Kumaraswamy( a, b );

// Calculate basic distribution properties:
console.log( 'Mean: %d', dist.mean );
console.log( 'Median: %d', dist.median );
console.log( 'Mode: %d', dist.mode );
console.log( 'Variance: %d', dist.variance );

// Evaluate the probability density function (PDF):
var x = 0.5;
var y = dist.pdf( x );
console.log( 'PDF at x = %d: %d', x, y );

// Evaluate the cumulative distribution function (CDF):
y = dist.cdf( x );
console.log( 'CDF at x = %d: %d', x, y );

// Evaluate the natural logarithm of PDF and CDF:
console.log( 'Log PDF at x = %d: %d', x, dist.logpdf( x ) );
console.log( 'Log CDF at x = %d: %d', x, dist.logcdf( x ) );

// Calculate the quantile for a given probability:
var p = 0.75;
x = dist.quantile( p );
console.log( 'Quantile at p = %d: %d', p, x );

// Use standalone distribution functions:
x = 0.3;
y = kumaraswamy.pdf( x, a, b );
console.log( 'Standalone PDF at x = %d: %d', x, y );

y = kumaraswamy.cdf( x, a, b );
console.log( 'Standalone CDF at x = %d: %d', x, y );

y = kumaraswamy.quantile( 0.9, a, b );
console.log( 'Standalone Quantile at p = 0.9: %d', y );

// Calculate additional distribution properties:
console.log( 'Kurtosis: %d', kumaraswamy.kurtosis( a, b ) );
console.log( 'Skewness: %d', kumaraswamy.skewness( a, b ) );
console.log( 'Standard Deviation: %d', kumaraswamy.stdev( a, b ) );

// Demonstrate the effect of different shape parameters:
console.log( '\nEffect of shape parameters:' );
var shapes = [
	[ 0.5, 0.5 ],
	[ 5.0, 1.0 ],
	[ 1.0, 5.0 ],
	[ 2.0, 2.0 ],
	[ 10.0, 10.0 ]
];
var params;
var i;
for ( i = 0; i < shapes.length; i++ ) {
	params = shapes[ i ];
	console.log( '\na = %d, b = %d', params[0], params[1] );
	console.log( 'Mean: %d', kumaraswamy.mean( params[0], params[1] ) );
	console.log( 'Median: %d', kumaraswamy.median( params[0], params[1] ) );
	console.log( 'Mode: %d', kumaraswamy.mode( params[0], params[1] ) );
	console.log( 'Skewness: %d', kumaraswamy.skewness( params[0], params[1] ) );
}
