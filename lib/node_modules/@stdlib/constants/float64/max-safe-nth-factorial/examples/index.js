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

var FLOAT64_MAX_SAFE_NTH_FACTORIAL = require( './../lib' );

var v;
var i;

function factorial( n ) {
	var a;
	var i;

	a = 1;
	for ( i = 2; i <= n; i++ ) {
		a *= i;
	}
	return a;
}

for ( i = 0; i < 200; i++ ) {
	v = factorial( i );
	if ( i > FLOAT64_MAX_SAFE_NTH_FACTORIAL ) {
		console.log( 'Unsafe: %d', v );
	} else {
		console.log( 'Safe:   %d', v );
	}
}
