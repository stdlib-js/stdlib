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

var Float64Array = require( '@stdlib/array/float64' );
var pop = require( './../lib' );

var arr;
var out;
var i;

arr = new Float64Array( 100 );
for ( i = 0; i < 100; i++ ) {
	out = pop( arr );
	arr = out[ 0 ];
	console.log( 'Length: %d', arr.length );
}
console.log( arr );
console.log( 'View Length: %d', arr.byteLength );
console.log( 'Buffer Length: %d', arr.buffer.byteLength );
