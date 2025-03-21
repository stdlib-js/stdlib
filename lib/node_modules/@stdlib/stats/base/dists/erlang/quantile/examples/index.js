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
var round = require( '@stdlib/math/base/special/round' );
var quantile = require( './../lib' );

var lambda;
var k;
var p;
var y;
var i;

for ( i = 0; i < 20; i++ ) {
	p = randu();
	k = round( randu() * 10.0 );
	lambda = randu() * 5.0;
	y = quantile( p, k, lambda );
	console.log( 'p: %d, k: %d, λ: %d, Q(p;k,λ): %d', p.toFixed( 4 ), k, lambda.toFixed( 4 ), y.toFixed( 4 ) );
}
