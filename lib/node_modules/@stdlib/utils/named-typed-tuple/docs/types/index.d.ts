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

// tslint:disable:max-file-line-count

/// <reference types="@stdlib/types"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';
import { TypedArray } from '@stdlib/types/array';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

type DType = 'float64' | 'float32' | 'int32' | 'uint32' | 'int16' | 'uint16' | 'int8' | 'uint8' | 'uint8c'; // tslint-disable-line max-line-length

/**
* Interface defining options.
*/
interface Options {
	/**
	* Default data type (default: 'float64').
	*/
	dtype?: DType;

	/**
	* Tuple name (default: 'tuple').
	*/
	name?: string;
}

/**
* Function invoked for each tuple element.
*/
type Nullary = () => void;

/**
* Function invoked for each tuple element.
*
* @param value - tuple element
*/
type Unary = ( value: number ) => void;

/**
* Function invoked for each tuple element.
*
* @param value - tuple element
* @param index - tuple index
*/
type Binary = ( value: number, index: number ) => void;

/**
* Function invoked for each tuple element.
*
* @param value - tuple element
* @param index - tuple index
* @param field - tuple field name
*/
type Tertiary = ( value: number, index: number, field: string ) => void;

/**
* Function invoked for each tuple element.
*
* @param value - tuple element
* @param index - tuple index
* @param field - tuple field name
* @param tuple - tuple on which the method is invoked
*/
type Quaternary = ( value: any, index: number, field: string, tuple: Tuple ) => void; // tslint-disable-line max-line-length

/**
* Function invoked for each tuple element.
*
* @param value - tuple element
* @param index - tuple index
* @param field - tuple field name
* @param tuple - tuple on which the method is invoked
*/
type Callback = Nullary | Unary | Binary | Tertiary | Quaternary;

/**
* Predicate function which tests tuple elements.
*
* @returns boolean indicating whether tuple element passes a test
*/
type NullaryPredicate = () => boolean;

/**
* Predicate function which tests tuple elements.
*
* @param value - tuple element
* @returns boolean indicating whether tuple element passes a test
*/
type UnaryPredicate = ( value: number ) => boolean;

/**
* Predicate function which tests tuple elements.
*
* @param value - tuple element
* @param index - tuple index
* @returns boolean indicating whether tuple element passes a test
*/
type BinaryPredicate = ( value: number, index: number ) => boolean;

/**
* Predicate function which tests tuple elements.
*
* @param value - tuple element
* @param index - tuple index
* @param field - tuple field name
* @returns boolean indicating whether tuple element passes a test
*/
type TertiaryPredicate = ( value: number, index: number, field: string ) => boolean; // tslint-disable-line max-line-length

/**
* Predicate function which tests tuple elements.
*
* @param value - tuple element
* @param index - tuple index
* @param field - tuple field name
* @param tuple - tuple on which the method is invoked
* @returns boolean indicating whether tuple element passes a test
*/
type QuaternaryPredicate = ( value: any, index: number, field: string, tuple: Tuple ) => boolean; // tslint-disable-line max-line-length

/**
* Predicate function which tests tuple elements.
*
* @param value - tuple element
* @param index - tuple index
* @param field - tuple field name
* @param tuple - tuple on which the method is invoked
* @returns boolean indicating whether tuple element passes a test
*/
type PredicateFunction = NullaryPredicate | UnaryPredicate | BinaryPredicate | TertiaryPredicate | QuaternaryPredicate; // tslint-disable-line max-line-length

/**
* Function applied against an accumulator.
*
* @returns value assigned to the accumulator
*/
type NullaryReducer = () => any;

/**
* Function applied against an accumulator.
*
* @param acc - accumulated result
* @returns value assigned to the accumulator
*/
type UnaryReducer = ( acc: any ) => any;

/**
* Function applied against an accumulator.
*
* @param acc - accumulated result
* @param value - tuple element
* @returns value assigned to the accumulator
*/
type BinaryReducer = ( acc: any, value: number ) => any;

/**
* Function applied against an accumulator.
*
* @param acc - accumulated result
* @param value - tuple element
* @param index - tuple index
* @returns value assigned to the accumulator
*/
type TertiaryReducer = ( acc: any, value: number, index: number ) => any;

/**
* Function applied against an accumulator.
*
* @param acc - accumulated result
* @param value - tuple element
* @param index - tuple index
* @param field - tuple field name
* @returns value assigned to the accumulator
*/
type QuaternaryReducer = ( acc: any, value: number, index: number, field: string ) => any; // tslint-disable-line max-line-length

