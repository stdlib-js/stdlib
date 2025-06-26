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

var uniform = require( '@stdlib/random/base/uniform' );
var EPS = require( '@stdlib/constants/float64/eps' );
var quantile = require( './../lib' );

var beta;
var mu;
var p;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
	p = uniform( 0.0, 1.0 );
	mu = uniform( -5.0, 5.0 );
	beta = uniform( EPS, 10.0 );
	y = quantile( p, mu, beta );
	console.log( 'p: %d, µ: %d, β: %d, Q(p;µ,β): %d', p.toFixed( 4 ), mu.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
