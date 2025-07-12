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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var triangular = require( './../lib' );

// Scenario: Modeling completion time for a software development task

// Define the distribution parameters (in hours):
var a = 1.5; // Minimum time (best-case scenario)
var b = 4.5; // Maximum time (worst-case scenario)
var c = discreteUniform( 2, 4 ); // Most likely time (mode)
console.log( 'a: %d, b: %d, c: %d', a, b, c );

// Expected (mean) completion time:
var mean = triangular.mean( a, b, c );
console.log( '\nExpected completion time: %d hours', mean );

// Median completion time:
var median = triangular.median( a, b, c );
console.log( 'Median completion time: %d hours', median );

// Variance in completion time:
var variance = triangular.variance( a, b, c );
console.log( 'Variance in completion time: %d hours^2', variance );

// Probability of completing the task within 3 hours:
var x = 3.0;
var prob = triangular.cdf( x, a, b, c );
console.log( '\nProbability of completing within %d hours: %d', x, prob );

// 90th percentile of completion time:
var p = 0.9;
var percentile = triangular.quantile( p, a, b, c );
console.log( '90% of tasks will be completed within %d hours', percentile );

// Relative likelihood of completing the task in exactly 2.5 hours:
x = 2.5;
var likelihood = triangular.pdf( x, a, b, c );
console.log( '\nRelative likelihood of completing in exactly %d hours: %d', x, likelihood );

// Skewness to understand the distribution's shape:
var skewness = triangular.skewness( a, b, c );
console.log( '\nSkewness of completion times: %d', skewness );
if ( skewness > 0 ) {
	console.log( 'The distribution is right-skewed, suggesting occasional longer completion times.' );
} else if ( skewness < 0 ) {
	console.log( 'The distribution is left-skewed, suggesting occasional shorter completion times.' );
} else {
	console.log( 'The distribution is symmetric.' );
}

// Entropy as a measure of uncertainty in the estimate:
var entropy = triangular.entropy( a, b, c );
console.log( '\nEntropy of the distribution: %d nats', entropy );
console.log( 'Higher entropy indicates more uncertainty in completion times.' );
