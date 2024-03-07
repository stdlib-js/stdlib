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

var binomial = require( './../lib' );

/*
* Let's take an example of rolling a fair dice 10 times and counting the number of times a 6 is rolled.
* This situation can be modeled using a Binomial distribution with n = 10 and p = 1/6
*/

var n = 10;
var p = 1/6;

// Mean can be used to calculate the average number of times a 6 is rolled:
console.log( binomial.mean( n, p ) );
// => ~1.6667

// PMF can be used to calculate the probability of getting a certain number of 6s (say 3 sixes):
console.log( binomial.pmf( 3, n, p ) );
// => ~0.1550

// CDF can be used to calculate probability upto certain number of 6s (say upto 3 sixes):
console.log( binomial.cdf( 3, n, p ) );
// => ~0.9303

// Quantile can be used to calculate the number of 6s at which you can be 80% confident that the actual number will not exceed.
console.log( binomial.quantile( 0.8, n, p ) );
// => 3

// Standard deviation can be used to calculate the measure of the spread of 6s around the mean:
console.log( binomial.stdev( n, p ) );
// => ~1.1785

// Skewness can be used to calculate the asymmetry of the distribution of 6s:
console.log( binomial.skewness( n, p ) );
// => ~0.5657

// MGF can be used for more advanced statistical analyses and generating moments of the distribution:
console.log( binomial.mgf( 0.5, n, p ) );
// => ~2.7917
