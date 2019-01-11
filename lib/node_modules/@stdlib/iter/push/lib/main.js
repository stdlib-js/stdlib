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

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// MAIN //

/**
* Returns an iterator which appends additional values to the end of a provided iterator.
*
* @param {Iterator} iterator - input iterator
* @param {*} items - values to append
* @throws {TypeError} first argument must be an iterator protocol-compliant object
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* var iter = iterPush( array2iterator( [ 1, 2 ] ), 3, 4 );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 4
*
* var bool = iter.next().done;
* // returns true
*/
function iterPush( iterator ) {
	var items;
	var iter;
	var FLG;
	var i;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must be an iterator protocol-compliant object. Value: `' + iterator + '`.' );
	}
	items = [];
	for ( i = 1; i < arguments.length; i++ ) {
		items.push( arguments[ i ] );
	}
	FLG = 0;
	i = -1;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
	if ( iteratorSymbol && isFunction( iterator[ iteratorSymbol ] ) ) {
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
		var v;
		if ( FLG === 2 ) {
			return {
				'done': true
			};
		}
		if ( FLG === 1 ) {
			i += 1;
			if ( i >= items.length ) {
				FLG = 2;
				return {
					'done': true
				};
			}
			return {
				'value': items[ i ],
				'done': false
			};
		}
		v = iterator.next();
		if ( v.done ) {
			FLG = 1;
			if ( hasOwnProp( v, 'value' ) ) {
				return {
					'value': v.value,
					'done': false
				};
			}
			i += 1;
			if ( i >= items.length ) {
				FLG = 2;
				return {
					'done': true
				};
			}
			return {
				'value': items[ i ],
				'done': false
			};
		}
		return {
			'value': v.value,
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
		FLG = 2;
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
		var args;
		var i;

		args = [ iterator[ iteratorSymbol ]() ];
		for ( i = 0; i < items.length; i++ ) {
			args.push( items[ i ] );
		}
		return iterPush.apply( null, args );
	}
}


// EXPORTS //

module.exports = iterPush;
