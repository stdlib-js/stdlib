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

var uniform = require( '@stdlib/random/base/uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var gfillBy = require( '@stdlib/blas/ext/base/gfill-by' );
var dtypes = require( '@stdlib/array/dtypes' );
var floor = require( './../lib' );

var dt;
var x;
var y;
var i;

dt = dtypes();
for ( i = 0; i < dt.length; i++ ) {
	x = filledarray( 0.0, 10, dt[ i ] );
	gfillBy( x.length, x, 1, uniform( -100.0, 100.0 ) );
	console.log( x );

	y = filledarray( 0.0, x.length, 'generic' );
	console.log( y );

	floor.ndarray( x.length, x, 1, 0, y, -1, y.length-1 );
	console.log( y );
	console.log( '' );
}
