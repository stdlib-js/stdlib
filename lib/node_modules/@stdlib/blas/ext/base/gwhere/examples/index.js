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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeros = require( '@stdlib/array/base/zeros' );
var gwhere = require( './../lib' );

var condition = bernoulli( 20, 0.5, {
	'dtype': 'generic'
});
console.log( condition );

var x = discreteUniform( 20, 0, 100, {
	'dtype': 'generic'
});
console.log( x );

var y = discreteUniform( 20, -100, 0, {
	'dtype': 'generic'
});
console.log( y );

var out = zeros( condition.length );
console.log( out );

gwhere( condition.length, condition, 1, x, 1, y, 1, out, 1 );
console.log( out );
