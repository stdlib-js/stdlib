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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var gcdf = require( './../lib' );

var a = discreteUniform( 100, 0, 50 );
var b = discreteUniform( a.length, 0, 50 );

var i;
for ( i = 0; i < a.length; i++ ) {
	console.log( 'gcdf(%d,%d) = %d', a[ i ], b[ i ], gcdf( a[ i ], b[ i ] ) );
}
