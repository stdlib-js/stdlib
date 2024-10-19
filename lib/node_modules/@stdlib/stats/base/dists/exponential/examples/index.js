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

var Float64Array = require( '@stdlib/array/float64' );
var randomExponential = require( '@stdlib/random/array/exponential' );
var dcusum = require( '@stdlib/blas/ext/base/dcusum' );
var exponential = require( './../lib' );

// Simulate interarrival times of customers entering a store:
var lambda = 0.5; // Average rate (customers per minute)
var numCustomers = 10;

// Generate interarrival times using the exponential distribution:
var interarrivalTimes = randomExponential( numCustomers, lambda, {
	'dtype': 'float64'
});

console.log( 'Simulated interarrival times for ' + numCustomers + ' customers: ' );
console.log( interarrivalTimes );

// Calculate cumulative arrival times by computing the cumulative sum of interarrival times:
var arrivalTimes = new Float64Array( interarrivalTimes.length );
dcusum( interarrivalTimes.length, 0.0, interarrivalTimes, 1, arrivalTimes, 1 );

console.log( '\nCustomer arrival times: ' );
console.log( arrivalTimes );

// Probability that a customer arrives within two minutes:
var x = 2.0;
var prob = exponential.cdf( x, lambda );
console.log( '\nProbability that a customer arrives within ' + x + ' minutes: ' + prob.toFixed(4) );

// Expected time until the next customer arrives:
var mean = exponential.mean( lambda );
console.log( 'Expected interarrival time: ' + mean + ' minutes' );

var dist = new exponential.Exponential( lambda );

var median = dist.median;
console.log( 'Median interarrival time: ' + median + ' minutes' );

// Evaluate the PDF at x = 1.0:
var out = dist.pdf( 1.0 );
console.log( 'PDF at x = 1: ' + out.toFixed(4) );

// Evaluate the MGF at t = 0.1:
out = dist.mgf( 0.1 );
console.log( 'MGF at t = 0.1: ' + out.toFixed(4) );
