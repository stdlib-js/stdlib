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

var roundn = require( '@stdlib/math/base/special/roundn' );
var chisquare = require( './../lib' );

// Define degrees of freedom:
var k = 5.0;

// Calculate distribution properties:
console.log( 'Mean: %d', chisquare.mean( k ) );
console.log( 'Median: %d', roundn( chisquare.median( k ), -4 ) );
console.log( 'Mode: %d', chisquare.mode( k ) );
console.log( 'Variance: %d', chisquare.variance( k ) );
console.log( 'Standard Deviation: %d', roundn( chisquare.stdev( k ), -4 ) );
console.log( 'Skewness: %d', roundn( chisquare.skewness( k ), -4 ) );
console.log( 'Excess Kurtosis: %d', roundn( chisquare.kurtosis( k ), -4 ) );
console.log( 'Entropy: %d', roundn( chisquare.entropy( k ), -4 ) );

// Evaluate probability functions:
var x = 3.0;
console.log( '\nEvaluating at x = %d', x );
console.log( 'PDF: %d', roundn( chisquare.pdf( x, k ), -4 ) );
console.log( 'logPDF: %d', roundn( chisquare.logpdf( x, k ), -4 ) );
console.log( 'CDF: %d', roundn( chisquare.cdf( x, k ), -4 ) );

// Calculate quantiles:
var p = 0.7;
console.log( '\nQuantile at p = %d: %d', p, roundn( chisquare.quantile( p, k ), -4 ) );

// Evaluate moment-generating function:
var t = 0.1;
console.log( 'MGF at t = %d: %d', t, roundn( chisquare.mgf( t, k ), -4 ) );
