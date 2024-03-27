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

var negativeBinomial = require( './../lib' );

/*
* Let's take an example of flipping a biased coin until getting 5 heads.
* This situation can be modeled using a Negative Binomial distribution with r = 5 and p = 1/2.
*/

var r = 5.0;
var p = 1/2;

// Mean can be used to calculate the average number of trials needed to get 5 heads:
console.log( negativeBinomial.mean( r, p ) );
// => 5

// PMF can be used to calculate the probability of getting heads on a specific trial (say on the 8th trial):
console.log( negativeBinomial.pmf( 8, r, p ) );
// => ~0.06

// CDF can be used to calculate the probability up to a certain number of trials (say up to 8 trials):
console.log( negativeBinomial.cdf( 8, r, p ) );
// => ~0.867

// Quantile can be used to calculate the number of trials at which you can be 80% confident that the actual number will not exceed:
console.log( negativeBinomial.quantile( 0.8, r, p ) );
// => 7

// Standard deviation can be used to calculate the measure of the spread of trials around the mean:
console.log( negativeBinomial.stdev( r, p ) );
// => ~3.162

// Skewness can be used to calculate the asymmetry of the distribution of trials:
console.log( negativeBinomial.skewness( r, p ) );
// => ~0.949

// MGF can be used for more advanced statistical analyses and generating moments of the distribution:
console.log( negativeBinomial.mgf( 0.5, r, p ) );
// => ~2277.597
