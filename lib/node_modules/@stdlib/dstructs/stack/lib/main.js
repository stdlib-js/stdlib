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


// MAIN //

/**
* Stack constructor.
*
* @constructor
* @returns {Stack} stack instance
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
function Stack() {
	if ( !(this instanceof Stack) ) {
		return new Stack();
	}
	// Use a dynamic array as insertion and deletion is O(1) amortized:
	this._buffer = [];
	return this;
}

/**
* Clears the stack.
*
* @name clear
* @memberof Stack.prototype
* @type {Function}
* @returns {Stack} stack instance
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
setReadOnly( Stack.prototype, 'clear', function clear() {
	this._buffer.length = 0;
	return this;
});

/**
* Returns the top value (i.e., the value which is "first-out").
*
* @name first
* @memberof Stack.prototype
* @type {Function}
* @returns {(*|void)} top value
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
setReadOnly( Stack.prototype, 'first', function first() {
	if ( this._buffer.length ) {
		return this._buffer[ this._buffer.length-1 ];
	}
});

/**
* Returns an iterator for iterating over a stack.
*
* ## Notes
*
* -   In order to prevent confusion arising from stack mutation during iteration, a returned iterator **always** iterates over a stack "snapshot", which is defined as the list of stack elements at the time of this method's invocation.
*
* @name iterator
* @memberof Stack.prototype
* @type {Function}
* @returns {Iterator} iterator
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
setReadOnly( Stack.prototype, 'iterator', function iterator() {
	var values;
	var iter;
	var self;
	var FLG;
	var i;

	self = this;

	// Initialize the iteration index:
	i = this._buffer.length;

	// Create a copy of stack values (necessary in order to "snapshot" the stack; otherwise, values could come and go between calls to `next`):
	values = this._buffer.slice();

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
		i -= 1;
		if ( FLG || i < 0 ) {
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
* Returns the bottom stack value (i.e., the value which is currently "last-out").
*
* @name last
* @memberof Stack.prototype
* @type {Function}
* @returns {(*|void)} bottom stack value
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
setReadOnly( Stack.prototype, 'last', function last() {
	if ( this._buffer.length ) {
		return this._buffer[ 0 ];
	}
});

/**
* Stack length.
*
* @name length
* @memberof Stack.prototype
* @type {NonNegativeInteger}
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
setReadOnlyAccessor( Stack.prototype, 'length', function get() {
	return this._buffer.length;
});

/**
* Removes a value from the stack.
*
* @name pop
* @memberof Stack.prototype
* @type {Function}
* @returns {(*|void)} removed value
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
setReadOnly( Stack.prototype, 'pop', function pop() {
	if ( this._buffer.length ) {
		return this._buffer.pop();
	}
});

/**
* Adds a value to the stack.
*
* @name push
* @memberof Stack.prototype
* @type {Function}
* @returns {Stack} stack instance
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
setReadOnly( Stack.prototype, 'push', function push( value ) {
	this._buffer.push( value );
	return this;
});

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
* @name toArray
* @memberof Stack.prototype
* @type {Function}
* @returns {Array} stack values
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
setReadOnly( Stack.prototype, 'toArray', function toArray() {
	var out;
	var i;
	out = [];
	for ( i = this._buffer.length-1; i >= 0; i-- ) {
		out.push( this._buffer[ i ] );
	}
	return out;
});

/**
* Serializes a stack as JSON.
*
* ## Notes
*
* -   `JSON.stringify()` implicitly calls this method when stringifying a `Stack` instance.
*
* @name toJSON
* @memberof Stack.prototype
* @type {Function}
* @returns {Object} serialized stack
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
setReadOnly( Stack.prototype, 'toJSON', function toJSON() {
	var out = {};
	out.type = 'stack';
	out.data = this.toArray();
	return out;
});


// EXPORTS //

module.exports = Stack;
