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

var uniform = require( './../lib' );

/*
Let's consider an example where we are modeling the arrival times of guests
at a reception event that runs from 6:00 PM to 8:00 PM, where each arrival
within this 2-hour window is equally likely. We can model this scenario using a
continuous  uniform distribution with a minimum value of 0 (6:00 PM) and
a maximum value of 120 (8:00 PM).
*/

var min = 0.0; // 6:00 PM is 0 minutes after 6:00 PM.
var max = 120.0; // 8:00 PM is 120 minutes after 6:00 PM.

var mean = uniform.mean( min, max );
console.log( mean );
// => 60.0

var variance = uniform.variance( min, max );
console.log( variance );
// => 1200.0

var stdDev = uniform.stdev( min, max );
console.log( stdDev );
// => ~34.641

var entropy = uniform.entropy( min, max );
console.log( entropy );
// => ~4.787

// Probability of arrival within 30 minutes after 6:00 PM:
var p = uniform.cdf( 30, min, max );
console.log( p );
// => 0.25

// Evaluate the PDF at 30 minutes after 6:00 PM:
var pdf = uniform.pdf( 30, min, max );
console.log( pdf );
// => ~0.0083