/**
* Function applied against an accumulator.
*
* @param acc - accumulated result
* @param value - tuple element
* @param index - tuple index
* @param field - tuple field name
* @param tuple - tuple on which the method is invoked
* @returns value assigned to the accumulator
*/
type QuinaryReducer = ( acc: any, value: number, index: number, field: string, tuple: Tuple ) => any; // tslint-disable-line max-line-length

/**
* Function applied against an accumulator.
*
* @param acc - accumulated result
* @param value - tuple element
* @param index - tuple index
* @param field - tuple field name
* @param tuple - tuple on which the method is invoked
* @returns value assigned to the accumulator
*/
type Reducer = NullaryReducer | UnaryReducer | BinaryReducer | TertiaryReducer | QuaternaryReducer | QuinaryReducer; // tslint-disable-line max-line-length

/**
* Function which specifies the sort order.
*
* ## Notes
*
* -   The comparison function is provided two tuple elements, `a` and `b`, per invocation, and its return value determines the sort order as follows:
*
*     -   If the comparison function returns a value **less** than zero, then the method sorts `a` to an index lower than `b` (i.e., `a` should come **before** `b`).
*     -   If the comparison function returns a value **greater** than zero, then the method sorts `a` to an index higher than `b` (i.e., `b` should come **before** `a`).
*     -   If the comparison function returns **zero**, then the relative order of `a` and `b` _should_ remain unchanged.
*
*
* @param a - first tuple value
* @param b - second tuple value
* @returns value determining the sort order
*/
type CompareFunction = ( a: number, b: number ) => number;

/**
* Callback invoked for each source element.
*
* @returns transformed value
*/
type FactoryNullary = () => number;

/**
* Callback invoked for each source element.
*
* @param value - source value
* @returns transformed value
*/
type FactoryUnary = ( value: number ) => number;

/**
* Callback invoked for each source element.
*
* @param value - source value
* @param index - source index
* @returns transformed value
*/
type FactoryBinary = ( value: number, index: number ) => number;

/**
* Callback invoked for each source element.
*
* @param value - source value
* @param index - source index
* @param field - tuple field
* @returns transformed value
*/
type FactoryTertiary = ( value: number, index: number, field: string ) => number; // tslint-disable-line max-line-length

/**
* Callback invoked for each source element.
*
* @param value - source value
* @param index - source index
* @param field - tuple field
* @returns transformed value
*/
type FactoryCallback = FactoryNullary | FactoryUnary | FactoryBinary | FactoryTertiary; // tslint-disable-line max-line-length

/**
* Callback invoked for each field.
*
* @returns transformed value
*/
type FactoryObjectNullary = () => number;

/**
* Callback invoked for each field.
*
* @param value - source object tuple field value
* @returns transformed value
*/
type FactoryObjectUnary = ( value: number ) => number;

/**
* Callback invoked for each field.
*
* @param value - source object tuple field value
* @param field - source object tuple field name
* @returns transformed value
*/
type FactoryObjectBinary = ( value: number, field: string ) => number;

/**
* Callback invoked for each field.
*
* @param value - source object tuple field value
* @param field - source object tuple field name
* @returns transformed value
*/
type FactoryObjectCallback = FactoryObjectNullary | FactoryObjectUnary | FactoryObjectBinary; // tslint-disable-line max-line-length

/**
* Named typed tuple.
*/
interface Tuple {
	/**
	* Size (in bytes) of each tuple element.
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* var nbytes = tuple.BYTES_PER_ELEMENT;
	* // returns 8
	*/
	readonly BYTES_PER_ELEMENT: number;

	/**
	* Pointer to the underlying data buffer.
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* var buf = tuple.buffer;
	* // returns <ArrayBuffer>
	*/
	readonly buffer: ArrayBuffer;

	/**
	* Length (in bytes) of the tuple.
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* var nbytes = tuple.byteLength;
	* // returns 16
	*/
	readonly byteLength: number;

	/**
	* Offset (in bytes) of a tuple from the start of its underlying `ArrayBuffer`.
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* var offset = tuple.byteOffset;
	* // returns 0
	*
	* var buf = new ArrayBuffer( 64 );
	* tuple = factory( buf, 32 );
	*
	* offset = tuple.byteOffset;
	* // returns 32
	*/
	readonly byteOffset: number;

