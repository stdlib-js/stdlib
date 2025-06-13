/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var FLOAT64_MAX_SAFE_NTH_TRIBONACCI = require( './../lib' ); // eslint-disable-line id-length

function tribonacci( n ) {
	var a;
	var b;
	var c;
	var d;
	var i;

	a = 0;
	b = 0;
	c = 1;
	if ( n === 0 ) {
		return a;
	}
	if ( n === 1 ) {
		return b;
	}
	if ( n === 2 ) {
		return c;
	}
	for ( i = 3; i <= n; i++ ) {
		d = a + b + c;
		a = b;
		b = c;
		c = d;
	}
	return c;
}

var v;
var i;
for ( i = 0; i < 100; i++ ) {
	v = tribonacci( i );
	if ( i > FLOAT64_MAX_SAFE_NTH_TRIBONACCI ) {
		console.log( 'Unsafe: %d', v );
	} else {
		console.log( 'Safe:   %d', v );
	}
}
