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

var rayleigh = require( './../lib' );

/*
* The Rayleigh distribution can be used to model wind speeds.
* Let's consider a scenario where we want to estimate various properties related to wind speeds.
*/

// Set the Rayleigh distribution parameter (scale parameter):
var s = 10.0;

// Calculate mean, variance, and standard deviation of the Rayleigh distribution:
console.log( rayleigh.mean( s ) );
// => ~12.533

console.log( rayleigh.variance( s ) );
// => ~42.920

console.log( rayleigh.stdev( s ) );
// => ~6.551

// Evaluate the Probability Density Function (PDF) for a specific wind speed:
var w = 15.0;
console.log( rayleigh.pdf( w, s ) );
// => ~0.049

// Determine Cumulative Distribution Function (CDF) for wind speeds up to a certain value:
var t = 15.0;
console.log( rayleigh.cdf( t, s ) );
// => ~0.675

// Calculate the probability of wind speeds exceeding the threshold:
var p = 1.0 - rayleigh.cdf( t, s );
console.log( 'Probability of wind speeds exceeding ' + t + ' m/s:', p );

// Find the wind speed at which there's a 70% chance it won't exceed using the Quantile function:
var c = 0.7;
console.log( rayleigh.quantile( c, s ) );
// => ~15.518
