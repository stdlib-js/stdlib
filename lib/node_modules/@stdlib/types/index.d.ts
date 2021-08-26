/*
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

// TypeScript Version: 2.0

/**
* Module containing array definitions.
*
* @example
* import * as array from `@stdlib/types/array`;
*
* const x: array.ArrayLike = [ 1, 2, 3 ];
*
* @example
* import { ArrayLike } from `@stdlib/types/array`;
*
* const x: ArrayLike = [ 1, 2, 3 ];
*/
declare module '@stdlib/types/array' {
	import { ComplexLike, Complex64, Complex128 } from '@stdlib/types/object';

	/**
	* An array-like value.
	*
	* @example
	* const x: ArrayLike<number> = [ 1, 2, 3 ];
	* const y: ArrayLike<number> = new Float64Array( 10 );
	* const z: ArrayLike<string> = 'beep';
	*/
	interface ArrayLike<T> {
		/**
		* Numeric properties.
		*/
		[key: number]: T;

		/**
		* Number of elements.
		*/
		length: number;
	}

	/**
	* A numeric array.
	*
	* @example
	* const x: NumericArray = [ 1, 2, 3 ];
	* const y: NumericArray = new Float64Array( 10 );
	*/
	type NumericArray = Array<number> | TypedArray;

	/**
	* A typed array.
	*
	* @example
	* const x: TypedArray = new Float64Array( 10 );
	* const y: TypedArray = new Uint32Array( 10 );
	*/
	type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array; // tslint:disable-line:max-line-length

	/**
	* An integer typed array.
	*
	* @example
	* const x: IntegerTypedArray = new Uint32Array( 10 );
	* const y: IntegerTypedArray = new Int32Array( 10 );
	*/
	type IntegerTypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array; // tslint:disable-line:max-line-length

	/**
	* A complex number array-like value.
	*
	* @example
	* const buf = new Float64Array( 8 );
	*
	* const z: ComplexArrayLike = {
	*     'byteLength': 64,
	*     'byteOffset': 0,
	*     'BYTES_PER_ELEMENT': 8,
	*     'length': 8
	*     'get': ( i: number ): obj.ComplexLike => {
	*         return {
	*             're': i * 10,
	*             'im': i * 10
	*         };
	*     },
	*     'set': ( value: obj.ComplexLike, i?: number ) => {
	*         i = ( i ) ? i : 0;
	*         buf[ i ] = value.re;
	*         buf[ i + 1 ] = value.im;
	*     }
	* };
	*/
	interface ComplexArrayLike {
		/**
		* Length (in bytes) of the array.
		*/
		byteLength: number;

		/**
		* Offset (in bytes) of the array from the start of its underlying `ArrayBuffer`.
		*/
		byteOffset: number;

		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: number;

		/**
		* Number of array elements.
		*/
		length: number;

		/**
		* Returns an array element.
		*
		* @param i - element index
		* @returns array element
		*/
		get( i: number ): ComplexLike | void;

		/**
		* Sets an array element.
		*
		* @param value - value(s)
		* @param i - element index at which to start writing values (default: 0)
		*/
		set( value: ArrayLike<number | ComplexLike> | ComplexArrayLike | ComplexLike, i?: number ): void; // tslint:disable-line:max-line-length
	}

	/**
	* 64-bit complex number array.
	*
	* @example
	* const buf = new Float32Array( 8 );
	*
	* const z: Complex64Array = {
	*     'byteLength': 32,
	*     'byteOffset': 0,
	*     'BYTES_PER_ELEMENT': 4,
	*     'length': 8
	*     'get': ( i: number ): obj.Complex64 => {
	*         return {
	*             're': i * 10,
	*             'im': i * 10,
	*             'byteLength': 8,
	*             'BYTES_PER_ELEMENT': 4
	*         };
	*     },
	*     'set': ( value: obj.ComplexLike, i?: number ) => {
	*         i = ( i ) ? i : 0;
	*         buf[ i ] = value.re;
	*         buf[ i + 1 ] = value.im;
	*     }
	* };
	*/
	interface Complex64Array extends ComplexArrayLike {
		/**
		* Returns an array element.
		*
		* @param i - element index
		* @returns array element
		*/
		get( i: number ): Complex64 | void;

