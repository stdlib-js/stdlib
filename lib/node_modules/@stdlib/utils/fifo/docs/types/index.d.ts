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
* First-in-first-out (FIFO) queue.
*/
declare class FIFO {
	/**
	* First-in-first-out queue constructor.
	*
	* @returns FIFO queue instance
	*
	* @example
	* var queue = new FIFO();
	*
	* // Add values to the queue:
	* queue.push( 'foo' ).push( 'bar' );
	*
	* // Remove the first value:
	* var v = queue.pop();
	* // returns 'foo'
	*
	* // Add a new value to the queue:
	* queue.push( 'beep' );
	*
	* // Remove the "oldest" queue value:
	* v = queue.pop();
	* // returns 'bar'
	*/
	constructor();

	/**
	* Clears the queue.
	*
	* @returns queue instance
	*
	* @example
	* var queue = new FIFO();
	*
	* // Add values to the queue:
	* queue.push( 'foo' ).push( 'bar' );
	*
	* // Peek at the first value:
	* var v = queue.first();
	* // returns 'foo'
	*
	* // Examine the queue length:
	* var len = queue.length;
	* // returns 2
	*
	* // Clear all queue items:
	* queue.clear();
	*
	* // Peek at the first value:
	* v = queue.first();
	* // returns undefined
	*
	* // Examine the queue length:
	* len = queue.length;
	* // returns 0
	*/
	clear(): FIFO;

	/**
	* Returns the "oldest" queue value (i.e., the value which is "first-out").
	*
	* @returns "oldest" queue value
	*
	* @example
	* var queue = new FIFO();
	*
	* // Add values to the queue:
	* queue.push( 'foo' ).push( 'bar' );
	*
	* // Peek at the first value:
	* var v = queue.first();
	* // returns 'foo'
	*/
	first(): any;

	/**
	* Returns an iterator for iterating over a queue.
	*
	* ## Notes
	*
	* -   In order to prevent confusion arising from queue mutation during iteration, a returned iterator **always** iterates over a queue "snapshot", which is defined as the list of queue elements at the time of this method's invocation.
	*
	* @returns iterator
	*
	* @example
	* var queue = new FIFO();
	*
	* // Add values to the queue:
	* queue.push( 'foo' ).push( 'bar' );
	*
	* // Create an iterator:
	* var it = queue.iterator();
	*
	* // Iterate over the queue...
	* var v = it.next().value;
	* // returns 'foo'
	*
	* v = it.next().value;
	* // returns 'bar'
	*
	* var bool = it.next().done;
	* // returns true
	*/
	iterator(): IterableIterator;

	/**
	* Returns the "newest" queue value (i.e., the value which is currently "last-out").
	*
	* @returns "newest" queue value
	*
	* @example
	* var queue = new FIFO();
	*
	* // Add values to the queue:
	* queue.push( 'foo' ).push( 'bar' );
	*
	* // Peek at the last value:
	* var v = queue.last();
	* // returns 'bar'
	*/
	last(): any;

	/**
	* Queue length.
	*
	* @example
	* var queue = new FIFO();
	*
	* // Examine the initial queue length:
	* var len = queue.length;
	* // returns 0
	*
	* // Add values to the queue:
	* queue.push( 'foo' ).push( 'bar' );
	*
	* // Retrieve the current queue length:
	* len = queue.length;
	* // returns 2
	*/
	readonly length: number;

	/**
	* Removes a value from the queue.
	*
	* @returns removed value
	*
	* @example
	* var queue = new FIFO();
	*
	* // Add values to the queue:
	* queue.push( 'foo' ).push( 'bar' );
	*
	* // Remove the first value:
	* var v = queue.pop();
	* // returns 'foo'
	*
	* // Add a new value to the queue:
	* queue.push( 'beep' );
	*
	* // Remove the "oldest" queue value:
	* v = queue.pop();
	* // returns 'bar'
	*/
	pop(): any;

	/**
	* Adds a value to the queue.
	*
	* @returns queue instance
	*
	* @example
	* var queue = new FIFO();
	*
	* // Add values to the queue:
	* queue.push( 'foo' ).push( 'bar' );
	*
	* // Remove the first value:
	* var v = queue.pop();
	* // returns 'foo'
	*
	* // Add a new value to the queue:
	* queue.push( 'beep' );
	*
	* // Remove the "oldest" queue value:
	* v = queue.pop();
	* // returns 'bar'
	*/
	push(): FIFO;

	/**
	* Returns an array of queue values.
	*
	* @returns queue values
	*
	* @example
	* var queue = new FIFO();
	*
	* // Add values to the queue:
	* queue.push( 'foo' ).push( 'bar' );
	*
	* // Get an array of queue values:
	* var vals = queue.toArray();
	* // returns [ 'foo', 'bar' ]
	*/
	toArray(): Array<any>;

	/**
	* Serializes a queue as JSON.
	*
	* ## Notes
	*
	* -   `JSON.stringify()` implicitly calls this method when stringifying a `FIFO` instance.
	*
	* @returns serialized queue
	*
	* @example
	* var queue = new FIFO();
	*
	* // Add values to the queue:
	* queue.push( 'foo' ).push( 'bar' );
	*
	* // Serialize to JSON:
	* var o = queue.toJSON();
	* // returns { 'type': 'fifo', 'data': [ 'foo', 'bar' ] }
	*/
	toJSON(): any;
}


// EXPORTS //

export = FIFO;
