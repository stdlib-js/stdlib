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
import { Collection } from '@stdlib/types/object';

/**
* Circular buffer.
*/
declare class CircularBuffer {
	/**
	* Circular buffer constructor.
	*
	* @param buffer - buffer size or an array-like object to use as the underlying buffer
	* @throws must provide either a valid buffer size or an array-like object
	* @returns circular buffer instance
	*
	* @example
	* var b = new CircularBuffer( 3 );
	*
	* // Fill the buffer...
	* var v = b.push( 'foo' );
	* // returns undefined
	*
	* v = b.push( 'bar' );
	* // returns undefined
	*
	* v = b.push( 'beep' );
	* // returns undefined
	*
	* // Add another value to the buffer and return the removed element:
	* v = b.push( 'boop' );
	* // returns 'foo'
	*/
	constructor( buffer: number | Collection );

	/**
	* Clears the buffer.
	*
	* @returns circular buffer instance
	*
	* @example
	* var b = new CircularBuffer( 2 );
	*
	* // Add values to the buffer:
	* b.push( 'foo' );
	* b.push( 'bar' );
	* b.push( 'beep' );
	* b.push( 'boop' );
	*
	* // Get the number of elements currently in the buffer:
	* var n = b.count;
	* // returns 2
	*
	* // Clear the buffer:
	* b.clear();
	*
	* // Get the number of buffer values:
	* n = b.count;
	* // returns 0
	*/
	clear(): CircularBuffer;

	/**
	* Number of elements currently in the buffer.
	*
	* @example
	* var b = new CircularBuffer( 4 );
	*
	* // Get the value count:
	* var n = b.count;
	* // returns 0
	*
	* // Add values to the buffer:
	* b.push( 'foo' );
	* b.push( 'bar' );
	*
	* // Get the value count:
	* n = b.count;
	* // returns 2
	*/
	readonly count: number;

	/**
	* Boolean indicating whether a circular buffer is full.
	*
	* @example
	* var b = new CircularBuffer( 3 );
	*
	* // Determine if the buffer is full:
	* var bool = b.full;
	* // returns false
	*
	* // Add values to the buffer:
	* b.push( 'foo' );
	* b.push( 'bar' );
	* b.push( 'beep' );
	* b.push( 'boop' );
	*
	* // Determine if the buffer is full:
	* bool = b.full;
	* // returns true
	*/
	readonly full: boolean;

	/**
	* Returns an iterator for iterating over a circular buffer.
	*
	* ## Notes
	*
	* -   An iterator does not iterate over partially full buffers.
	*
	* @param niters - number of iterations
	* @throws must provide a nonnegative integer
	* @returns iterator
	*
	* @example
	* var b = new CircularBuffer( 3 );
	*
	* // Add values to the buffer:
	* b.push( 'foo' );
	* b.push( 'bar' );
	* b.push( 'beep' );
	* b.push( 'boop' );
	*
	* // Create an iterator:
	* var it = b.iterator( b.length );
	*
	* // Iterate over the buffer...
	* var v = it.next().value;
	* // returns 'bar'
	*
	* v = it.next().value;
	* // returns 'beep'
	*
	* v = it.next().value;
	* // returns 'boop'
	*
	* var bool = it.next().done;
	* // returns true
	*/
	iterator( niters?: number ): IterableIterator;

	/**
	* Circular buffer length (capacity).
	*
	* @example
	* var b = new CircularBuffer( 4 );
	*
	* // Get the buffer capacity:
	* var len = b.length;
	* // returns 4
	*/
	readonly length: number;

	/**
	* Adds a value to the circular buffer.
	*
	* @returns removed element or undefined
	*
	* @example
	* var b = new CircularBuffer( 3 );
	*
	* // Fill the buffer:
	* var v = b.push( 'foo' );
	* // returns undefined
	*
	* v = b.push( 'bar' );
	* // returns undefined
	*
	* v = b.push( 'beep' );
	* // returns undefined
	*
	* // Add another value to the buffer and return the removed element:
	* v = b.push( 'boop' );
	* // returns 'foo'
	*/
	push(): any;

	/**
	* Returns an array of circular buffer values.
	*
	* @returns circular buffer values
	*
	* @example
	* var b = new CircularBuffer( 3 );
	*
	* // Add values to the buffer:
	* b.push( 'foo' );
	* b.push( 'bar' );
	* b.push( 'beep' );
	* b.push( 'boop' );
	*
	* // Get an array of buffer values:
	* var vals = b.toArray();
	* // returns [ 'bar', 'beep', 'boop' ]
	*/
	toArray(): Array<any>;

	/**
	* Serializes a circular buffer as JSON.
	*
	* ## Notes
	*
	* -   `JSON.stringify()` implicitly calls this method when stringifying a `CircularBuffer` instance.
	*
	* @returns serialized circular buffer
	*
	* @example
	* var b = new CircularBuffer( 3 );
	*
	* // Add values to the buffer:
	* b.push( 'foo' );
	* b.push( 'bar' );
	* b.push( 'beep' );
	* b.push( 'boop' );
	*
	* // Serialize to JSON:
	* var o = b.toJSON();
	* // returns { 'type': 'circular-buffer', 'length': 3, 'data': [ 'bar', 'beep', 'boop' ] }
	*/
	toJSON(): any;
}


// EXPORTS //

export = CircularBuffer;
