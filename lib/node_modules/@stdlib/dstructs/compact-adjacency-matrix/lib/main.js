/**
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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isFunction = require( '@stdlib/assert/is-function' );
var isObject = require( '@stdlib/assert/is-object' );
var hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var Int32Array = require( '@stdlib/array/int32' );
var Int8Array = require( '@stdlib/array/int8' );
var format = require( '@stdlib/string/format' );
var ceil = require( '@stdlib/math/base/special/ceil' );
var floor = require( '@stdlib/math/base/special/floor' );
var grev = require( '@stdlib/blas/ext/base/grev' );
var fromIteratorAdjList = require( './from_adjacency_list_iterator.js' );
var fromIteratorAdjListMap = require( './from_adjacency_list_iterator_map.js' );
var fromIteratorEdges = require( './from_edges_iterator.js' );
var fromIteratorEdgesMap = require( './from_edges_iterator_map.js' );
var setBit = require( './set_bit.js' );
var clearBit = require( './clear_bit.js' );
var isSet = require( './is_set.js' );
var bitValue = require( './bit_value.js' );


// VARIABLES //

var HAS_ITERATOR_SYMBOL = hasIteratorSymbolSupport();
var NBITS = Int32Array.BYTES_PER_ELEMENT * 8; // 8 bits per byte


// MAIN //

/**
* Compact adjacency matrix constructor.
*
* @constructor
* @param {NonNegativeInteger} N - number of vertices
* @throws {TypeError} must provide a nonnegative integer
* @returns {CompactAdjacencyMatrix} adjacency matrix instance
*
* @example
* var adj = new CompactAdjacencyMatrix( 4 );
* // returns <CompactAdjacencyMatrix>
*
* adj.addEdge( 0, 1 );
* adj.addEdge( 0, 2 );
* adj.addEdge( 1, 2 );
* adj.addEdge( 2, 3 );
*/
function CompactAdjacencyMatrix( N ) {
	if ( !( this instanceof CompactAdjacencyMatrix ) ) {
		return new CompactAdjacencyMatrix( N );
	}
	if ( !isNonNegativeInteger( N ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a nonnegative integer. Value: `%s`.', N ) );
	}
	this._N = N; // number of vertices
	this._M = 0; // number of edges
	this._buffer = new Int32Array( ceil( N*N/NBITS ) ); // square matrix
	return this;
}

/**
* Creates a compact adjacency matrix from an adjacency list.
*
* @name fromAdjacencyList
* @memberof CompactAdjacencyMatrix
* @type {Function}
* @param {(ArrayLikeObject|Iterable)} list - adjacency list
* @param {Function} [clbk] - callback to invoke for each list element
* @param {*} [thisArg] - context
* @throws {TypeError} `this` context must be a constructor
* @throws {TypeError} `this` must be a compact adjacency matrix
* @throws {TypeError} first argument must be an array-like object or an iterable
* @throws {TypeError} second argument must be a function
* @throws {TypeError} each element of a provided adjacency list must be an array-like object
* @throws {TypeError} an iterator must return an array-like object containing vertices
* @throws {TypeError} when provided an iterator, a callback must return an array-like object containing vertices
* @returns {CompactAdjacencyMatrix} adjacency matrix instance
*
* @example
* var list = [ [ 1, 2 ], [ 2 ], [ 3 ], [] ];
*
* var adj = CompactAdjacencyMatrix.fromAdjacencyList( list );
* // returns <CompactAdjacencyMatrix>
*
* var bool = adj.hasEdge( 0, 1 );
* // returns true
*
* bool = adj.hasEdge( 0, 2 );
* // returns true
*
* bool = adj.hasEdge( 1, 2 );
* // returns true
*
* bool = adj.hasEdge( 2, 3 );
* // returns true
*/
setReadOnly( CompactAdjacencyMatrix, 'fromAdjacencyList', function fromAdjacencyList( list ) {
	var thisArg;
	var nargs;
	var edges;
	var clbk;
	var adj;
	var tmp;
	var len;
	var N;
	var i;
	var j;
	if ( !isFunction( this ) ) {
		throw new TypeError( 'invalid invocation. `this` context must be a constructor.' );
	}
	if ( this !== CompactAdjacencyMatrix ) {
		throw new TypeError( 'invalid invocation. `this` is not a compact adjacency matrix.' );
	}
	nargs = arguments.length;
	if ( nargs > 1 ) {
		clbk = arguments[ 1 ];
		if ( !isFunction( clbk ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', clbk ) );
		}
		if ( nargs > 2 ) {
			thisArg = arguments[ 2 ];
		}
	}
	if ( isArrayLikeObject( list ) ) {
		N = list.length;
		adj = new this( N );
		if ( clbk ) {
			for ( i = 0; i < N; i++ ) {
				edges = clbk.call( thisArg, list[ i ], i );
				if ( !isCollection( edges ) ) {
					throw new TypeError( format( 'invalid argument. Callback must return an array-like object. Value: `%s`.', edges ) );
				}
				for ( j = 0; j < edges.length; j++ ) {
					adj.addEdge( i, edges[ j ] );
				}
			}
			return adj;
		}
		for ( i = 0; i < N; i++ ) {
			edges = list[ i ];
			if ( !isCollection( edges ) ) {
				throw new TypeError( format( 'invalid argument. Each element of the adjacency list must be an array-like object. Value: `%s`.', list ) );
			}
			for ( j = 0; j < edges.length; j++ ) {
				adj.addEdge( i, edges[ j ] );
			}
		}
		return adj;
	}
	if ( isObject( list ) && HAS_ITERATOR_SYMBOL && isFunction( list[ ITERATOR_SYMBOL ] ) ) { // eslint-disable-line max-len
		tmp = list[ ITERATOR_SYMBOL ]();
		if ( !isFunction( tmp.next ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.', list ) );
		}
		if ( clbk ) {
			tmp = fromIteratorAdjListMap( tmp, clbk, thisArg );
		} else {
			tmp = fromIteratorAdjList( tmp );
		}
		if ( tmp instanceof Error ) {
			throw tmp;
		}
		len = tmp.length;
		adj = new this( len );
		for ( i = 0; i < len; i++ ) {
			edges = tmp[ i ];
			for ( j = 0; j < edges.length; j++ ) {
				adj.addEdge( i, edges[ j ] );
			}
		}
		return adj;
	}
	throw new TypeError( format( 'invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.', list ) );
});

/**
* Creates a compact adjacency matrix from a list of edges.
*
* @name fromEdges
* @memberof CompactAdjacencyMatrix
* @type {Function}
* @param {NonNegativeInteger} N - number of vertices
* @param {(ArrayLikeObject|Iterable)} edges - list of edges
* @param {Function} [clbk] - callback to invoke for each list element
* @param {*} [thisArg] - context
* @throws {TypeError} `this` context must be a constructor
* @throws {TypeError} `this` must be a compact adjacency matrix
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be an array-like object
* @throws {TypeError} third argument must be a function
* @throws {TypeError} each element of a provided list of edges must be a two-element array-like object containing vertices
* @throws {TypeError} an iterator must return a two-element array-like object containing vertices
* @throws {TypeError} when provided an iterator, a callback must return a two-element array-like object containing vertices
* @returns {CompactAdjacencyMatrix} adjacency matrix instance
*
* @example
* var edges = [ [ 0, 1 ], [ 0, 2 ], [ 1, 2 ], [ 2, 3 ] ];
*
* var adj = CompactAdjacencyMatrix.fromEdges( 4, edges );
* // returns <CompactAdjacencyMatrix>
*
* var bool = adj.hasEdge( 0, 1 );
* // returns true
*
* bool = adj.hasEdge( 0, 2 );
* // returns true
*
* bool = adj.hasEdge( 1, 2 );
* // returns true
*
* bool = adj.hasEdge( 2, 3 );
* // returns true
*/
setReadOnly( CompactAdjacencyMatrix, 'fromEdges', function fromEdges( N, edges ) {
	var thisArg;
	var nargs;
	var clbk;
	var edge;
	var adj;
	var tmp;
	var len;
	var i;
	if ( !isFunction( this ) ) {
		throw new TypeError( 'invalid invocation. `this` context must be a constructor.' );
	}
	if ( this !== CompactAdjacencyMatrix ) {
		throw new TypeError( 'invalid invocation. `this` is not a compact adjacency matrix.' );
	}
	nargs = arguments.length;
	if ( nargs > 2 ) {
		clbk = arguments[ 2 ];
		if ( !isFunction( clbk ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', clbk ) );
		}
		if ( nargs > 3 ) {
			thisArg = arguments[ 3 ];
		}
	}
	if ( !isNonNegativeInteger( N ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%s`.', N ) );
	}
	if ( isArrayLikeObject( edges ) ) {
		if ( clbk ) {
			adj = new this( N );
			for ( i = 0; i < edges.length; i++ ) {
				edge = clbk.call( thisArg, edges[ i ], i );
				if ( !isArrayLikeObject( edge ) ) {
					throw new TypeError( format( 'invalid argument. Callback must return an array-like object. Value: `%s`.', edge ) );
				}
				adj.addEdge( edge[ 0 ], edge[ 1 ] );
			}
			return adj;
		}
		adj = new this( N );
		for ( i = 0; i < edges.length; i++ ) {
			edge = edges[ i ];
			if ( !isArrayLikeObject( edge ) ) {
				throw new TypeError( format( 'invalid argument. Each element of the edge list must be an array-like object. Value: `%s`.', edge ) );
			}
			adj.addEdge( edge[ 0 ], edge[ 1 ] );
		}
		return adj;
	}

	if ( isObject( edges ) && HAS_ITERATOR_SYMBOL && isFunction( edges[ ITERATOR_SYMBOL ] ) ) { // eslint-disable-line max-len
		tmp = edges[ ITERATOR_SYMBOL ]();
		if ( !isFunction( tmp.next ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.', edges ) );
		}
		if ( clbk ) {
			tmp = fromIteratorEdgesMap( tmp, clbk, thisArg );
		} else {
			tmp = fromIteratorEdges( tmp );
		}
		if ( tmp instanceof Error ) {
			throw tmp;
		}
		len = tmp.length;
		adj = new this( len/2 );
		for ( i = 0; i < len; i += 2 ) {
			adj.addEdge( tmp[ i ], tmp[ i+1 ] );
		}
		return adj;
	}
	throw new TypeError( format( 'invalid argument. Second argument must be an array-like object or an iterable. Value: `%s`.', edges ) );
});

/**
* Returns indices ("bucket" and bit offset) for an `(i,j)` vertex pair.
*
* @private
* @name _loc
* @memberof CompactAdjacencyMatrix.prototype
* @type {Function}
* @param {NonNegativeInteger} i - starting vertex
* @param {NonNegativeInteger} j - ending vertex
* @param {Array} out - output array
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {RangeError} first argument must not exceed matrix dimensions
* @throws {RangeError} second argument must not exceed matrix dimensions
* @returns {Array} output array
*/
setReadOnly( CompactAdjacencyMatrix.prototype, '_loc', function loc( i, j, out ) {
	var bucket;
	var bit;
	var idx;

	// Compute a strided index for the desired bit:
	idx = ( i*this._N ) + j;

	// Compute the index of the buffer element (bucket) containing the bit:
	bucket = floor( idx / NBITS );

	// Compute the bit offset:
	bit = idx - ( bucket*NBITS );

	// Set the output values:
	out[ 0 ] = bucket;
	out[ 1 ] = bit;

	return out;
});

/**
* Adds a directed edge between two vertices.
*
* @name addEdge
* @memberof CompactAdjacencyMatrix.prototype
* @type {Function}
* @param {NonNegativeInteger} i - starting vertex
* @param {NonNegativeInteger} j - ending vertex
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {RangeError} first argument must not exceed matrix dimensions
* @throws {RangeError} second argument must not exceed matrix dimensions
* @returns {CompactAdjacencyMatrix} adjacency matrix instance
*
* @example
* var adj = new CompactAdjacencyMatrix( 4 );
* // returns <CompactAdjacencyMatrix>
*
* adj.addEdge( 0, 1 );
* adj.addEdge( 0, 2 );
* adj.addEdge( 1, 2 );
* adj.addEdge( 2, 3 );
*/
setReadOnly( CompactAdjacencyMatrix.prototype, 'addEdge', function addEdge( i, j ) {
	var idx;
	if ( !isNonNegativeInteger( i ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%s`.', i ) );
	}
	if ( !isNonNegativeInteger( j ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', j ) );
	}
	if ( i >= this._N ) {
		throw new RangeError( format( 'invalid argument. First argument exceeds matrix dimensions. Value: `%u`.', i ) );
	}
	if ( j >= this._N ) {
		throw new RangeError( format( 'invalid argument. Second argument exceeds matrix dimensions. Value: `%u`.', j ) );
	}
	// Resolve the `(i,j)` pair:
	idx = this._loc( i, j, [ 0, 0 ] );

	// Set the bit for the edge:
	if ( isSet( this._buffer[ idx[0] ], idx[1] ) === false ) {
		this._buffer[ idx[0] ] = setBit( this._buffer[ idx[0] ], idx[1] );
		this._M += 1;
	}
	return this;
});

/**
* Returns the list of all edges.
*
* @name edges
* @memberof CompactAdjacencyMatrix.prototype
* @type {Array}
*
* @example
* var adj = new CompactAdjacencyMatrix( 4 );
* // returns <CompactAdjacencyMatrix>
*
* adj.addEdge( 0, 1 );
* adj.addEdge( 0, 2 );
* adj.addEdge( 1, 2 );
* adj.addEdge( 2, 3 );
*
* var edges = adj.edges;
* // returns [ [ 0, 1 ], [ 0, 2 ], [ 1, 2 ], [ 2, 3 ] ]
*/
setReadOnlyAccessor( CompactAdjacencyMatrix.prototype, 'edges', function edges() {
	var edges;
	var idx;
	var i;
	var j;

	edges = [];
	idx = [ 0, 0 ];
	for ( i = 0; i < this._N; i++ ) {
		for ( j = 0; j < this._N; j++ ) {
			// Resolve the `(i,j)` pair:
			idx = this._loc( i, j, idx );

			// Check for an edge:
			if ( isSet( this._buffer[ idx[0] ], idx[1] ) ) {
				edges.push( [ i, j ] );
			}
		}
	}
	return edges;
});

/**
* Checks whether a directed edge exists between two vertices.
*
* @name hasEdge
* @memberof CompactAdjacencyMatrix.prototype
* @type {Function}
* @param {NonNegativeInteger} i - starting vertex
* @param {NonNegativeInteger} j - ending vertex
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {RangeError} first argument must not exceed matrix dimensions
* @throws {RangeError} second argument must not exceed matrix dimensions
* @returns {boolean} boolean indicating if an edge exists
*
* @example
* var adj = new CompactAdjacencyMatrix( 4 );
* // returns <CompactAdjacencyMatrix>
*
* adj.addEdge( 0, 1 );
* adj.addEdge( 0, 2 );
* adj.addEdge( 1, 2 );
* adj.addEdge( 2, 3 );
*
* // ...
*
* var bool = adj.hasEdge( 0, 1 );
* // returns true
*
* bool = adj.hasEdge( 0, 2 );
* // returns true
*
* bool = adj.hasEdge( 1, 2 );
* // returns true
*
* bool = adj.hasEdge( 2, 3 );
* // returns true
*
* bool = adj.hasEdge( 1, 3 );
* // returns false
*/
setReadOnly( CompactAdjacencyMatrix.prototype, 'hasEdge', function hasEdge( i, j ) {
	var idx;
	if ( !isNonNegativeInteger( i ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%s`.', i ) );
	}
	if ( !isNonNegativeInteger( j ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', j ) );
	}
	if ( i >= this._N ) {
		throw new RangeError( format( 'invalid argument. First argument exceeds matrix dimensions. Value: `%u`.', i ) );
	}
	if ( j >= this._N ) {
		throw new RangeError( format( 'invalid argument. Second argument exceeds matrix dimensions. Value: `%u`.', j ) );
	}
	// Resolve the `(i,j)` pair:
	idx = this._loc( i, j, [ 0, 0 ] );

	// Check for an edge:
	return isSet( this._buffer[ idx[0] ], idx[1] );
});

/**
* Returns the indegree of a vertex (i.e., number of edges ending at a vertex).
*
* @name inDegree
* @memberof CompactAdjacencyMatrix.prototype
* @type {Function}
* @param {NonNegativeInteger} j - vertex
* @throws {TypeError} must provide a nonnegative integer
* @throws {RangeError} must not exceed matrix dimensions
* @returns {NonNegativeInteger} indegree
*
* @example
* var adj = new CompactAdjacencyMatrix( 4 );
* // returns <CompactAdjacencyMatrix>
*
* adj.addEdge( 0, 1 );
* adj.addEdge( 0, 2 );
* adj.addEdge( 1, 2 );
* adj.addEdge( 2, 3 );
*
* var d = adj.inDegree( 2 );
* // returns 2
*
* d = adj.inDegree( 3 );
* // returns 1
*/
setReadOnly( CompactAdjacencyMatrix.prototype, 'inDegree', function inDegree( j ) {
	var deg;
	var idx;
	var i;
	if ( !isNonNegativeInteger( j ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a nonnegative integer. Value: `%s`.', j ) );
	}
	if ( j >= this._N ) {
		throw new RangeError( format( 'invalid argument. Vertex cannot exceed matrix dimensions. Value: `%u`.', j ) );
	}
	// Iterate over the rows and add up the number of edges...
	deg = 0;
	idx = [ 0, 0 ];
	for ( i = 0; i < this._N; i++ ) {
		// Resolve the `(i,j)` pair:
		idx = this._loc( i, j, idx );

		// Check for an edge:
		deg += bitValue( this._buffer[ idx[0] ], idx[1] );
	}
	return deg;
});

/**
* Returns a list of vertices having edges ending at a specified vertex.
*
* @name inEdges
* @memberof CompactAdjacencyMatrix.prototype
* @type {Function}
* @param {NonNegativeInteger} j - vertex
* @throws {TypeError} must provide a nonnegative integer
* @throws {RangeError} must not exceed matrix dimensions
* @returns {Array} list of vertices
*
* @example
* var adj = new CompactAdjacencyMatrix( 4 );
* // returns <CompactAdjacencyMatrix>
*
* adj.addEdge( 0, 1 );
* adj.addEdge( 0, 2 );
* adj.addEdge( 1, 2 );
* adj.addEdge( 2, 3 );
*
* var e = adj.inEdges( 2 );
* // returns [ 0, 1 ]
*
* e = adj.inEdges( 3 );
* // returns [ 2 ]
*/
setReadOnly( CompactAdjacencyMatrix.prototype, 'inEdges', function inEdges( j ) {
	var edges;
	var idx;
	var i;
	if ( !isNonNegativeInteger( j ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a nonnegative integer. Value: `%s`.', j ) );
	}
	if ( j >= this._N ) {
		throw new RangeError( format( 'invalid argument. Vertex cannot exceed matrix dimensions. Value: `%u`.', j ) );
	}
	// Iterate over the rows and retrieve edges...
	edges = [];
	idx = [ 0, 0 ];
	for ( i = 0; i < this._N; i++ ) {
		// Resolve the `(i,j)` pair:
		idx = this._loc( i, j, idx );

		// Check for an edge:
		if ( isSet( this._buffer[ idx[0] ], idx[1] ) ) {
			edges.push( i );
		}
	}
	return edges;
});

/**
* Returns the total number of edges.
*
* @name nedges
* @memberof CompactAdjacencyMatrix.prototype
* @readonly
* @type {NonNegativeInteger}
*
* @example
* var adj = new CompactAdjacencyMatrix( 4 );
* // returns <CompactAdjacencyMatrix>
*
* // ...
*
* adj.addEdge( 0, 1 );
* adj.addEdge( 0, 2 );
* adj.addEdge( 1, 2 );
*
* // ...
*
* var M = adj.nedges;
* // returns 3
*/
setReadOnlyAccessor( CompactAdjacencyMatrix.prototype, 'nedges', function nedges() {
	return this._M;
});

/**
* Returns the number of vertices.
*
* @name nvertices
* @memberof CompactAdjacencyMatrix.prototype
* @readonly
* @type {NonNegativeInteger}
*
* @example
* var adj = new CompactAdjacencyMatrix( 4 );
* // returns <CompactAdjacencyMatrix>
*
* // ...
*
* var N = adj.nvertices;
* // returns 4
*/
setReadOnlyAccessor( CompactAdjacencyMatrix.prototype, 'nvertices', function nvertices() {
	return this._N;
});

/**
* Returns the outdegree of a vertex (i.e., number of edges starting from a vertex).
*
* @name outDegree
* @memberof CompactAdjacencyMatrix.prototype
* @type {Function}
* @param {NonNegativeInteger} i - vertex
* @throws {TypeError} must provide a nonnegative integer
* @throws {RangeError} must not exceed matrix dimensions
* @returns {NonNegativeInteger} outdegree
*
* @example
* var adj = new CompactAdjacencyMatrix( 4 );
* // returns <CompactAdjacencyMatrix>
*
* adj.addEdge( 0, 1 );
* adj.addEdge( 0, 2 );
* adj.addEdge( 1, 2 );
* adj.addEdge( 2, 3 );
*
* var d = adj.outDegree( 2 );
* // returns 1
*
* d = adj.outDegree( 0 );
* // returns 2
*/
setReadOnly( CompactAdjacencyMatrix.prototype, 'outDegree', function outDegree( i ) {
	var deg;
	var idx;
	var j;
	if ( !isNonNegativeInteger( i ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a nonnegative integer. Value: `%s`.', i ) );
	}
	if ( i >= this._N ) {
		throw new RangeError( format( 'invalid argument. Vertex cannot exceed matrix dimensions. Value: `%u`.', i ) );
	}
	// Iterate over the columns and add up the number of edges...
	deg = 0;
	idx = [ 0, 0 ];
	for ( j = 0; j < this._N; j++ ) {
		// Resolve the `(i,j)` pair:
		idx = this._loc( i, j, idx );

		// Check for an edge:
		deg += bitValue( this._buffer[ idx[0] ], idx[1] );
	}
	return deg;
});

/**
* Returns a list of vertices having edges starting at a specified vertex.
*
* @name outEdges
* @memberof CompactAdjacencyMatrix.prototype
* @type {Function}
* @param {NonNegativeInteger} i - vertex
* @throws {TypeError} must provide a nonnegative integer
* @throws {RangeError} must not exceed matrix dimensions
* @returns {Array} list of vertices
*
* @example
* var adj = new CompactAdjacencyMatrix( 4 );
* // returns <CompactAdjacencyMatrix>
*
* adj.addEdge( 0, 1 );
* adj.addEdge( 0, 2 );
* adj.addEdge( 1, 2 );
* adj.addEdge( 2, 3 );
*
* var e = adj.outEdges( 2 );
* // returns [ 3 ]
*
* e = adj.outEdges( 0 );
* // returns [ 1, 2 ]
*/
setReadOnly( CompactAdjacencyMatrix.prototype, 'outEdges', function outEdges( i ) {
	var edges;
	var idx;
	var j;
	if ( !isNonNegativeInteger( i ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a nonnegative integer. Value: `%s`.', i ) );
	}
	if ( i >= this._N ) {
		throw new RangeError( format( 'invalid argument. Vertex cannot exceed matrix dimensions. Value: `%u`.', i ) );
	}
	// Iterate over the rows and retrieve edges...
	edges = [];
	idx = [ 0, 0 ];
	for ( j = 0; j < this._N; j++ ) {
		// Resolve the `(i,j)` pair:
		idx = this._loc( i, j, idx );

		// Check for an edge:
		if ( isSet( this._buffer[ idx[0] ], idx[1] ) ) {
			edges.push( j );
		}
	}
	return edges;
});

/**
* Removes a directed edge between two vertices.
*
* @name removeEdge
* @memberof CompactAdjacencyMatrix.prototype
* @type {Function}
* @param {NonNegativeInteger} i - starting vertex
* @param {NonNegativeInteger} j - ending vertex
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {RangeError} first argument must not exceed matrix dimensions
* @throws {RangeError} second argument must not exceed matrix dimensions
* @returns {CompactAdjacencyMatrix} adjacency matrix instance
*
* @example
* var adj = new CompactAdjacencyMatrix( 4 );
* // returns <CompactAdjacencyMatrix>
*
* adj.addEdge( 0, 1 );
* adj.addEdge( 0, 2 );
* adj.addEdge( 1, 2 );
* adj.addEdge( 2, 3 );
*
* // ...
*
* adj.removeEdge( 0, 1 );
* adj.removeEdge( 0, 2 );
* adj.removeEdge( 1, 2 );
* adj.removeEdge( 2, 3 );
*/
setReadOnly( CompactAdjacencyMatrix.prototype, 'removeEdge', function removeEdge( i, j ) {
	var idx;
	if ( !isNonNegativeInteger( i ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%s`.', i ) );
	}
	if ( !isNonNegativeInteger( j ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', j ) );
	}
	if ( i >= this._N ) {
		throw new RangeError( format( 'invalid argument. First argument exceeds matrix dimensions. Value: `%u`.', i ) );
	}
	if ( j >= this._N ) {
		throw new RangeError( format( 'invalid argument. Second argument exceeds matrix dimensions. Value: `%u`.', j ) );
	}
	// Resolve the `(i,j)` pair:
	idx = this._loc( i, j, [ 0, 0 ] );

	// Clear the bit for the edge:
	if ( isSet( this._buffer[ idx[0] ], idx[1] ) ) {
		this._buffer[ idx[0] ] = clearBit( this._buffer[ idx[0] ], idx[1] );
		this._M -= 1;
	}
	return this;
});

/**
* Returns an adjacency list representation.
*
* @name toAdjacencyList
* @memberof CompactAdjacencyMatrix.prototype
* @type {Function}
* @returns {Array} adjacency list representation
*
* @example
* var adj = new CompactAdjacencyMatrix( 4 );
* // returns <CompactAdjacencyMatrix>
*
* adj.addEdge( 0, 1 );
* adj.addEdge( 0, 2 );
* adj.addEdge( 1, 2 );
* adj.addEdge( 2, 3 );
*
* var list = adj.toAdjacencyList();
* // returns [ [ 1, 2 ], [ 2 ], [ 3 ], [] ]
*/
setReadOnly( CompactAdjacencyMatrix.prototype, 'toAdjacencyList', function toAdjacencyList() {
	var list;
	var idx;
	var tmp;
	var i;
	var j;

	list = [];
	idx = [ 0, 0 ];
	for ( i = 0; i < this._N; i++ ) {
		tmp = [];
		for ( j = 0; j < this._N; j++ ) {
			// Resolve the `(i,j)` pair:
			idx = this._loc( i, j, idx );

			// Check for an edge:
			if ( isSet( this._buffer[ idx[0] ], idx[1] ) ) {
				tmp.push( j );
			}
		}
		list.push( tmp );
	}
	return list;
});

/**
* Returns a topological ordering of the directed graph.
*
* ## Notes
*
* -   The function returns a two-element array.
* -   If the function is able to compute a topological ordering, the first array element is the topological ordering and the second element is `null`.
* -   If a topological ordering cannot be achieved (e.g., due to the graph not being a directed acyclic graph (DAG)), the first array element is `null` and the second element is the first encountered cycle.
*
* @name toposort
* @memberof CompactAdjacencyMatrix.prototype
* @type {Function}
* @returns {Array} topological ordering
*
* @example
* var adj = new CompactAdjacencyMatrix( 4 );
* // returns <CompactAdjacencyMatrix>
*
* adj.addEdge( 1, 0 );
* adj.addEdge( 1, 2 );
* adj.addEdge( 0, 2 );
* adj.addEdge( 2, 3 );
*
* var results = adj.toposort();
* // returns <Array>
*
* var order = results[ 0 ];
* // returns [ 1, 0, 2, 3 ]
*
* var cycle = results[ 1 ];
* // returns null
*/
setReadOnly( CompactAdjacencyMatrix.prototype, 'toposort', function toposort() {
	var marks;
	var self;
	var out;
	var idx;
	var err;
	var N;
	var s;
	var i;

	self = this;
	N = this._N;

	// Initialize an empty list that will contain the sorted vertices:
	out = [];

	// If the graph is empty, nothing to sort...
	if ( this._N === 0 ) {
		return [ out, null ];
	}
	// Initialize an array for keeping track of whether a vertex has been "visited":
	marks = new Int8Array( N );

	// Initialize a stack for keeping track of cycles:
	s = [];

	// Process vertices using depth-first-search...
	idx = [ 0, 0 ];
	for ( i = 0; i < N; i++ ) {
		if ( marks[ i ] === 0 ) {
			err = visit( i );
			if ( err !== 0 ) {
				// Found a cycle...
				s.push( i );
				return [ null, s ];
			}
		}
	}
	// Reverse the output array as the leaves were added first, followed the by the roots, via depth-first-search:
	grev( out.length, out, 1 );

	return [ out, null ];

	/**
	* Visits a graph vertex and follows edges until finding a leaf vertex (if one exists).
	*
	* ## Notes
	*
	* -   If the function is able to successfully perform a depth-first-search, the functions returns `0`; otherwise, the function returns `-1` in the event of a cycle.
	*
	* @private
	* @param {NonNegativeInteger} i - vertex
	* @returns {integer} error code
	*/
	function visit( i ) {
		var err;
		var j;

		// Check if we've already processed/visited this vertex...
		if ( marks[ i ] === 2 ) {
			return 0;
		}
		// Check if we've seen this vertex before and the vertex is still being processed...
		if ( marks[ i ] === 1 ) {
			// We've found a cycle...
			return -1;
		}
		// Mark the current vertex as currently being processed:
		marks[ i ] = 1;

		// Follow all edges from the current vertex...
		for ( j = 0; j < N; j++ ) {
			idx = self._loc( i, j, idx ); // eslint-disable-line no-underscore-dangle
			if ( isSet( self._buffer[ idx[0] ], idx[1] ) ) { // eslint-disable-line no-underscore-dangle
				err = visit( j );
				if ( err !== 0 ) {
					// This vertex is part of a cycle, so add to cycle stack...
					s.push( j );
					return err;
				}
			}
		}
		// Mark the current vertex as processed:
		marks[ i ] = 2;

		// Add to the output array now that all subsequent vertices (relative to this vertex) in the graph have already been added to the output array:
		out.push( i );

		return 0;
	}
});


// EXPORTS //

module.exports = CompactAdjacencyMatrix;
