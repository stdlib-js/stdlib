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

var cosine = require( './../lib' );

// Create a raised cosine distribution:
var mu = 2.0;
var s = 1.5;
var dist = new cosine.Cosine( mu, s );

// Calculate various distribution properties:
console.log( 'Mean: %d', dist.mean );
// => 'Mean: 2'

console.log( 'Median: %d', dist.median );
// => 'Median: 2'

console.log( 'Mode: %d', dist.mode );
// => 'Mode: 2'

console.log( 'Standard Deviation: %d', dist.stdev );
// => 'Standard Deviation: 0.5422680827869919'

console.log( 'Variance: %d', dist.variance );
// => 'Variance: 0.29405467360947996'

// Evaluate the probability density function (PDF):
var x = 1.5;
console.log( 'PDF( %d ): %d', x, dist.pdf( x ) );
// => 'PDF( 1.5 ): 0.5'

// Evaluate the cumulative distribution function (CDF):
console.log( 'CDF( %d ): %d', x, dist.cdf( x ) );
// => 'CDF( 1.5 ): 0.19550110947788535'

// Calculate distribution moments:
console.log( 'Skewness: %d', cosine.skewness( mu, s ) );
// => 'Skewness: 0'

console.log( 'Excess Kurtosis: %d', cosine.kurtosis( mu, s ) );
// => 'Excess Kurtosis: -0.5937628755982807'