	/**
	* Number of tuple elements.
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* var len = tuple.length;
	* // returns 2
	*/
	readonly length: number;

	/**
	* Tuple name.
	*
	* @example
	* // Create a tuple factory which generates tuples having the default tuple name:
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* var n = tuple.name;
	* // returns 'tuple'
	*
	* // Create a tuple factory which generates tuples having a custom tuple name:
	* var opts = {
	* 	'name': 'Point'
	* };
	* factory = namedtypedtuple( [ 'x', 'y' ], opts );
	*
	* tuple = factory( [ 1.0, -1.0 ] );
	*
	* n = tuple.name;
	* // returns 'Point'
	*/
	readonly name: string;

	/**
	* Returns the list of tuple fields.
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* var fields = tuple.fields;
	* // returns [ 'x', 'y' ]
	*/
	readonly fields: Array<string>;

	/**
	* Returns the list of tuple fields in index order.
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* // Sort tuple elements in ascending order:
	* tuple.sort();
	*
	* // Get the list of tuple fields:
	* var fields = tuple.fields;
	* // returns [ 'x', 'y' ]
	*
	* // Get the list of tuple fields in index order:
	* fields = tuple.orderedFields;
	* // returns [ 'y', 'x' ]
	*/
	readonly orderedFields: Array<string>;

	/**
	* Copies a sequence of elements within the tuple starting at `start` and ending at `end` (non-inclusive) to the position starting at `target`.
	*
	* @param target - target start index position
	* @param start - source start index position
	* @param end - source end index position (default: tuple.length)
	* @returns modified tuple
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z', 'w', 'v' ] );
	*
	* var tuple = factory( [ 2.0, -2.0, 1.0, -1.0, 1.0 ] );
	*
	* var x = tuple.x;
	* // returns 2.0
	*
	* var y = tuple.y;
	* // returns -2.0
	*
	* // Copy the last two elements to the first two elements:
	* tuple.copyWithin( 0, 3 );
	*
	* x = tuple.x;
	* // returns -1.0
	*
	* y = tuple.y;
	* // returns 1.0
	*/
	copyWithin( target: number, start: number, end?: number ): Tuple;

	/**
	* Returns an iterator for iterating over tuple key-value pairs.
	*
	* @returns iterator for iterating over tuple key-value pairs
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* // Create an iterator:
	* var it = tuple.entries();
	*
	* // Iterate over key-value pairs...
	* var v = it.next().value;
	* // returns [ 0, 'x', 1.0 ]
	*
	* v = it.next().value;
	* // returns [ 1, 'y', -1.0 ]
	*
	* var bool = it.next().done;
	* // returns true
	*/
	entries(): Iterator;

	/**
	* Tests whether all tuple elements pass a test implemented by a `predicate` function.
	*
	* @param predicate - predicate function which tests tuple elements
	* @param thisArg - callback execution context
	* @returns boolean indicating whether all tuple elements pass.
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* function predicate( v ) {
	* 	return ( v >= 0.0 );
	* }
	*
	* var bool = tuple.every( predicate );
	* // returns false
	*/
	every( predicate: PredicateFunction, thisArg?: any ): boolean;

	/**
	* Returns the field of the first tuple element strictly equal to a search element.
	*
	* @param searchElement - search element
	* @param fromIndex - tuple index from which to begin searching; if provided a negative value, the method resolves the start index relative to the last tuple element (default: 0)
	* @returns tuple field
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* var field = tuple.fieldOf( -1.0 );
	* // returns 'z'
	*
	* field = tuple.fieldOf( 2.0 );
	* // returns undefined
	*/
	fieldOf( searchElement: number, fromIndex?: number ): string | undefined;

	/**
	* Fills a tuple from a `start` index to an `end` index (non-inclusive) with a provided `value`.
	*
	* @param value - fill value
	* @param start - start index; if less than zero, the start index is resolved relative to the last tuple element
	* @param end - end index (non-inclusive); if less than zero, the end index is resolved relative to the last tuple element
	* @returns modified tuple
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory();
	*
	* // Set all tuple elements to the same value:
	* tuple.fill( 2.0 );
	*
	* var x = tuple.x;
	* // returns 2.0
	*
	* var y = tuple.y;
	* // returns 2.0
	*
	* // Set all tuple elements starting from the first index to the same value:
	* tuple.fill( 3.0, 1 );
	*
	* x = tuple.x;
	* // returns 2.0
	*
	* y = tuple.y;
	* // returns 3.0
	*
	* // Set all tuple elements, except the last element, to the same value:
	* tuple.fill( 4.0, 0, tuple.length-1 );
	*
	* x = tuple.x;
	* // returns 4.0
	*
	* y = tuple.y;
	* // returns 3.0
	*/
	fill( value: number, start?: number, end?: number ): Tuple;

