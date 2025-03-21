/* eslint-disable max-len, max-lines */

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

'use strict';

// MODULES //

var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isFunction = require( '@stdlib/assert/is-function' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-object' );
var isCollection = require( '@stdlib/assert/is-collection' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );
var propertiesIn = require( '@stdlib/utils/properties-in' );
var typedarray = require( '@stdlib/array/typed' );
var Int8Array = require( '@stdlib/array/int8' );
var getDtype = require( '@stdlib/array/dtype' );
var defineProperty = require( '@stdlib/utils/define-property' );
var setNonEnumerableProperty = require( '@stdlib/utils/define-nonenumerable-property' );
var setNonEnumerableReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' ); // eslint-disable-line id-length
var setNonEnumerableReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' ); // eslint-disable-line id-length
var floor = require( '@stdlib/math/base/special/floor' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var format = require( '@stdlib/string/format' );
var contains = require( './contains.js' );
var hasDistinctElements = require( './has_distinct_elements.js' );
var validate = require( './validate.js' );
var ascending = require( './ascending.js' );
var fromIterator = require( './from_iterator.js' );
var fromIteratorMap = require( './from_iterator_map.js' );


// VARIABLES //

var RESERVED_PROPS = propertiesIn( new Int8Array( 0 ) );
var HAS_ITERATOR_SYMBOL = hasIteratorSymbolSupport();


// MAIN //

/**
* Returns a named typed tuple factory.
*
* @param {StringArray} names - field (property) names
* @param {Options} [options] - options
* @param {string} [options.dtype="float64"] - default data type
* @param {string} [options.name="tuple"] - tuple name
* @throws {TypeError} must provide an array of strings
* @throws {TypeError} must provide distinct field names
* @throws {Error} cannot provide a reserved field (property) name
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a recognized data type
* @returns {Function} factory function
*
* @example
* var point = factory( [ 'x', 'y' ] );
*
* var p = point( [ 1.0, -1.0 ] );
*
* var x = p[ 0 ];
* // returns 1.0
*
* x = p.x;
* // returns 1.0
*
* var y = p[ 1 ];
* // returns -1.0
*
* y = p.y;
* // returns -1.0
*/
function factory( names, options ) { // eslint-disable-line max-lines-per-function, stdlib/jsdoc-require-throws-tags
	var nfields;
	var fields;
	var opts;
	var err;
	var i;
	if ( !isStringArray( names ) ) {
		throw new TypeError( format( 'invalid argument. Must provide an array of strings. Value: `%s`.', names ) );
	}
	if ( !hasDistinctElements( names ) ) {
		throw new TypeError( format( 'invalid argument. Field names must be distinct. Value: `%s`.', names ) );
	}
	fields = names.slice();
	nfields = fields.length;
	for ( i = 0; i < nfields; i++ ) {
		if ( contains( RESERVED_PROPS, fields[ i ] ) ) {
			throw new Error( format( 'invalid argument. Provided field name is reserved. Name: `%s`.', fields[ i ] ) );
		}
	}
	opts = {
		'dtype': 'float64',
		'name': 'tuple'
	};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}

	/**
	* Returns a named typed tuple.
	*
	* @private
	* @param {(TypedArray|ArrayLikeObject|ArrayBuffer|Iterable)} [arg] - a typed array, array-like object, buffer, or an iterable
	* @param {NonNegativeInteger} [byteOffset=0] - byte offset
	* @param {string} [dtype] - data type
	* @throws {TypeError} must provide a recognized data type
	* @throws {RangeError} arguments must be compatible with tuple length
	* @returns {TypedArray} named typed tuple
	*/
	function namedtypedtuple() { // eslint-disable-line max-lines-per-function
		var indices;
		var dtype;
		var nargs;
		var tuple;
		var i;

		nargs = arguments.length;
		if ( nargs <= 0 ) {
			tuple = typedarray( nfields, opts.dtype );
		} else if ( nargs === 1 ) {
			if ( isString( arguments[ 0 ] ) ) {
				// Arguments: [ dtype ]
				tuple = typedarray( nfields, arguments[ 0 ] );
			} else if ( isArrayBuffer( arguments[ 0 ] ) ) {
				// Arguments: [ ArrayBuffer ]
				tuple = typedarray( arguments[ 0 ], 0, nfields, opts.dtype );
			} else {
				// Arguments: [ TypedArray|ArrayLikeObject|Iterable ]
				tuple = typedarray( arguments[ 0 ], opts.dtype );
			}
		} else if ( nargs === 2 ) {
			if ( isArrayBuffer( arguments[ 0 ] ) ) {
				if ( isString( arguments[ 1 ] ) ) {
					// Arguments: [ ArrayBuffer, dtype ]
					tuple = typedarray( arguments[ 0 ], 0, nfields, arguments[ 1 ] );
				} else {
					// Arguments: [ ArrayBuffer, byteOffset ]
					tuple = typedarray( arguments[ 0 ], arguments[ 1 ], nfields, opts.dtype );
				}
			} else {
				// Arguments: [ TypedArray|ArrayLikeObject|Iterable, dtype ]
				tuple = typedarray( arguments[ 0 ], arguments[ 1 ] );
			}
		} else {
			// Arguments: [ ArrayBuffer, byteOffset, dtype ]
			tuple = typedarray( arguments[ 0 ], arguments[ 1 ], nfields, arguments[ 2 ] );
		}
		if ( tuple.length !== nfields ) {
			throw new RangeError( format( 'invalid arguments. Arguments are incompatible with the number of tuple fields. Number of fields: `%u`. Number of data elements: `%u`.', nfields, tuple.length ) );
		}
		dtype = getDtype( tuple );

		indices = []; // indirect index look-up table
		for ( i = 0; i < nfields; i++ ) {
			indices.push( i );
			setNonEnumerableReadWriteAccessor( tuple, fields[ i ], getter( i ), setter( i ) );
		}
		setNonEnumerableProperty( tuple, 'name', opts.name );
		setNonEnumerableReadOnlyAccessor( tuple, 'fields', getFields );
		setNonEnumerableReadOnlyAccessor( tuple, 'orderedFields', orderedFields );

		// Note: keep in alphabetical order
		setNonEnumerableProperty( tuple, 'entries', entries );
		setNonEnumerableProperty( tuple, 'every', every );
		setNonEnumerableProperty( tuple, 'fieldOf', fieldOf );
		setNonEnumerableProperty( tuple, 'filter', filter );
		setNonEnumerableProperty( tuple, 'find', find );
		setNonEnumerableProperty( tuple, 'findIndex', findIndex );
		setNonEnumerableProperty( tuple, 'findField', findField );
		setNonEnumerableProperty( tuple, 'forEach', forEach );
		setNonEnumerableProperty( tuple, 'ind2key', ind2key );
		setNonEnumerableProperty( tuple, 'key2ind', key2ind );
		setNonEnumerableProperty( tuple, 'keys', keys );
		setNonEnumerableProperty( tuple, 'lastFieldOf', lastFieldOf );
		setNonEnumerableProperty( tuple, 'map', map );
		setNonEnumerableProperty( tuple, 'reduce', reduce );
		setNonEnumerableProperty( tuple, 'reduceRight', reduceRight );
		setNonEnumerableProperty( tuple, 'reverse', reverse );
		setNonEnumerableProperty( tuple, 'slice', slice );
		setNonEnumerableProperty( tuple, 'some', some );
		setNonEnumerableProperty( tuple, 'sort', sort );
		setNonEnumerableProperty( tuple, 'subtuple', subtuple );
		setNonEnumerableProperty( tuple, 'toJSON', toJSON );
		setNonEnumerableProperty( tuple, 'toString', toString );

		return tuple;

		/**
		* Returns an accessor to retrieve a tuple value.
		*
		* @private
		* @param {NonNegativeInteger} i - tuple index
		* @returns {Function} accessor
		*/
		function getter( i ) {
			return get;

			/**
			* Returns a tuple value.
			*
			* @private
			* @returns {number} tuple value
			*/
			function get() {
				return tuple[ indices[ i ] ];
			}
		}

		/**
		* Returns an accessor to set a tuple value.
		*
		* @private
		* @param {NonNegativeInteger} i - tuple index
		* @returns {Function} accessor
		*/
		function setter( i ) {
			return set;

			/**
			* Sets a tuple value.
			*
			* @private
			* @param {number} v - value to set
			*/
			function set( v ) {
				tuple[ indices[ i ] ] = v;
			}
		}

		/**
		* Returns the list of tuple fields.
		*
		* @private
		* @memberof tuple
		* @returns {StringArray} tuple fields
		*/
		function getFields() {
			return fields.slice();
		}

		/**
		* Returns the list of tuple fields in index order.
		*
		* @private
		* @memberof tuple
		* @returns {StringArray} tuple fields
		*/
		function orderedFields() {
			var out;
			var i;
			out = fields.slice();
			for ( i = 0; i < nfields; i++ ) {
				out[ i ] = fields[ indices[i] ];
			}
			return out;
		}

		// Note: keep functions which follow in alphabetical order

		/**
		* Returns an iterator for iterating over tuple key-value pairs.
		*
		* @private
		* @memberof tuple
		* @throws {TypeError} `this` must be the host tuple
		* @returns {Iterator} iterator
		*/
		function entries() {
			var self;
			var iter;
			var FLG;
			var i;

			self = this; // eslint-disable-line no-invalid-this
			if ( self !== tuple ) {
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}

			// Initialize the iteration index:
			i = -1;

			// Create an iterator protocol-compliant object:
			iter = {};
			defineProperty( iter, 'next', {
				'configurable': false,
				'enumerable': false,
				'writable': false,
				'value': next
			});
			defineProperty( iter, 'return', {
				'configurable': false,
				'enumerable': false,
				'writable': false,
				'value': end
			});
			if ( HAS_ITERATOR_SYMBOL ) {
				defineProperty( iter, ITERATOR_SYMBOL, {
					'configurable': false,
					'enumerable': false,
					'writable': false,
					'value': factory
				});
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
				if ( FLG || i >= nfields ) {
					return {
						'done': true
					};
				}
				return {
					'value': [ i, fields[ indices[ i ] ], tuple[ i ] ],
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
				return self.entries();
			}
		}

		/**
		* Tests whether all tuple elements pass a test implemented by a predicate function.
		*
		* @private
		* @memberof tuple
		* @param {Function} predicate - predicate function
		* @param {*} [thisArg] - execution context
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} first argument must be a function
		* @returns {boolean} boolean indicating if all elements pass
		*/
		function every( predicate, thisArg ) {
			var bool;
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( !isFunction( predicate ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', predicate ) );
			}
			for ( i = 0; i < nfields; i++ ) {
				bool = predicate.call( thisArg, tuple[ i ], i, fields[ indices[i] ], tuple );
				if ( !bool ) {
					return false;
				}
			}
			return true;
		}

		/**
		* Returns the field of the first tuple element strictly equal to a search element.
		*
		* ## Notes
		*
		* -   The function does not distinguish between signed and unsigned zero.
		* -   If unable to locate a search element, the function returns `undefined`.
		*
		* @private
		* @memberof tuple
		* @param {*} searchElement - search element
		* @param {integer} [fromIndex=0] - tuple index from which to begin searching
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} second argument must be an integer
		* @returns {(string|void)} tuple field name or `undefined`
		*/
		function fieldOf( searchElement ) {
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( arguments.length > 1 ) {
				i = arguments[ 0 ];
				if ( !isInteger( i ) ) {
					throw new TypeError( format( 'invalid argument. Second argument must be an integer. Value: `%s`.', i ) );
				}
				if ( i >= nfields ) {
					return;
				}
				if ( i < 0 ) {
					i = nfields + i;
					if ( i < 0 ) {
						i = 0;
					}
				}
			} else {
				i = 0;
			}
			for ( ; i < nfields; i++ ) {
				if ( tuple[ i ] === searchElement ) {
					return fields[ indices[ i ] ];
				}
			}
		}

		/**
		* Creates a new tuple which includes those elements for which a predicate function returns a truthy value.
		*
		* ## Notes
		*
		* -   The returned tuple has the same data type as the host tuple.
		* -   If a predicate function does not return a truthy value for any tuple element, the function returns `null`.
		*
		* @private
		* @memberof tuple
		* @param {Function} predicate - filter (predicate) function
		* @param {*} [thisArg] - execution context
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} first argument must be a function
		* @returns {(TypedArray|null)} new tuple
		*/
		function filter( predicate, thisArg ) {
			var bool;
			var tmp;
			var f;
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( !isFunction( predicate ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', predicate ) );
			}
			tmp = [];
			f = [];
			for ( i = 0; i < nfields; i++ ) {
				bool = predicate.call( thisArg, tuple[ i ], i, fields[ indices[i] ], tuple );
				if ( bool ) {
					f.push( fields[ indices[i] ] );
					tmp.push( tuple[ i ] );
				}
			}
			if ( f.length === nfields ) {
				return namedtypedtuple( tmp, dtype );
			}
			if ( f.length ) {
				return factory( f, opts )( tmp );
			}
			return null;
		}

		/**
		* Returns the first tuple element for which a provided predicate function returns a truthy value.
		*
		* @private
		* @memberof tuple
		* @param {Function} predicate - predicate function
		* @param {*} [thisArg] - execution context
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} first argument must be a function
		* @returns {(number|void)} tuple element
		*/
		function find( predicate, thisArg ) {
			var bool;
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( !isFunction( predicate ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', predicate ) );
			}
			for ( i = 0; i < nfields; i++ ) {
				bool = predicate.call( thisArg, tuple[ i ], i, fields[ indices[i] ], tuple );
				if ( bool ) {
					return tuple[ i ];
				}
			}
		}

		/**
		* Returns the field of the first tuple element for which a provided predicate function returns a truthy value.
		*
		* ## Notes
		*
		* -   If the predicate function never returns a truthy value, the function returns `undefined`.
		*
		* @private
		* @memberof tuple
		* @param {Function} predicate - predicate function
		* @param {*} [thisArg] - execution context
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} first argument must be a function
		* @returns {(string|void)} tuple field name or `undefined`
		*/
		function findField( predicate, thisArg ) {
			var bool;
			var f;
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( !isFunction( predicate ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', predicate ) );
			}
			for ( i = 0; i < nfields; i++ ) {
				f = fields[ indices[ i ] ];
				bool = predicate.call( thisArg, tuple[ i ], i, f, tuple );
				if ( bool ) {
					return f;
				}
			}
		}

		/**
		* Returns the index of the first tuple element for which a provided predicate function returns a truthy value.
		*
		* ## Notes
		*
		* -   If the predicate function never returns a truthy value, the function returns `-1`.
		*
		* @private
		* @memberof tuple
		* @param {Function} predicate - predicate function
		* @param {*} [thisArg] - execution context
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} first argument must be a function
		* @returns {integer} tuple index or `-1`
		*/
		function findIndex( predicate, thisArg ) {
			var bool;
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( !isFunction( predicate ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', predicate ) );
			}
			for ( i = 0; i < nfields; i++ ) {
				bool = predicate.call( thisArg, tuple[ i ], i, fields[ indices[i] ], tuple );
				if ( bool ) {
					return i;
				}
			}
			return -1;
		}

		/**
		* Invokes a callback for each tuple element.
		*
		* @private
		* @memberof tuple
		* @param {Function} fcn - function to invoke
		* @param {*} [thisArg] - execution context
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} first argument must be a function
		*/
		function forEach( fcn, thisArg ) {
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( !isFunction( fcn ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
			}
			for ( i = 0; i < nfields; i++ ) {
				fcn.call( thisArg, tuple[ i ], i, fields[ indices[i] ], tuple );
			}
		}

		/**
		* Converts a tuple index to a field name.
		*
		* ## Notes
		*
		* -   If provided an out-of-bounds index, the function returns `undefined`.
		* -   If provided a negative tuple index, the function resolves the index relative to the last tuple element.
		*
		* @private
		* @memberof tuple
		* @param {integer} ind - tuple index
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} must provide an integer
		* @returns {(string|void)} field name or undefined
		*/
		function ind2key( ind ) {
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( !isInteger( ind ) ) {
				throw new TypeError( format( 'invalid argument. Must provide an integer. Value: `%s`.', ind ) );
			}
			if ( ind < 0 ) {
				ind = nfields + ind;
			}
			if ( ind < 0 || ind >= nfields ) {
				return;
			}
			return fields[ indices[ ind ] ];
		}

		/**
		* Converts a field name to a tuple index.
		*
		* ## Notes
		*
		* -   If provided an unknown field name, the function returns `-1`.
		*
		* @private
		* @memberof tuple
		* @param {string} key - field name
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} first argument must be a string
		* @returns {integer} tuple index
		*/
		function key2ind( key ) {
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( !isString( key ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', key ) );
			}
			for ( i = 0; i < nfields; i++ ) {
				if ( fields[ indices[i] ] === key ) {
					return i;
				}
			}
			return -1;
		}

		/**
		* Returns an iterator for iterating over tuple keys.
		*
		* @private
		* @memberof tuple
		* @throws {TypeError} `this` must be the host tuple
		* @returns {Iterator} iterator
		*/
		function keys() {
			var self;
			var iter;
			var FLG;
			var i;

			self = this; // eslint-disable-line no-invalid-this
			if ( self !== tuple ) {
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}

			// Initialize the iteration index:
			i = -1;

			// Create an iterator protocol-compliant object:
			iter = {};
			defineProperty( iter, 'next', {
				'configurable': false,
				'enumerable': false,
				'writable': false,
				'value': next
			});
			defineProperty( iter, 'return', {
				'configurable': false,
				'enumerable': false,
				'writable': false,
				'value': end
			});
			if ( HAS_ITERATOR_SYMBOL ) {
				defineProperty( iter, ITERATOR_SYMBOL, {
					'configurable': false,
					'enumerable': false,
					'writable': false,
					'value': factory
				});
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
				if ( FLG || i >= nfields ) {
					return {
						'done': true
					};
				}
				return {
					'value': [ i, fields[ indices[ i ] ] ],
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
				return self.keys();
			}
		}

		/**
		* Returns the field of the last tuple element strictly equal to a search element, iterating from right to left.
		*
		* ## Notes
		*
		* -   The function does not distinguish between signed and unsigned zero.
		* -   If unable to locate a search element, the function returns `undefined`.
		*
		* @private
		* @memberof tuple
		* @param {*} searchElement - search element
		* @param {integer} [fromIndex=-1] - tuple index from which to begin searching
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} second argument must be an integer
		* @returns {(string|void)} tuple field name or `undefined`
		*/
		function lastFieldOf( searchElement ) {
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( arguments.length > 1 ) {
				i = arguments[ 1 ];
				if ( !isInteger( i ) ) {
					throw new TypeError( format( 'invalid argument. Second argument must be an integer. Value: `%s`.', i ) );
				}
				if ( i >= nfields ) {
					i = nfields - 1;
				} else if ( i < 0 ) {
					i = nfields + i;
					if ( i < 0 ) {
						return;
					}
				}
			} else {
				i = nfields - 1;
			}
			for ( ; i >= 0; i-- ) {
				if ( tuple[ i ] === searchElement ) {
					return fields[ indices[ i ] ];
				}
			}
		}

		/**
		* Maps each tuple element to an element in a new tuple.
		*
		* ## Notes
		*
		* -   The returned tuple has the same data type as the host tuple.
		*
		* @private
		* @memberof tuple
		* @param {Function} fcn - map function
		* @param {*} [thisArg] - execution context
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} first argument must be a function
		* @returns {TypedArray} new tuple
		*/
		function map( fcn, thisArg ) {
			var out;
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( !isFunction( fcn ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
			}
			out = namedtypedtuple( dtype );
			for ( i = 0; i < nfields; i++ ) {
				out[ i ] = fcn.call( thisArg, tuple[ i ], i, fields[ indices[i] ], tuple );
			}
			return out;
		}

		/**
		* Applies a function against an accumulator and each element in a tuple and returns the accumulated result.
		*
		* @private
		* @memberof tuple
		* @param {Function} fcn - reduction function
		* @param {*} [initial] - initial value
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} first argument must be a function
		* @returns {*} accumulated result
		*/
		function reduce( fcn ) {
			var acc;
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( !isFunction( fcn ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
			}
			if ( arguments.length > 1 ) {
				acc = arguments[ 1 ];
				i = 0;
			} else {
				acc = tuple[ 0 ];
				i = 1;
			}
			for ( ; i < nfields; i++ ) {
				acc = fcn( acc, tuple[ i ], i, fields[ indices[i] ], tuple );
			}
			return acc;
		}

		/**
		* Applies a function against an accumulator and each element in a tuple and returns the accumulated result, iterating from right to left.
		*
		* @private
		* @memberof tuple
		* @param {Function} fcn - reduction function
		* @param {*} [initial] - initial value
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} first argument must be a function
		* @returns {*} accumulated result
		*/
		function reduceRight( fcn ) {
			var acc;
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( !isFunction( fcn ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
			}
			if ( arguments.length > 1 ) {
				acc = arguments[ 1 ];
				i = nfields - 1;
			} else {
				acc = tuple[ nfields-1 ];
				i = nfields - 2;
			}
			for ( ; i >= 0; i-- ) {
				acc = fcn( acc, tuple[ i ], i, fields[ indices[i] ], tuple );
			}
			return acc;
		}

		/**
		* Reverses a tuple **in-place**.
		*
		* @private
		* @memberof tuple
		* @throws {TypeError} `this` must be the host tuple
		* @returns {TypedArray} reversed tuple
		*/
		function reverse() {
			var tmp;
			var i;
			var j;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			for ( i = 0; i < floor( nfields/2 ); i++ ) {
				j = nfields - i - 1;
				tmp = tuple[ i ];
				tuple[ i ] = tuple[ j ];
				tuple[ j ] = tmp;
			}
			// Because the indices are bounded [0,nfields), we can use simple arithmetic to "reverse" index values in-place...
			for ( i = 0; i < nfields; i++ ) {
				indices[ i ] = nfields - indices[ i ] - 1;
			}
			return tuple;
		}

		/**
		* Copies elements to a new tuple with the same underlying data type as the host tuple.
		*
		* ## Notes
		*
		* -   If the function is unable to resolve indices to a non-empty tuple subsequence, the function returns `null`.
		*
		* @private
		* @memberof tuple
		* @param {integer} [begin=0] - start element index (inclusive)
		* @param {integer} [end=tuple.length] - end element index (exclusive)
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} first argument must be an integer
		* @throws {TypeError} second argument must be an integer
		* @returns {(TypedArray|null)} new tuple
		*/
		function slice( begin, end ) {
			var tmp;
			var f;
			var i;
			var j;

			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( arguments.length === 0 ) {
				return namedtypedtuple( tuple, dtype );
			}
			i = begin;
			if ( !isInteger( i ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be an integer. Value: `%s`.', begin ) );
			}
			if ( i < 0 ) {
				i = nfields + i;
				if ( i < 0 ) {
					i = 0;
				}
			}
			if ( arguments.length === 1 ) {
				j = nfields;
			} else {
				j = end;
				if ( !isInteger( j ) ) {
					throw new TypeError( format( 'invalid argument. Second argument must be an integer. Value: `%s`.', end ) );
				}
				if ( j < 0 ) {
					j = nfields + j;
					if ( j < 0 ) {
						j = 0;
					}
				} else if ( j > nfields ) {
					j = nfields;
				}
			}
			if ( i >= j ) {
				return null;
			}
			f = [];
			tmp = [];
			for ( ; i < j; i++ ) {
				f.push( fields[ indices[i] ] );
				tmp.push( tuple[ i ] );
			}
			return factory( f, opts )( tmp, dtype );
		}

		/**
		* Tests whether at least one tuple element passes a test implemented by a predicate function.
		*
		* @private
		* @memberof tuple
		* @param {Function} predicate - predicate function
		* @param {*} [thisArg] - execution context
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} first argument must be a function
		* @returns {boolean} boolean indicating if at least one element passes
		*/
		function some( predicate, thisArg ) {
			var bool;
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( !isFunction( predicate ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', predicate ) );
			}
			for ( i = 0; i < nfields; i++ ) {
				bool = predicate.call( thisArg, tuple[ i ], i, fields[ indices[i] ], tuple );
				if ( bool ) {
					return true;
				}
			}
			return false;
		}

		/**
		* Sorts a tuple in-place.
		*
		* ## Notes
		*
		* -   The comparison function is provided two tuple elements, `a` and `b`, per invocation, and its return value determines the sort order as follows:
		*
		*     -   If the comparison function returns a value **less** than zero, then the function sorts `a` to an index lower than `b` (i.e., `a` should come **before** `b`).
		*     -   If the comparison function returns a value **greater** than zero, then the function sorts `a` to an index higher than `b` (i.e., `b` should come **before** `a`).
		*     -   If the comparison function returns **zero**, then the relative order of `a` and `b` _should_ remain unchanged.
		*
		* -   Invoking this method does **not** affect tuple field assignments.
		*
		* @private
		* @memberof tuple
		* @param {Function} [compareFunction] - function which specifies the sort order
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} first argument must be a function
		* @returns {TypedArray} sorted tuple
		*/
		function sort( compareFunction ) {
			var clbk;
			var tmp;
			var i;
			var j;
			var k;
			var v;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( arguments.length ) {
				if ( !isFunction( compareFunction ) ) {
					throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', compareFunction ) );
				}
				clbk = compareFunction;
			} else {
				clbk = ascending;
			}
			indices.sort( wrapper );

			// Create a temporary indices array which we'll reorder as we rearrange the tuple elements:
			tmp = indices.slice();

			// Rearrange tuple elements according to the rearranged indices (note: every "move" moves a tuple element to its desired position with runtime complexity O(N))...
			for ( i = 0; i < nfields; i++ ) {
				// Check if we need to move a tuple element:
				if ( tmp[ i ] !== i ) {
					v = tuple[ i ];
					j = i;
					k = tmp[ j ];

					// Follow "cycles", stopping once we are back at index `i`...
					while ( k !== i ) {
						tuple[ j ] = tuple[ k ];
						tmp[ j ] = j;
						j = k;
						k = tmp[ j ];
					}
					tuple[ j ] = v;
					tmp[ j ] = j;
				}
			}
			return tuple;

			/**
			* Wraps a comparison function to allow sorting the internal indices array rather than the tuple directly.
			*
			* @private
			* @param {NonNegativeInteger} ia - first index
			* @param {NonNegativeInteger} ib - second index
			* @returns {*} value specifying the sort order
			*/
			function wrapper( ia, ib ) {
				var a = tuple[ indices[ ia ] ];
				var b = tuple[ indices[ ib ] ];
				return clbk( a, b );
			}
		}

		/**
		* Creates a new tuple over the same underlying `ArrayBuffer` and with the same underlying data type as the host tuple.
		*
		* ## Notes
		*
		* -   If the function is unable to resolve indices to a non-empty tuple subsequence, the function returns `null`.
		*
		* @private
		* @memberof tuple
		* @param {integer} [begin=0] - start element index (inclusive)
		* @param {integer} [end=tuple.length] - end element index (exclusive)
		* @throws {TypeError} `this` must be the host tuple
		* @throws {TypeError} first argument must be an integer
		* @throws {TypeError} second argument must be an integer
		* @returns {(TypedArray|null)} new tuple
		*/
		function subtuple( begin, end ) {
			var f;
			var i;
			var j;
			var k;

			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			if ( arguments.length === 0 ) {
				return namedtypedtuple( tuple.buffer, tuple.byteOffset, dtype );
			}
			i = begin;
			if ( !isInteger( i ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be an integer. Value: `%s`.', begin ) );
			}
			if ( i < 0 ) {
				i = nfields + i;
				if ( i < 0 ) {
					i = 0;
				}
			}
			if ( arguments.length === 1 ) {
				j = nfields;
			} else {
				j = end;
				if ( !isInteger( j ) ) {
					throw new TypeError( format( 'invalid argument. Second argument must be an integer. Value: `%s`.', end ) );
				}
				if ( j < 0 ) {
					j = nfields + j;
					if ( j < 0 ) {
						j = 0;
					}
				} else if ( j > nfields ) {
					j = nfields;
				}
			}
			if ( i >= j ) {
				return null;
			}
			f = [];
			for ( k = i; k < j; k++ ) {
				f.push( fields[ indices[k] ] );
			}
			return factory( f, opts )( tuple.buffer, tuple.byteOffset+(i*tuple.BYTES_PER_ELEMENT), dtype );
		}

		/**
		* Serializes a tuple as JSON.
		*
		* @private
		* @memberof tuple
		* @throws {TypeError} `this` must be the host tuple
		* @returns {JSON} tuple JSON representation
		*/
		function toJSON() {
			var out;
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			out = {};
			for ( i = 0; i < nfields; i++ ) {
				out[ fields[i] ] = tuple[ indices[i] ];
			}
			return out;
		}

		// TODO: consider adding `toLocaleString()` in a manner similar to `toString()` below

		/**
		* Serializes a tuple as a string.
		*
		* @private
		* @memberof tuple
		* @throws {TypeError} `this` must be the host tuple
		* @returns {string} tuple string representation
		*/
		function toString() {
			var out;
			var i;
			if ( this !== tuple ) { // eslint-disable-line no-invalid-this
				throw new TypeError( 'invalid invocation. `this` is not host tuple.' );
			}
			out = opts.name + '(';
			for ( i = 0; i < nfields; i++ ) {
				out += fields[ i ];
				out += '=';
				out += tuple[ indices[ i ] ];
				if ( i < nfields-1 ) {
					out += ', ';
				}
			}
			out += ')';
			return out;
		}
	}

	// Note: keep the following methods in alphabetical order...

	/**
	* Creates a new tuple from an array-like object or an iterable.
	*
	* @private
	* @name from
	* @memberof namedtypedtuple
	* @type {Function}
	* @param {(ArrayLikeObject|Iterable)} src - array-like object or iterable
	* @param {Function} [clbk] - callback to invoke for each source element
	* @param {*} [thisArg] - callback execution context
	* @throws {TypeError} `this` must be the host tuple factory
	* @throws {TypeError} first argument must be an array-like object or an iterable
	* @throws {RangeError} source must be compatible with tuple length
	* @throws {TypeError} second argument must be a function
	* @returns {TypedArray} new tuple
	*/
	defineProperty( namedtypedtuple, 'from', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': function from( src ) { // eslint-disable-line no-restricted-syntax
			var thisArg;
			var nargs;
			var tuple;
			var clbk;
			var tmp;
			var it;
			var i;
			if ( this !== namedtypedtuple ) {
				throw new TypeError( 'invalid invocation. `this` is not the host tuple factory.' );
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
			if ( isCollection( src ) ) {
				if ( src.length !== nfields ) {
					throw new RangeError( format( 'invalid argument. Source is incompatible with the number of tuple fields. Number of fields: `%u`. Source length: `%u`.', nfields, src.length ) );
				}
				tuple = namedtypedtuple( nfields, opts.dtype );
				if ( clbk ) {
					for ( i = 0; i < nfields; i++ ) {
						tuple[ i ] = clbk.call( thisArg, src[ i ], i, fields[ i ] );
					}
				} else {
					for ( i = 0; i < nfields; i++ ) {
						tuple[ i ] = src[ i ];
					}
				}
			} else if ( isObject( src ) && HAS_ITERATOR_SYMBOL && isFunction( src[ ITERATOR_SYMBOL ] ) ) {
				it = src[ ITERATOR_SYMBOL ]();
				if ( !isFunction( it.next ) ) {
					throw new TypeError( format( 'invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.', src ) );
				}
				if ( clbk ) {
					tmp = fromIteratorMap( fields, it, clbk, thisArg );
				} else {
					tmp = fromIterator( it );
				}
				tuple = namedtypedtuple( tmp, opts.dtype );
			} else {
				throw new TypeError( format( 'invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.', src ) );
			}
			return tuple;
		}
	});

	/**
	* Creates a new tuple from an object containing tuple fields.
	*
	* @private
	* @name fromObject
	* @memberof namedtypedtuple
	* @type {Function}
	* @param {Object} obj - source object
	* @param {Function} [clbk] - callback to invoke for each source object tuple field
	* @param {*} [thisArg] - callback execution context
	* @throws {TypeError} `this` must be the host tuple factory
	* @throws {TypeError} first argument must be an object
	* @throws {TypeError} second argument must be a function
	* @returns {TypedArray} new tuple
	*/
	defineProperty( namedtypedtuple, 'fromObject', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': function fromObject( obj ) { // eslint-disable-line no-restricted-syntax
			var thisArg;
			var nargs;
			var tuple;
			var clbk;
			var f;
			var i;
			if ( this !== namedtypedtuple ) {
				throw new TypeError( 'invalid invocation. `this` is not the host tuple factory.' );
			}
			if ( obj === null || typeof obj !== 'object' ) {
				throw new TypeError( format( 'invalid argument. First argument must be an object. Value: `%s`.', obj ) );
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
			tuple = namedtypedtuple( nfields, opts.dtype );
			if ( clbk ) {
				for ( i = 0; i < nfields; i++ ) {
					f = fields[ i ];
					if ( hasOwnProp( obj, f ) ) {
						tuple[ i ] = clbk.call( thisArg, obj[ f ], f );
					}
				}
			} else {
				for ( i = 0; i < nfields; i++ ) {
					f = fields[ i ];
					if ( hasOwnProp( obj, f ) ) {
						tuple[ i ] = obj[ f ];
					}
				}
			}
			return tuple;
		}
	});

	/**
	* Creates a new tuple from a variable number of arguments.
	*
	* @private
	* @name of
	* @memberof namedtypedtuple
	* @type {Function}
	* @param {...number} element - tuple elements
	* @throws {TypeError} `this` must be the host tuple factory
	* @throws {RangeError} incompatible number of arguments
	* @returns {TypedArray} new tuple
	*/
	defineProperty( namedtypedtuple, 'of', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': function of() { // eslint-disable-line no-restricted-syntax
			var args;
			var i;
			if ( this !== namedtypedtuple ) {
				throw new TypeError( 'invalid invocation. `this` is not the host tuple factory.' );
			}
			if ( arguments.length !== nfields ) {
				throw new RangeError( format( 'invalid invocation. Number of arguments is incompatible with the number of tuple fields. Number of fields: `%u`. Number of arguments: `%u`.', nfields, arguments.length ) );
			}
			args = [];
			for ( i = 0; i < arguments.length; i++ ) {
				args.push( arguments[ i ] );
			}
			return namedtypedtuple( args );
		}
	});

	return namedtypedtuple;
}


// EXPORTS //

module.exports = factory;
