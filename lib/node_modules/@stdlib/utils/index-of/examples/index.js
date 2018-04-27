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

var indexOf = require( './../lib' );

var arr;
var obj;
var str;
var idx;
var i;

// Arrays...
arr = new Array( 10 );
for ( i = 0; i < arr.length; i++ ) {
	arr[ i ] = i * 10;
}
idx = indexOf( arr, 40 );

console.log( idx );
// => 4

// Array-like objects...
obj = {
	'0': 'beep',
	'1': 'boop',
	'2': 'bap',
	'3': 'bop',
	'length': 4
};

idx = indexOf( obj, 'bap' );

console.log( idx );
// => 2

// Strings...
str = 'beepboopbop';

idx = indexOf( str, 'o' );

console.log( idx );
// => 5
