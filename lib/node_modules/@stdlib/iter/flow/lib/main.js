/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

/* eslint-disable no-invalid-this, no-restricted-syntax */

'use strict';

// MODULES //

var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setNonEnumerable = require( '@stdlib/utils/define-nonenumerable-property' );
var isObject = require( '@stdlib/assert/is-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var objectKeys = require( '@stdlib/utils/keys' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a constructor for creating a fluent interface for chaining together iterator methods.
*
* ## Notes
*
* -   We assume that each provided iterator function has the following function signature:
*
*     ```text
*     function iterFcn( iterator[, ...args] ) {...}
*     ```
*
*     where `iterator` is an input iterator and `args` are additional iterator function arguments (if any).
*
* @param {Object} methods - an object mapping method names to iterator functions
* @throws {TypeError} must provide an object
* @throws {TypeError} object property values must be functions
* @returns {Function} constructor
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterHead = require( '@stdlib/iter/head' );
* var iterSome = require( '@stdlib/iter/some' );
*
* // Create a "fluent" interface:
* var FluentIterator = iterFlow({
*     'head': iterHead,
*     'some': iterSome
* });
*
* // Create a source iterator:
* var arr = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 0, 1 ] );
*
* // Create a new iterator:
* var it = new FluentIterator( arr );
*
* var bool = it.head( 5 ).some( 3 );
* // returns true
*
* // Create another source iterator:
* arr = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 1, 0, 1 ] );
*
* // Create a new iterator:
* it = new FluentIterator( arr );
*
* bool = it.head( 5 ).some( 3 );
* // returns false
*/
function iterFlow( methods ) {
	var keys;
	var k;
	var f;
	var i;
	if ( !isObject( methods ) ) {
		throw new TypeError( format( 'invalid argument. Must provide an object. Value: `%s`.', methods ) );
	}
	/**
	* Fluent interface iterator constructor.
	*
	* @private
	* @constructor
	* @param {Iterator} iterator - source iterator
	* @throws {TypeError} must provide an iterator
	* @returns {FluentIterator} a "fluent" iterator
	*/
	function FluentIterator( iterator ) {
		if ( !( this instanceof FluentIterator ) ) {
			return new FluentIterator( iterator );
		}
		if ( !isIteratorLike( iterator ) ) {
			throw new TypeError( format( 'invalid argument. Must provide an iterator. Value: `%s`.', iterator ) );
		}
		setNonEnumerableReadOnly( this, '_source', iterator );
		setNonEnumerable( this, '_done', false );
		return this;
	}

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @throws {TypeError} `this` must be a fluent interface iterator
	* @returns {Object} iterator protocol-compliant object
	*/
	setNonEnumerableReadOnly( FluentIterator.prototype, 'next', function next() {
		if ( !(this instanceof FluentIterator) ) {
			throw new TypeError( 'invalid invocation. `this` is not a fluent interface iterator.' );
		}
		if ( this._done ) {
			return {
				'done': true
			};
		}
		return this._source.next();
	});

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @throws {TypeError} `this` must be a fluent interface iterator
	* @returns {Object} iterator protocol-compliant object
	*/
	setNonEnumerableReadOnly( FluentIterator.prototype, 'return', function finish( value ) {
		if ( !(this instanceof FluentIterator) ) {
			throw new TypeError( 'invalid invocation. `this` is not a fluent interface iterator.' );
		}
		this._done = true;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	});

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
	if ( iteratorSymbol ) {
		/**
		* Returns the current iterator.
		*
		* ## Notes
		*
		* -   This method allows the iterator to be iterable and thus able to be consumed, e.g., in `for..of` loops.
		*
		* @private
		* @returns {Iterator} iterator
		*/
		setNonEnumerableReadOnly( FluentIterator.prototype, iteratorSymbol, function factory() { // eslint-disable-line max-len
			return this;
		});
	}

	/**
	* Wraps an iterator function as a fluent interface method.
	*
	* @private
	* @param {Function} iterFcn - iterator function
	* @returns {Function} method wrapper
	*/
	function createMethod( iterFcn ) {
		return method;

		/**
		* Iterator function wrapper.
		*
		* @private
		* @param {...*} [args] - method arguments
		* @throws {TypeError} `this` must be a fluent interface iterator
		* @returns {Iterator} iterator
		*/
		function method() {
			var args;
			var out;
			var i;

			if ( !(this instanceof FluentIterator) ) {
				throw new TypeError( 'invalid invocation. `this` is not a fluent interface iterator.' );
			}
			args = [ this._source ];
			for ( i = 0; i < arguments.length; i++ ) {
				args.push( arguments[ i ] );
			}
			out = iterFcn.apply( null, args );

			// If the iterator function returns an iterator, in order to support subsequent chaining, we need to create a new fluent interface instance...
			if ( isIteratorLike( out ) ) {
				return new FluentIterator( out );
			}
			return out;
		}
	}

	// Bind the provided iterator functions to the constructor prototype...
	keys = objectKeys( methods );
	for ( i = 0; i < keys.length; i++ ) {
		k = keys[ i ];
		f = methods[ k ];
		if ( !isFunction( f ) ) {
			throw new TypeError( format( 'invalid argument. Object property values must be functions. Key: `%s`. Value: `%s`.', k, f ) );
		}
		setNonEnumerableReadOnly( FluentIterator.prototype, k, createMethod( f ) ); // eslint-disable-line max-len
	}

	return FluentIterator;
}


// EXPORTS //

module.exports = iterFlow;
