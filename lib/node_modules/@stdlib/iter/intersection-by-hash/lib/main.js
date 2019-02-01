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
var LinkedList = require( '@stdlib/utils/linked-list' );


// FUNCTIONS //

/**
* Finds a node in a linked list hash based on a provided hash.
*
* @private
* @param {LinkedList} hash - linked list hash
* @param {*} v - hash to find
* @returns {(Node|null)} hash node or null
*/
function getNode( hash, v ) {
	var node = hash.first();
	while ( node ) {
		// Each node value should be a three-element array: [ hash, value, count ]
		if ( node.value[ 0 ] === v ) {
			return node;
		}
		node = node.next;
	}
	return null;
}

/**
* Cleans a hash by removing nodes having counts below a provided threshold.
*
* @private
* @param {LinkedList} hash - input hash
* @param {PositiveInteger} threshold - count threshold
* @returns {LinkedList} input hash
*/
function clean( hash, threshold ) {
	var node = hash.first();
	while ( node ) {
		if ( node.value[ 2 ] < threshold ) {
			hash.remove( node );
		}
		node = node.next;
	}
	return hash;
}

/**
* Finds the intersection of two or more iterators according to a hash function.
*
* @private
* @param {Array<Iterator>} iterators - list of iterators
* @param {Function} hashFcn - hash function
* @param {*} thisArg - execution context
* @returns {LinkedList} a linked list containing the intersection
*/
function intersection( iterators, hashFcn, thisArg ) {
	var hash;
	var it;
	var hv;
	var v;
	var n;
	var j;

	// Create a new linked list for storing the intersection:
	hash = new LinkedList();

	// Find the intersection by first finding the unique values in the first iterator...
	it = iterators[ 0 ];
	while ( true ) {
		v = it.next();
		if ( v.done ) {
			if ( hasOwnProp( v, 'value' ) ) {
				hv = hashFcn.call( thisArg, v.value );

				// Determine if we have seen this hash before...
				n = getNode( hash, hv );
				if ( n === null ) {
					// First time we have seen this hash, so add to our set of hashes:
					hash.push( [ hv, v.value, 1 ] );
				}
			}
			break;
		}
		hv = hashFcn.call( thisArg, v.value );

		// Determine if we have seen this hash before...
		n = getNode( hash, hv );
		if ( n === null ) {
			// First time we have seen this hash, so add to our set of hashes:
			hash.push( [ hv, v.value, 1 ] );
		}
	}
	// Check whether we found any unique hashes:
	if ( hash.length === 0 ) {
		return hash;
	}
	// Now that we have found an initial set of unique hashes, we need to consume each subsequent iterator, updating the count indicating how many iterators have contained an iterated value mapping to a given hash and removing any hashes from our initial set which were not found in *all* iterators...
	for ( j = 1; j < iterators.length; j++ ) {
		it = iterators[ j ];
		while ( true ) {
			v = it.next();
			if ( v.done ) {
				if ( hasOwnProp( v, 'value' ) ) {
					hv = hashFcn.call( thisArg, v.value );
					n = getNode( hash, hv );
					if ( n && n.value[ 2 ] === j ) {
						// Only increment a hash's counter the first time we see the hash per iterator...
						n.value[ 2 ] += 1;
					}
				}
				break;
			}
			hv = hashFcn.call( thisArg, v.value );
			n = getNode( hash, hv );
			if ( n && n.value[ 2 ] === j ) {
				// Only increment a hash's counter the first time we see the hash per iterator...
				n.value[ 2 ] += 1;
			}
		}
		// Upon consuming an iterator, we need to remove any hashes whose count is less than the number of iterators seen thus far:
		clean( hash, j+1 );

		// Check whether we still have any unique hashes:
		if ( hash.length === 0 ) {
			return hash;
		}
		// Move on to the next iterator...
	}
	return hash;
}


// MAIN //

/**
* Returns an iterator which returns the intersection of two or more iterators according to a hash function.
*
* @param {Iterator} iter0 - first input iterator
* @param {...Iterator} iterator - subsequent iterators
* @param {Function} hashFcn - hash function
* @param {*} [thisArg] - execution context
* @throws {Error} must provide two or more iterators
* @throws {TypeError} must provide iterator protocol-compliant objects
* @throws {TypeError} must provide a hash function
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function hashFcn( v ) {
*     return v.toString();
* }
*
* var it1 = array2iterator( [ 1, 2, 1, 2, 4 ] );
* var it2 = array2iterator( [ 1, 2, 5, 2, 3 ] );
*
* var iter = iterIntersectionByHash( it1, it2, hashFcn );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* var bool = iter.next().done;
* // returns true
*/
function iterIntersectionByHash() {
	var iterators;
	var iterator;
	var hashFcn;
	var thisArg;
	var niter;
	var iter;
	var FLG;
	var i;

	iterators = [];
	for ( i = 0; i < arguments.length; i++ ) {
		if ( isIteratorLike( arguments[ i ] ) ) {
			iterators.push( arguments[ i ] );
		} else {
			break;
		}
	}
	niter = iterators.length;
	if ( niter < 2 ) {
		throw new Error( 'insufficient input arguments. Must provide two or more iterators.' );
	}
	if ( niter === arguments.length ) {
		throw new Error( 'insufficient input arguments. Must provide a hash function.' );
	}
	if ( arguments.length > niter+2 ) {
		// Addresses the case: fcn( it, it, null, it, it, hashFcn )
		throw new TypeError( 'invalid argument. Iterator arguments must be iterator protocol-compliant objects.' );
	}
	hashFcn = arguments[ i ];
	if ( !isFunction( hashFcn ) ) {
		throw new TypeError( 'invalid argument. Hash function argument must be a function. Value: `' + hashFcn + '`.' );
	}
	thisArg = arguments[ i+1 ];

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator` and all provided iterators are iterable, make the iterator iterable:
	if ( iteratorSymbol ) {
		for ( i = 0; i < niter; i++ ) {
			if ( !isFunction( iterators[ i ][ iteratorSymbol ] ) ) {
				FLG = true;
				break;
			}
		}
		if ( !FLG ) {
			setReadOnly( iter, iteratorSymbol, factory );
		}
	}
	FLG = false;
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* ## Notes
	*
	* -   The first time `next` is called, we must consume all source values in order to find the intersection (i.e., we "lazily" find the intersection, thus resulting in an upfront cost which is amortized over subsequent `next` calls).
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		var hash;
		var v;
		if ( FLG ) {
			return {
				'done': true
			};
		}
		// Check if this is the first time `next` has been called...
		if ( iterator === void 0 ) {
			hash = intersection( iterators, hashFcn, thisArg );
			if ( hash.length === 0 ) {
				FLG = true;
				return {
					'done': true
				};
			}
			iterator = hash.iterator();
		}
		v = iterator.next();
		if ( v.done ) {
			FLG = true;
			return v;
		}
		return {
			'value': v.value[ 1 ],
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
		var args;
		var i;

		args = [];
		for ( i = 0; i < niter; i++ ) {
			args.push( iterators[ i ][ iteratorSymbol ]() );
		}
		args.push( hashFcn );
		args.push( thisArg );
		return iterIntersectionByHash.apply( null, args );
	}
}


// EXPORTS //

module.exports = iterIntersectionByHash;
