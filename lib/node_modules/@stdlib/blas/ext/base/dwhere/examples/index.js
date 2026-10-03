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

var bernoulli = require( '@stdlib/random/array/bernoulli' );
var uniform = require( '@stdlib/random/array/uniform' );
var BooleanArray = require( '@stdlib/array/bool' );
var Float64Array = require( '@stdlib/array/float64' );
var dwhere = require( './../lib' );

var cbuf = bernoulli( 20, 0.5, {
	'dtype': 'uint8'
});
var condition = new BooleanArray( cbuf.buffer );
console.log( condition );

var x = uniform( 20, 0.0, 100.0, {
	'dtype': 'float64'
});
console.log( x );

var y = uniform( 20, -100.0, 0.0, {
	'dtype': 'float64'
});
console.log( y );

var out = new Float64Array( condition.length );
console.log( out );

dwhere( condition.length, condition, 1, x, 1, y, 1, out, 1 );
console.log( out );
