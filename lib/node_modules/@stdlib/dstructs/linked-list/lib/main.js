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
* Linked list constructor.
*
* @constructor
* @returns {LinkedList} linked list instance
*
* @example
* var list = new LinkedList();
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
function LinkedList() {
	if ( !(this instanceof LinkedList) ) {
		return new LinkedList();
	}
	this._length = 0;
	this._first = null;
	this._last = null;
	return this;
}

/**
* Clears the list.
*
* @name clear
* @memberof LinkedList.prototype
* @type {Function}
* @returns {LinkedList} list instance
*
* @example
* var list = new LinkedList();
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
setReadOnly( LinkedList.prototype, 'clear', function clear() {
	this._length = 0;
	this._first = null;
	this._last = null;
	return this;
});

/**
* Returns the first list node.
*
* @name first
* @memberof LinkedList.prototype
* @type {Function}
* @returns {(Node|void)} list node
*
* @example
* var list = new LinkedList();
*
* // Add values to the list:
* list.push( 'foo' ).push( 'bar' );
*
* // Peek at the first value:
* var v = list.first().value;
* // returns 'foo'
*/
setReadOnly( LinkedList.prototype, 'first', function first() {
	if ( this._length ) {
		return this._first;
	}
});

/**
* Inserts a value into the list **after** a provided list node.
*
* @name insert
* @memberof LinkedList.prototype
* @type {Function}
* @param {Node} node - node after which to insert the value
* @param {*} value - value to insert
* @throws {Error} must provide a node belonging to the list
* @returns {LinkedList} list instance
*
* @example
* var list = new LinkedList();
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
setReadOnly( LinkedList.prototype, 'insert', function insert( node, value ) {
	/* eslint-disable no-underscore-dangle */
	var n;

	// Case: last node (equivalent to `push()`)
	if ( node === this._last ) {
		return this.push( value );
	}
	// Unfortunately, we need to check whether we have been provided a node belonging to our list by walking the list. If we don't, we could erroneously increment the list length. This means our runtime goes from the theoretical O(1) to O(N).
	n = this._first;
	while ( n !== this._last && n !== node ) {
		n = n._next;
	}
	// Check if we iterated through the entire list:
	if ( n === this._last ) {
		throw new Error( 'invalid argument. The list does not contain the provided list node.' );
	}
	// Create a new list node:
	n = new Node( value );

	// Update pointers:
	node._next._prev = n;
	n._next = node._next;

	node._next = n;
	n._prev = node;

	// Increment the list length:
	this._length += 1;

	return this;

	/* eslint-enable no-underscore-dangle */
});

/**
* Returns an iterator for iterating over a list.
*
* ## Notes
*
* -   In order to prevent confusion arising from list mutation during iteration, a returned iterator **always** iterates over a list "snapshot", which is defined as the list of elements at the time of this method's invocation.
*
* @name iterator
* @memberof LinkedList.prototype
* @type {Function}
* @returns {Iterator} iterator
*
* @example
* var list = new LinkedList();
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
setReadOnly( LinkedList.prototype, 'iterator', function iterator() {
	var values;
	var iter;
	var self;
	var FLG;
	var i;

	self = this;

	// Initialize the iteration index:
	i = -1;

	// Create a copy of list values (necessary in order to "snapshot" the list; otherwise, values could come and go between calls to `next`):
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
* Returns the last node.
*
* @name last
* @memberof LinkedList.prototype
* @type {Function}
* @returns {(Node|void)} list node
*
* @example
* var list = new LinkedList();
*
* // Add values to the list:
* list.push( 'foo' ).push( 'bar' );
*
* // Peek at the last value:
* var v = list.last().value;
* // returns 'bar'
*/
setReadOnly( LinkedList.prototype, 'last', function last() {
	if ( this._length ) {
		return this._last;
	}
});

/**
* List length.
*
* @name length
* @memberof LinkedList.prototype
* @type {NonNegativeInteger}
*
* @example
* var list = new LinkedList();
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
setReadOnlyAccessor( LinkedList.prototype, 'length', function get() {
	return this._length;
});

/**
* Removes a value from the end of the list.
*
* @name pop
* @memberof LinkedList.prototype
* @type {Function}
* @returns {(*|void)} removed value
*
* @example
* var list = new LinkedList();
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
setReadOnly( LinkedList.prototype, 'pop', function pop() {
	/* eslint-disable no-underscore-dangle */
	var value;
	if ( this._length ) {
		// Retrieve the last value:
		value = this._last.value;

		// Check whether we have a new "tail" or whether we have emptied the list...
		if ( this._last._prev ) {
			this._last = this._last._prev;
			this._last._next = null;
		} else {
			// List is empty:
			this._first = null;
			this._last = null;
		}
		// Decrement the list length:
		this._length -= 1;
	}
	return value;

	/* eslint-enable no-underscore-dangle */
});