		/**
		* Sets an array element.
		*
		* @param value - value(s)
		* @param i - element index at which to start writing values (default: 0)
		*/
		set( value: ArrayLike<number | ComplexLike> | Complex64Array | ComplexLike, i?: number ): void; // tslint:disable-line:max-line-length
	}

	/**
	* 128-bit complex number array.
	*
	* @example
	* const buf = new Float64Array( 8 );
	*
	* const z: Complex128Array = {
	*     'byteLength': 64,
	*     'byteOffset': 0,
	*     'BYTES_PER_ELEMENT': 8,
	*     'length': 8
	*     'get': ( i: number ): obj.Complex128 => {
	*         return {
	*             're': i * 10,
	*             'im': i * 10,
	*             'byteLength': 16,
	*             'BYTES_PER_ELEMENT': 8
	*         };
	*     },
	*     'set': ( value: obj.ComplexLike, i?: number ) => {
	*         i = ( i ) ? i : 0;
	*         buf[ i ] = value.re;
	*         buf[ i + 1 ] = value.im;
	*     }
	* };
	*/
	interface Complex128Array extends ComplexArrayLike {
		/**
		* Returns an array element.
		*
		* @param i - element index
		* @returns array element
		*/
		get( i: number ): Complex128 | void;

		/**
		* Sets an array element.
		*
		* @param value - value(s)
		* @param i - element index at which to start writing values (default: 0)
		*/
		set( value: ArrayLike<number | ComplexLike> | Complex128Array | ComplexLike, i?: number ): void; // tslint:disable-line:max-line-length
	}
}

/**
* Module containing iterator definitions.
*
* @example
* import * as iter from `@stdlib/types/iter`;
*
* const it: iter.Iterator = {
*     'next': () => { return { 'value': 0, 'done': false }; }
* };
*
* @example
* import { Iterator } from `@stdlib/types/iter`;
*
* const it: Iterator = {
*     'next': () => { return { 'value': 0, 'done': false }; }
* };
*/
declare module '@stdlib/types/iter' {
	/**
	* Interface describing an iterator protocol-compliant object.
	*
	* @example
	* const it: Iterator = {
	*     'next': () => { return { 'value': 0, 'done': false }; }
	* };
	*/
	interface Iterator {
		/**
		* Returns an iterator protocol-compliant object containing the next iterated value (if one exists) and a boolean flag indicating whether the iterator is finished.
		*
		* @returns iterator protocol-compliant object
		*/
		next(): IteratorResult;

		/**
		* Finishes an iterator.
		*
		* @param value - value to return
		* @returns iterator protocol-compliant object
		*/
		return?( value?: any ): IteratorResult;
	}

	/**
	* Interface describing an iterable iterator protocol-compliant object.
	*
	* @example
	* const it: IterableIterator = {
	*     'next': () => { return { 'value': 0, 'done': false }; },
	*     [Symbol.iterator]: () => { return this; }
	* };
	*/
	interface IterableIterator extends Iterator {
		/**
		* Returns a new iterable iterator.
		*
		* @returns iterable iterator
		*/
		[Symbol.iterator](): IterableIterator;
	}

	/**
	* Interface describing an iterator protocol-compliant results object.
	*
	* @example
	* const o: IteratorResult = {
	*     'value': 3.14,
	*     'done': false
	* };
	*/
	interface IteratorResult {
		/**
		* Iterated value (if one exists).
		*/
		value?: any;

		/**
		* Boolean flag indicating whether an iterator is finished.
		*/
		done: boolean;
	}
}

