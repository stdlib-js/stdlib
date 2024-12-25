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

var lpad = require( '@stdlib/string/left-pad' );
var imuldw = require( './../lib' );

var i;
var j;
var y;

for ( i = 0x7FFFFFF0; i < 0x7FFFFFFF; i++ ) {
	for ( j = i; j < 0x7FFFFFFF; j++ ) {
		y = imuldw( i|0, j|0 );
		console.log( '%d x %d = 0x%s%s', i|0, j|0, lpad( ( y[0] >>> 0 ).toString( 16 ), 8, '0' ), lpad( ( y[1] >>> 0 ).toString( 16 ), 8, '0' ) );
	}
}
