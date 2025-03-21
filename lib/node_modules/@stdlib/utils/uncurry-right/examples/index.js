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

var fromCodePoint = require( '@stdlib/string/from-code-point' );
var curryRight = require( '@stdlib/utils/curry-right' );
var uncurryRight = require( './../lib' );

var uncurried;
var curried;
var abcs;
var out;
var a;
var i;

function concat() {
	var len;
	var out;
	var i;

	len = arguments.length;
	out = '';
	for ( i = 0; i < len; i++ ) {
		out += arguments[ i ];
		if ( i < len-1 ) {
			out += ',';
		}
	}
	return out;
}

// Character codes:
a = 97;

abcs = new Array( 26 );
for ( i = 0; i < abcs.length; i++ ) {
	abcs[ i ] = fromCodePoint( a + i );
}
out = concat.apply( null, abcs );
console.log( out );
// => 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'

// Transform `concat` into a right curried function:
curried = curryRight( concat, 26 );

out = curried;
for ( i = abcs.length-1; i >= 0; i-- ) {
	out = out( abcs[ i ] );
}
console.log( out );
// => 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'

// Uncurry a right curried function:
uncurried = uncurryRight( curried );

out = uncurried.apply( null, abcs );
console.log( out );
// => 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'
