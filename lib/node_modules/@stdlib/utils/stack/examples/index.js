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

var Stack = require( './../lib' );

var stack;
var iter;
var len;
var v;
var i;

// Create a new stack:
stack = new Stack();

// Add some values to the stack:
stack.push( 'foo' );
stack.push( 'bar' );
stack.push( 'beep' );
stack.push( 'boop' );

// Peek at the top and bottom stack values:
v = stack.first();
console.log( 'Top: %s', v );

v = stack.last();
console.log( 'Bottom: %s', v );

// Inspect the stack length:
len = stack.length;
console.log( 'Stack length: %d', len );

// Remove the top value:
v = stack.pop();
console.log( 'Removed value: %s', v );

// Inspect the stack length:
len = stack.length;
console.log( 'Stack length: %d', len );

// Iterate over the stack:
iter = stack.iterator();
for ( i = 0; i < len; i++ ) {
	console.log( 'Stack value #%d: %s', i+1, iter.next().value );
}

// Clear the stack:
stack.clear();

// Inspect the stack length:
len = stack.length;
console.log( 'Stack length: %d', len );