/**
* Adds a value to the end of the list.
*
* @name push
* @memberof LinkedList.prototype
* @type {Function}
* @returns {LinkedList} list instance
*
* @example
* var list = new LinkedList();
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
setReadOnly( LinkedList.prototype, 'push', function push( value ) {
	var node;

	// Create a new list node:
	node = new Node( value );

	// Check whether the list is currently empty...
	if ( this._length === 0 ) {
		// This is the only list node, making it both the first and last node:
		this._first = node;
		this._last = node;
	} else {
		// Link the new node to the previous last node:
		node._prev = this._last; // eslint-disable-line no-underscore-dangle

		// Link the previous last node to the new node:
		this._last._next = node; // eslint-disable-line no-underscore-dangle

		// Update the pointer for the last node:
		this._last = node;
	}
	// Increment the list length:
	this._length += 1;

	return this;
});

/**
* Removes a list node from the list.
*
* @name remove
* @memberof LinkedList.prototype
* @type {Function}
* @param {Node} node - node to remove
* @throws {Error} must provide a node belonging to the list
* @returns {(*|void)} removed value
*
* @example
* var list = new LinkedList();
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
setReadOnly( LinkedList.prototype, 'remove', function remove( node ) {
	/* eslint-disable no-underscore-dangle */
	var value;
	var n;

	// Case: first node (equivalent to `shift()`)
	if ( node === this._first ) {
		return this.shift();
	}
	// Case: last node (equivalent to `pop()`)
	if ( node === this._last ) {
		return this.pop();
	}
	// Retrieve the node value:
	value = node.value;

	// Unfortunately, we need to check whether we have been provided a node belonging to our list by walking the list. If we don't, we could erroneously decrement the list length. This means our runtime goes from the theoretical O(1) to O(N).
	n = this._first;
	while ( n !== this._last && n !== node ) {
		n = n._next;
	}
	// Check if we iterated through the entire list:
	if ( n === this._last ) {
		throw new Error( 'invalid argument. The list does not contain the provided list node.' );
	}
	// Update pointers:
	node._prev._next = node._next;
	node._next._prev = node._prev;

	// Decrement the list length:
	this._length -= 1;

	return value;

	/* eslint-enable no-underscore-dangle */
});

/**
* Removes a value from the beginning of the list.
*
* @name shift
* @memberof LinkedList.prototype
* @type {Function}
* @returns {(*|void)} removed value
*
* @example
* var list = new LinkedList();
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
setReadOnly( LinkedList.prototype, 'shift', function shift() {
	/* eslint-disable no-underscore-dangle */
	var value;
	if ( this._length ) {
		// Retrieve the first value:
		value = this._first.value;

		// Check whether we have a new "head" or whether we have emptied the list...
		if ( this._first._next ) {
			this._first = this._first._next;
			this._first._prev = null;
		} else {
			// List is empty:
			this._first = null;
			this._last = null;
		}
		// Decrement the list length:
		this._length -= 1;
	}
	return value;

	/* eslint-enable no-underscore-dangle */
});

/**
* Returns an array of list values.
*
* @name toArray
* @memberof LinkedList.prototype
* @type {Function}
* @returns {Array} list values
*
* @example
* var list = new LinkedList();
*
* // Add values to the list:
* list.push( 'foo' ).push( 'bar' );
*
* // Get an array of list values:
* var vals = list.toArray();
* // returns [ 'foo', 'bar' ]
*/
setReadOnly( LinkedList.prototype, 'toArray', function toArray() {
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
* Serializes a list as JSON.
*
* ## Notes
*
* -   `JSON.stringify()` implicitly calls this method when stringifying a `LinkedList` instance.
*
* @name toJSON
* @memberof LinkedList.prototype
* @type {Function}
* @returns {Object} serialized list
*
* @example
* var list = new LinkedList();
*
* // Add values to the list:
* list.push( 'foo' ).push( 'bar' );
*
* // Serialize to JSON:
* var o = list.toJSON();
* // returns { 'type': 'linked-list', 'data': [ 'foo', 'bar' ] }
*/
setReadOnly( LinkedList.prototype, 'toJSON', function toJSON() {
	var out = {};
	out.type = 'linked-list';
	out.data = this.toArray();
	return out;
});

/**
* Adds a value to the beginning of the list.
*
* @name unshift
* @memberof LinkedList.prototype
* @type {Function}
* @returns {LinkedList} list instance
*
* @example
* var list = new LinkedList();
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
setReadOnly( LinkedList.prototype, 'unshift', function unshift( value ) {
	var node;

	// Create a new list node:
	node = new Node( value );

	// Check whether the list is currently empty...
	if ( this._length === 0 ) {
		// This is the only list node, making it both the first and last node:
		this._first = node;
		this._last = node;
	} else {
		// Link the new node to the previous first node:
		node._next = this._first; // eslint-disable-line no-underscore-dangle

		// Link the previous first node to the new node:
		this._first._prev = node; // eslint-disable-line no-underscore-dangle

		// Update the pointer for the first node:
		this._first = node;
	}
	// Increment the list length:
	this._length += 1;

	return this;
});


// EXPORTS //

module.exports = LinkedList;
