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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Float32Array = require( '@stdlib/array/float32' );
var scartesianSquare = require( './../lib' );

var N = 2;
var x = discreteUniform( N, 1, 10, {
	'dtype': 'float32'
});
console.log( x );

var out = new Float32Array( N * N * 2 );
scartesianSquare( 'row-major', N, x, 1, out, 2 );
console.log( out );
