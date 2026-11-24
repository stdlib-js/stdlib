/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var FLOAT32_MAX_NTH_DOUBLE_FACTORIAL = require( './../lib' ); // eslint-disable-line id-length

function factorial2( n ) {
	var a;
	var i;

	a = 1;
	for ( i = n; i >= 2; i -= 2 ) {
		a *= i;
	}
	return a;
}

var v;
var i;
for ( i = 0; i < 100; i++ ) {
	v = factorial2( i );
	if ( i > FLOAT32_MAX_NTH_DOUBLE_FACTORIAL ) {
		console.log( 'Overflow: %d', v );
	} else {
		console.log( 'Valid:    %d', v );
	}
}
