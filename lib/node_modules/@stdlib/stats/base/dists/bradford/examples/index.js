/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var bradford = require( './../lib' );

/*
* The Bradford distribution is defined over [0,1] with shape parameter c.
*/

var c = 2.0;

// Compute the mean:
console.log( 'Mean: %d', bradford.mean( c ) );

// Compute the median:
console.log( 'Median: %d', bradford.median( c ) );

// Compute the variance:
console.log( 'Variance: %d', bradford.variance( c ) );

// Compute the standard deviation:
console.log( 'Standard Deviation: %d', bradford.stdev( c ) );

// Evaluate the PDF at x = 0.5:
console.log( 'f(0.5): %d', bradford.pdf( 0.5, c ) );

// Evaluate the CDF at x = 0.5:
console.log( 'F(0.5): %d', bradford.cdf( 0.5, c ) );

// Compute the 50th percentile (median):
console.log( '50th Percentile: %d', bradford.quantile( 0.5, c ) );

// Compute the entropy:
console.log( 'Entropy: %d', bradford.entropy( c ) );

// Compute the skewness:
console.log( 'Skewness: %d', bradford.skewness( c ) );

// Compute the mode:
console.log( 'Mode: %d', bradford.mode( c ) );
