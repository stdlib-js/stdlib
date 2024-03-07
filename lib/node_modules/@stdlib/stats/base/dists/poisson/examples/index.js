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

var poisson = require( './../lib' );

/*
* Let's take a customer service center example: average rate of customer inquiries is 3 per hour.
* This situation can be modeled using a Poisson distribution with λ = 3
*/

var lambda = 3;

// Mean can be used to calculate the average number of inquiries per hour:
console.log( poisson.mean( lambda ) );
// => 3

// Standard deviation can be used to calculate the measure of the spread of inquiries around the mean:
console.log( poisson.stdev( lambda ) );
// => ~1.7321

// Variance can be used to calculate the variability of the number of inquiries:
console.log( poisson.variance( lambda ) );
// => 3

// PMF can be used to calculate specific number of inquiries in an hour:
console.log( poisson.pmf( 4, lambda ) );
// => ~0.1680

// CDF can be used to calculate probability upto certain number of inquiries in an hour:
console.log( poisson.cdf( 2, lambda ) );
// => ~0.4232

// Quantile can be used to calculate the number of inquiries at which you can be 80% confident that the actual number will not exceed.
console.log( poisson.quantile( 0.8, lambda ) );
// => 4

// MGF can be used for more advanced statistical analyses and generating moments of the distribution.
console.log( poisson.mgf( 1.0, lambda ) );
// => ~173.2690
