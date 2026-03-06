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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var Node = require( './node.js' ); // eslint-disable-line stdlib/no-redeclare


// MAIN //

/**
* First-in-first-out queue constructor.
*
* @constructor
* @returns {FIFO} FIFO queue instance
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
function FIFO() {
	if ( !(this instanceof FIFO) ) {
		return new FIFO();
	}
	this._length = 0;
	this._first = null;
	this._last = null;
	return this;
}

/**
* Clears the queue.
*
* @name clear
* @memberof FIFO.prototype
* @type {Function}
* @returns {FIFO} queue instance
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
setReadOnly( FIFO.prototype, 'clear', function clear() {
	this._length = 0;
	this._first = null;
	this._last = null;
	return this;
});

/**
* Returns the "oldest" queue value (i.e., the value which is "first-out").
*
* @name first
* @memberof FIFO.prototype
* @type {Function}
* @returns {(*|void)} "oldest" queue value
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
setReadOnly( FIFO.prototype, 'first', function first() {
	if ( this._length ) {
		return this._first.value;
	}
});

/**
* Returns an iterator for iterating over a queue.
*
* ## Notes
*
* -   In order to prevent confusion arising from queue mutation during iteration, a returned iterator **always** iterates over a queue "snapshot", which is defined as the list of queue elements at the time of this method's invocation.
*
* @name iterator
* @memberof FIFO.prototype
* @type {Function}
* @returns {Iterator} iterator
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
setReadOnly( FIFO.prototype, 'iterator', function iterator() {
	var values;
	var iter;
	var self;
	var FLG;
	var i;

	self = this;

	// Initialize the iteration index:
	i = -1;

	// Create a copy of queue values (necessary in order to "snapshot" the queue; otherwise, values could come and go between calls to `next`):
	values = this.toArray();

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );
	if ( iteratorSymbol ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		i += 1;
		if ( FLG || i >= values.length ) {
			return {
				'done': true
			};
		}
		return {
			'value': values[ i ],
			'done': false
		};
	}

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @returns {Object} iterator protocol-compliant object
	*/
	function end( value ) {
		FLG = true;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	}

	/**
	* Returns a new iterator.
	*
	* @private
	* @returns {Iterator} iterator
	*/
	function factory() {
		return self.iterator();
	}
});

/**
* Returns the "newest" queue value (i.e., the value which is currently "last-out").
*
* @name last
* @memberof FIFO.prototype
* @type {Function}
* @returns {(*|void)} "newest" queue value
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
setReadOnly( FIFO.prototype, 'last', function last() {
	if ( this._length ) {
		return this._last.value;
	}
});

/**
* Queue length.
*
* @name length
* @memberof FIFO.prototype
* @type {NonNegativeInteger}
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
setReadOnlyAccessor( FIFO.prototype, 'length', function get() {
	return this._length;
});

/**
* Removes a value from the queue.
*
* @name pop
* @memberof FIFO.prototype
* @type {Function}
* @returns {(*|void)} removed value
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
setReadOnly( FIFO.prototype, 'pop', function pop() {
	var value;
	if ( this._length ) {
		// Retrieve the "first-out" value:
		value = this._first.value;

		// Check whether we have a new "first-out" or whether we have drained the queue...
		if ( this._first.next ) {
			this._first = this._first.next;
			this._first.prev = null;
		} else {
			// Queue is empty:
			this._first = null;
			this._last = null;
		}
		// Decrement the queue length:
		this._length -= 1;
	}
	return value;
});

/**
* Adds a value to the queue.
*
* @name push
* @memberof FIFO.prototype
* @type {Function}
* @returns {FIFO} queue instance
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
setReadOnly( FIFO.prototype, 'push', function push( value ) {
	var node;

	// Create a new queue node:
	node = new Node( value );

	// Check whether the queue is currently empty...
	if ( this._length === 0 ) {
		// This is the only queued node, making it both the first and last node:
		this._first = node;
		this._last = node;
	} else {
		// Link the node to the previous most "recent" node:
		node.prev = this._last;

		// Link the previous most "recent" node to the new node:
		this._last.next = node;

		// Update the queue pointer for the "last" node to the new node:
		this._last = node;
	}
	// Increment the queue length:
	this._length += 1;

	return this;
});

/**
* Returns an array of queue values.
*
* @name toArray
* @memberof FIFO.prototype
* @type {Function}
* @returns {Array} queue values
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
setReadOnly( FIFO.prototype, 'toArray', function toArray() {
	var node;
	var out;
	var i;

	out = [];
	node = this._first;
	for ( i = 0; i < this._length; i++ ) {
		out.push( node.value );
		node = node.next;
	}
	return out;
});

/**
* Serializes a queue as JSON.
*
* ## Notes
*
* -   `JSON.stringify()` implicitly calls this method when stringifying a `FIFO` instance.
*
* @name toJSON
* @memberof FIFO.prototype
* @type {Function}
* @returns {Object} serialized queue
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
setReadOnly( FIFO.prototype, 'toJSON', function toJSON() {
	var out = {};
	out.type = 'fifo';
	out.data = this.toArray();
	return out;
});


// EXPORTS //

module.exports = FIFO;