/**
* Module containing ndarray definitions.
*
* @example
* import * as ndarray from `@stdlib/types/ndarray`;
*
* const arr: ndarray.ndarray = {
*     'byteLength': null,
*     'BYTES_PER_ELEMENT': null,
*     'data': [ 1, 2, 3 ],
*     'dtype': 'generic',
*     'flags': {
*         'ROW_MAJOR_CONTIGUOUS': true,
*         'COLUMN_MAJOR_CONTIGUOUS': false
*     },
*     'length': 3,
*     'ndims': 1,
*     'offset': 0,
*     'order': 'row-major',
*     'shape': [ 3 ],
*     'strides': [ 1 ],
*     'get': function get( i ) {
*         return this.data[ i ];
*     },
*     'set': function set( i, v ) {
*         this.data[ i ] = v;
*         return this;
*     }
* };
*
* @example
* import { ndarray } from `@stdlib/types/ndarray`;
*
* const arr: ndarray = {
*     'byteLength': null,
*     'BYTES_PER_ELEMENT': null,
*     'data': [ 1, 2, 3 ],
*     'dtype': 'generic',
*     'flags': {
*         'ROW_MAJOR_CONTIGUOUS': true,
*         'COLUMN_MAJOR_CONTIGUOUS': false
*     },
*     'length': 3,
*     'ndims': 1,
*     'offset': 0,
*     'order': 'row-major',
*     'shape': [ 3 ],
*     'strides': [ 1 ],
*     'get': function get( i ) {
*         return this.data[ i ];
*     },
*     'set': function set( i, v ) {
*         this.data[ i ] = v;
*         return this;
*     }
* };
*/
declare module '@stdlib/types/ndarray' {
	import { ArrayLike } from '@stdlib/types/array';

	/**
	* Data type.
	*/
	type DataType = 'float64' | 'float32' | 'int32' | 'int16' | 'int8' | 'uint32' | 'uint16' | 'uint8' | 'uint8c' | 'complex64' | 'complex128' | 'binary' | 'generic'; // tslint:disable-line:max-line-length

	/**
	* Array order.
	*
	* ## Notes
	*
	* -   The array order is either row-major (C-style) or column-major (Fortran-style).
	*/
	type Order = 'row-major' | 'column-major';

	/**
	* Array index mode.
	*
	* ## Notes
	*
	* -   The following index modes are supported:
	*
	*     -   `throw`: specifies that a function should throw an error when an index is outside a restricted interval.
	*     -   `wrap`: specifies that a function should wrap around an index using modulo arithmetic.
	*     -   `clamp`: specifies that a function should set an index less than zero to zero (minimum index) and set an index greater than a maximum index value to the maximum possible index.
	*/
	type Mode = 'throw' | 'clamp' | 'wrap';

	/**
	* Interface describing an ndarray.
	*
	* @example
	* const arr: ndarray = {
	*     'byteLength': null,
	*     'BYTES_PER_ELEMENT': null,
	*     'data': [ 1, 2, 3 ],
	*     'dtype': 'generic',
	*     'flags': {
	*         'ROW_MAJOR_CONTIGUOUS': true,
	*         'COLUMN_MAJOR_CONTIGUOUS': false
	*     },
	*     'length': 3,
	*     'ndims': 1,
	*     'offset': 0,
	*     'order': 'row-major',
	*     'shape': [ 3 ],
	*     'strides': [ 1 ],
	*     'get': function get( i ) {
	*         return this.data[ i ];
	*     },
	*     'set': function set( i, v ) {
	*         this.data[ i ] = v;
	*         return this;
	*     }
	* };
	*/
	interface ndarray { // tslint:disable-line:class-name
		/**
		* Size (in bytes) of the array (if known).
		*/
		byteLength: number | null;

		/**
		* Size (in bytes) of each array element (if known).
		*/
		BYTES_PER_ELEMENT: number | null;

		/**
		* A reference to the underlying data buffer.
		*/
		data: ArrayLike<any>;

		/**
		* Underlying data type.
		*/
		dtype: string;

		/**
		* Information regarding the memory layout of the array.
		*/
		flags: {
			/**
			* Boolean indicating if an array is row-major contiguous.
			*/
			ROW_MAJOR_CONTIGUOUS: boolean;

			/**
			* Boolean indicating if an array is column-major contiguous.
			*/
			COLUMN_MAJOR_CONTIGUOUS: boolean;
		};

