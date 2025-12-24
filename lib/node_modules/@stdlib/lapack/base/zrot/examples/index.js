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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var zcopy = require( '@stdlib/blas/base/zcopy' );
var zeros = require( '@stdlib/array/zeros' );
var logEach = require( '@stdlib/console/log-each' );
var zrot = require( './../lib' );

function rand() {
	return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

// Generate random input arrays:
var zx = filledarrayBy( 10, 'complex128', rand );
var zxc = zcopy( zx.length, zx, 1, zeros( zx.length, 'complex128' ), 1 );

var zy = filledarrayBy( 10, 'complex128', rand );
var zyc = zcopy( zy.length, zy, 1, zeros( zy.length, 'complex128' ), 1 );

var s = new Complex128( 0.0, 0.75 );

// Apply a plane rotation:
zrot( zx.length, zx, 1, zy, 1, 1.25, s );

// Print the results:
logEach( '(%s,%s) => (%s,%s)', zxc, zyc, zx, zy );
