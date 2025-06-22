/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/* eslint-disable no-restricted-syntax, id-length, no-invalid-this */

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setNonEnumerableReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isCollection = require( '@stdlib/assert/is-collection' );
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isObject = require( '@stdlib/assert/is-object' );
var hasProp = require( '@stdlib/assert/has-property' );
var min = require( '@stdlib/math/base/special/fast/min' );
var filled = require( '@stdlib/array/base/filled' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );
var format = require( '@stdlib/string/format' );
var PRIVATE_BUFFER = require( './private_buffer.js' );
var CTOR_NAME = require( './ctor_name.js' );
var createPrototypeAccessors = require( './create_prototype_accessors.js' );
var isStructInstance = require( './is_struct_instance.js' );
var normalize = require( './normalize_field_list.js' );
var fieldNames = require( './field_names.js' );
var fieldIndex = require( './field_index.js' );
var resolveAlignment = require( './resolve_alignment.js' );
var byteOffsets = require( './byte_offsets.js' );
var partitions = require( './partitions.js' );
var flatten = require( './flatten_fields.js' );
var struct2string = require( './to_string.js' );
var struct2json = require( './to_json.js' );
var layoutFormat = require( './format_layout.js' );


// MAIN //

/**
* Returns a constructor for creating a fixed-width composite data type (a.k.a., a `struct`).
*
* @param {ObjectArray} fields - structure fields
* @throws {TypeError} first argument must be an array-like object containing objects
* @throws {TypeError} field objects must have required properties
* @throws {TypeError} field objects must have valid fields
* @throws {TypeError} union types must be array-like objects containing objects
* @throws {RangeError} union types must contain fields having the same byte length
* @throws {TypeError} union types cannot contain nested union types
* @throws {TypeError} union types can only contain one field with a default value
* @throws {Error} unexpected error
* @returns {Function} constructor
*
* @example
* var fields = [
*     {
*         'type': 'union',
*         'fields': [
*             {
*                 'name': 'double',
*                 'description': 'double-precision floating-point number',
*                 'type': 'float64',
*                 'enumerable': true,
*                 'writable': true,
*                 'castingMode': 'none'
*             },
*             {
*                 'name': 'words',
*                 'description': 'high and low words',
*                 'type': 'uint32',
*                 'length': 2,
*                 'enumerable': true,
*                 'writable': true,
*                 'castingMode': 'none'
*             }
*         ]
*     }
* ];
* var Struct = factory( fields );
*
* var data = {
*     'double': 3.14
* };
* var s = new Struct( data );
* // returns <Struct>
*
* var v = s.double;
* // returns 3.14
*
* var w = s.words;
* // e.g., <Uint32Array>[ 1374389535, 1074339512 ]
*/
function factory( fields ) {
	var FIELD_NAMES;
	var BYTE_LENGTH;
	var PARTITIONS;
	var ALIGNMENT;
	var ACCESSORS;
	var FIELDS;
	var tmp;
	var o;
	if ( !isCollection( fields ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', fields ) );
	}
	// Normalize the list of field objects:
	tmp = normalize( fields );
	if ( tmp instanceof Error ) {
		throw tmp;
	}
	FIELDS = tmp;

	// Resolve the list of unique field names:
	tmp = fieldNames( FIELDS );
	if ( tmp instanceof Error ) {
		throw tmp;
	}
	FIELD_NAMES = tmp;

	// Resolve the struct's alignment requirements:
	ALIGNMENT = resolveAlignment( FIELDS );

	// Compute the byte offset for each field:
	FIELDS = byteOffsets( FIELDS, ALIGNMENT );

	// Now that we've finished processing provided field objects, flatten the list, such that union types are implied by field objects having the same byte offset:
	FIELDS = flatten( FIELDS );

	// Compute field "partitions" (i.e., non-overlapping views):
	PARTITIONS = partitions( FIELDS );

	// Compute the struct's byte length:
	o = FIELDS[ FIELDS.length-1 ];
	BYTE_LENGTH = o.byteOffset + o.byteLength + o.padding;

	/**
	* Constructor for a composite data type (a.k.a., a `struct`).
	*
	* @private
	* @param {(Object|ArrayBuffer)} [arg] - array buffer or data object
	* @param {NonNegativeInteger} [byteOffset=0] - offset, in bytes, to the first byte in a provided buffer for the returned `struct` to reference
	* @param {NonNegativeInteger} [byteLength] - maximum number of elements in the byte array
	* @throws {RangeError} must provide sufficient memory to accommodate byte offset and view length requirements
	* @throws {TypeError} second argument must be a nonnegative integer
	* @throws {TypeError} third argument must be a nonnegative integer
	* @throws {Error} union types may only be initialized by a single member
	* @returns {Struct} struct instance
	*/
	function Struct( arg, byteOffset, byteLength ) {
		var values;
		var nargs;
		var cache;
		var view;
		var obj;
		var o;
		var v;
		var i;
		var j;
		var k;

		nargs = arguments.length;
		if ( !( this instanceof Struct ) ) {
			if ( nargs === 0 ) {
				return new Struct();
			}
			if ( nargs === 1 ) {
				return new Struct( arg );
			}
			if ( nargs === 2 ) {
				return new Struct( arg, byteOffset );
			}
			return new Struct( arg, byteOffset, byteLength );
		}
		if ( isArrayBuffer( arg ) ) {
			if ( nargs === 1 ) {
				view = new DataView( arg, 0, BYTE_LENGTH );
			} else {
				if ( !isNonNegativeInteger( byteOffset ) ) {
					throw new TypeError( format( 'invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.', byteOffset ) );
				}
				if ( nargs === 2 ) {
					view = new DataView( arg, byteOffset, BYTE_LENGTH );
				} else {
					if ( !isNonNegativeInteger( byteLength ) ) {
						throw new TypeError( format( 'invalid argument. Byte length must be a nonnegative integer. Value: `%s`.', byteLength ) );
					}
					view = new DataView( arg, byteOffset, min( byteLength, BYTE_LENGTH ) ); // eslint-disable-line max-len
				}
			}
			if ( view.byteLength < BYTE_LENGTH ) {
				throw new RangeError( format( 'invalid argument. ArrayBuffer has insufficient capacity. Minimum capacity: `%u`.', BYTE_LENGTH ) );
			}
		} else {
			view = new DataView( new ArrayBuffer( BYTE_LENGTH ) );
			if ( nargs > 0 ) {
				if ( !isObject( arg ) ) {
					throw new TypeError( format( 'invalid argument. First argument must be an object. Value: `%s`.', arg ) );
				}
				obj = arg;
			}
		}
		// Bind the byte buffer to the current instance:
		setReadOnly( this, PRIVATE_BUFFER, view );

		// If we were provided a data object, set provided fields...
		if ( obj !== void 0 ) {
			// Initialize an array containing values to set:
			values = filled( void 0, FIELDS.length );

			// For each field, determine whether a value has been specified...
			cache = {};
			for ( i = 0; i < FIELDS.length; i++ ) {
				k = FIELD_NAMES[ i ];
				j = PARTITIONS[ i ];
				if ( hasProp( obj, k ) ) {
					// Check whether a value has already been specified for this view (i.e., via another union member)...
					if ( cache[ j ] ) {
						throw new Error( 'invalid argument. Union types may only be initialized by a single member.' );
					}
					values[ i ] = obj[ k ];
					cache[ j ] = true;
				}
			}
			// Perform a second pass over the fields to fill in default initial values...
			for ( i = 0; i < FIELDS.length; i++ ) {
				j = PARTITIONS[ i ];
				if ( cache[ j ] ) {
					// Skip fields already having initial values...
					continue;
				}
				o = FIELDS[ i ];
				if ( o.default !== void 0 ) {
					values[ i ] = o.default;
				}
			}
			// Set all fields with initialization values...
			for ( i = 0; i < FIELDS.length; i++ ) {
				v = values[ i ];
				if ( v !== void 0 ) {
					ACCESSORS[ FIELD_NAMES[ i ] ][ 1 ].call( this, v );
				}
			}
		}
		return this;
	}

	/**
	* Constructor name.
	*
	* @private
	* @name name
	* @memberof Struct
	* @readonly
	* @type {string}
	* @default 'Struct'
	*/
	setReadOnly( Struct, 'name', CTOR_NAME );

	/**
	* Alignment.
	*
	* @private
	* @name alignment
	* @memberof Struct
	* @readonly
	* @type {PositiveInteger}
	*/
	setReadOnly( Struct, 'alignment', ALIGNMENT );

	/**
	* Size (in bytes) of the `struct`.
	*
	* @private
	* @name byteLength
	* @memberof Struct
	* @readonly
	* @type {PositiveInteger}
	*/
	setReadOnly( Struct, 'byteLength', BYTE_LENGTH );

	/**
	* Returns a list of `struct` fields.
	*
	* @private
	* @name fields
	* @memberof Struct
	* @readonly
	* @type {Array<string>}
	*/
	setNonEnumerableReadOnlyAccessor( Struct, 'fields', function get() {
		return FIELD_NAMES.slice();
	});

	/**
	* Returns a string corresponding to the `struct` layout.
	*
	* @private
	* @name layout
	* @memberof Struct
	* @readonly
	* @type {string}
	*/
	setNonEnumerableReadOnlyAccessor( Struct, 'layout', function get() {
		// As this is not likely to be a commonly used API, intentionally recompute the layout format in order to avoid consuming memory for what could be a long string...
		return layoutFormat( FIELDS );
	});

	/**
	* Returns the length, in bytes, of the value specified by the provided field name.
	*
	* @private
	* @name byteLengthOf
	* @memberof Struct
	* @readonly
	* @type {Function}
	* @param {string} name - field name
	* @throws {Error} struct must have at least one field
	* @throws {TypeError} must provide a recognized field name
	* @returns {NonNegativeInteger} byte length
	*/
	setReadOnly( Struct, 'byteLengthOf', function byteLengthOf( name ) {
		var idx = fieldIndex( FIELD_NAMES, name );
		if ( idx instanceof Error ) {
			throw idx;
		}
		return FIELDS[ idx ].byteLength;
	});

	/**
	* Returns the offset, in bytes, from the beginning of a `struct` to the value specified by the provided field name.
	*
	* @private
	* @name byteOffsetOf
	* @memberof Struct
	* @readonly
	* @type {Function}
	* @param {string} name - field name
	* @throws {Error} struct must have at least one field
	* @throws {TypeError} must provide a recognized field name
	* @returns {NonNegativeInteger} byte offset
	*/
	setReadOnly( Struct, 'byteOffsetOf', function byteOffsetOf( name ) {
		var idx = fieldIndex( FIELD_NAMES, name );
		if ( idx instanceof Error ) {
			throw idx;
		}
		return FIELDS[ idx ].byteOffset;
	});

	/**
	* Returns the description associated with a provided field name.
	*
	* @private
	* @name descriptionOf
	* @memberof Struct
	* @readonly
	* @type {Function}
	* @param {string} name - field name
	* @throws {Error} struct must have at least one field
	* @throws {TypeError} must provide a recognized field name
	* @returns {string} description
	*/
	setReadOnly( Struct, 'descriptionOf', function descriptionOf( name ) {
		var idx = fieldIndex( FIELD_NAMES, name );
		if ( idx instanceof Error ) {
			throw idx;
		}
		return FIELDS[ idx ].description;
	});

	/**
	* Returns the type associated with a provided field name.
	*
	* @private
	* @name typeOf
	* @memberof Struct
	* @readonly
	* @type {Function}
	* @param {string} name - field name
	* @throws {Error} struct must have at least one field
	* @throws {TypeError} must provide a recognized field name
	* @returns {(string|Object)} type
	*/
	setReadOnly( Struct, 'typeOf', function typeOf( name ) {
		var idx = fieldIndex( FIELD_NAMES, name );
		if ( idx instanceof Error ) {
			throw idx;
		}
		return FIELDS[ idx ].type;
	});

	/**
	* Returns the underlying byte buffer of a `struct`.
	*
	* @private
	* @name bufferOf
	* @memberof Struct
	* @readonly
	* @type {Function}
	* @param {Object} obj - struct instance
	* @throws {TypeError} must provide a `struct` instance
	* @returns {ArrayBuffer} underlying byte buffer
	*/
	setReadOnly( Struct, 'bufferOf', function bufferOf( obj ) {
		if ( !isStructInstance( obj ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be a `struct` instance. Value: `%s`.', obj ) );
		}
		return obj[ PRIVATE_BUFFER ].buffer;
	});

	/**
	* Returns the underlying byte buffer of a `struct` as a `DataView`.
	*
	* @private
	* @name viewOf
	* @memberof Struct
	* @readonly
	* @type {Function}
	* @param {Object} obj - struct instance
	* @throws {TypeError} must provide a `struct` instance
	* @returns {DataView} view of underlying byte buffer
	*/
	setReadOnly( Struct, 'viewOf', function viewOf( obj ) {
		var buf;
		if ( !isStructInstance( obj ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be a `struct` instance. Value: `%s`.', obj ) );
		}
		buf = obj[ PRIVATE_BUFFER ];
		return new DataView( buf.buffer, buf.byteOffset, buf.byteLength );
	});

	// Create prototype accessors for getting and setting field values:
	ACCESSORS = createPrototypeAccessors( Struct.prototype, FIELDS );

	/**
	* Serializes a `struct` to a string.
	*
	* @private
	* @name toString
	* @memberof Struct.prototype
	* @readonly
	* @type {Function}
	* @param {Options} [options] - function options
	* @param {string} [options.format='none'] - serialization format
	* @throws {Error} `this` must be a struct instance
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {string} serialized `struct` instance
	*/
	setReadOnly( Struct.prototype, 'toString', function toString() {
		var opts;
		if ( !( this instanceof Struct ) ) {
			throw new Error( 'invalid invocation. `this` is not a struct instance.' );
		}
		if ( arguments.length > 0 ) {
			opts = arguments[ 0 ];
		} else {
			opts = {};
		}
		return struct2string( this, FIELDS, opts );
	});

	/**
	* Serializes a `struct` to JSON.
	*
	* @private
	* @name toJSON
	* @memberof Struct.prototype
	* @readonly
	* @type {Function}
	* @throws {Error} `this` must be a struct instance
	* @returns {JSON} serialized `struct` instance
	*/
	setReadOnly( Struct.prototype, 'toJSON', function toJSON() {
		if ( !( this instanceof Struct ) ) {
			throw new Error( 'invalid invocation. `this` is not a struct instance.' );
		}
		return struct2json( this, FIELDS );
	});

	return Struct;
}


// EXPORTS //

module.exports = factory;