		/**
		* Number of array elements.
		*/
		length: number;

		/**
		* Number of dimensions.
		*/
		ndims: number;

		/**
		* Index offset which specifies the `buffer` index at which to start iterating over array elements.
		*/
		offset: number;

		/**
		* Array order.
		*
		* ## Notes
		*
		* -   The array order is either row-major (C-style) or column-major (Fortran-style).
		*/
		order: Order;

		/**
		* Array shape.
		*/
		shape: ArrayLike<number>;

		/**
		* Array strides.
		*/
		strides: ArrayLike<number>;

		/**
		* Returns an array element specified according to provided subscripts.
		*
		* ## Notes
		*
		* -   The number of provided subscripts should equal the number of dimensions.
		*
		* @param args - subscripts
		* @returns array element
		*/
		get( ...args: Array<number> ): any;

		/**
		* Sets an array element specified according to provided subscripts.
		*
		* ## Notes
		*
		* -   The number of provided subscripts should equal the number of dimensions.
		*
		* @param args - subscripts and value to set
		* @returns ndarray instance
		*/
		set( ...args: Array<any> ): ndarray;
	}
}

/**
* Module containing object definitions.
*
* @example
* import * as obj from `@stdlib/types/object`;
*
* const desc: obj.DataPropertyDescriptor = {
*     'configurable': false,
*     'enumerable': true,
*     'writable': false,
*     'value': 'beep'
* };
*
* @example
* import { DataPropertyDescriptor } from `@stdlib/types/object`;
*
* const desc: DataPropertyDescriptor = {
*     'configurable': false,
*     'enumerable': true,
*     'writable': false,
*     'value': 'beep'
* };
*/
declare module '@stdlib/types/object' {
	import { ArrayLike, TypedArray } from '@stdlib/types/array';

	/**
	* Interface describing a data property descriptor object.
	*
	* @example
	* const desc: DataPropertyDescriptor = {
	*     'configurable': false,
	*     'enumerable': true,
	*     'writable': false,
	*     'value': 'beep'
	* };
	*/
	interface DataPropertyDescriptor {
		/**
		* Specifies whether a property descriptor may be changed and whether a property may be deleted from a corresponding object (default: `false`).
		*/
		configurable?: boolean;

		/**
		* Specifies whether a property can be enumerated (default: `false`).
		*/
		enumerable?: boolean;

		/**
		* Specifies whether the value associated with a property can be changed via the assignment operator (default: `false`).
		*/
		writable?: boolean;

		/**
		* Value associated with a property (default: `undefined`).
		*/
		value?: any;
	}

	/**
	* Interface describing an accessor property descriptor object.
	*
	* @example
	* const desc: AccessorPropertyDescriptor = {
	*     'configurable': false,
	*     'enumerable': true,
	*     'get': (): string => 'foo',
	*     'set': () => { throw new Error( 'invalid operation.' ); }
	* };
	*/
	interface AccessorPropertyDescriptor {
		/**
		* Specifies whether a property descriptor may be changed and whether a property may be deleted from a corresponding object (default: `false`).
		*/
		configurable?: boolean;

		/**
		* Specifies whether a property can be enumerated (default: `false`).
		*/
		enumerable?: boolean;

		/**
		* A function which serves as a getter for the property.
		*
		* ## Notes
		*
		* -   If omitted from a descriptor, a property value cannot be accessed.
		* -   When the property is accessed, the function is called without arguments and with `this` set to the object through which the property is accessed (note: this may **not** be the object on which the property is defined due to inheritance).
		* -   The return value will be used as the value of the property.
		*/
		get?(): any;

		/**
		* A function which serves as a setter for the property.
		*
		* ## Notes
		*
		* -   If omitted from a descriptor, a property value cannot be assigned.
		* -   When the property is assigned to, the function is called with one argument (the value being assigned to the property) and with `this` set to the object through which the property is assigned.
		*/
		set?( x: any ): void;
	}

