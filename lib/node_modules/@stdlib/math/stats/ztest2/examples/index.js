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
var ztest2 = require( './../lib' );

var table;
var out;
var x;
var y;
var i;

// Values drawn from a Normal(4,2) distribution
x = new Array( 100 );
for ( i = 0; i < 100; i++ ) {
	x[ i ] = rnorm( 4.0, 2.0 );
}
// Values drawn from a Normal(3,2) distribution
y = new Array( 80 );
for ( i = 0; i < 80; i++ ) {
	y[ i ] = rnorm( 3.0, 2.0 );
}

out = ztest2( x, y, 2.0, 2.0 );
table = out.print();
console.log( table );

out = ztest2( x, y, 2.0, 2.0, {
	'difference': 1.0
});
table = out.print();
console.log( table );
