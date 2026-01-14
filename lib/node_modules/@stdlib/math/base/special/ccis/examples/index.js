/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var Complex128 = require( '@stdlib/complex/float64/ctor' );
var uniform = require( '@stdlib/random/base/uniform' );
var ccis = require( './../lib' );

var z1;
var z2;
var i;

for ( i = 0; i < 100; i++ ) {
	z1 = new Complex128( uniform( -50.0, 50.0 ), uniform( -50.0, 50.0 ) );
	z2 = ccis( z1 );
	console.log( 'ccis(%s) = %s', z1.toString(), z2.toString() );
}
