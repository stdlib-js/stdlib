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

var normal = require( './../lib' );

/*
A bakery is analyzing cake baking times to ensure consistency and better schedule their baking processes.

The Central Limit Theorem (CLT) states that the average baking times from many batches will follow a normal distribution if there are enough batches (typically n > 30).

Assuming each record represents the average baking time per batch and the bakery has collected the following data:

-      Mean baking time (μ/mu): 20 minutes.
-      Standard deviation in baking time (σ/sigma): 3 minutes.

We can model the average bake times using a normal distribution with μ (mu) = 20.0 minutes and σ = 3.0 minutes.
*/

var mu = 20.0;
var sigma = 3.0;

var normalDist = new normal.Normal( mu, sigma );

// Output the standard deviation of the baking times:
console.log( normalDist.sigma );
// => 3.0

// Adjust distribution parameters
normalDist.sigma = 4.0;

// Adjusted standard deviation to reflect different variance scenario:
console.log( normalDist.sigma );
// => 4.0

// Excess kurtosis of a normal distribution (measure of "tailedness"):
console.log( normalDist.kurtosis );
// => 0.0

// Median baking time:
console.log( normalDist.median );
// => 20.0

// Variance of the baking times after adjusting sigma:
console.log( normalDist.variance );
// => 16.0

// Probability density function at the mean baking time:
console.log( normal.pdf( 20.0, mu, sigma ) );
// => ~0.133

// Cumulative distribution function at the mean (portion of times ≤ 20 minutes):
console.log( normal.cdf( 20.0, mu, sigma ) );
// => ~0.5

// 50th percentile (median) of the baking times:
console.log( normal.quantile( 0.5, mu, sigma ) );
// => 20.0

// Moment-generating function value at 0.5 (used in probability theory):
console.log( normal.mgf( 0.5, mu, sigma ) );
// => ~67846.291

// Entropy of the normal distribution (measure of uncertainty):
console.log( normal.entropy( mu, sigma ) );
// => ~2.518

// Mean baking time:
console.log( normal.mean( mu, sigma ) );
// => 20.0

// Median baking time:
console.log( normal.median( mu, sigma ) );
// => 20.0

// Mode of the baking times (most frequent value):
console.log( normal.mode( mu, sigma ) );
// => 20.0

// Variance of the baking times:
console.log( normal.variance( mu, sigma ) );
// => 9.0

// Skewness of the distribution (symmetry measure):
console.log( normal.skewness( mu, sigma ) );
// => 0.0

var myquantile = normal.quantile.factory( 20.0, 3.0 );

// 20th percentile (value below which 20% baking times fall):
console.log( myquantile( 0.2 ) );
// => ~17.475

// 80th percentile (value below which 80% baking times fall):
console.log( myquantile( 0.8 ) );
// => ~22.525

var mylogpdf = normal.logpdf.factory( 20.0, 3.0 );

// Logarithm of the probability density function at the mean:
console.log( mylogpdf( 20.0 ) );
// => ~-2.018

// Logarithm of the probability density function at 15 minutes:
console.log( mylogpdf( 15.0 ) );
// => ~-3.406
