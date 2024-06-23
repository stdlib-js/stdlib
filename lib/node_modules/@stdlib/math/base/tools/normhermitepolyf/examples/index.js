/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var uniform = require( '@stdlib/random/array/uniform' );
var zeros = require( '@stdlib/array/zeros' );
var smap = require( '@stdlib/strided/base/smap' );
var logEach = require( '@stdlib/console/log-each' );
var normhermitepolyf = require( './../lib' );

// Generate random values at which to evaluate a polynomial:
var x = uniform( 10, -50.0, 50.0, {
	'dtype': 'float32'
});

// Create a polynomial function of degree 1:
var f = normhermitepolyf.factory( 1 );

// Allocate an output array:
var y = zeros( x.length, 'float32' );

// Evaluate the polynomial:
smap( x.length, x, 1, y, 1, f );
logEach( 'He_%d(%.3f) = %.3f', 1, x, y );

// Create a polynomial function of degree 2:
f = normhermitepolyf.factory( 2 );

// Allocate an output array:
y = zeros( x.length, 'float32' );

// Evaluate the polynomial:
smap( x.length, x, 1, y, 1, f );
logEach( 'He_%d(%.3f) = %.3f', 2, x, y );

// Create a polynomial function of degree 3:
f = normhermitepolyf.factory( 3 );

// Allocate an output array:
y = zeros( x.length, 'float32' );

// Evaluate the polynomial:
smap( x.length, x, 1, y, 1, f );
logEach( 'He_%d(%.3f) = %.3f', 3, x, y );
