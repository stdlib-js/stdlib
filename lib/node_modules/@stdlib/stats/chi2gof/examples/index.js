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

var poisson = require( '@stdlib/random/base/poisson' );
var Int32Array = require( '@stdlib/array/int32' );
var chi2gof = require( './../lib' );

var N = 400;
var lambda = 3.0;
var rpois = poisson.factory( lambda );

// Draw samples from a Poisson distribution:
var x = [];
var i;
for ( i = 0; i < N; i++ ) {
	x.push( rpois() );
}

// Generate a frequency table:
var freqs = new Int32Array( N );
for ( i = 0; i < N; i++ ) {
	freqs[ x[ i ] ] += 1;
}

// Assess whether the simulated values come from a Poisson distribution:
var out = chi2gof( freqs, 'poisson', lambda );
// returns {...}

console.log( out.toString() );
