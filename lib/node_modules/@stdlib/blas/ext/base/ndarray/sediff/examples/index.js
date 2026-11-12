/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var sediff = require( './../lib' );

var N = 10;
var N1 = 2;
var N2 = 2;
var opts = {
	'dtype': 'float32'
};

var x = discreteUniform( [ N ], -100, 100, opts );
var p = discreteUniform( [ N1 ], -100, 100, opts );
var a = discreteUniform( [ N2 ], -100, 100, opts );
var out = zeros( [ N + N1 + N2 - 1 ], opts );

console.log( 'x: ', ndarray2array( x ) );
console.log( 'prepend: ', ndarray2array( p ) );
console.log( 'append: ', ndarray2array( a ) );

sediff( [ x, p, a, out ] );
console.log( 'out: ', ndarray2array( out ) );
