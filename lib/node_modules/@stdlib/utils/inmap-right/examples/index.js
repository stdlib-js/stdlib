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

var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
var inmapRight = require( './../lib' );

var bool;
var arr;
var out;
var i;

function scale( value, index, collection ) {
	i += 1;
	if ( isEven( i ) ) {
		collection.pop();
	} else {
		collection.unshift( i+1 );
	}
	return value * index;
}

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
	arr[ i ] = i;
}

i = 0;
out = inmapRight( arr, scale );

bool = ( out === arr );
console.log( bool );

console.log( out );
