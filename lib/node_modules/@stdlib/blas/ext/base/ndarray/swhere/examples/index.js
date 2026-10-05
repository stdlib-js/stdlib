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

var bernoulli = require( '@stdlib/random/array/bernoulli' );
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var BooleanVector = require( '@stdlib/ndarray/vector/bool' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var swhere = require( './../lib' );

var opts = {
	'dtype': 'float32'
};

var cbuf = bernoulli( 10, 0.5, {
	'dtype': 'uint8'
});
var condition = new BooleanVector( cbuf.buffer );
console.log( ndarray2array( condition ) );

var x = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( x ) );

var y = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( y ) );

var out = discreteUniform( [ 10 ], -100, 100, opts );

swhere( [ condition, x, y, out ] );
console.log( ndarray2array( out ) );
