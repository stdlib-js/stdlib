/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dnanmskmax = require( './../lib' );

var xbuf = uniform( 10, -50.0, 50.0, {
	'dtype': 'float64'
});
var x = new ndarray( 'float64', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var maskbuf = bernoulli( xbuf.length, 0.2, {
	'dtype': 'uint8'
});
var mask = new ndarray( 'uint8', maskbuf, [ maskbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( mask ) );

var v = dnanmskmax( [ x, mask ] );
console.log( v );
