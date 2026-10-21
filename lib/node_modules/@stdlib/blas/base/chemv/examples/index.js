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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var logEach = require( '@stdlib/console/log-each' );
var chemv = require( './../lib' );

function rand() {
	return new Complex64( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var N = 3;

var x = filledarrayBy( N, 'complex64', rand );
var y = filledarrayBy( N, 'complex64', rand );
var A = filledarrayBy( N*N, 'complex64', rand );

var alpha = new Complex64( 2.0, 3.0 );
var beta = new Complex64( 3.0, -2.0 );

chemv( 'row-major', 'lower', N, alpha, A, N, x, 1, beta, y, 1 );

// Print the results:
logEach( '%s', y );

chemv.ndarray( 'lower', N, alpha, A, 1, N, 0, x, 1, 0, beta, y, 1, 0 );

// Print the results:
logEach( '%s', y );
