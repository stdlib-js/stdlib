/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-classes-per-file */

/// <reference types="@stdlib/types"/>

import { IterableIterator } from '@stdlib/types/iter';

/**
* List node.
*/
declare class Node {
	/**
	* List node constructor.
	*
	* @param value - node value
	* @returns Node instance
	*
	* @example
	* var node = new Node( 'foo' );
	* // returns <Node>
	*/
	constructor( value: any );

	/**
	* Node value.
	*/
	value: any;

	/**
	* Next node in the list.
	*/
	readonly next: Node;

	/**
	* Previous node in the list.
	*/
	readonly prev: Node;

	/**
	* Private field pointing to the next node.
	*/
	private readonly _next: Node;

	/**
	* Private field pointing to the previous node.
	*/
	private readonly _prev: Node;
}

/**
* Doubly linked list.
*/
declare class DoublyLinkedList {
	/**
	* Doubly linked list constructor.
	*
	* @returns linked list instance
	*
	* @example
	* var list = new DoublyLinkedList();
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
	* // Remove the first value:
	* v = list.shift();
	* // returns 'foo'
	*/
	constructor();

	/**
	* Clears the list.
	*
	* @returns list instance
	*
	* @example
	* var list = new DoublyLinkedList();
	*
	* // Add values to the list:
	* list.push( 'foo' ).push( 'bar' );
	*
	* // Peek at the first value:
	* var v = list.first().value;
	* // returns 'foo'
	*
	* // Examine the list length:
	* var len = list.length;
	* // returns 2
	*
	* // Clear all list items:
	* list.clear();
	*
	* // Peek at the first value:
	* v = list.first();
	* // returns undefined
	*
	* // Examine the list length:
	* len = list.length;
	* // returns 0
	*/
	clear(): DoublyLinkedList;

	/**
	* Returns the first list node.
	*
	* @returns list node
	*
	* @example
	* var list = new DoublyLinkedList();
	*
	* // Add values to the list:
	* list.push( 'foo' ).push( 'bar' );
	*
	* // Peek at the first value:
	* var v = list.first().value;
	* // returns 'foo'
	*/
	first(): Node | void;

	/**
	* Inserts a value into the list either before or after a provided list node.
	*
	* @param node - node after which to insert the value
	* @param value - value to insert
	* @param location - location (default: 'after')
	* @throws must provide a node belonging to the list
	* @throws must provide a recognized location
	* @returns list instance
	*
	* @example
	* var list = new DoublyLinkedList();
	*
	* // Add values to the list:
	* list.push( 'foo' ).push( 'bar' ).push( 'beep' );
	*
	* // Determine the list length:
	* var len = list.length;
	* // returns 3
	*
	* // Get the second node:
	* var node = list.first().next;
	*
	* // Insert a value after the second node:
	* list.insert( node, 'boop' );
	*
	* // Determine the list length:
	* len = list.length;
	* // returns 4
	*/
	insert( node: Node, value: unknown, location?: 'before' | 'after' ): DoublyLinkedList;

	/**
	* Returns an iterator for iterating over a list.
	*
	* ## Notes
	*
	* -   In order to prevent confusion arising from list mutation during iteration, a returned iterator **always** iterates over a list "snapshot", which is defined as the list of elements at the time of this method's invocation.
	*
	* @param direction - iteration direction (default: 'forward')
	* @throws must provide a recognized iteration direction
	* @returns iterator
	*
	* @example
	* var list = new DoublyLinkedList();
	*
	* // Add values to the list:
	* list.push( 'foo' ).push( 'bar' );
	*
	* // Create an iterator:
	* var it = list.iterator();
	*
	* // Iterate over the list...
	* var v = it.next().value;
	* // returns 'foo'
	*
	* v = it.next().value;
	* // returns 'bar'
	*
	* var bool = it.next().done;
	* // returns true
	*/
	iterator( direction?: 'forward' | 'reverse' ): IterableIterator;

