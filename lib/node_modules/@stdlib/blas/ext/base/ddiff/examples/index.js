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
var Float64Array = require( '@stdlib/array/float64' );
var ddiff = require( './../lib' );

var x = discreteUniform( 10, -100, 100, {
	'dtype': 'float64'
});
console.log( 'Input array: ', x );

var p = discreteUniform( 2, -100, 100, {
	'dtype': 'float64'
});
console.log( 'Prepend array: ', p );

var a = discreteUniform( 2, -100, 100, {
	'dtype': 'float64'
});
console.log( 'Append array: ', a );

var out = new Float64Array( 10 );
var w = new Float64Array( 13 );

ddiff( x.length, 4, x, 1, 2, p, 1, 2, a, 1, out, 1, w, 1 );
console.log( 'Output: ', out );
