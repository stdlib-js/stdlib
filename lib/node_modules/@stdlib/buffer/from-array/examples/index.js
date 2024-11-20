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

var array2buffer = require( './../lib' );

var octets;
var buf;
var str;
var i;

// Define a string we want to convert to a buffer:
str = 'this is a string.';

// Manually convert the string to an array of octets...
octets = new Array( str.length );
for ( i = 0; i < str.length; i++ ) {
	octets[ i ] = str.charCodeAt( i ) % 256;
}

// Create a buffer from the octet array:
buf = array2buffer( octets );
console.log( buf.toString() );