	/**
	* Creates a new tuple (of the same data type as the host tuple) which includes those elements for which a `predicate` function returns a truthy value.
	*
	* @param predicate - predicate function which filters tuple elements
	* @param thisArg - callback execution context
	* @returns a new named typed tuple
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var p1 = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* function predicate( v ) {
	*     return ( v >= 0.0 );
	* }
	*
	* var p2 = p1.filter( predicate );
	*
	* var f = p2.fields;
	* // returns [ 'x', 'y' ]
	 */
	filter( predicate: PredicateFunction, thisArg?: any ): Tuple;

	/**
	* Returns the first tuple element for which a provided `predicate` function returns a truthy value.
	*
	* @param predicate - predicate function which tests tuple elements
	* @param thisArg - callback execution context
	* @returns tuple element
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* function predicate( v ) {
	* 	return ( v < 0.0 );
	* }
	*
	* var v = tuple.find( predicate );
	* // returns -1.0
	*/
	find( predicate: PredicateFunction, thisArg?: any ): number | undefined;

	/**
	* Returns the field of the first tuple element for which a provided `predicate` function returns a truthy value.
	*
	* @param predicate - predicate function which tests tuple elements
	* @param thisArg - callback execution context
	* @returns tuple field
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* function predicate( v ) {
	* 	return ( v < 0.0 );
	* }
	*
	* var field = tuple.findField( predicate );
	* // returns 'z'
	*/
	findField( predicate: PredicateFunction, thisArg?: any ): string | undefined; // tslint-disable-line max-line-length

	/**
	* Returns the index of the first tuple element for which a provided `predicate` function returns a truthy value.
	*
	* @param predicate - predicate function which tests tuple elements
	* @param thisArg - callback execution context
	* @returns tuple index
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* function predicate( v ) {
	* 	return ( v < 0.0 );
	* }
	*
	* var idx = tuple.findIndex( predicate );
	* // returns 2
	*/
	findIndex( predicate: PredicateFunction, thisArg?: any ): number | undefined; // tslint-disable-line max-line-length

	/**
	* Invokes a callback for each tuple element.
	*
	* @param fcn - function to invoke for each tuple element
	* @param thisArg - callback execution context
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ], 'int32' );
	*
	* var str = '';
	*
	* function fcn( v, i, f ) {
	* 	str += f + '=' + v;
	* 	if ( i < tuple.length-1 ) {
	* 		str += ' ';
	* 	}
	* }
	*
	* tuple.forEach( fcn );
	*
	* console.log( str );
	* // => 'x=1 y=0 z=-1'
	*/
	forEach( fcn: Callback, thisArg?: any ): void;

	/**
	* Returns a `boolean` indicating whether a tuple includes a search element.
	*
	* @param searchElement - search element
	* @param fromIndex - tuple index from which to begin searching; if provided a negative value, the method resolves the start index relative to the last tuple element (default: 0)
	* @returns boolean indicating whether a tuple includes a search element
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* var bool = tuple.includes( -1.0 );
	* // returns true
	*
	* bool = tuple.includes( 2.0 );
	* // returns false
	*/
	includes( searchElement: number, fromIndex?: number ): boolean;

	/**
	* Returns the index of the first tuple element strictly equal to a search element.
	*
	* @param searchElement - search element
	* @param fromIndex - tuple index from which to begin searching; if provided a negative value, the method resolves the start index relative to the last tuple element (default: 0)
	* @returns tuple index
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* var idx = tuple.indexOf( -1.0 );
	* // returns 2
	*
	* idx = tuple.indexOf( 2.0 );
	* // returns -1
	*/
	indexOf( searchElement: number, fromIndex?: number ): number;

	/**
	* Converts a tuple index to a field name.
	*
	* @param ind - tuple index; if less than zero, the method resolves the index relative to the last tuple element
	* @returns field name
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* var field = tuple.ind2key( 1 );
	* // returns 'y'
	*
	* field = tuple.ind2key( 100 );
	* // returns undefined
	*/
	ind2key( ind: number ): string | undefined;

