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

var doublyLinkedList = require( './../lib' );

var list;
var iter;
var len;
var v;
var i;

// Create a new doubly linked list:
list = doublyLinkedList();

// Add some values to the list:
list.push( 'foo' );
list.push( 'bar' );
list.push( 'beep' );
list.push( 'boop' );

// Peek at the first and last list nodes:
v = list.first();
console.log( 'First: %s', v.value );

v = list.last();
console.log( 'Last: %s', v.value );

// Inspect the list length:
len = list.length;
console.log( 'List length: %d', len );

// Remove the last list value:
v = list.pop();
console.log( 'Removed value: %s', v );

// Inspect the list length:
len = list.length;
console.log( 'List length: %d', len );

// Iterate over the list:
iter = list.iterator();
for ( i = 0; i < len; i++ ) {
	console.log( 'List value #%d: %s', i+1, iter.next().value );
}

// Clear the list:
list.clear();

// Inspect the list length:
len = list.length;
console.log( 'List length: %d', len );