	/**
	* Returns the last node.
	*
	* @returns list node
	*
	* @example
	* var list = new DoublyLinkedList();
	*
	* // Add values to the list:
	* list.push( 'foo' ).push( 'bar' );
	*
	* // Peek at the last value:
	* var v = list.last().value;
	* // returns 'bar'
	*/
	last(): Node | void;

	/**
	* List length.
	*
	* @example
	* var list = new DoublyLinkedList();
	*
	* // Examine the initial list length:
	* var len = list.length;
	* // returns 0
	*
	* // Add values to the list:
	* list.push( 'foo' ).push( 'bar' );
	*
	* // Retrieve the current list length:
	* len = list.length;
	* // returns 2
	*/
	readonly length: number;

	/**
	* Removes a value from the end of the list.
	*
	* @example
	* var list = new DoublyLinkedList();
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
	* // Remove the last value:
	* v = list.pop();
	* // returns 'beep'
	*/
	pop(): any;

	/**
	* Adds a value to the end of the list.
	*
	* @returns list instance
	*
	* @example
	* var list = new DoublyLinkedList();
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
	* // Remove the last value:
	* v = list.pop();
	* // returns 'beep'
	*/
	push(): DoublyLinkedList;

	/**
	* Removes a list node from the list.
	*
	* @param node - node to remove
	* @throws must provide a node belonging to the list
	* @returns removed value
	*
	* @example
	* var list = new DoublyLinkedList();
	*
	* // Add values to the list:
	* list.push( 'foo' ).push( 'bar' ).push( 'beep' );
	*
	* // Determine the list length:
	* var len = list.length;
	* // returns 3
	*
	* // Get the second node:
	* var node = list.first().next;
	*
	* // Remove the second node:
	* var v = list.remove( node );
	* // returns 'bar'
	*
	* // Determine the list length:
	* len = list.length;
	* // returns 2
	*/
	remove( node: Node ): any;

	/**
	* Removes a value from the beginning of the list.
	*
	* @returns removed value
	*
	* @example
	* var list = new DoublyLinkedList();
	*
	* // Add values to the list:
	* list.push( 'foo' ).push( 'bar' );
	*
	* // Remove the first value:
	* var v = list.shift();
	* // returns 'foo'
	*
	* // Add a new value to the list:
	* list.push( 'beep' );
	*
	* // Remove the first value:
	* v = list.shift();
	* // returns 'bar'
	*/
	shift(): any;

	/**
	* Returns an array of list values.
	*
	* @returns list values
	*
	* @example
	* var list = new DoublyLinkedList();
	*
	* // Add values to the list:
	* list.push( 'foo' ).push( 'bar' );
	*
	* // Get an array of list values:
	* var vals = list.toArray();
	* // returns [ 'foo', 'bar' ]
	*/
	toArray(): Array<any>;

	/**
	* Serializes a list as JSON.
	*
	* ## Notes
	*
	* -   `JSON.stringify()` implicitly calls this method when stringifying a `DoublyLinkedList` instance.
	*
	* @returns serialized list
	*
	* @example
	* var list = new DoublyLinkedList();
	*
	* // Add values to the list:
	* list.push( 'foo' ).push( 'bar' );
	*
	* // Serialize to JSON:
	* var o = list.toJSON();
	* // returns { 'type': 'doubly-linked-list', 'data': [ 'foo', 'bar' ] }
	*/
	toJSON(): any;

	/**
	* Adds a value to the beginning of the list.
	*
	* @returns list instance
	*
	* @example
	* var list = new DoublyLinkedList();
	*
	* // Add values to the beginning of the list:
	* list.unshift( 'foo' ).unshift( 'bar' );
	*
	* // Remove the last value:
	* var v = list.pop();
	* // returns 'foo'
	*
	* // Add a new value to the beginning of the list:
	* list.unshift( 'beep' );
	*
	* // Remove the last value:
	* v = list.pop();
	* // returns 'bar'
	*/
	unshift(): DoublyLinkedList;
}


// EXPORTS //

export = DoublyLinkedList;
