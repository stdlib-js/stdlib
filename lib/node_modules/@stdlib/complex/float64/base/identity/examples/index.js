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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var cidentity = require( './../lib' );

var z;
var i;
for ( i = 0; i < 100; i++ ) {
	z = new Complex128( discreteUniform( -50, 50 ), discreteUniform( -50, 50 ) ); // eslint-disable-line max-len
	console.log( 'identity(%s) = %s', z, cidentity( z ) );
}
