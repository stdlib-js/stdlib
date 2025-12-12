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

var randu = require( '@stdlib/random/base/randu' );
var cdf = require( './../lib' );

var lambda;
var k;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
	x = randu() * 10.0;
	lambda = randu() * 10.0;
	k = randu() * 10.0;
	y = cdf( x, k, lambda );
	console.log( 'x: %d, k: %d, λ: %d, F(x;k,λ): %d', x, k, lambda, y );
}
