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

var rnorm = require( '@stdlib/random/base/normal' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pcorrtest = require( './../lib' );

var table;
var out;
var rho;
var x;
var y;
var i;

rho = 0.5;
x = new Array( 300 );
y = new Array( 300 );
for ( i = 0; i < 300; i++ ) {
	x[ i ] = rnorm( 0.0, 1.0 );
	y[ i ] = ( rho * x[ i ] ) + rnorm( 0.0, sqrt( 1.0 - (rho*rho) ) );
}

out = pcorrtest( x, y );
table = out.print();
console.log( table );

out = pcorrtest( x, y, {
	'rho': 0.5
});
table = out.print();
console.log( table );