	/**
	* Serializes a tuple by joining all tuple elements as a string.
	*
	* @param separator - string delineating tuple elements (default: ',')
	* @returns tuple serialized as a string
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ], 'int32' );
	*
	* var str = tuple.join();
	* // returns '1,0,-1'
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ], 'int32' );
	*
	* var str = tuple.join( '|' );
	* // returns '1|0|-1'
	*/
	join( separator?: string ): string;

	/**
	* Returns an iterator for iterating over tuple keys.
	*
	* @returns iterator for iterating over tuple keys
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* // Create an iterator:
	* var it = tuple.keys();
	*
	* // Iterate over keys...
	* var v = it.next().value;
	* // returns [ 0, 'x' ]
	*
	* v = it.next().value;
	* // returns [ 1, 'y' ]
	*
	* var bool = it.next().done;
	* // returns true
	*/
	keys(): Iterator;

	/**
	* Converts a field name to a tuple index.
	*
	* @param field - tuple field name
	* @returns tuple index
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* var idx = tuple.key2ind( 'y' );
	* // returns 1
	*
	* idx = tuple.key2ind( 'foo' );
	* // returns -1
	*/
	key2ind( field: string ): number;

	/**
	* Returns the field of the last tuple element strictly equal to a search element, iterating from right to left.
	*
	* @param searchElement - search element
	* @param fromIndex - tuple index from which to begin searching; if provided a negative value, the method resolves the start index relative to the last tuple element (default: -1)
	* @returns tuple field
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z', 'w', 'v' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0, 0.0, 1.0 ] );
	*
	* var field = tuple.lastFieldOf( 0.0 );
	* // returns 'w'
	*
	* field = tuple.lastFieldOf( 2.0 );
	* // returns undefined
	*/
	lastFieldOf( searchElement: number, fromIndex?: number ): string | undefined; // tslint-disable-line max-line-length

	/**
	* Returns the index of the last tuple element strictly equal to a search element, iterating from right to left.
	*
	* @param searchElement - search element
	* @param fromIndex - tuple index from which to begin searching; if provided a negative value, the method resolves the start index relative to the last tuple element (default: -1)
	* @returns tuple index
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z', 'w', 'v' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0, 0.0, 1.0 ] );
	*
	* var idx = tuple.lastIndexOf( 0.0 );
	* // returns 3
	*
	* idx = tuple.lastIndexOf( 2.0 );
	* // returns -1
	*/
	lastIndexOf( searchElement: number, fromIndex?: number ): number | undefined; // tslint-disable-line max-line-length

	/**
	* Maps each tuple element to an element in a new tuple having the same data type as the host tuple.
	*
	* @param fcn - function which maps tuple elements to elements in the new tuple
	* @param thisArg - callback execution context
	* @returns a new named typed tuple
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var p1 = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* function fcn( v ) {
	* 	return v * 2.0;
	* }
	*
	* var p2 = p1.map( fcn );
	*
	* var x = p2.x;
	* // returns 2.0
	*
	* var y = p2.y;
	* // returns 0.0
	*
	* var z = p2.z;
	* // returns -2.0
	*/
	map( fcn: Callback, thisArg?: any ): Tuple;

	/**
	* Applies a function against an accumulator and each element in a tuple and returns the accumulated result.
	*
	* ## Notes
	*
	* -   If provided an initial value, the method invokes a provided function with the initial value as the first argument and the first tuple element as the second argument.
	* -   If not provided an initial value, the method invokes a provided function with the first tuple element as the first argument and the second tuple element as the second argument.
	*
	* @param fcn - function to apply
	* @param initialValue - initial accumulation value
	* @returns accumulated result
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 2.0, 0.0, -3.0 ] );
	*
	* function fcn( acc, v ) {
	* 	return acc + ( v*v );
	* }
	*
	* var v = tuple.reduce( fcn );
	* // returns 11.0
	*/
	reduce( fcn: Reducer, initialValue?: any ): any;

	/**
	* Applies a function against an accumulator and each element in a tuple and returns the accumulated result, iterating from right to left.
	*
	* ## Notes
	*
	* -   If provided an initial value, the method invokes a provided function with the initial value as the first argument and the last tuple element as the second argument.
	* -   If not provided an initial value, the method invokes a provided function with the last tuple element as the first argument and the second-to-last tuple element as the second argument.
	*
	* @param fcn - function to apply
	* @param initialValue - initial accumulation value
	* @returns accumulated result
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 2.0, 0.0, -3.0 ] );
	*
	* function fcn( acc, v ) {
	* 	return acc + ( v*v );
	* }
	*
	* var v = tuple.reduceRight( fcn );
	* // returns 1.0
	*/
	reduceRight( fcn: Reducer, initialValue?: any ): any;

