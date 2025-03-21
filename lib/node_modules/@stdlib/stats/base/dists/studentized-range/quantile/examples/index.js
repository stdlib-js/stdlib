/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var quantile = require( './../lib' );

var v;
var r;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
	p = randu();
	r = ( randu() * 20.0 ) + 2.0;
	v = ( randu() * 20.0 ) + 2.0;
	y = quantile( p, r, v );
	console.log( 'p: %d, r: %d, v: %d, Q(p;r,v): %d', p.toFixed( 4 ), r.toFixed( 4 ), v.toFixed( 4 ), y.toFixed( 4 ) );
}
