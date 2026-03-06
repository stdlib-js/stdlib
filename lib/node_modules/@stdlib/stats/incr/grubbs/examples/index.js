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

var incrgrubbs = require( './../lib' );

var data;
var opts;
var acc;
var i;

// Define a data set (8 mass spectrometer measurements of a uranium isotope; see Tietjen and Moore. 1972. "Some Grubbs-Type Statistics for the Detection of Several Outliers".):
data = [ 199.31, 199.53, 200.19, 200.82, 201.92, 201.95, 202.18, 245.57 ];

// Create a new accumulator:
opts = {
	'init': data.length,
	'alternative': 'two-sided'
};
acc = incrgrubbs( opts );

// Update the accumulator:
for ( i = 0; i < data.length; i++ ) {
	acc( data[ i ] );
}

// Print the test results:
console.log( acc().print() );
