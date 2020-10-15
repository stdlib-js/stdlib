/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var gfillBy = require( '@stdlib/blas/ext/base/gfill-by' );
var quaternary = require( './../lib' );

function add( x, y, z, w ) {
	return x + y + z + w;
}

var N = 10;

var x = filledarray( 0.0, N, 'generic' );
gfillBy( x.length, x, 1, discreteUniform( -100, 100 ) );
console.log( x );

var y = filledarray( 0.0, N, 'generic' );
gfillBy( y.length, y, 1, discreteUniform( -100, 100 ) );
console.log( y );

var z = filledarray( 0.0, N, 'generic' );
gfillBy( z.length, z, 1, discreteUniform( -100, 100 ) );
console.log( z );

var w = filledarray( 0.0, N, 'generic' );
gfillBy( w.length, w, 1, discreteUniform( -100, 100 ) );
console.log( w );

var u = filledarray( 0.0, N, 'generic' );
console.log( u );

var shape = [ N ];
var strides = [ 1, 1, 1, 1, -1 ];
var offsets = [ 0, 0, 0, 0, N-1 ];

quaternary.ndarray( [ x, y, z, w, u ], shape, strides, offsets, add );
console.log( u );
