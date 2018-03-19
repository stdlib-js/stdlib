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

var normal = require( '@stdlib/random/base/normal' ).factory;
var ztest = require( './../lib' );

var rnorm;
var arr;
var out;
var i;

rnorm = normal( 5.0, 4.0, {
	'seed': 37827
});
arr = new Array( 500 );
for ( i = 0; i < arr.length; i++ ) {
	arr[ i ] = rnorm();
}

// Test whether true mean is equal to zero:
out = ztest( arr, 4.0 );
console.log( out.print() );

// Test whether true mean is equal to five:
out = ztest( arr, 4.0, {
	'mu': 5.0
});
console.log( out.print() );
