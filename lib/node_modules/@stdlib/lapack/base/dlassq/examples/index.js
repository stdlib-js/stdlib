/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var Float64Array = require( '@stdlib/array/float64' );
var dlassq = require( './../lib' );

var X = discreteUniform( 10, -10, 10, {
	'dtype': 'float64'
});
console.log( X );

var scale = new Float64Array( [ 1.0 ] );
var sumsq = new Float64Array( [ 0.0 ] );

dlassq( X.length, X, 1, scale, sumsq );
console.log( scale );
console.log( sumsq );
