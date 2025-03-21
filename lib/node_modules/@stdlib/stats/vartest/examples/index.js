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
var vartest = require( './../lib' );

var out;
var x;
var y;
var i;

x = new Array( 60 );
for ( i = 0; i < x.length; i++ ) {
	x[ i ] = rnorm( 2.0, 1.0 );
}
y = new Array( 40 );
for ( i = 0; i < y.length; i++ ) {
	y[ i ] = rnorm( 1.0, 2.0 );
}

// Test whether the variances of `x` and `y` are the same:
out = vartest( x, y );
console.log( out.print() );

// Test whether the variance of `x` is one fourth of the variance of `y`:
out = vartest( x, y, {
	'ratio': 0.25
});
console.log( out.print() );
