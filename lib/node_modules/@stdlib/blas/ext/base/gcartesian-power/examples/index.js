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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeros = require( '@stdlib/array/zeros' );
var pow = require( '@stdlib/math/base/special/pow' );
var gcartesianPower = require( './../lib' );

var N = 2;
var k = 3;
var x = discreteUniform( N, 1, 10, {
	'dtype': 'generic'
});
console.log( x );

var out = zeros( pow( N, k ) * k, 'generic' );
gcartesianPower( 'row-major', N, k, x, 1, out, k );
console.log( out );
