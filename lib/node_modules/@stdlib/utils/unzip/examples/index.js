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

var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var pow = require( '@stdlib/math/base/special/pow' );
var unzip = require( './../lib' );

var arr = new Array( 100 );
var len = 5;

var i;
var j;
for ( i = 0; i < arr.length; i++ ) {
	arr[ i ] = new Array( len );
	for ( j = 0; j < len; j++ ) {
		arr[ i ][ j ] = round( randu() * pow(10, j) );
	}
}
var out = unzip( arr );

console.dir( out );
