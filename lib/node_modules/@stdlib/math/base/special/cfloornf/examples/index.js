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

var Complex64Array = require( '@stdlib/array/complex64' );
var uniform = require( '@stdlib/random/array/uniform' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var cfloornf = require( './../lib' );

// Generate an array of random complex numbers:
var z = new Complex64Array( uniform( 200, -50.0, 50.0, {
	'dtype': 'float32'
}));

// Generate an array of random integer powers of 10:
var n = discreteUniform( 100, -5, 0, {
	'dtype': 'int32'
});

// Round each component of each complex number to the nearest multiple of `10^n` toward negative infinity:
logEachMap( 'cfloornf(%s, %d) = %s', z, n, cfloornf );
