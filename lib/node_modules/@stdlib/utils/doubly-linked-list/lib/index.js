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

/**
* Doubly linked list.
*
* @module @stdlib/utils/doubly-linked-list
*
* @example
* var doublyLinkedList = require( '@stdlib/utils/doubly-linked-list' );
*
* var list = doublyLinkedList();
*
* // Add values to the list:
* list.push( 'foo' ).push( 'bar' );
*
* // Remove the last value:
* var v = list.pop();
* // returns 'bar'
*
* // Add a new value to the list:
* list.push( 'beep' );
*
* // Remove the first list value:
* v = list.shift();
* // returns 'foo'
*/

// MODULES //

var doublyLinkedList = require( './main.js' );


// EXPORTS //

module.exports = doublyLinkedList;