	/**
	* Reverses a tuple **in-place** (thus mutating the tuple on which the method is invoked).
	*
	* @returns modified tuple
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 2.0, 0.0, -3.0 ] );
	*
	* var x = tuple[ 0 ];
	* // returns 2.0
	*
	* x = tuple.x;
	* // returns 2.0
	*
	* // Reverse the tuple:
	* tuple.reverse();
	*
	* var fields = tuple.orderedFields;
	* // returns [ 'z', 'y', 'x' ]
	*
	* var z = tuple[ 0 ];
	* // returns -3.0
	*
	* // Tuple field assignments do NOT change:
	* x = tuple.x;
	* // returns 2.0
	*/
	reverse(): Tuple;

	/**
	* Sets tuple elements.
	*
	* @param arr - source array containing tuple values to set
	* @param offset - tuple index at which to start writing values (default: 0)
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* var y = tuple[ 1 ];
	* // returns 0.0
	*
	* y = tuple.y;
	* // returns 0.0
	*
	* // Set the first two tuple elements:
	* tuple.set( [ -2.0, 2.0 ] );
	*
	* var x = tuple[ 0 ];
	* // returns -2.0
	*
	* x = tuple.x;
	* // returns -2.0
	*
	* y = tuple[ 1 ];
	* // returns 2.0
	*
	* y = tuple.y;
	* // returns 2.0
	*/
	set( arr: ArrayLike<number>, offset?: number ): void;

	/**
	* Copies tuple elements to a new tuple with the same underlying data type as the host tuple.
	*
	* @param begin - start element index (inclusive); if less than zero, the start index is resolved relative to the last tuple element (default: 0)
	* @param end - end element index (exclusive); if less than zero, the end index is resolved relative to the last tuple element (default: tuple.length)
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var p1 = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* var p2 = p1.slice();
	*
	* var bool = ( p1 === p2 );
	* // returns false
	*
	* bool = ( p1.buffer === p2.buffer );
	* // returns false
	*
	* var x = p2.x;
	* // returns 1.0
	*
	* var y = p2.y;
	* // returns 0.0
	*
	* var z = p2.z;
	* // returns -1.0
	*/
	slice( begin?: number, end?: number ): Tuple;

	/**
	* Tests whether at least one tuple element passes a test implemented by a `predicate` function.
	*
	* @param predicate - predicate function which tests tuple elements
	* @param thisArg - callback execution context
	* @returns boolean indicating whether at least one tuple element passes
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* function predicate( v ) {
	*     return ( v < 0.0 );
	* }
	*
	* var bool = tuple.some( predicate );
	* // returns true
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, 1.0 ] );
	*
	* function predicate( v ) {
	*     this.count += 1;
	*     return ( v < 0.0 );
	* }
	*
	* var ctx = {
	* 	'count': 0
	* };
	*
	* var bool = tuple.some( predicate, ctx );
	* // returns false
	*
	* var n = ctx.count;
	* // returns 2
	*/
	some( predicate: PredicateFunction, thisArg?: any ): boolean;

	/**
	* Sorts a tuple **in-place** (thus mutating the tuple on which the method is invoked).
	*
	* ## Notes
	*
	* -   By default, the method sorts tuple elements in ascending order. To impose a custom order, provide a `compareFunction`.
	*
	* @param compareFunction - function which specifies the sort order; the default sort order is ascending order
	* @returns modified tuple
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 2.0, -3.0, 0.0 ] );
	*
	* var x = tuple[ 0 ];
	* // returns 2.0
	*
	* x = tuple.x;
	* // returns 2.0
	*
	* // Sort the tuple (in ascending order):
	* tuple.sort();
	*
	* var fields = tuple.orderedFields;
	* // returns [ 'y', 'z', 'x' ]
	*
	* var y = tuple[ 0 ];
	* // returns -3.0
	*
	* // Tuple field assignments do NOT change:
	* x = tuple.x;
	* // returns 2.0
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 2.0, -3.0, 0.0 ] );
	*
	* var x = tuple[ 0 ];
	* // returns 2.0
	*
	* x = tuple.x;
	* // returns 2.0
	*
	* function descending( a, b ) {
	* 	return b - a;
	* }
	*
	* // Sort the tuple (in descending order):
	* tuple.sort( descending );
	*
	* var fields = tuple.orderedFields;
	* // returns [ 'x', 'z', 'y' ]
	*
	* var z = tuple[ 1 ];
	* // returns 0.0
	*
	* // Tuple field assignments do NOT change:
	* y = tuple.y;
	* // returns -3.0
	*/
	sort( compareFunction?: CompareFunction ): Tuple;

