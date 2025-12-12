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
var EPS = require( '@stdlib/constants/float64/eps' );
var entropy = require( './../lib' );

var alpha;
var m;
var s;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
	alpha = ( randu()*20.0 ) + EPS;
	s = ( randu()*20.0 ) + EPS;
	m = ( randu()*40.0 ) - 20.0;
	y = entropy( alpha, s, m );
	console.log( 'α: %d, s: %d, m: %d, h(X;α,s,m): %d', alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
