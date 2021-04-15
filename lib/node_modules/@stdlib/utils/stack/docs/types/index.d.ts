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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { IterableIterator } from '@stdlib/types/iter';

/**
* Stack
*/
declare class Stack {
	/**
	* Stack constructor.
	*
	* @returns stack instance
	*
	* @example
	* var s = new Stack();
	*
	* // Add values to the stack:
	* s.push( 'foo' ).push( 'bar' );
	*
	* // Remove the top value:
	* var v = s.pop();
	* // returns 'bar'
	*
	* // Add a new value to the stack:
	* s.push( 'beep' );
	*
	* // Remove the top value:
	* v = s.pop();
	* // returns 'beep'
	*/
	constructor();

	/**
	* Clears the stack.
	*
	* @returns stack instance
	*
	* @example
	* var s = new Stack();
	*
	* // Add values to the stack:
	* s.push( 'foo' ).push( 'bar' );
	*
	* // Peek at the top value:
	* var v = s.first();
	* // returns 'bar'
	*
	* // Examine the stack length:
	* var len = s.length;
	* // returns 2
	*
	* // Clear all stack items:
	* s.clear();
	*
	* // Peek at the top value:
	* v = s.first();
	* // returns undefined
	*
	* // Examine the stack length:
	* len = s.length;
	* // returns 0
	*/
	clear(): Stack;

	/**
	* Returns the top value (i.e., the value which is "first-out").
	*
	* @returns top value
	*
	* @example
	* var s = new Stack();
	*
	* // Add values to the stack:
	* s.push( 'foo' ).push( 'bar' );
	*
	* // Peek at the top value:
	* var v = s.first();
	* // returns 'bar'
	*/
	first(): any;

	/**
	* Returns an iterator for iterating over a stack.
	*
	* ## Notes
	*
	* -   In order to prevent confusion arising from stack mutation during iteration, a returned iterator **always** iterates over a stack "snapshot", which is defined as the list of stack elements at the time of this method's invocation.
	*
	* @returns iterator
	*
	* @example
	* var s = new Stack();
	*
	* // Add values to the stack:
	* s.push( 'foo' ).push( 'bar' );
	*
	* // Create an iterator:
	* var it = s.iterator();
	*
	* // Iterate over the stack...
	* var v = it.next().value;
	* // returns 'bar'
	*
	* v = it.next().value;
	* // returns 'foo'
	*
	* var bool = it.next().done;
	* // returns true
	*/
	iterator(): IterableIterator;

	/**
	* Returns the bottom stack value (i.e., the value which is currently "last-out").
	*
	* @returns bottom stack value
	*
	* @example
	* var s = new Stack();
	*
	* // Add values to the stack:
	* s.push( 'foo' ).push( 'bar' );
	*
	* // Peek at the bottom value:
	* var v = s.last();
	* // returns 'foo'
	*/
	last(): any;

	/**
	* Stack length.
	*
	* @example
	* var s = new Stack();
	*
	* // Examine the initial stack length:
	* var len = s.length;
	* // returns 0
	*
	* // Add values to the stack:
	* s.push( 'foo' ).push( 'bar' );
	*
	* // Retrieve the current stack length:
	* len = s.length;
	* // returns 2
	*/
	readonly length: number;

	/**
	* Removes a value from the stack.
	*
	* @returns removed value
	*
	* @example
	* var s = new Stack();
	*
	* // Add values to the stack:
	* s.push( 'foo' ).push( 'bar' );
	*
	* // Remove the top value:
	* var v = s.pop();
	* // returns 'bar'
	*
	* // Add a new value to the stack:
	* s.push( 'beep' );
	*
	* // Remove the top value:
	* v = s.pop();
	* // returns 'beep'
	*/
	pop(): any;

	/**
	* Adds a value to the stack.
	*
	* @returns stack instance
	*
	* @example
	* var s = new Stack();
	*
	* // Add values to the stack:
	* s.push( 'foo' ).push( 'bar' );
	*
	* // Remove the top value:
	* var v = s.pop();
	* // returns 'bar'
	*
	* // Add a new value to the stack:
	* s.push( 'beep' );
	*
	* // Remove the top value:
	* v = s.pop();
	* // returns 'beep'
	*/
	push(): Stack;

	/**
	* Returns an array of stack values.
	*
	* ## Notes
	*
	* -   Why reverse insertion order? Pros and cons to either order, but reverse insertion order mirrors iterator order. For example, we can use the ES6/ES2015+ spread operator along with the iterator to return stack values.
	*
	*     ```text
	*     arr = [...s.iterator()]
	*     ```
	*
	*     One might (as is the opinion here) consider parity of array serialization and iterator order to be a reasonable design goal.
	*
	* @returns stack values
	*
	* @example
	* var s = new Stack();
	*
	* // Add values to the stack:
	* s.push( 'foo' ).push( 'bar' );
	*
	* // Get an array of stack values:
	* var vals = s.toArray();
	* // returns [ 'bar', 'foo' ]
	*/
	toArray(): Array<any>;

	/**
	* Serializes a stack as JSON.
	*
	* ## Notes
	*
	* -   `JSON.stringify()` implicitly calls this method when stringifying a `Stack` instance.
	*
	* @returns serialized stack
	*
	* @example
	* var s = new Stack();
	*
	* // Add values to the stack:
	* s.push( 'foo' ).push( 'bar' );
	*
	* // Serialize to JSON:
	* var o = s.toJSON();
	* // returns { 'type': 'stack', 'data': [ 'bar', 'foo' ] }
	*/
	toJSON(): any;
}


// EXPORTS //

export = Stack;
