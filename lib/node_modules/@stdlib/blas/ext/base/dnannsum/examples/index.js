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

var bernoulli = require( '@stdlib/random/base/bernoulli' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Float64Array = require( '@stdlib/array/float64' );
var dnannsum = require( './../lib' );

function rand() {
	if ( bernoulli( 0.5 ) < 1 ) {
		return discreteUniform( 0, 100 );
	}
	return NaN;
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var out = new Float64Array( 2 );
dnannsum( x.length, x, 1, out, 1 );
console.log( out );
