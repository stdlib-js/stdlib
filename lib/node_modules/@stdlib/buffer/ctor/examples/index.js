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

var ctor = require( './../lib' );

var b;
var i;

// Allocate uninitialized memory:
if ( typeof ctor.alloc === 'function' ) {
	b = ctor.alloc( 10 );
} else {
	b = new ctor( 10 );
}

// Zero fill the buffer...
for ( i = 0; i < b.length; i++ ) {
	b[ i ] = 0;
}
console.log( b );
