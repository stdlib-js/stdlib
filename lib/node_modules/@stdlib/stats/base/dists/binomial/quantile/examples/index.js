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

var r;
var i;
var n;
var p;
var y;

for ( i = 0; i < 10; i++ ) {
	r = randu();
	n = round( randu() * 100.0 );
	p = randu();
	y = quantile( r, n, p );
	console.log( 'r: %d, n: %d, p: %d, Q(r;n,p): %d', r.toFixed( 4 ), n, p.toFixed( 4 ), y );
}