	/**
	* Property descriptor object.
	*
	* @example
	* const desc: PropertyDescriptor = {
	*     'configurable': false,
	*     'enumerable': true,
	*     'writable': false,
	*     'value': 'beep'
	* };
	*/
	type PropertyDescriptor = DataPropertyDescriptor | AccessorPropertyDescriptor; // tslint:disable-line:max-line-length

	/**
	* An object property name.
	*
	* @example
	* const prop: PropertyName = 'foo';
	*/
	type PropertyName = string | symbol;

	/**
	* A collection, which is defined as either an array, typed array, or an array-like object (excluding strings and functions).
	*
	* @example
	* const arr: Collection = [ 1, 2, 3 ];
	*/
	type Collection = Array<any> | TypedArray | ArrayLike<any>;

	/**
	* A complex number-like object.
	*
	* @example
	* const x: ComplexLike = { 're': 5.0, 'im': 3.0 };
	*/
	interface ComplexLike {
		/**
		* Real component.
		*/
		re: number;

		/**
		* Imaginary component.
		*/
		im: number;
	}

	/**
	* A 64-bit complex number.
	*
	* @example
	* const x: Complex64 = {
	*     're': 5.0,
	*     'im': 3.0,
	*     'byteLength': 8,
	*     'BYTES_PER_ELEMENT': 4
	* };
	*/
	interface Complex64 extends ComplexLike {
		/**
		* Size (in bytes) of the complex number.
		*/
		byteLength: 8;

		/**
		* Size (in bytes) of each component.
		*/
		BYTES_PER_ELEMENT: 4;
	}

	/**
	* A 128-bit complex number.
	*
	* @example
	* const x: Complex128 = {
	*     're': 5.0,
	*     'im': 3.0,
	*     'byteLength': 16,
	*     'BYTES_PER_ELEMENT': 8
	* };
	*/
	interface Complex128 extends ComplexLike {
		/**
		* Size (in bytes) of the complex number.
		*/
		byteLength: 16;

		/**
		* Size (in bytes) of each component.
		*/
		BYTES_PER_ELEMENT: 8;
	}
}

/**
* Module containing PRNG definitions.
*
* @example
* import * as random from `@stdlib/types/random`;
*
* const rand: random.PRNG = () => 3.14;
*
* @example
* import { PRNG } from `@stdlib/types/random`;
*
* const rand: PRNG = () => 3.14;
*/
declare module '@stdlib/types/random' {
	import { ArrayLike } from '@stdlib/types/array';

	/**
	* A pseudorandom number generator (PRNG).
	*
	* @param args - PRNG parameters
	* @returns pseudorandom number
	*
	* @example
	* const rand: PRNG = () => 3.14;
	*/
	type PRNG = ( ...args: Array<any> ) => number;

	/**
	* A pseudorandom number generator (PRNG) seed for the 32-bit Mersenne Twister (MT19937) PRNG.
	*
	* @example
	* const s: PRNGSeedMT19937 = 12345;
	*
	* @example
	* const s: PRNGSeedMT19937 = [ 12345, 67891 ];
	*/
	type PRNGSeedMT19937 = number | ArrayLike<number>;

	/**
	* A pseudorandom number generator (PRNG) state for the 32-bit Mersenne Twister (MT19937) PRNG.
	*
	* @example
	* const s: PRNGStateMT19937 = new Uint32Array( 627 );
	*/
	type PRNGStateMT19937 = Uint32Array;

	/**
	* A pseudorandom number generator (PRNG) seed for the MINSTD PRNG.
	*
	* @example
	* const s: PRNGSeedMINSTD = 12345;
	*
	* @example
	* const s: PRNGSeedMINSTD = [ 12345, 67891 ];
	*/
	type PRNGSeedMINSTD = number | ArrayLike<number>;

	/**
	* A pseudorandom number generator (PRNG) state for the MINSTD PRNG.
	*
	* @example
	* const s: PRNGStateMINSTD = new Int32Array( 6 );
	*/
	type PRNGStateMINSTD = Int32Array;
}
