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

var incrspace = require( '@stdlib/math/utils/incrspace' );
var boxcox = require( './../lib' );

var x = incrspace( -1.0, 10.0, 1.0 );
var l = incrspace( -0.5, 5.0, 0.5 );
var b;
var i;
var j;

for ( i = 0; i < x.length; i++ ) {
	for ( j = 0; j < l.length; j++ ) {
		b = boxcox( x[ i ], l[ j ] );
		console.log( 'boxcox(%d, %d) = %d', x[ i ], l[ j ], b );
	}
}
