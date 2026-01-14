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

var FLOAT32_MAX_SAFE_NTH_LUCAS = require( './../lib' ); // eslint-disable-line id-length

function lucas( n ) {
	var a;
	var b;
	var c;
	var i;

	a = 2;
	if ( n === 0 ) {
		return a;
	}
	b = 1;
	for ( i = 2; i <= n; i++ ) {
		c = a + b;
		a = b;
		b = c;
	}
	return b;
}

var v;
var i;
for ( i = 0; i < 100; i++ ) {
	v = lucas( i );
	if ( i > FLOAT32_MAX_SAFE_NTH_LUCAS ) {
		console.log( 'Unsafe: %d', v );
	} else {
		console.log( 'Safe:   %d', v );
	}
}