	/**
	* Creates a new typed array over the same underlying ArrayBuffer and with the same underlying data type as the host tuple.
	*
	* @param begin - start element index (inclusive); if less than zero, the start index is resolved relative to the last tuple element (default: 0)
	* @param end - end element index (exclusive); if less than zero, the end index is resolved relative to the last tuple element (default: tuple.length)
	* @returns a new typed array view
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* var arr = tuple.subarray();
	* // returns <Float64Array>[ 1.0, 0.0, -1.0 ]
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* var arr = tuple.subarray( 1 );
	* // returns <Float64Array>[ 0.0, -1.0 ]
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* var arr = tuple.subarray( 0, 2 );
	* // returns <Float64Array>[ 1.0, 0.0 ]
	*/
	subarray( begin?: number, end?: number ): TypedArray;

	/**
	* Creates a new named typed tuple over the same underlying ArrayBuffer and with the same underlying data type as the host tuple.
	*
	* @param begin - start element index (inclusive); if less than zero, the start index is resolved relative to the last tuple element (default: 0)
	* @param end - end element index (exclusive); if less than zero, the end index is resolved relative to the last tuple element (default: tuple.length)
	* @returns a new named typed tuple
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var p1 = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* var p2 = p1.subtuple();
	*
	* var bool = ( p1 === p2 );
	* // returns false
	*
	* bool = ( p1.buffer === p2.buffer );
	* // returns true
	*
	* var len = p2.length;
	* // returns 3
	*
	* var x = p2.x;
	* // returns 1.0
	*
	* var y = p2.y;
	* // returns 0.0
	*
	* var z = p2.z;
	* // returns -1.0
	*/
	subtuple( begin?: number, end?: number ): Tuple;

	/**
	* Serializes a tuple as JSON.
	*
	* @returns a tuple JSON representation
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ] );
	*
	* var obj = tuple.toJSON();
	* // returns { 'x': 1.0, 'y': 0.0, 'z': -1.0 }
	 */
	toJSON(): any;

	/**
	* Serializes a tuple as a locale-specific `string`.
	*
	* @param locales - a BCP 47 language tag, or an array of such tags
	* @param options - options
	* @returns a typed array string representation
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ], 'int32' );
	*
	* var str = tuple.toLocaleString();
	* // returns '1,0,-1'
	*/
	toLocaleString( locales: string | Array<string>, options?: any ): string;

	/**
	* Serializes a tuple as a `string`.
	*
	* ## Notes
	*
	* -   The returned `string` uses the tuple `name` as specified when creating a tuple factory.
	*
	* @returns a tuple string representation
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ], 'int32' );
	*
	* var str = tuple.toString();
	* // returns 'tuple(x=1, y=0, z=-1)'
	*
	* @example
	* var opts = {
	*     'name': 'Point'
	* };
	*
	* var factory = namedtypedtuple( [ 'x', 'y', 'z' ], opts );
	*
	* var tuple = factory( [ 1.0, 0.0, -1.0 ], 'int32' );
	*
	* var str = tuple.toString();
	* // returns 'Point(x=1, y=0, z=-1)'
	*/
	toString(): string;

	/**
	* Returns an iterator for iterating over tuple elements.
	*
	* @returns iterator for iterating over tuple elements
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* // Create an iterator:
	* var it = tuple.values();
	*
	* // Iterate over tuple elements...
	* var v = it.next().value;
	* // returns 1.0
	*
	* v = it.next().value;
	* // returns -1.0
	*
	* var bool = it.next().done;
	* // returns true
	*/
	values(): Iterator;
}

