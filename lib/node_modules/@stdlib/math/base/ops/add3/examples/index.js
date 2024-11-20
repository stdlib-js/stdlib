/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var rand = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledBy = require( '@stdlib/array/base/filled-by' );
var add3 = require( './../lib' );

var x = filledBy( 100, rand( -50, 50 ) );
var y = filledBy( x.length, rand( -50, 50 ) );
var z = filledBy( x.length, rand( -50, 50 ) );

var i;
for ( i = 0; i < x.length; i++ ) {
	console.log( '%d + %d + %d = %d', x[i], y[i], z[i], add3( x[i], y[i], z[i] ) );
}
