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

var roundn = require( '@stdlib/math/base/special/roundn' );
var randu = require( '@stdlib/random/base/randu' );
var pow = require( '@stdlib/math/base/special/pow' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var minDataType = require( './../lib' );

var dt;
var v;
var i;

// Generate numbers of varying magnitudes and determine the minimum data type for each value...
for ( i = 0; i < 100; i++ ) {
	v = randu() * pow( 2.0, discreteUniform( 0, 40 ) );
	if ( randu() < 0.5 ) {
		v *= -1;
	}
	v = roundn( v, discreteUniform( -1, 0 ) );
	dt = minDataType( v );
	console.log( 'min(%d) => %s', v, dt );
}
