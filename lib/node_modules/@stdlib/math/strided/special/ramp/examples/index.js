/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var filledarrayBy = require( '@stdlib/array/filled-by' );
var dtypes = require( '@stdlib/array/typed-real-float-dtypes' );
var ramp = require( './../lib' );

var dt;
var x;
var y;
var i;

dt = dtypes();
for ( i = 0; i < dt.length; i++ ) {
	x = filledarrayBy( 10, dt[ i ], uniform( -10.0, 10.0 ) );
	console.log( x );

	y = filledarray( 0.0, x.length, 'generic' );
	console.log( y );

	ramp.ndarray( x.length, dt[ i ], x, 1, 0, 'generic', y, -1, y.length-1 );
	console.log( y );
	console.log( '' );
}