/**
* Interface defining a typed tuple factory.
*/
interface Factory {
	/**
	* Returns a named typed tuple of the specified data type.
	*
	* @param dtype - tuple data type (default data type if not supplied)
	* @returns named typed tuple
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( 'int32' );
	*
	* var x = tuple.x;
	* // returns 0
	*
	* x = tuple[ 0 ];
	* // returns 0
	*
	* var y = tuple.y;
	* // returns 0
	*
	* y = tuple[ 1 ];
	* // returns 0
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory();
	*
	* var x = tuple.x;
	* // returns 0.0
	*
	* x = tuple[ 0 ];
	* // returns 0.0
	*
	* var y = tuple.y;
	* // returns 0.0
	*
	* y = tuple[ 1 ];
	* // returns 0.0
	*/
	( dtype?: DType ): Tuple;

	/**
	* Creates a named typed tuple from a typed array, array-like object, or iterable.
	*
	* @param obj - typed array, array-like object, or iterable from which to generate a named typed tuple
	* @param dtype - tuple data type
	* @returns named typed tuple
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* var x = tuple.x;
	* // returns 1.0
	*
	* x = tuple[ 0 ];
	* // returns 1.0
	*
	* var y = tuple.y;
	* // returns -1.0
	*
	* y = tuple[ 1 ];
	* // returns -1.0
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( new Float64Array( [ 1.0, -1.0 ] ) );
	*
	* var x = tuple.x;
	* // returns 1.0
	*
	* x = tuple[ 0 ];
	* // returns 1.0
	*
	* var y = tuple.y;
	* // returns -1.0
	*
	* y = tuple[ 1 ];
	* // returns -1.0
	*/
	( obj: TypedArray | ArrayLike<number> | Iterable<number>, dtype?: DType ): Tuple; // tslint-disable-line max-line-length

	/**
	* Returns a named typed tuple view of an ArrayBuffer.
	*
	* @param buffer - underlying ArrayBuffer
	* @param byteOffset - integer byte offset specifying the location of the first tuple element (default: 0)
	* @param dtype - tuple data type
	* @returns named typed tuple
	*/
	( buffer: ArrayBuffer, byteOffset?: number, dtype?: DType ): Tuple;

	/**
	* Creates a new named typed tuple from an array-like object or an iterable.
	*
	* @param src - source of tuple elements
	* @param map - callback to invoke for each source element
	* @param thisArg - callback execution context
	* @returns named typed tuple
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory.from( [ 1.0, -1.0 ] );
	*
	* var x = tuple.x;
	* // returns 1.0
	*
	* x = tuple[ 0 ];
	* // returns 1.0
	*
	* var y = tuple.y;
	* // returns -1.0
	*
	* y = tuple[ 1 ];
	* // returns -1.0
	*/
	from( src: ArrayLike<number> | Iterable<number>, map?: FactoryCallback, thisArg?: any ): Tuple; // tslint-disable-line max-line-length

	/**
	* Creates a new named typed tuple from an object containing tuple fields.
	*
	* @param obj - source object
	* @param map - callback to invoke for each source object tuple field
	* @param thisArg - callback execution context
	* @returns named typed tuple
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var obj = {
	*     'x': 1.0,
	*     'y': -1.0
	* };
	*
	* var tuple = factory.fromObject( obj );
	*
	* var x = tuple.x;
	* // returns 1.0
	*
	* x = tuple[ 0 ];
	* // returns 1.0
	*
	* var y = tuple.y;
	* // returns -1.0
	*
	* y = tuple[ 1 ];
	* // returns -1.0
	*/
	fromObject( obj: any, map?: FactoryObjectCallback, thisArg?: any ): Tuple;

	/**
	* Creates a new named typed tuple from a variable number of arguments.
	*
	* @param elements - tuple elements
	* @returns named typed tuple
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory.of( 1.0, -1.0 );
	*
	* var x = tuple.x;
	* // returns 1.0
	*
	* x = tuple[ 0 ];
	* // returns 1.0
	*
	* var y = tuple.y;
	* // returns -1.0
	*
	* y = tuple[ 1 ];
	* // returns -1.0
	*/
	of( ...elements: Array<number> ): Tuple;
}

/**
* Returns a named typed tuple factory.
*
* @param names - field (property) names
* @param options - options
* @param options.dtype - default data type (default: 'float64')
* @param options.name - tuple name (default: 'tuple')
* @throws must provide distinct field names
* @throws cannot provide a reserved field (property) name
* @throws must provide valid options
* @throws must provide a recognized data type
* @returns factory function
*
* @example
* var point = namedtypedtuple( [ 'x', 'y' ] );
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
declare function namedtypedtuple( names: Array<string>, options?: Options ): Factory; // tslint-disable-line max-line-length


// EXPORTS //

export = namedtypedtuple;
