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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ones = require( '@stdlib/array/ones' );
var ssyr = require( './../lib' );

var opts = {
	'dtype': 'float32'
};

var N = 3;

var A = ones( N*N, opts.dtype );
var x = discreteUniform( N, -10.0, 10.0, opts );

ssyr( 'row-major', 'upper', 3, 1.0, x, 1, A, 3 );
console.log( A );
