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

/* eslint-disable max-lines, stdlib/tsdoc-declarations-doctest */

// TypeScript Version: 4.1

/**
* Module containing array definitions.
*
* @example
* import * as array from `@stdlib/types/array`;
*
* const x: array.ArrayLike<number> = [ 1, 2, 3 ];
*
* @example
* import { ArrayLike } from `@stdlib/types/array`;
*
* const x: ArrayLike<number> = [ 1, 2, 3 ];
*/
declare module '@stdlib/types/array' {
	import { ComplexLike, Complex64, Complex128 } from '@stdlib/types/complex';
	import { Remap } from '@stdlib/types/utilities';

	/**
	* Data type.
	*/
	type DataType = NumericDataType | BooleanDataType | 'generic'; // "all"

	/**
	* Data type for real-valued typed arrays.
	*/
	type RealDataType = RealFloatingPointDataType | IntegerDataType; // "real"

	/**
	* Data type for real-valued typed arrays.
	*/
	type RealAndGenericDataType = RealDataType | 'generic'; // "real_and_generic"

	/**
	* Data type for floating-point typed arrays.
	*/
	type RealFloatingPointDataType = 'float64' | 'float32'; // "real_floating_point"

	/**
	* Data type for floating-point typed arrays.
	*/
	type RealFloatingPointAndGenericDataType = RealFloatingPointDataType | 'generic'; // "real_floating_point_and_generic"

	/**
	* Data type for integer typed arrays.
	*/
	type IntegerDataType = SignedIntegerDataType | UnsignedIntegerDataType; // "integer"

	/**
	* Data type for integer typed arrays.
	*/
	type IntegerAndGenericDataType = IntegerDataType | 'generic'; // "integer_and_generic"

	/**
	* Data type for signed integer typed arrays.
	*/
	type SignedIntegerDataType = 'int32' | 'int16' | 'int8'; // "signed_integer"

	/**
	* Data type for signed integer typed arrays.
	*/
	type SignedIntegerAndGenericDataType = SignedIntegerDataType | 'generic'; // "signed_integer_and_generic"

	/**
	* Data type for unsigned integer typed arrays.
	*/
	type UnsignedIntegerDataType = 'uint32' | 'uint16' | 'uint8' | 'uint8c'; // "unsigned_integer"

	/**
	* Data type for unsigned integer typed arrays.
	*/
	type UnsignedIntegerAndGenericDataType = UnsignedIntegerDataType | 'generic'; // "unsigned_integer_and_generic"

	/**
	* Data type for complex number typed arrays.
	*/
	type ComplexFloatingPointDataType = 'complex64' | 'complex128'; // "complex_floating_point"

	/**
	* Data type for complex number typed arrays.
	*/
	type ComplexFloatingPointAndGenericDataType = ComplexFloatingPointDataType | 'generic'; // "complex_floating_point_and_generic"

	/**
	* Data type for floating-point real or complex typed arrays.
	*/
	type FloatingPointDataType = RealFloatingPointDataType | ComplexFloatingPointDataType; // "floating_point"

	/**
	* Data type for floating-point real or complex typed arrays.
	*/
	type FloatingPointAndGenericDataType = FloatingPointDataType | 'generic'; // "floating_point_and_generic"

	/**
	* Data type for real-valued or complex number typed arrays.
	*/
	type NumericDataType = RealDataType | ComplexFloatingPointDataType; // "numeric"

	/**
	* Data type for real-valued or complex number typed arrays.
	*/
	type NumericAndGenericDataType = NumericDataType | 'generic'; // "numeric_and_generic"

	/**
	* Data type for boolean typed arrays.
	*/
	type BooleanDataType = 'bool'; // "boolean"

	/**
	* Data type for boolean and generic arrays.
	*/
	type BooleanAndGenericDataType = BooleanDataType | 'generic'; // "boolean_and_generic"

	/**
	* Data type for strictly typed arrays.
	*/
	type TypedDataType = RealDataType | ComplexFloatingPointDataType | BooleanDataType; // "typed"

	/**
	* Data type for strictly typed and generic arrays.
	*/
	type TypedAndGenericDataType = TypedDataType | 'generic'; // "typed_and_generic"

	/**
	* Data type for integer index arrays.
	*/
	type IntegerIndexDataType = 'int32'; // "integer_index"

	/**
	* Data type for integer index and generic arrays.
	*/
	type IntegerIndexAndGenericDataType = IntegerIndexDataType | 'generic'; // "integer_index_and_generic"

	/**
	* Data type for boolean index arrays.
	*/
	type BooleanIndexDataType = BooleanDataType; // "boolean_index"

	/**
	* Data type for boolean index and generic arrays.
	*/
	type BooleanIndexAndGenericDataType = BooleanIndexDataType | 'generic'; // "boolean_index_and_generic"

	/**
	* Data type for mask index arrays.
	*/
	type MaskIndexDataType = 'uint8'; // "mask_index"

	/**
	* Data type for mask index and generic arrays.
	*/
	type MaskIndexAndGenericDataType = MaskIndexDataType | 'generic'; // "mask_index_and_generic"

	/**
	* Data type for typed index arrays.
	*/
	type TypedIndexDataType = IntegerIndexDataType | BooleanIndexDataType | MaskIndexDataType; // "typed_index"

	/**
	* Data type for typed index and generic arrays.
	*/
	type TypedIndexAndGenericDataType = TypedIndexDataType | 'generic'; // "typed_index_and_generic"

	/**
	* Data type for index arrays.
	*/
	type IndexDataType = TypedIndexAndGenericDataType;

	/**
	* Strict data type "kinds".
	*/
	type StrictDataTypeKind = 'typed' | 'numeric' | 'real' | 'floating_point' | 'real_floating_point' | 'complex_floating_point' | 'integer' | 'signed_integer' | 'unsigned_integer' | 'boolean' | 'integer_index' | 'boolean_index' | 'mask_index' | 'typed_index' | 'index';

	/**
	* Data type "kinds".
	*/
	type DataTypeKind = StrictDataTypeKind | 'all' | 'typed_and_generic' | 'numeric_and_generic' | 'real_and_generic' | 'floating_point_and_generic' | 'real_floating_point_and_generic' | 'complex_floating_point_and_generic' | 'integer_and_generic' | 'signed_integer_and_generic' | 'unsigned_integer_and_generic' | 'boolean_and_generic' | 'integer_index_and_generic' | 'boolean_index_and_generic' | 'mask_index_and_generic' | 'typed_index_and_generic';

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
	* An array-like value which exposes accessors for getting and setting array elements.
	*
	* @example
	* const xbuf: Array = [ 1, 2, 3 ];
	* const x: AccessorArrayLike<number> = {
	*     'length': 3,
	*     'data': xbuf,
	*     'get': ( i: number ): number => xbuf[ i ],
	*     'set': ( value: number, i?: number ): void => {
	*         xbuf[ i || 0 ] = value;
	*         return;
	*      }
	* };
	*/
	interface AccessorArrayLike<T> {
		/**
		* Properties.
		*/
		[key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any

		/**
		* Number of elements.
		*/
		length: number;

		/**
		* Returns an array element.
		*
		* @param i - element index
		* @returns array element
		*/
		get( i: number ): T | void;

		/**
		* Sets an array element.
		*
		* @param value - value(s)
		* @param i - element index at which to start writing values (default: 0)
		*/
		set( value: T, i?: number ): void;
	}

	/**
	* A one-dimensional array.
	*
	* @example
	* const x: Array1D<number> = [ 1, 2, 3, 4 ];
	*/
	type Array1D<T> = Collection<T>;

	/**
	* A two-dimensional nested array.
	*
	* ## Notes
	*
	* -   All nested arrays should have the same length (i.e., no ragged arrays).
	*
	* @example
	* const x: Array2D<number> = [ [ 1, 2 ], [ 3, 4 ] ];
	*/
	type Array2D<T> = Array<Array1D<T>>;

	/**
	* A three-dimensional nested array.
	*
	* ## Notes
	*
	* -   All nested array lengths should be consistent (i.e., no ragged arrays).
	*
	* @example
	* const x: Array3D<number> = [ [ [ 1, 2 ], [ 3, 4 ] ] ];
	*/
	type Array3D<T> = Array<Array2D<T>>;

	/**
	* A four-dimensional nested array.
	*
	* ## Notes
	*
	* -   All nested array lengths should be consistent (i.e., no ragged arrays).
	*
	* @example
	* const x: Array4D<number> = [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ];
	*/
	type Array4D<T> = Array<Array3D<T>>;

	/**
	* A five-dimensional nested array.
	*
	* ## Notes
	*
	* -   All nested array lengths should be consistent (i.e., no ragged arrays).
	*
	* @example
	* const x: Array5D<number> = [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ];
	*/
	type Array5D<T> = Array<Array4D<T>>;

	/**
	* A six-dimensional nested array.
	*
	* ## Notes
	*
	* -   All nested array lengths should be consistent (i.e., no ragged arrays).
	*
	* @example
	* const x: Array6D<number> = [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ];
	*/
	type Array6D<T> = Array<Array5D<T>>;

	/**
	* A seven-dimensional nested array.
	*
	* ## Notes
	*
	* -   All nested array lengths should be consistent (i.e., no ragged arrays).
	*
	* @example
	* const x: Array7D<number> = [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ];
	*/
	type Array7D<T> = Array<Array6D<T>>;

	/**
	* An eight-dimensional nested array.
	*
	* ## Notes
	*
	* -   All nested array lengths should be consistent (i.e., no ragged arrays).
	*
	* @example
	* const x: Array8D<number> = [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ];
	*/
	type Array8D<T> = Array<Array7D<T>>;

	/**
	* A nine-dimensional nested array.
	*
	* ## Notes
	*
	* -   All nested array lengths should be consistent (i.e., no ragged arrays).
	*
	* @example
	* const x: Array9D<number> = [ [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ] ];
	*/
	type Array9D<T> = Array<Array8D<T>>;

	/**
	* A ten-dimensional nested array.
	*
	* ## Notes
	*
	* -   All nested array lengths should be consistent (i.e., no ragged arrays).
	*
	* @example
	* const x: Array10D<number> = [ [ [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ] ] ];
	*/
	type Array10D<T> = Array<Array9D<T>>;

	/**
	* A numeric array.
	*
	* @example
	* const x: NumericArray = [ 1, 2, 3 ];
	* const y: NumericArray = new Float64Array( 10 );
	*/
	type NumericArray = Array<number> | TypedArray;

	/**
	* Any array.
	*
	* @example
	* const x: AnyArray = [ 1, 2, 3 ];
	* const y: AnyArray = new Float64Array( 10 );
	*/
	type AnyArray = Array<any> | RealOrComplexTypedArray | BooleanTypedArray; // eslint-disable-line @typescript-eslint/no-explicit-any

	/**
	* An array or typed array.
	*
	* @example
	* const x: ArrayOrTypedArray = [ 1, 2, 3 ];
	* const y: ArrayOrTypedArray = new Float64Array( 10 );
	*/
	type ArrayOrTypedArray = Array<any> | TypedArray; // eslint-disable-line @typescript-eslint/no-explicit-any

	/**
	* A typed array.
	*
	* ## Notes
	*
	* -   This is a strict definition of a typed array. Namely, the type is limited to only built-in typed arrays.
	*
	* @example
	* const x: TypedArray = new Float64Array( 10 );
	* const y: TypedArray = new Uint32Array( 10 );
	*/
	type TypedArray = FloatTypedArray | IntegerTypedArray;

	/**
	* A real-valued typed array.
	*
	* @example
	* const x: RealTypedArray = new Float64Array( 10 );
	* const y: RealTypedArray = new Uint32Array( 10 );
	*/
	type RealTypedArray = TypedArray;

	/**
	* An integer typed array.
	*
	* @example
	* const x: IntegerTypedArray = new Uint32Array( 10 );
	* const y: IntegerTypedArray = new Int32Array( 10 );
	*/
	type IntegerTypedArray = SignedIntegerTypedArray | UnsignedIntegerTypedArray;

	/**
	* A signed integer typed array.
	*
	* @example
	* const x: SignedIntegerTypedArray = new Int32Array( 10 );
	*/
	type SignedIntegerTypedArray = Int8Array | Int16Array | Int32Array;

	/**
	* An unsigned integer typed array.
	*
	* @example
	* const x: UnsignedIntegerTypedArray = new Uint32Array( 10 );
	*/
	type UnsignedIntegerTypedArray = Uint8Array | Uint8ClampedArray | Uint16Array | Uint32Array;

	/**
	* A boolean typed array.
	*
	* @example
	* const x: BooleanTypedArray = new BooleanArray( 10 );
	*/
	type BooleanTypedArray = BooleanArray;

	/**
	* A floating-point typed array.
	*
	* @example
	* const x: FloatTypedArray = new Float64Array( 10 );
	* const y: FloatTypedArray = new Float32Array( 10 );
	*/
	type FloatTypedArray = Float32Array | Float64Array;

	/**
	* A complex number typed array.
	*
	* @example
	* const x: ComplexTypedArray = new Complex64Array( 10 );
	*/
	type ComplexTypedArray = Complex64Array | Complex128Array;

	/**
	* A real or complex array.
	*
	* @example
	* const x: RealOrComplexArray = new Float64Array( 10 );
	* const y: RealOrComplexArray = [ 1, 2, 3 ];
	*/
	type RealOrComplexArray = NumericArray | ComplexTypedArray;

	/**
	* A floating-point real or complex typed array.
	*
	* @example
	* const x: FloatOrComplexTypedArray = new Float64Array( 10 );
	*/
	type FloatOrComplexTypedArray = FloatTypedArray | ComplexTypedArray;

	/**
	* A real or complex typed array.
	*
	* @example
	* const x: RealOrComplexTypedArray = new Float64Array( 10 );
	*/
	type RealOrComplexTypedArray = RealTypedArray | ComplexTypedArray;

	/**
	* A boolean array-like value.
	*
	* @example
	* const buf = new Uint8Array( 8 );
	*
	* const x: BooleanArrayLike = {
	*     'byteLength': 8,
	*     'byteOffset': 0,
	*     'BYTES_PER_ELEMENT': 1,
	*     'length': 8
	*     'get': ( i: number ): boolean => {
	*         return Boolean( buf[ i ] );
	*     },
	*     'set': ( value: boolean, i?: number ) => {
	*         i = ( i ) ? i : 0;
	*         buf[ i ] = ( value ) ? 1 : 0;
	*     }
	* };
	*/
	interface BooleanArrayLike extends AccessorArrayLike<boolean> {
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
		get( i: number ): boolean | void;

		/**
		* Sets an array element.
		*
		* @param value - value(s)
		* @param i - element index at which to start writing values (default: 0)
		*/
		set( value: ArrayLike<boolean> | BooleanArrayLike | boolean, i?: number ): void;
	}

	/**
	* Boolean array.
	*
	* @example
	* const buf = new Uint8Array( 8 );
	*
	* const z: Complex64Array = {
	*     'byteLength': 8,
	*     'byteOffset': 0,
	*     'BYTES_PER_ELEMENT': 1,
	*     'length': 8
	*     'get': ( i: number ): boolean => {
	*         return Boolean( buf[ i ] );
	*     },
	*     'set': ( value: boolean, i?: number ) => {
	*         i = ( i ) ? i : 0;
	*         buf[ i ] = ( value ) ? 1 : 0;
	*     }
	* };
	*/
	interface BooleanArray extends BooleanArrayLike {
		/**
		* Returns an array element.
		*
		* @param i - element index
		* @returns array element
		*/
		get( i: number ): boolean | void;

		/**
		* Sets an array element.
		*
		* @param value - value(s)
		* @param i - element index at which to start writing values (default: 0)
		*/
		set( value: ArrayLike<boolean> | BooleanArray | boolean, i?: number ): void;
	}

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
	interface ComplexArrayLike extends AccessorArrayLike<ComplexLike> {
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
		set( value: ArrayLike<number | ComplexLike> | ComplexArrayLike | ComplexLike, i?: number ): void;
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
		set( value: ArrayLike<number | ComplexLike> | Complex64Array | ComplexLike, i?: number ): void;
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
		set( value: ArrayLike<number | ComplexLike> | Complex128Array | ComplexLike, i?: number ): void;
	}

	/**
	* A collection, which is defined as either an array, typed array, or an array-like object (excluding strings and functions).
	*
	* @example
	* const x: Collection<number> = [ 1, 2, 3 ];
	*/
	type Collection<T = any> = Array<T> | TypedArray | ArrayLike<T>; // eslint-disable-line @typescript-eslint/no-explicit-any

	/**
	* Mapping of data types to array constructors.
	*/
	type DataTypeMap<T> = Remap<TypedDataTypeMap & { 'generic': Array<T> }>;

	/**
	* Mapping of strictly typed array data types to array constructors.
	*/
	type TypedDataTypeMap = Remap<NumericDataTypeMap & BooleanDataTypeMap>;

	/**
	* Mapping of numeric data types (real or complex) to array constructors.
	*/
	type NumericDataTypeMap = Remap<RealDataTypeMap &  ComplexFloatingPointDataTypeMap>;

	/**
	* Mapping of numeric (real or complex) data types and the "generic" data type to array constructors.
	*/
	type NumericAndGenericDataTypeMap<T> = Remap<NumericDataTypeMap & { 'generic': Array<T> }>;

	/**
	* Mapping of data types for real-valued typed arrays to array constructors.
	*/
	type RealDataTypeMap = Remap<RealFloatingPointDataTypeMap & IntegerDataTypeMap>;

	/**
	* Mapping of data types for real-valued typed arrays and the "generic" data type to array constructors.
	*/
	type RealAndGenericDataTypeMap<T> = Remap<RealDataTypeMap & { 'generic': Array<T> }>;

	/**
	* Mapping of data types for complex number typed arrays to array constructors.
	*/
	type RealFloatingPointDataTypeMap = { // eslint-disable-line @typescript-eslint/consistent-type-definitions
		'float64': Float64Array;
		'float32': Float32Array;
	};

	/**
	* Mapping of real floating point data types and the "generic" data type to array constructors.
	*/
	type RealFloatingPointAndGenericDataTypeMap<T> = Remap<RealFloatingPointDataTypeMap & { 'generic': Array<T> }>;

	/**
	* Mapping of data types for complex number typed arrays to array constructors.
	*/
	type ComplexFloatingPointDataTypeMap = {  // eslint-disable-line @typescript-eslint/consistent-type-definitions
		'complex64': Complex64Array;
		'complex128': Complex128Array;
	};

	/**
	* Mapping of complex floating point data types and the "generic" data type to array constructors.
	*/
	type ComplexFloatingPointAndGenericDataTypeMap<T> = Remap<ComplexFloatingPointDataTypeMap & { 'generic': Array<T> }>;

	/**
	* Mapping of data types for floating-point (real or complex) typed arrays to array constructors.
	*/
	type FloatingPointDataTypeMap = Remap<RealFloatingPointDataTypeMap & ComplexFloatingPointDataTypeMap>;

	/**
	* Mapping for floating point (real or complex) data types and the "generic" data type to array constructors.
	*/
	type FloatingPointAndGenericDataTypeMap<T> = Remap<FloatingPointDataTypeMap & { 'generic': Array<T> }>;

	/**
	* Mapping of integer data types to array constructors.
	*/
	type IntegerDataTypeMap = Remap<SignedIntegerDataTypeMap & UnsignedIntegerDataTypeMap>;

	/**
	* Mapping of integer data types and the "generic" data type to array constructors.
	*/
	type IntegerAndGenericDataTypeMap<T> = Remap<IntegerDataTypeMap & { 'generic': Array<T> }>;

	/**
	* Mapping of signed integer data types to array constructors.
	*/
	type SignedIntegerDataTypeMap = { // eslint-disable-line @typescript-eslint/consistent-type-definitions
		'int32': Int32Array;
		'int16': Int16Array;
		'int8': Int8Array;
	};

	/**
	* Mapping of signed integer data types and the "generic" data type to array constructors.
	*/
	type SignedIntegerAndGenericDataTypeMap<T> = Remap<SignedIntegerDataTypeMap & { 'generic': Array<T> }>;

	/**
	* Mapping of unsigned integer data types to array constructors.
	*/
	type UnsignedIntegerDataTypeMap = { // eslint-disable-line @typescript-eslint/consistent-type-definitions
		'uint32': Uint32Array;
		'uint16': Uint16Array;
		'uint8': Uint8Array;
		'uint8c': Uint8ClampedArray;
	};

	/**
	* Mapping of unsigned integer data types and the "generic" data type to array constructors.
	*/
	type UnsignedIntegerAndGenericDataTypeMap<T> = Remap<UnsignedIntegerDataTypeMap & { 'generic': Array<T> }>;

	/**
	* Mapping of data types for boolean typed arrays to array constructors.
	*/
	type BooleanDataTypeMap = { // eslint-disable-line @typescript-eslint/consistent-type-definitions
		'bool': BooleanArray;
	};

	/**
	* Mapping of boolean data types and the "generic" data type to array constructors.
	*/
	type BooleanAndGenericDataTypeMap<T> = Remap<BooleanDataTypeMap & { 'generic': Array<T> }>;

	/**
	* Boolean index array.
	*/
	type GenericBooleanIndexArray = Collection<boolean> | AccessorArrayLike<boolean>;

	/**
	* Integer index array.
	*/
	type GenericIntegerIndexArray = Collection<number> | AccessorArrayLike<number>;

	/**
	* Generic index array.
	*/
	type GenericIndexArray = GenericBooleanIndexArray | GenericIntegerIndexArray;

	/**
	* Strictly typed index array.
	*/
	type TypedIndexArray = Uint8Array | BooleanArray | Int32Array;

	/**
	* Index array.
	*/
	type IndexArray = GenericIndexArray | TypedIndexArray;

	/**
	* Interface describing an array index object.
	*/
	interface BaseArrayIndex {
		/**
		* Read-only property returning the data associated with an array index object.
		*/
		data: IndexArray;

		/**
		* Read-only property returning the underlying index array data type.
		*/
		dtype: DataType | null;

		/**
		* Read-only property returning the unique identifier associated with an array index object.
		*/
		id: string;

		/**
		* Boolean indicating if an array index object is actively cached.
		*/
		isCached: boolean;

		/**
		* Read-only property returning the array index type.
		*/
		type: 'int' | 'bool' | 'mask';

		/**
		* Serializes an array index object to a string.
		*
		* @returns serialized string
		*/
		toString(): string;
	}

	/**
	* Interface describing a mask array index object.
	*/
	interface MaskArrayIndex extends BaseArrayIndex {
		/**
		* Read-only property returning the array index type.
		*/
		type: 'mask';

		/**
		* Read-only property returning the underlying index array data type.
		*/
		dtype: 'uint8';

		/**
		* Read-only property returning the underlying array data.
		*/
		data: Uint8Array;
	}

	/**
	* Interface describing a boolean array index object.
	*/
	interface BooleanArrayIndex extends BaseArrayIndex {
		/**
		* Read-only property returning the array index type.
		*/
		type: 'bool';

		/**
		* Read-only property returning the underlying index array data type.
		*/
		dtype: 'bool';

		/**
		* Read-only property returning the underlying array data.
		*/
		data: BooleanArray;
	}

	/**
	* Interface describing an integer array index object.
	*/
	interface Int32ArrayIndex extends BaseArrayIndex {
		/**
		* Read-only property returning the array index type.
		*/
		type: 'int';

		/**
		* Read-only property returning the underlying index array data type.
		*/
		dtype: 'int32';

		/**
		* Read-only property returning the underlying array data.
		*/
		data: Int32Array;
	}

	/**
	* Interface describing a "generic" boolean array index object.
	*/
	interface GenericBooleanArrayIndex extends BaseArrayIndex {
		/**
		* Read-only property returning the array index type.
		*/
		type: 'bool';

		/**
		* Read-only property returning the underlying index array data type.
		*/
		dtype: 'generic';

		/**
		* Read-only property returning the underlying array data.
		*/
		data: GenericBooleanIndexArray;
	}

	/**
	* Interface describing a "generic" integer array index object.
	*/
	interface GenericIntegerArrayIndex extends BaseArrayIndex {
		/**
		* Read-only property returning the array index type.
		*/
		type: 'int';

		/**
		* Read-only property returning the underlying index array data type.
		*/
		dtype: 'generic';

		/**
		* Read-only property returning the underlying array data.
		*/
		data: GenericIntegerIndexArray;
	}

	/**
	* Array index object.
	*/
	type ArrayIndex = MaskArrayIndex | BooleanArrayIndex | Int32ArrayIndex | GenericBooleanArrayIndex | GenericIntegerArrayIndex;

	/**
	* Interface describing an object containing index array data.
	*/
	interface BaseIndexArrayObject {
		/**
		* The underlying array associated with an index array.
		*/
		data: IndexArray;

		/**
		* The type of index array.
		*/
		type: 'int' | 'bool' | 'mask';

		/**
		* The data type of the underlying array.
		*/
		dtype: DataType | null;
	}

	/**
	* Interface describing an object containing mask index array data.
	*/
	interface MaskIndexArrayObject extends BaseIndexArrayObject {
		/**
		* The underlying array associated with an index array.
		*/
		data: Uint8Array;

		/**
		* The type of index array.
		*/
		type: 'mask';

		/**
		* The data type of the underlying array.
		*/
		dtype: 'uint8';
	}

	/**
	* Interface describing an object containing boolean index array data.
	*/
	interface BooleanIndexArrayObject extends BaseIndexArrayObject {
		/**
		* The underlying array associated with an index array.
		*/
		data: BooleanArray;

		/**
		* The type of index array.
		*/
		type: 'bool';

		/**
		* The data type of the underlying array.
		*/
		dtype: 'bool';
	}

	/**
	* Interface describing an object containing integer index array data.
	*/
	interface Int32IndexArrayObject extends BaseIndexArrayObject {
		/**
		* The underlying array associated with an index array.
		*/
		data: Int32Array;

		/**
		* The type of index array.
		*/
		type: 'int';

		/**
		* The data type of the underlying array.
		*/
		dtype: 'int32';
	}

	/**
	* Interface describing an object containing "generic" integer index array data.
	*/
	interface GenericIntegerIndexArrayObject extends BaseIndexArrayObject {
		/**
		* The underlying array associated with an index array.
		*/
		data: GenericIntegerIndexArray;

		/**
		* The type of index array.
		*/
		type: 'int';

		/**
		* The data type of the underlying array.
		*/
		dtype: 'generic';
	}

	/**
	* Interface describing an object containing "generic" boolean index array data.
	*/
	interface GenericBooleanIndexArrayObject extends BaseIndexArrayObject {
		/**
		* The underlying array associated with an index array.
		*/
		data: GenericBooleanIndexArray;

		/**
		* The type of index array.
		*/
		type: 'bool';

		/**
		* The data type of the underlying array.
		*/
		dtype: 'generic';
	}

	/**
	* Index array data object.
	*/
	type IndexArrayObject = MaskIndexArrayObject | BooleanIndexArrayObject | Int32IndexArrayObject | GenericBooleanIndexArrayObject | GenericIntegerIndexArrayObject;
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
		return?( value?: any ): IteratorResult; // eslint-disable-line @typescript-eslint/no-explicit-any
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
		value?: any; // eslint-disable-line @typescript-eslint/no-explicit-any

		/**
		* Boolean flag indicating whether an iterator is finished.
		*/
		done: boolean;
	}

	/**
	* Interface describing an iterator protocol-compliant object.
	*
	* @example
	* const it: TypedIterator<number> = {
	*     'next': () => { return { 'value': 0, 'done': false }; }
	* };
	*/
	interface TypedIterator<T> {
		/**
		* Returns an iterator protocol-compliant object containing the next iterated value (if one exists) and a boolean flag indicating whether the iterator is finished.
		*
		* @returns iterator protocol-compliant object
		*/
		next(): TypedIteratorResult<T>;

		/**
		* Finishes an iterator.
		*
		* @param value - value to return
		* @returns iterator protocol-compliant object
		*/
		return?( value?: T ): TypedIteratorResult<T>;
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
	interface TypedIterableIterator<T> extends TypedIterator<T> {
		/**
		* Returns a new iterable iterator.
		*
		* @returns iterable iterator
		*/
		[Symbol.iterator](): TypedIterableIterator<T>;
	}

	/**
	* Interface describing an iterator protocol-compliant results object.
	*
	* @example
	* const o: TypedIteratorResult<number> = {
	*     'value': 3.14,
	*     'done': false
	* };
	*/
	interface TypedIteratorResult<T> {
		/**
		* Iterated value (if one exists).
		*/
		value?: T;

		/**
		* Boolean flag indicating whether an iterator is finished.
		*/
		done: boolean;
	}
}

/**
* Module containing definitions for BLAS routines.
*
* @example
* import * as blas from `@stdlib/types/blas`;
*
* const layout: blas.Layout = 'row-major';
*/
declare module '@stdlib/types/blas' {
	/**
	* Diagonal element type.
	*
	* ## Notes
	*
	* -   **non-unit**: elements along a diagonal are **not** all equal to one.
	* -   **unit**: elements along a diagonal are all equal to one.
	*/
	type DiagonalType = 'non-unit' | 'unit';

	/**
	* Array memory layout.
	*
	* ## Notes
	*
	* -   The array memory layout is either row-major (C-style) or column-major (Fortran-style).
	*/
	type Layout = 'row-major' | 'column-major';

	/**
	* Matrix orientation.
	*
	* ## Notes
	*
	* -   **rows**: data is stored along matrix rows.
	* -   **columns**: data is stored along matrix columns.
	*/
	type MatrixOrientation = 'rows' | 'columns';

	/**
	* Matrix triangle.
	*
	* ## Notes
	*
	* -   **upper**: upper triangular part of a matrix.
	* -   **lower**: lower triangular part of a matrix.
	*/
	type MatrixTriangle = 'upper' | 'lower';

	/**
	* Operation side.
	*
	* ## Notes
	*
	* -   **left**: a triangular matrix is on the left side of a matrix-matrix operation (e.g., AX = B, where A is a triangular matrix).
	* -   **right**: a triangular matrix is on the right side of a matrix-matrix operation (e.g., XA = B, where A is a triangular matrix).
	*/
	type OperationSide = 'left' | 'right';

	/**
	* Transpose operations.
	*
	* ## Notes
	*
	* -   **no-transpose**: no transposition.
	* -   **transpose**: transposition.
	* -   **conjugate-transpose**: conjugate transposition.
	*/
	type TransposeOperation = 'no-transpose' | 'transpose' | 'conjugate-transpose';
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
	import { ArrayLike, AccessorArrayLike, BooleanArray, BooleanTypedArray, Collection, Complex128Array, Complex64Array, RealOrComplexTypedArray, FloatOrComplexTypedArray, RealTypedArray, ComplexTypedArray, IntegerTypedArray, FloatTypedArray, SignedIntegerTypedArray, UnsignedIntegerTypedArray } from '@stdlib/types/array';
	import { ComplexLike, Complex128, Complex64 } from '@stdlib/types/complex'; // eslint-disable-line no-duplicate-imports
	import { Layout } from '@stdlib/types/blas';
	import { Remap } from '@stdlib/types/utilities'; // eslint-disable-line no-duplicate-imports

	/**
	* Data type string.
	*/
	type DataTypeString = NumericDataTypeString | BooleanDataTypeString | 'binary' | 'generic'; // "all"

	/**
	* Data type string for real-valued ndarrays.
	*/
	type RealDataTypeString = RealFloatingPointDataTypeString | IntegerDataTypeString; // "real"

	/**
	* Data type string for real-valued ndarrays.
	*/
	type RealAndGenericDataTypeString = RealDataTypeString | 'generic'; // "real_and_generic"

	/**
	* Data type string for floating-point ndarrays.
	*/
	type RealFloatingPointDataTypeString = 'float64' | 'float32'; // "real_floating_point"

	/**
	* Data type string for floating-point ndarrays.
	*/
	type RealFloatingPointAndGenericDataTypeString = RealFloatingPointDataTypeString | 'generic'; // "real_floating_point_and_generic"

	/**
	* Data type string for integer ndarrays.
	*/
	type IntegerDataTypeString = SignedIntegerDataTypeString | UnsignedIntegerDataTypeString; // "integer"

	/**
	* Data type string for integer ndarrays.
	*/
	type IntegerAndGenericDataTypeString = IntegerDataTypeString | 'generic'; // "integer_and_generic"

	/**
	* Data type string for signed integer ndarrays.
	*/
	type SignedIntegerDataTypeString = 'int32' | 'int16' | 'int8'; // "signed_integer"

	/**
	* Data type string for signed integer ndarrays.
	*/
	type SignedIntegerAndGenericDataTypeString = SignedIntegerDataTypeString | 'generic'; // "signed_integer_and_generic"

	/**
	* Data type string for unsigned integer ndarrays.
	*/
	type UnsignedIntegerDataTypeString = 'uint32' | 'uint16' | 'uint8' | 'uint8c'; // "unsigned_integer"

	/**
	* Data type string for unsigned integer ndarrays.
	*/
	type UnsignedIntegerAndGenericDataTypeString = UnsignedIntegerDataTypeString | 'generic'; // "unsigned_integer_and_generic"

	/**
	* Data type string for complex number ndarrays.
	*/
	type ComplexFloatingPointDataTypeString = 'complex64' | 'complex128'; // "complex_floating_point"

	/**
	* Data type string for complex number ndarrays.
	*/
	type ComplexFloatingPointAndGenericDataTypeString = ComplexFloatingPointDataTypeString | 'generic'; // "complex_floating_point_and_generic"

	/**
	* Data type string for floating-point real or complex ndarrays.
	*/
	type FloatingPointDataTypeString = RealFloatingPointDataTypeString | ComplexFloatingPointDataTypeString; // "floating_point"

	/**
	* Data type string for floating-point real or complex ndarrays.
	*/
	type FloatingPointAndGenericDataTypeString = FloatingPointDataTypeString | 'generic'; // "floating_point_and_generic"

	/**
	* Data type string for real-valued or complex number ndarrays.
	*/
	type NumericDataTypeString = RealDataTypeString | ComplexFloatingPointDataTypeString; // "numeric"

	/**
	* Data type string for real-valued or complex number ndarrays.
	*/
	type NumericAndGenericDataTypeString = NumericDataTypeString | 'generic'; // "numeric_and_generic"

	/**
	* Data type string for boolean typed arrays.
	*/
	type BooleanDataTypeString = 'bool'; // "boolean"

	/**
	* Data type string for boolean and generic ndarrays.
	*/
	type BooleanAndGenericDataTypeString = BooleanDataTypeString | 'generic'; // "boolean_and_generic"

	/**
	* Data type string for strictly "typed" ndarrays.
	*/
	type TypedDataTypeString = NumericDataTypeString | BooleanDataTypeString; // "typed"

	/**
	* Data type string for strictly typed and generic ndarrays.
	*/
	type TypedAndGenericDataTypeString = TypedDataTypeString | 'generic'; // "typed_and_generic"

	/**
	* Data type string for integer index arrays.
	*/
	type IntegerIndexDataTypeString = 'int32'; // "integer_index"

	/**
	* Data type string for integer index and generic arrays.
	*/
	type IntegerIndexAndGenericDataTypeString = IntegerIndexDataTypeString | 'generic'; // "integer_index_and_generic"

	/**
	* Data type string for boolean index arrays.
	*/
	type BooleanIndexDataTypeString = BooleanDataTypeString; // "boolean_index"

	/**
	* Data type string for boolean index and generic arrays.
	*/
	type BooleanIndexAndGenericDataTypeString = BooleanIndexDataTypeString | 'generic'; // "boolean_index_and_generic"

	/**
	* Data type string for mask index arrays.
	*/
	type MaskIndexDataTypeString = 'uint8'; // "mask_index"

	/**
	* Data type string for mask index and generic arrays.
	*/
	type MaskIndexAndGenericDataTypeString = MaskIndexDataTypeString | 'generic'; // "mask_index_and_generic"

	/**
	* Data type string for typed index arrays.
	*/
	type TypedIndexDataTypeString = IntegerIndexDataTypeString | BooleanIndexDataTypeString | MaskIndexDataTypeString; // "typed_index"

	/**
	* Data type string for typed index and generic arrays.
	*/
	type TypedIndexAndGenericDataTypeString = TypedIndexDataTypeString | 'generic'; // "typed_index_and_generic"

	/**
	* Data type string for index arrays.
	*/
	type IndexDataTypeString = TypedIndexAndGenericDataTypeString; // "index"

	/**
	* Interface describing a data type object.
	*/
	interface BaseDataTypeObject {
		/**
		* Alignment (in bytes) for a data type.
		*
		* ## Notes
		*
		* -   If a data type does not have a known alignment, the value should be `-1`.
		*/
		alignment: number;

		/**
		* Size (in bytes) of a data type.
		*
		* ## Notes
		*
		* -   If a data type does not have a known size, the value should be `-1`.
		*/
		byteLength: number;

		/**
		* Data type byte order.
		*
		* ## Notes
		*
		* -   **host**: host platform byte order.
		* -   **little-endian**: little-endian byte order.
		* -   **big-endian**: big-endian byte order.
		*/
		byteOrder: 'host' | 'little-endian' | 'big-endian';

		/**
		* Single letter character abbreviation for a data type.
		* ## Notes
		*
		* -   If a data type does not have a corresponding single letter character abbreviation, the value should be an empty string.
		*/
		char: string;

		/**
		* Data type description.
		*
		* ## Notes
		*
		* -   If a data type does not have an associated description, the value should be an empty string.
		*/
		description: string;

		/**
		* Enumeration constant for a data type.
		*
		* ## Notes
		*
		* -   If a data type does not have a corresponding known enumeration constant, the value should be `-1`.
		*/
		enum: number;

		/**
		* "Raw" (original) data type value.
		*/
		value: any;
	}

	/**
	* Double-precision floating-point data type object.
	*/
	interface Float64DataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 8;

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 8;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 'd';

		/**
		* "Raw" data type value.
		*/
		value: 'float64';
	}

	/**
	* Single-precision floating-point data type object.
	*/
	interface Float32DataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 4;

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 4;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 'f';

		/**
		* "Raw" data type value.
		*/
		value: 'float32';
	}

	/**
	* Half-precision floating-point data type object.
	*/
	interface Float16DataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 2;

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 2;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 'h';

		/**
		* "Raw" data type value.
		*/
		value: 'float16';
	}

	/**
	* Double-precision complex floating-point data type object.
	*/
	interface Complex128DataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 8; // same as 'float64'

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 16;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 'z';

		/**
		* "Raw" data type value.
		*/
		value: 'complex128';
	}

	/**
	* Single-precision complex floating-point data type object.
	*/
	interface Complex64DataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 4; // same as 'float32'

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 8;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 'c';

		/**
		* "Raw" data type value.
		*/
		value: 'complex64';
	}

	/**
	* Half-precision complex floating-point data type object.
	*/
	interface Complex32DataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 2; // same as 'float16'

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 4;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 'j';

		/**
		* "Raw" data type value.
		*/
		value: 'complex32';
	}

	/**
	* Signed 32-bit integer data type object.
	*/
	interface Int32DataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 4;

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 4;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 'i';

		/**
		* "Raw" data type value.
		*/
		value: 'int32';
	}

	/**
	* Signed 16-bit integer data type object.
	*/
	interface Int16DataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 2;

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 2;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 'k';

		/**
		* "Raw" data type value.
		*/
		value: 'int16';
	}

	/**
	* Signed 8-bit integer data type object.
	*/
	interface Int8DataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 1;

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 1;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 's';

		/**
		* "Raw" data type value.
		*/
		value: 'int8';
	}

	/**
	* Unsigned 32-bit integer data type object.
	*/
	interface Uint32DataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 4;

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 4;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 'u';

		/**
		* "Raw" data type value.
		*/
		value: 'uint32';
	}

	/**
	* Unsigned 16-bit integer data type object.
	*/
	interface Uint16DataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 2;

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 2;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 't';

		/**
		* "Raw" data type value.
		*/
		value: 'uint16';
	}

	/**
	* Unsigned 8-bit integer data type object.
	*/
	interface Uint8DataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 1;

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 1;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 'b';

		/**
		* "Raw" data type value.
		*/
		value: 'uint8';
	}

	/**
	* Clamped unsigned 8-bit integer data type object.
	*/
	interface Uint8cDataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 1;

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 1;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 'a';

		/**
		* "Raw" data type value.
		*/
		value: 'uint8c';
	}

	/**
	* Boolean data type object.
	*/
	interface BoolDataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 1;

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 1;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 'x';

		/**
		* "Raw" data type value.
		*/
		value: 'bool';
	}

	/**
	* Binary data type object.
	*/
	interface BinaryDataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: 1;

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: 1;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 'r';

		/**
		* "Raw" data type value.
		*/
		value: 'binary';
	}

	/**
	* Generic data type object.
	*/
	interface GenericDataTypeObject extends BaseDataTypeObject {
		/**
		* Alignment (in bytes) of the data type.
		*/
		alignment: -1;

		/**
		* Size (in bytes) of the data type.
		*/
		byteLength: -1;

		/**
		* Single letter character abbreviation for the data type.
		*/
		char: 'o';

		/**
		* "Raw" data type value.
		*/
		value: 'generic';
	}

	/**
	* Double-precision floating-point data type.
	*/
	type Float64DataType = Float64DataTypeObject | 'float64';

	/**
	* Single-precision floating-point data type.
	*/
	type Float32DataType = Float32DataTypeObject | 'float32';

	/**
	* Half-precision floating-point data type.
	*/
	type Float16DataType = Float16DataTypeObject | 'float16';

	/**
	* Double-precision complex floating-point data type.
	*/
	type Complex128DataType = Complex128DataTypeObject | 'complex128';

	/**
	* Single-precision complex floating-point data type.
	*/
	type Complex64DataType = Complex64DataTypeObject | 'complex64';

	/**
	* Half-precision complex floating-point data type.
	*/
	type Complex32DataType = Complex32DataTypeObject | 'complex32';

	/**
	* Signed 32-bit integer data type.
	*/
	type Int32DataType = Int32DataTypeObject | 'int32';

	/**
	* Signed 16-bit integer data type.
	*/
	type Int16DataType = Int16DataTypeObject | 'int16';

	/**
	* Signed 8-bit integer data type.
	*/
	type Int8DataType = Int8DataTypeObject | 'int8';

	/**
	* Unsigned 32-bit integer data type.
	*/
	type Uint32DataType = Uint32DataTypeObject | 'uint32';

	/**
	* Unsigned 16-bit integer data type.
	*/
	type Uint16DataType = Uint16DataTypeObject | 'uint16';

	/**
	* Unsigned 8-bit integer data type.
	*/
	type Uint8DataType = Uint8DataTypeObject | 'uint8';

	/**
	* Clamped unsigned 8-bit integer data type.
	*/
	type Uint8cDataType = Uint8cDataTypeObject | 'uint8c';

	/**
	* Boolean data type.
	*/
	type BoolDataType = BoolDataTypeObject | 'bool';

	/**
	* Binary data type.
	*/
	type BinaryDataType = BinaryDataTypeObject | 'binary';

	/**
	* Generic data type.
	*/
	type GenericDataType = GenericDataTypeObject | 'generic';

	/**
	* Data type object.
	*/
	type DataTypeObject = NumericDataTypeObject | BooleanDataTypeObject | BinaryDataTypeObject | GenericDataTypeObject; // "all"

	/**
	* Data type object for real-valued ndarrays.
	*/
	type RealDataTypeObject = RealFloatingPointDataTypeObject | IntegerDataTypeObject; // "real"

	/**
	* Data type object for real-valued ndarrays.
	*/
	type RealAndGenericDataTypeObject = RealDataTypeObject | GenericDataTypeObject; // "real_and_generic"

	/**
	* Data type object for floating-point ndarrays.
	*/
	type RealFloatingPointDataTypeObject = Float64DataTypeObject | Float32DataTypeObject; // "real_floating_point"

	/**
	* Data type object for floating-point ndarrays.
	*/
	type RealFloatingPointAndGenericDataTypeObject = RealFloatingPointDataTypeObject | GenericDataTypeObject; // "real_floating_point_and_generic"

	/**
	* Data type object for integer ndarrays.
	*/
	type IntegerDataTypeObject = SignedIntegerDataTypeObject | UnsignedIntegerDataTypeObject; // "integer"

	/**
	* Data type object for integer ndarrays.
	*/
	type IntegerAndGenericDataTypeObject = IntegerDataTypeObject | GenericDataTypeObject; // "integer_and_generic"

	/**
	* Data type object for signed integer ndarrays.
	*/
	type SignedIntegerDataTypeObject = Int32DataTypeObject | Int16DataTypeObject | Int8DataTypeObject; // "signed_integer"

	/**
	* Data type object for signed integer ndarrays.
	*/
	type SignedIntegerAndGenericDataTypeObject = SignedIntegerDataTypeObject | GenericDataTypeObject; // "signed_integer_and_generic"

	/**
	* Data type object for unsigned integer ndarrays.
	*/
	type UnsignedIntegerDataTypeObject = Uint32DataTypeObject | Uint16DataTypeObject | Uint8DataTypeObject | Uint8cDataTypeObject; // "unsigned_integer"

	/**
	* Data type object for unsigned integer ndarrays.
	*/
	type UnsignedIntegerAndGenericDataTypeObject = UnsignedIntegerDataTypeObject | GenericDataTypeObject; // "unsigned_integer_and_generic"

	/**
	* Data type object for complex number ndarrays.
	*/
	type ComplexFloatingPointDataTypeObject = Complex64DataTypeObject | Complex128DataTypeObject; // "complex_floating_point"

	/**
	* Data type object for complex number ndarrays.
	*/
	type ComplexFloatingPointAndGenericDataTypeObject = ComplexFloatingPointDataTypeObject | GenericDataTypeObject; // "complex_floating_point_and_generic"

	/**
	* Data type object for floating-point real or complex ndarrays.
	*/
	type FloatingPointDataTypeObject = RealFloatingPointDataTypeObject | ComplexFloatingPointDataTypeObject; // "floating_point"

	/**
	* Data type object for floating-point real or complex ndarrays.
	*/
	type FloatingPointAndGenericDataTypeObject = FloatingPointDataTypeObject | GenericDataTypeObject; // "floating_point_and_generic"

	/**
	* Data type object for real-valued or complex number ndarrays.
	*/
	type NumericDataTypeObject = RealDataTypeObject | ComplexFloatingPointDataTypeObject; // "numeric"

	/**
	* Data type object for real-valued or complex number ndarrays.
	*/
	type NumericAndGenericDataTypeObject = NumericDataTypeObject | GenericDataTypeObject; // "numeric_and_generic"

	/**
	* Data type object for boolean typed arrays.
	*/
	type BooleanDataTypeObject = BoolDataTypeObject; // "boolean"

	/**
	* Data type object for boolean and generic ndarrays.
	*/
	type BooleanAndGenericDataTypeObject = BooleanDataTypeObject | GenericDataTypeObject; // "boolean_and_generic"

	/**
	* Data type object for strictly "typed" ndarrays.
	*/
	type TypedDataTypeObject = NumericDataTypeObject | BooleanDataTypeObject; // "typed"

	/**
	* Data type object for strictly typed and generic ndarrays.
	*/
	type TypedAndGenericDataTypeObject = TypedDataTypeObject | GenericDataTypeObject; // "typed_and_generic"

	/**
	* Data type object for integer index arrays.
	*/
	type IntegerIndexDataTypeObject = Int32DataTypeObject; // "integer_index"

	/**
	* Data type object for integer index and generic arrays.
	*/
	type IntegerIndexAndGenericDataTypeObject = IntegerIndexDataTypeObject | GenericDataTypeObject; // "integer_index_and_generic"

	/**
	* Data type object for boolean index arrays.
	*/
	type BooleanIndexDataTypeObject = BooleanDataTypeObject; // "boolean_index"

	/**
	* Data type object for boolean index and generic arrays.
	*/
	type BooleanIndexAndGenericDataTypeObject = BooleanIndexDataTypeObject | GenericDataTypeObject; // "boolean_index_and_generic"

	/**
	* Data type object for mask index arrays.
	*/
	type MaskIndexDataTypeObject = Uint8DataTypeObject; // "mask_index"

	/**
	* Data type object for mask index and generic arrays.
	*/
	type MaskIndexAndGenericDataTypeObject = MaskIndexDataTypeObject | GenericDataTypeObject; // "mask_index_and_generic"

	/**
	* Data type object for typed index arrays.
	*/
	type TypedIndexDataTypeObject = IntegerIndexDataTypeObject | BooleanIndexDataTypeObject | MaskIndexDataTypeObject; // "typed_index"

	/**
	* Data type object for typed index and generic arrays.
	*/
	type TypedIndexAndGenericDataTypeObject = TypedIndexDataTypeObject | GenericDataTypeObject; // "typed_index_and_generic"

	/**
	* Data type object for index arrays.
	*/
	type IndexDataTypeObject = TypedIndexAndGenericDataTypeObject; // "index"

	/**
	* Data type.
	*/
	type DataType = DataTypeString | DataTypeObject; // "all"

	/**
	* Data type for real-valued ndarrays.
	*/
	type RealDataType = RealDataTypeString | RealDataTypeObject; // "real"

	/**
	* Data type for real-valued ndarrays.
	*/
	type RealAndGenericDataType = RealAndGenericDataTypeString | RealAndGenericDataTypeObject; // "real_and_generic"

	/**
	* Data type for floating-point ndarrays.
	*/
	type RealFloatingPointDataType = RealFloatingPointDataTypeString | RealFloatingPointDataTypeObject; // "real_floating_point"

	/**
	* Data type for floating-point ndarrays.
	*/
	type RealFloatingPointAndGenericDataType = RealFloatingPointAndGenericDataTypeString | RealFloatingPointAndGenericDataTypeObject; // "real_floating_point_and_generic"

	/**
	* Data type for integer ndarrays.
	*/
	type IntegerDataType = IntegerDataTypeString | IntegerDataTypeObject; // "integer"

	/**
	* Data type for integer ndarrays.
	*/
	type IntegerAndGenericDataType = IntegerAndGenericDataTypeString | IntegerAndGenericDataTypeObject; // "integer_and_generic"

	/**
	* Data type for signed integer ndarrays.
	*/
	type SignedIntegerDataType = SignedIntegerDataTypeString | SignedIntegerDataTypeObject; // "signed_integer"

	/**
	* Data type for signed integer ndarrays.
	*/
	type SignedIntegerAndGenericDataType = SignedIntegerAndGenericDataTypeString | SignedIntegerAndGenericDataTypeObject; // "signed_integer_and_generic"

	/**
	* Data type for unsigned integer ndarrays.
	*/
	type UnsignedIntegerDataType = UnsignedIntegerDataTypeString | UnsignedIntegerDataTypeObject; // "unsigned_integer"

	/**
	* Data type for unsigned integer ndarrays.
	*/
	type UnsignedIntegerAndGenericDataType = UnsignedIntegerAndGenericDataTypeString | UnsignedIntegerAndGenericDataTypeObject; // "unsigned_integer_and_generic"

	/**
	* Data type for complex number ndarrays.
	*/
	type ComplexFloatingPointDataType = ComplexFloatingPointDataTypeString | ComplexFloatingPointDataTypeObject; // "complex_floating_point"

	/**
	* Data type for complex number ndarrays.
	*/
	type ComplexFloatingPointAndGenericDataType = ComplexFloatingPointAndGenericDataTypeString | ComplexFloatingPointAndGenericDataTypeObject; // "complex_floating_point_and_generic"

	/**
	* Data type for floating-point real or complex ndarrays.
	*/
	type FloatingPointDataType = FloatingPointDataTypeString | FloatingPointDataTypeObject; // "floating_point"

	/**
	* Data type for floating-point real or complex ndarrays.
	*/
	type FloatingPointAndGenericDataType = FloatingPointAndGenericDataTypeString | FloatingPointAndGenericDataTypeObject; // "floating_point_and_generic"

	/**
	* Data type for real-valued or complex number ndarrays.
	*/
	type NumericDataType = NumericDataTypeString | NumericDataTypeObject; // "numeric"

	/**
	* Data type for real-valued or complex number ndarrays.
	*/
	type NumericAndGenericDataType = NumericAndGenericDataTypeString | NumericAndGenericDataTypeObject; // "numeric_and_generic"

	/**
	* Data type for boolean typed arrays.
	*/
	type BooleanDataType = BooleanDataTypeString | BooleanDataTypeObject; // "boolean"

	/**
	* Data type for boolean and generic ndarrays.
	*/
	type BooleanAndGenericDataType = BooleanAndGenericDataTypeString | BooleanAndGenericDataTypeObject; // "boolean_and_generic"

	/**
	* Data type for strictly "typed" ndarrays.
	*/
	type TypedDataType = TypedDataTypeString | TypedDataTypeObject; // "typed"

	/**
	* Data type for strictly typed and generic ndarrays.
	*/
	type TypedAndGenericDataType = TypedAndGenericDataTypeString | TypedAndGenericDataTypeObject; // "typed_and_generic"

	/**
	* Data type for integer index arrays.
	*/
	type IntegerIndexDataType = IntegerIndexDataTypeString | IntegerIndexDataTypeObject; // "integer_index"

	/**
	* Data type for integer index and generic arrays.
	*/
	type IntegerIndexAndGenericDataType = IntegerIndexAndGenericDataTypeString | IntegerIndexAndGenericDataTypeObject; // "integer_index_and_generic"

	/**
	* Data type for boolean index arrays.
	*/
	type BooleanIndexDataType = BooleanIndexDataTypeString | BooleanIndexDataTypeObject; // "boolean_index"

	/**
	* Data type for boolean index and generic arrays.
	*/
	type BooleanIndexAndGenericDataType = BooleanIndexAndGenericDataTypeString | BooleanIndexAndGenericDataTypeObject; // "boolean_index_and_generic"

	/**
	* Data type for mask index arrays.
	*/
	type MaskIndexDataType = MaskIndexDataTypeString | MaskIndexDataTypeObject; // "mask_index"

	/**
	* Data type for mask index and generic arrays.
	*/
	type MaskIndexAndGenericDataType = MaskIndexAndGenericDataTypeString | MaskIndexAndGenericDataTypeObject; // "mask_index_and_generic"

	/**
	* Data type for typed index arrays.
	*/
	type TypedIndexDataType = TypedIndexDataTypeString | TypedIndexDataTypeObject; // "typed_index"

	/**
	* Data type for typed index and generic arrays.
	*/
	type TypedIndexAndGenericDataType = TypedIndexAndGenericDataTypeString | TypedIndexAndGenericDataTypeObject; // "typed_index_and_generic"

	/**
	* Data type for index arrays.
	*/
	type IndexDataType = IndexDataTypeString | IndexDataTypeObject; // "index"

	/**
	* Strict data type "kinds".
	*/
	type StrictDataTypeKind = 'typed' | 'numeric' | 'real' | 'floating_point' | 'real_floating_point' | 'complex_floating_point' | 'integer' | 'signed_integer' | 'unsigned_integer' | 'boolean' | 'integer_index' | 'boolean_index' | 'mask_index' | 'typed_index' | 'index';

	/**
	* Data type "kinds".
	*/
	type DataTypeKind = StrictDataTypeKind | 'all' | 'typed_and_generic' | 'numeric_and_generic' | 'real_and_generic' | 'floating_point_and_generic' | 'real_floating_point_and_generic' | 'complex_floating_point_and_generic' | 'integer_and_generic' | 'signed_integer_and_generic' | 'unsigned_integer_and_generic' | 'boolean_and_generic' | 'integer_index_and_generic' | 'boolean_index_and_generic' | 'mask_index_and_generic' | 'typed_index_and_generic';

	/**
	* Strict output data type policy.
	*/
	type StrictOutputPolicy = 'default' | 'default_index' | 'same' | 'promoted' | 'accumulation' | 'boolean' | 'integer_index' | 'boolean_index' | 'mask_index' | 'numeric' | 'real' | 'floating_point' | 'real_floating_point' | 'complex_floating_point' | 'integer' | 'signed_integer' | 'unsigned_integer';

	/**
	* Output data type policy.
	*/
	type OutputPolicy = StrictOutputPolicy | 'boolean_and_generic' | 'integer_index_and_generic' | 'boolean_index_and_generic' | 'mask_index_and_generic' | 'numeric_and_generic' | 'real_and_generic' | 'floating_point_and_generic' | 'real_floating_point_and_generic' | 'complex_floating_point_and_generic' | 'integer_and_generic' | 'signed_integer_and_generic' | 'unsigned_integer_and_generic';

	/**
	* Input ndarray casting policy.
	*/
	type InputCastingPolicy = 'none' | 'promoted' | 'accumulation' | 'output';

	/**
	* Array order.
	*
	* ## Notes
	*
	* -   The array order is either row-major (C-style) or column-major (Fortran-style).
	*/
	type Order = Layout;

	/**
	* Array index mode.
	*
	* ## Notes
	*
	* -   The following index modes are supported:
	*
	*     -   **throw**: specifies that a function should throw an error when an index is outside a restricted interval.
	*     -   **normalize**: specifies that a function should normalize negative indices and throw an error when an index is outside a restricted interval.
	*     -   **wrap**: specifies that a function should wrap around an index using modulo arithmetic.
	*     -   **clamp**: specifies that a function should set an index less than zero to zero (minimum index) and set an index greater than a maximum index value to the maximum possible index.
	*/
	type Mode = 'throw' | 'normalize' | 'clamp' | 'wrap';

	/**
	* Array shape.
	*
	* ## Notes
	*
	* -   Each element of the array shape (i.e., dimension size) should be a nonnegative integer.
	*/
	type Shape = Collection<number>;

	/**
	* Array shape for a zero-dimensional array.
	*
	* ## Notes
	*
	* -   The array shape for a zero-dimensional array contains zero elements.
	*/
	type Shape0D = Collection<never>;

	/**
	* Array shape for a one-dimensional array.
	*
	* ## Notes
	*
	* -   The array shape for a one-dimensional array contains a single element and the element value (i.e., dimension size) should be a nonnegative integer.
	*/
	type Shape1D = Collection<number>;

	/**
	* Array shape for a two-dimensional array.
	*
	* ## Notes
	*
	* -   The array shape for a three-dimensional array contains two elements and each element (i.e., dimension size) should be a nonnegative integer.
	*/
	type Shape2D = Collection<number>;

	/**
	* Array shape for a three-dimensional array.
	*
	* ## Notes
	*
	* -   The array shape for a three-dimensional array contains three elements and each element (i.e., dimension size) should be a nonnegative integer.
	*/
	type Shape3D = Collection<number>;

	/**
	* Array shape for a four-dimensional array.
	*
	* ## Notes
	*
	* -   The array shape for a four-dimensional array contains four elements and each element (i.e., dimension size) should be a nonnegative integer.
	*/
	type Shape4D = Collection<number>;

	/**
	* Array shape for a five-dimensional array.
	*
	* ## Notes
	*
	* -   The array shape for a five-dimensional array contains five elements and each element (i.e., dimension size) should be a nonnegative integer.
	*/
	type Shape5D = Collection<number>;

	/**
	* Array shape for a six-dimensional array.
	*
	* ## Notes
	*
	* -   The array shape for a six-dimensional array contains six elements and each element (i.e., dimension size) should be a nonnegative integer.
	*/
	type Shape6D = Collection<number>;

	/**
	* Array shape for a seven-dimensional array.
	*
	* ## Notes
	*
	* -   The array shape for a seven-dimensional array contains seven elements and each element (i.e., dimension size) should be a nonnegative integer.
	*/
	type Shape7D = Collection<number>;

	/**
	* Array shape for an eight-dimensional array.
	*
	* ## Notes
	*
	* -   The array shape for an eight-dimensional array contains eight elements and each element (i.e., dimension size) should be a nonnegative integer.
	*/
	type Shape8D = Collection<number>;

	/**
	* Array shape for a nine-dimensional array.
	*
	* ## Notes
	*
	* -   The array shape for a nine-dimensional array contains nine elements and each element (i.e., dimension size) should be a nonnegative integer.
	*/
	type Shape9D = Collection<number>;

	/**
	* Array shape for a ten-dimensional array.
	*
	* ## Notes
	*
	* -   The array shape for a ten-dimensional array contains ten elements and each element (i.e., dimension size) should be a nonnegative integer.
	*/
	type Shape10D = Collection<number>;

	/**
	* Array strides.
	*
	* ## Notes
	*
	* -   Each stride (i.e., index increment along a respective dimension) should be an integer.
	*/
	type Strides = Collection<number>;

	/**
	* Array strides for a zero-dimensional array.
	*
	* ## Notes
	*
	* -   The strides array for a two-dimensional array contains a single element equal to zero.
	*/
	type Strides0D = Collection<number>;

	/**
	* Array strides for a one-dimensional array.
	*
	* ## Notes
	*
	* -   The strides array for a two-dimensional array containsgle element and the element value should be an integer.
	*/
	type Strides1D = Collection<number>;

	/**
	* Array strides for a two-dimensional array.
	*
	* ## Notes
	*
	* -   The strides array for a two-dimensional array contains two elements and each element should be an integer.
	*/
	type Strides2D = Collection<number>;

	/**
	* Array strides for a three-dimensional array.
	*
	* ## Notes
	*
	* -   The strides array for a three-dimensional array contains three elements and each element should be an integer.
	*/
	type Strides3D = Collection<number>;

	/**
	* Array strides for a four-dimensional array.
	*
	* ## Notes
	*
	* -   The strides array for a four-dimensional array contains four elements and each element should be an integer.
	*/
	type Strides4D = Collection<number>;

	/**
	* Array strides for a five-dimensional array.
	*
	* ## Notes
	*
	* -   The strides array for a five-dimensional array contains five elements and each element should be an integer.
	*/
	type Strides5D = Collection<number>;

	/**
	* Array strides for a six-dimensional array.
	*
	* ## Notes
	*
	* -   The strides array for a six-dimensional array contains six elements and each element should be an integer.
	*/
	type Strides6D = Collection<number>;

	/**
	* Array strides for a seven-dimensional array.
	*
	* ## Notes
	*
	* -   The strides array for a seven-dimensional array contains seven elements and each element should be an integer.
	*/
	type Strides7D = Collection<number>;

	/**
	* Array strides for an eight-dimensional array.
	*
	* ## Notes
	*
	* -   The strides array for an eight-dimensional array contains eight elements and each element should be an integer.
	*/
	type Strides8D = Collection<number>;

	/**
	* Array strides for a nine-dimensional array.
	*
	* ## Notes
	*
	* -   The strides array for a nine-dimensional array contains nine elements and each element should be an integer.
	*/
	type Strides9D = Collection<number>;

	/**
	* Array strides for a ten-dimensional array.
	*
	* ## Notes
	*
	* -   The strides array for a ten-dimensional array contains ten elements and each element should be an integer.
	*/
	type Strides10D = Collection<number>;

	/**
	* Flags and other meta information (e.g., memory layout of the array).
	*/
	interface Flags<T = unknown> {
		/**
		* Properties.
		*/
		[key: string | symbol | number]: T | boolean | undefined;

		/**
		* Boolean indicating if an array is row-major contiguous.
		*/
		ROW_MAJOR_CONTIGUOUS?: boolean;

		/**
		* Boolean indicating if an array is column-major contiguous.
		*/
		COLUMN_MAJOR_CONTIGUOUS?: boolean;

		/**
		* Boolean indicating if an array is read-only.
		*/
		READONLY?: boolean;
	}

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
	interface ndarray {
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
		data: ArrayLike<any> | AccessorArrayLike<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

		/**
		* Underlying data type.
		*/
		dtype: string | BaseDataTypeObject;

		/**
		* Flags and other meta information (e.g., memory layout of the array).
		*/
		flags: Flags;

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
		shape: Shape;

		/**
		* Array strides.
		*/
		strides: Strides;

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
		get( ...args: Array<number> ): any; // eslint-disable-line @typescript-eslint/no-explicit-any

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
		set( ...args: Array<any> ): ndarray; // eslint-disable-line @typescript-eslint/no-explicit-any
	}

	/**
	* Interface describing an ndarray having a homogeneous data type.
	*
	* @example
	* const arr: typedndarray<number> = {
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
	interface typedndarray<T> extends ndarray {
		/**
		* A reference to the underlying data buffer.
		*/
		data: ArrayLike<T>;

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
		get( ...args: Array<number> ): T;

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
		set( ...args: Array<number | T> ): typedndarray<T>;
	}

	/**
	* Interface describing an ndarray having a generic data type.
	*
	* @example
	* const arr: genericndarray<any> = {
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
	interface genericndarray<T> extends typedndarray<T> {
		/**
		* Size (in bytes) of the array.
		*/
		byteLength: null;

		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: null;

		/**
		* Underlying data type.
		*/
		dtype: GenericDataType;

		/**
		* A reference to the underlying data buffer.
		*/
		data: ArrayLike<T>;

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
		get( ...args: Array<number> ): T;

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
		set( ...args: Array<number|T> ): genericndarray<T>;
	}

	/**
	* Interface describing an ndarray having a floating-point data type.
	*
	* @example
	* const arr: floatndarray = {
	*     'byteLength': 24,
	*     'BYTES_PER_ELEMENT': 8,
	*     'data': new Float64Array( [ 1, 2, 3 ] ),
	*     'dtype': 'float64',
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
	interface floatndarray extends typedndarray<number> {
		/**
		* Size (in bytes) of the array.
		*/
		byteLength: number;

		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: number;

		/**
		* A reference to the underlying data buffer.
		*/
		data: FloatTypedArray;

		/**
		* Underlying data type.
		*/
		dtype: RealFloatingPointDataType;

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
		set( ...args: Array<number> ): floatndarray;
	}

	/**
	* Interface describing an ndarray having a double-precision floating-point data type.
	*
	* @example
	* const arr: float64ndarray = {
	*     'byteLength': 24,
	*     'BYTES_PER_ELEMENT': 8,
	*     'data': new Float64Array( [ 1, 2, 3 ] ),
	*     'dtype': 'float64',
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
	interface float64ndarray extends floatndarray {
		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: 8;

		/**
		* A reference to the underlying data buffer.
		*/
		data: Float64Array;

		/**
		* Underlying data type.
		*/
		dtype: Float64DataType;

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
		set( ...args: Array<number> ): float64ndarray;
	}

	/**
	* Interface describing an ndarray having a single-precision floating-point data type.
	*
	* @example
	* const arr: float32ndarray = {
	*     'byteLength': 12,
	*     'BYTES_PER_ELEMENT': 4,
	*     'data': new Float32Array( [ 1, 2, 3 ] ),
	*     'dtype': 'float32',
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
	interface float32ndarray extends floatndarray {
		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: 4;

		/**
		* A reference to the underlying data buffer.
		*/
		data: Float32Array;

		/**
		* Underlying data type.
		*/
		dtype: Float32DataType;

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
		set( ...args: Array<number> ): float32ndarray;
	}

	/**
	* Interface describing an ndarray having an integer data type.
	*
	* @example
	* const arr: integerndarray = {
	*     'byteLength': 12,
	*     'BYTES_PER_ELEMENT': 4,
	*     'data': new Int32Array( [ 1, 2, 3 ] ),
	*     'dtype': 'int32',
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
	interface integerndarray extends typedndarray<number> {
		/**
		* Size (in bytes) of the array.
		*/
		byteLength: number;

		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: number;

		/**
		* A reference to the underlying data buffer.
		*/
		data: IntegerTypedArray;

		/**
		* Underlying data type.
		*/
		dtype: IntegerDataType;

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
		set( ...args: Array<number> ): integerndarray;
	}

	/**
	* Interface describing an ndarray having a signed integer data type.
	*
	* @example
	* const arr: signedintegerndarray = {
	*     'byteLength': 12,
	*     'BYTES_PER_ELEMENT': 4,
	*     'data': new Int32Array( [ 1, 2, 3 ] ),
	*     'dtype': 'int32',
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
	interface signedintegerndarray extends typedndarray<number> {
		/**
		* Size (in bytes) of the array.
		*/
		byteLength: number;

		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: number;

		/**
		* A reference to the underlying data buffer.
		*/
		data: SignedIntegerTypedArray;

		/**
		* Underlying data type.
		*/
		dtype: SignedIntegerDataType;

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
		set( ...args: Array<number> ): signedintegerndarray;
	}

	/**
	* Interface describing an ndarray having a signed 32-bit integer data type.
	*
	* @example
	* const arr: int32ndarray = {
	*     'byteLength': 12,
	*     'BYTES_PER_ELEMENT': 4,
	*     'data': new Int32Array( [ 1, 2, 3 ] ),
	*     'dtype': 'int32',
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
	interface int32ndarray extends signedintegerndarray {
		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: 4;

		/**
		* A reference to the underlying data buffer.
		*/
		data: Int32Array;

		/**
		* Underlying data type.
		*/
		dtype: Int32DataType;

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
		set( ...args: Array<number> ): int32ndarray;
	}

	/**
	* Interface describing an ndarray having a signed 16-bit integer data type.
	*
	* @example
	* const arr: int16ndarray = {
	*     'byteLength': 6,
	*     'BYTES_PER_ELEMENT': 2,
	*     'data': new Int16Array( [ 1, 2, 3 ] ),
	*     'dtype': 'int16',
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
	interface int16ndarray extends signedintegerndarray {
		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: 2;

		/**
		* A reference to the underlying data buffer.
		*/
		data: Int16Array;

		/**
		* Underlying data type.
		*/
		dtype: Int16DataType;

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
		set( ...args: Array<number> ): int16ndarray;
	}

	/**
	* Interface describing an ndarray having a signed 8-bit integer data type.
	*
	* @example
	* const arr: int8ndarray = {
	*     'byteLength': 3,
	*     'BYTES_PER_ELEMENT': 1,
	*     'data': new Int8Array( [ 1, 2, 3 ] ),
	*     'dtype': 'int8',
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
	interface int8ndarray extends signedintegerndarray {
		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: 1;

		/**
		* A reference to the underlying data buffer.
		*/
		data: Int8Array;

		/**
		* Underlying data type.
		*/
		dtype: Int8DataType;

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
		set( ...args: Array<number> ): int8ndarray;
	}

	/**
	* Interface describing an ndarray having an unsigned integer data type.
	*
	* @example
	* const arr: unsignedintegerndarray = {
	*     'byteLength': 12,
	*     'BYTES_PER_ELEMENT': 4,
	*     'data': new Uint32Array( [ 1, 2, 3 ] ),
	*     'dtype': 'uint32',
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
	interface unsignedintegerndarray extends typedndarray<number> {
		/**
		* Size (in bytes) of the array.
		*/
		byteLength: number;

		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: number;

		/**
		* A reference to the underlying data buffer.
		*/
		data: UnsignedIntegerTypedArray;

		/**
		* Underlying data type.
		*/
		dtype: UnsignedIntegerDataType;

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
		set( ...args: Array<number> ): unsignedintegerndarray;
	}

	/**
	* Interface describing an ndarray having an unsigned 32-bit integer data type.
	*
	* @example
	* const arr: uint32ndarray = {
	*     'byteLength': 12,
	*     'BYTES_PER_ELEMENT': 4,
	*     'data': new Uint32Array( [ 1, 2, 3 ] ),
	*     'dtype': 'uint32',
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
	interface uint32ndarray extends unsignedintegerndarray {
		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: 4;

		/**
		* A reference to the underlying data buffer.
		*/
		data: Uint32Array;

		/**
		* Underlying data type.
		*/
		dtype: Uint32DataType;

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
		set( ...args: Array<number> ): uint32ndarray;
	}

	/**
	* Interface describing an ndarray having an unsigned 16-bit integer data type.
	*
	* @example
	* const arr: uint16ndarray = {
	*     'byteLength': 6,
	*     'BYTES_PER_ELEMENT': 2,
	*     'data': new Uint16Array( [ 1, 2, 3 ] ),
	*     'dtype': 'uint16',
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
	interface uint16ndarray extends unsignedintegerndarray {
		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: 2;

		/**
		* A reference to the underlying data buffer.
		*/
		data: Uint16Array;

		/**
		* Underlying data type.
		*/
		dtype: Uint16DataType;

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
		set( ...args: Array<number> ): uint16ndarray;
	}

	/**
	* Interface describing an ndarray having an unsigned 8-bit integer data type.
	*
	* @example
	* const arr: uint8ndarray = {
	*     'byteLength': 3,
	*     'BYTES_PER_ELEMENT': 1,
	*     'data': new Uint8Array( [ 1, 2, 3 ] ),
	*     'dtype': 'uint8',
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
	interface uint8ndarray extends unsignedintegerndarray {
		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: 1;

		/**
		* A reference to the underlying data buffer.
		*/
		data: Uint8Array;

		/**
		* Underlying data type.
		*/
		dtype: Uint8DataType;

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
		set( ...args: Array<number> ): uint8ndarray;
	}

	/**
	* Interface describing an ndarray having a clamped unsigned 8-bit integer data type.
	*
	* @example
	* const arr: uint8cndarray = {
	*     'byteLength': 12,
	*     'BYTES_PER_ELEMENT': 4,
	*     'data': new Uint8ClampedArray( [ 1, 2, 3 ] ),
	*     'dtype': 'uint8c',
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
	interface uint8cndarray extends unsignedintegerndarray {
		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: 1;

		/**
		* A reference to the underlying data buffer.
		*/
		data: Uint8ClampedArray;

		/**
		* Underlying data type.
		*/
		dtype: Uint8cDataType;

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
		set( ...args: Array<number> ): uint8cndarray;
	}

	/**
	* Interface describing an ndarray having a boolean data type.
	*
	* @example
	* const arr: booleanndarray = {
	*     'byteLength': 3,
	*     'BYTES_PER_ELEMENT': 1,
	*     'data': new BooleanArray( [ true, false, true ] ),
	*     'dtype': 'bool',
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
	*         return this.data.get( i );
	*     },
	*     'set': function set( i, v ) {
	*         this.data.set( v, i );
	*         return this;
	*     }
	* };
	*/
	interface booleanndarray extends typedndarray<boolean> {
		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: 1;

		/**
		* A reference to the underlying data buffer.
		*/
		data: BooleanTypedArray;

		/**
		* Underlying data type.
		*/
		dtype: BoolDataType;

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
		set( ...args: Array<number | boolean> ): booleanndarray;
	}

	/**
	* Interface describing an ndarray having a boolean data type.
	*
	* @example
	* const arr: boolndarray = {
	*     'byteLength': 3,
	*     'BYTES_PER_ELEMENT': 1,
	*     'data': new BooleanArray( [ true, false, true ] ),
	*     'dtype': 'bool',
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
	*         return this.data.get( i );
	*     },
	*     'set': function set( i, v ) {
	*         this.data.set( v, i );
	*         return this;
	*     }
	* };
	*/
	interface boolndarray extends booleanndarray {
		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: 1;

		/**
		* A reference to the underlying data buffer.
		*/
		data: BooleanArray;

		/**
		* Underlying data type.
		*/
		dtype: BoolDataType;

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
		set( ...args: Array<number | boolean> ): boolndarray;
	}

	/**
	* Interface describing an ndarray having a real-valued data type.
	*
	* @example
	* const arr: realndarray = {
	*     'byteLength': 24,
	*     'BYTES_PER_ELEMENT': 8,
	*     'data': new Float64Array( [ 1, 2, 3 ] ),
	*     'dtype': 'float64',
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
	interface realndarray extends typedndarray<number> {
		/**
		* Size (in bytes) of the array.
		*/
		byteLength: number;

		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: number;

		/**
		* A reference to the underlying data buffer.
		*/
		data: RealTypedArray;

		/**
		* Underlying data type.
		*/
		dtype: RealDataType;

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
		set( ...args: Array<number> ): realndarray;
	}

	/**
	* Interface describing an ndarray having a real or complex number data type.
	*
	* @example
	* const arr: realcomplexndarray = {
	*     'byteLength': 24,
	*     'BYTES_PER_ELEMENT': 8,
	*     'data': new Float64Array( [ 1, 2, 3 ] ),
	*     'dtype': 'float64',
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
	interface realcomplexndarray extends typedndarray<number | ComplexLike> {
		/**
		* Size (in bytes) of the array.
		*/
		byteLength: number;

		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: number;

		/**
		* A reference to the underlying data buffer.
		*/
		data: RealOrComplexTypedArray;

		/**
		* Underlying data type.
		*/
		dtype: NumericDataType;

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
		set( ...args: Array<number | ComplexLike> ): realcomplexndarray;
	}

	/**
	* Interface describing an ndarray having a floating-point real or complex number data type.
	*
	* @example
	* const arr: floatcomplexndarray = {
	*     'byteLength': 24,
	*     'BYTES_PER_ELEMENT': 8,
	*     'data': new Float64Array( [ 1, 2, 3 ] ),
	*     'dtype': 'float64',
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
	interface floatcomplexndarray extends typedndarray<number | ComplexLike> {
		/**
		* Size (in bytes) of the array.
		*/
		byteLength: number;

		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: number;

		/**
		* A reference to the underlying data buffer.
		*/
		data: FloatOrComplexTypedArray;

		/**
		* Underlying data type.
		*/
		dtype: FloatingPointDataType;

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
		set( ...args: Array<number | ComplexLike> ): floatcomplexndarray;
	}

	/**
	* Interface describing an ndarray having a complex number data type.
	*
	* @example
	* const arr: complexndarray = {
	*     'byteLength': 48,
	*     'BYTES_PER_ELEMENT': 16,
	*     'data': new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ),
	*     'dtype': 'complex128',
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
	*         return new Complex128( this.data[ i*2 ], this.data[ (i*2)+1 ] );
	*     },
	*     'set': function set( i, v ) {
	*         this.data[ i ] = v;
	*         return this;
	*     }
	* };
	*/
	interface complexndarray extends typedndarray<ComplexLike> {
		/**
		* Size (in bytes) of the array.
		*/
		byteLength: number;

		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: number;

		/**
		* A reference to the underlying data buffer.
		*/
		data: ComplexTypedArray;

		/**
		* Underlying data type.
		*/
		dtype: ComplexFloatingPointDataType;

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
		get( ...args: Array<number> ): ComplexLike;

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
		set( ...args: Array<number | ComplexLike> ): complexndarray;
	}

	/**
	* Interface describing an ndarray having a double-precision complex floating-point data type.
	*
	* @example
	* const arr: complex128ndarray = {
	*     'byteLength': 48,
	*     'BYTES_PER_ELEMENT': 16,
	*     'data': new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ),
	*     'dtype': 'complex128',
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
	*         return new Complex128( this.data[ i*2 ], this.data[ (i*2)+1 ] );
	*     },
	*     'set': function set( i, v ) {
	*         this.data[ i ] = v;
	*         return this;
	*     }
	* };
	*/
	interface complex128ndarray extends complexndarray {
		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: 16;

		/**
		* A reference to the underlying data buffer.
		*/
		data: Complex128Array;

		/**
		* Underlying data type.
		*/
		dtype: Complex128DataType;

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
		get( ...args: Array<number> ): Complex128;

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
		set( ...args: Array<number | ComplexLike> ): complex128ndarray;
	}

	/**
	* Interface describing an ndarray having a single-precision complex floating-point data type.
	*
	* @example
	* const arr: complex64ndarray = {
	*     'byteLength': 24,
	*     'BYTES_PER_ELEMENT': 8,
	*     'data': new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ),
	*     'dtype': 'complex64',
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
	*         return new Complex64( this.data[ i*2 ], this.data[ (i*2)+1 ] );
	*     },
	*     'set': function set( i, v ) {
	*         this.data[ i ] = v;
	*         return this;
	*     }
	* };
	*/
	interface complex64ndarray extends complexndarray {
		/**
		* Size (in bytes) of each array element.
		*/
		BYTES_PER_ELEMENT: 8;

		/**
		* A reference to the underlying data buffer.
		*/
		data: Complex64Array;

		/**
		* Underlying data type.
		*/
		dtype: Complex64DataType;

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
		get( ...args: Array<number> ): Complex64;

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
		set( ...args: Array<number | ComplexLike> ): complex64ndarray;
	}

	/**
	* Interface describing a one-dimensional ndarray having a homogeneous data type.
	*
	* @example
	* const arr: Vector<number> = {
	*     'byteLength': 24,
	*     'BYTES_PER_ELEMENT': 8,
	*     'data': new Float64Array( [ 1, 2, 3 ] ),
	*     'dtype': 'float64',
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
	interface Vector<T> extends typedndarray<T> {
		/**
		* Number of dimensions.
		*/
		ndims: 1;

		/**
		* Array shape.
		*/
		shape: [ number ];

		/**
		* Array strides.
		*/
		strides: [ number ];

		/**
		* Sets an array element specified according to provided subscripts.
		*
		* ## Notes
		*
		* -   The number of provided subscripts should equal the number of dimensions.
		*
		* @param i - element index
		* @param value - value to set
		* @returns ndarray instance
		*/
		set( i: number, value: T ): Vector<T>;
	}

	/**
	* Interface describing a two-dimensional ndarray having a homogeneous data type.
	*
	* @example
	* const arr: Matrix<number> = {
	*     'byteLength': 24,
	*     'BYTES_PER_ELEMENT': 8,
	*     'data': new Float64Array( [ 1, 2, 3 ] ),
	*     'dtype': 'float64',
	*     'flags': {
	*         'ROW_MAJOR_CONTIGUOUS': true,
	*         'COLUMN_MAJOR_CONTIGUOUS': false
	*     },
	*     'length': 3,
	*     'ndims': 2,
	*     'offset': 0,
	*     'order': 'row-major',
	*     'shape': [ 1, 3 ],
	*     'strides': [ 3, 1 ],
	*     'get': function get( i ) {
	*         return this.data[ i ];
	*     },
	*     'set': function set( i, v ) {
	*         this.data[ i ] = v;
	*         return this;
	*     }
	* };
	*/
	interface Matrix<T> extends typedndarray<T> {
		/**
		* Number of dimensions.
		*/
		ndims: 2;

		/**
		* Array shape.
		*/
		shape: [ number, number ];

		/**
		* Array strides.
		*/
		strides: [ number, number ];

		/**
		* Sets an array element specified according to provided subscripts.
		*
		* ## Notes
		*
		* -   The number of provided subscripts should equal the number of dimensions.
		*
		* @param i - index along first dimension
		* @param j - index along second dimension
		* @param value - value to set
		* @returns ndarray instance
		*/
		set( i: number, j: number, value: T ): Matrix<T>;
	}

	/**
	* Mapping of data types to ndarray constructors.
	*/
	type DataTypeMap<T> = Remap<TypedDataTypeMap & { 'generic': genericndarray<T> }>;

	/**
	* Mapping of strictly typed ndarray data types to ndarray constructors.
	*/
	type TypedDataTypeMap = Remap<NumericDataTypeMap & BooleanDataTypeMap>;

	/**
	* Mapping of numeric data types (real or complex) to ndarray constructors.
	*/
	type NumericDataTypeMap = Remap<RealDataTypeMap &  ComplexFloatingPointDataTypeMap>;

	/**
	* Mapping of numeric (real or complex) data types and the "generic" data type to ndarray constructors.
	*/
	type NumericAndGenericDataTypeMap<T> = Remap<NumericDataTypeMap & { 'generic': genericndarray<T> }>;

	/**
	* Mapping of data types for real-valued typed arrays to ndarray constructors.
	*/
	type RealDataTypeMap = Remap<RealFloatingPointDataTypeMap & IntegerDataTypeMap>;

	/**
	* Mapping of data types for real-valued typed ndarrays and the "generic" data type to ndarray constructors.
	*/
	type RealAndGenericDataTypeMap<T> = Remap<RealDataTypeMap & { 'generic': genericndarray<T> }>;

	/**
	* Mapping of data types for complex number typed ndarrays to ndarray constructors.
	*/
	type RealFloatingPointDataTypeMap = { // eslint-disable-line @typescript-eslint/consistent-type-definitions
		'float64': float64ndarray;
		'float32': float32ndarray;
	};

	/**
	* Mapping of real floating point data types and the "generic" data type to ndarray constructors.
	*/
	type RealFloatingPointAndGenericDataTypeMap<T> = Remap<RealFloatingPointDataTypeMap & { 'generic': genericndarray<T> }>;

	/**
	* Mapping of data types for complex number typed ndarrays to ndarray constructors.
	*/
	type ComplexFloatingPointDataTypeMap = {  // eslint-disable-line @typescript-eslint/consistent-type-definitions
		'complex64': complex64ndarray;
		'complex128': complex128ndarray;
	};

	/**
	* Mapping of complex floating point data types and the "generic" data type to ndarray constructors.
	*/
	type ComplexFloatingPointAndGenericDataTypeMap<T> = Remap<ComplexFloatingPointDataTypeMap & { 'generic': genericndarray<T> }>;

	/**
	* Mapping of data types for floating-point (real or complex) typed ndarrays to ndarray constructors.
	*/
	type FloatingPointDataTypeMap = Remap<RealFloatingPointDataTypeMap & ComplexFloatingPointDataTypeMap>;

	/**
	* Mapping for floating point (real or complex) data types and the "generic" data type to ndarray constructors.
	*/
	type FloatingPointAndGenericDataTypeMap<T> = Remap<FloatingPointDataTypeMap & { 'generic': genericndarray<T> }>;

	/**
	* Mapping of integer data types to ndarray constructors.
	*/
	type IntegerDataTypeMap = Remap<SignedIntegerDataTypeMap & UnsignedIntegerDataTypeMap>;

	/**
	* Mapping of integer data types and the "generic" data type to ndarray constructors.
	*/
	type IntegerAndGenericDataTypeMap<T> = Remap<IntegerDataTypeMap & { 'generic': genericndarray<T> }>;

	/**
	* Mapping of signed integer data types to ndarray constructors.
	*/
	type SignedIntegerDataTypeMap = { // eslint-disable-line @typescript-eslint/consistent-type-definitions
		'int32': int32ndarray;
		'int16': int16ndarray;
		'int8': int8ndarray;
	};

	/**
	* Mapping of signed integer data types and the "generic" data type to ndarray constructors.
	*/
	type SignedIntegerAndGenericDataTypeMap<T> = Remap<SignedIntegerDataTypeMap & { 'generic': genericndarray<T> }>;

	/**
	* Mapping of unsigned integer data types to ndarray constructors.
	*/
	type UnsignedIntegerDataTypeMap = { // eslint-disable-line @typescript-eslint/consistent-type-definitions
		'uint32': uint32ndarray;
		'uint16': uint16ndarray;
		'uint8': uint8ndarray;
		'uint8c': uint8cndarray;
	};

	/**
	* Mapping of unsigned integer data types and the "generic" data type to ndarray constructors.
	*/
	type UnsignedIntegerAndGenericDataTypeMap<T> = Remap<UnsignedIntegerDataTypeMap & { 'generic': genericndarray<T> }>;

	/**
	* Mapping of data types for boolean typed ndarrays to ndarray constructors.
	*/
	type BooleanDataTypeMap = { // eslint-disable-line @typescript-eslint/consistent-type-definitions
		'bool': booleanndarray;
	};

	/**
	* Mapping of boolean data types and the "generic" data type to ndarray constructors.
	*/
	type BooleanAndGenericDataTypeMap<T> = Remap<BooleanDataTypeMap & { 'generic': genericndarray<T> }>;

	/**
	* Integer index ndarray kinds.
	*/
	type IndexArrayKinds = '' | 'cartesian' | 'linear';

	/**
	* Boolean index ndarray.
	*/
	type GenericBooleanIndexArray = genericndarray<boolean>;

	/**
	* Integer index ndarray.
	*/
	type GenericIntegerIndexArray = genericndarray<number>;

	/**
	* Generic index array.
	*/
	type GenericIndexArray = GenericBooleanIndexArray | GenericIntegerIndexArray;

	/**
	* Strictly typed index ndarray.
	*/
	type TypedIndexArray = uint8ndarray | booleanndarray | int32ndarray;

	/**
	* Integer index ndarray.
	*/
	type IntegerIndexArray = int32ndarray | GenericIntegerIndexArray;

	/**
	* Index ndarray.
	*/
	type IndexArray = GenericIndexArray | TypedIndexArray;

	/**
	* Cartesian index ndarray.
	*/
	type CartesianIndexArray = IntegerIndexArray;

	/**
	* Linear index ndarray.
	*/
	type LinearIndexArray = IntegerIndexArray;

	/**
	* Interface describing an ndarray index object.
	*/
	interface BaseArrayIndex {
		/**
		* Read-only property returning the data associated with an ndarray index object.
		*/
		data: IndexArray;

		/**
		* Read-only property returning the underlying index ndarray data type.
		*/
		dtype: DataType | null;

		/**
		* Read-only property returning the unique identifier associated with an ndarray index object.
		*/
		id: string;

		/**
		* Boolean indicating if an ndarray index object is actively cached.
		*/
		isCached: boolean;

		/**
		* Read-only property returning the ndarray index "kind".
		*/
		kind: IndexArrayKinds;

		/**
		* Read-only property returning the ndarray index type.
		*/
		type: 'int' | 'bool' | 'mask';

		/**
		* Serializes an ndarray index object to a string.
		*
		* @returns serialized string
		*/
		toString(): string;
	}

	/**
	* Interface describing a mask andrray index object.
	*/
	interface MaskArrayIndex extends BaseArrayIndex {
		/**
		* Read-only property returning the ndarray index type.
		*/
		type: 'mask';

		/**
		* Read-only property returning the ndarray index "kind".
		*/
		kind: '';

		/**
		* Read-only property returning the underlying index ndarray data type.
		*/
		dtype: Uint8DataType;

		/**
		* Read-only property returning the underlying ndarray data.
		*/
		data: uint8ndarray;
	}

	/**
	* Interface describing a boolean ndarray index object.
	*/
	interface BooleanArrayIndex extends BaseArrayIndex {
		/**
		* Read-only property returning the ndarray index type.
		*/
		type: 'bool';

		/**
		* Read-only property returning the ndarray index "kind".
		*/
		kind: '';

		/**
		* Read-only property returning the underlying index ndarray data type.
		*/
		dtype: BoolDataType;

		/**
		* Read-only property returning the underlying ndarray data.
		*/
		data: booleanndarray;
	}

	/**
	* Interface describing an integer ndarray index object.
	*/
	interface Int32ArrayIndex extends BaseArrayIndex {
		/**
		* Read-only property returning the ndarray index type.
		*/
		type: 'int';

		/**
		* Read-only property returning the ndarray index "kind".
		*/
		kind: IndexArrayKinds;

		/**
		* Read-only property returning the underlying index ndarray data type.
		*/
		dtype: Int32DataType;

		/**
		* Read-only property returning the underlying ndarray data.
		*/
		data: int32ndarray;
	}

	/**
	* Interface describing a Cartesian ndarray index object.
	*/
	interface CartesianInt32ArrayIndex extends Int32ArrayIndex {
		/**
		* Read-only property returning the ndarray index "kind".
		*/
		kind: 'cartesian';
	}

	/**
	* Interface describing a linear ndarray index object.
	*/
	interface LinearInt32ArrayIndex extends Int32ArrayIndex {
		/**
		* Read-only property returning the ndarray index "kind".
		*/
		kind: 'linear';
	}

	/**
	* Interface describing a "generic" boolean ndarray index object.
	*/
	interface GenericBooleanArrayIndex extends BaseArrayIndex {
		/**
		* Read-only property returning the ndarray index type.
		*/
		type: 'bool';

		/**
		* Read-only property returning the ndarray index "kind".
		*/
		kind: '';

		/**
		* Read-only property returning the underlying index ndarray data type.
		*/
		dtype: GenericDataType;

		/**
		* Read-only property returning the underlying ndarray data.
		*/
		data: GenericBooleanIndexArray;
	}

	/**
	* Interface describing a "generic" integer ndarray index object.
	*/
	interface GenericIntegerArrayIndex extends BaseArrayIndex {
		/**
		* Read-only property returning the ndarray index type.
		*/
		type: 'int';

		/**
		* Read-only property returning the ndarray index "kind".
		*/
		kind: IndexArrayKinds;

		/**
		* Read-only property returning the underlying index ndarray data type.
		*/
		dtype: GenericDataType;

		/**
		* Read-only property returning the underlying ndarray data.
		*/
		data: GenericIntegerIndexArray;
	}

	/**
	* Interface describing a "generic" Cartesian ndarray index object.
	*/
	interface CartesianGenericArrayIndex extends GenericIntegerArrayIndex {
		/**
		* Read-only property returning the ndarray index "kind".
		*/
		kind: 'cartesian';
	}

	/**
	* Interface describing a "generic" linear ndarray index object.
	*/
	interface LinearGenericArrayIndex extends GenericIntegerArrayIndex {
		/**
		* Read-only property returning the ndarray index "kind".
		*/
		kind: 'linear';
	}

	/**
	* ndarray index object.
	*/
	type ndindex = MaskArrayIndex | BooleanArrayIndex | Int32ArrayIndex | GenericBooleanArrayIndex | GenericIntegerArrayIndex | CartesianInt32ArrayIndex | CartesianGenericArrayIndex | LinearInt32ArrayIndex | LinearGenericArrayIndex;

	/**
	* Interface describing an object containing index ndarray data.
	*/
	interface BaseIndexArrayObject {
		/**
		* An ndarray view of the underlying ndarray data associated with an index ndarray.
		*/
		data: IndexArray;

		/**
		* The index ndarray "kind".
		*/
		kind: IndexArrayKinds;

		/**
		* The type of index ndarray.
		*/
		type: 'int' | 'bool' | 'mask';

		/**
		* The data type of the underlying ndarray.
		*/
		dtype: DataType | null;
	}

	/**
	* Interface describing an object containing mask index ndarray data.
	*/
	interface MaskIndexArrayObject extends BaseIndexArrayObject {
		/**
		* An ndarray view of the underlying ndarray data associated with an index ndarray.
		*/
		data: uint8ndarray;

		/**
		* The index ndarray "kind".
		*/
		kind: '';

		/**
		* The type of index ndarray.
		*/
		type: 'mask';

		/**
		* The data type of the underlying ndarray.
		*/
		dtype: Uint8DataType;
	}

	/**
	* Interface describing an object containing boolean index ndarray data.
	*/
	interface BooleanIndexArrayObject extends BaseIndexArrayObject {
		/**
		* An ndarray view of the underlying ndarray data associated with an index ndarray.
		*/
		data: booleanndarray;

		/**
		* The index ndarray "kind".
		*/
		kind: '';

		/**
		* The type of index ndarray.
		*/
		type: 'bool';

		/**
		* The data type of the underlying ndarray.
		*/
		dtype: BoolDataType;
	}

	/**
	* Interface describing an object containing integer index ndarray data.
	*/
	interface Int32IndexArrayObject extends BaseIndexArrayObject {
		/**
		* An ndarray view of the underlying ndarray data associated with an index ndarray.
		*/
		data: int32ndarray;

		/**
		* The index ndarray "kind".
		*/
		kind: IndexArrayKinds;

		/**
		* The type of index ndarray.
		*/
		type: 'int';

		/**
		* The data type of the underlying ndarray.
		*/
		dtype: Int32DataType;
	}

	/**
	* Interface describing an object containing Cartesian index ndarray data.
	*/
	interface CartesianInt32IndexArrayObject extends Int32IndexArrayObject {
		/**
		* The index ndarray "kind".
		*/
		kind: 'cartesian';
	}

	/**
	* Interface describing an object containing linear index ndarray data.
	*/
	interface LinearInt32IndexArrayObject extends Int32IndexArrayObject {
		/**
		* The index ndarray "kind".
		*/
		kind: 'linear';
	}

	/**
	* Interface describing an object containing "generic" integer index ndarray data.
	*/
	interface GenericIntegerIndexArrayObject extends BaseIndexArrayObject {
		/**
		* An ndarray view of the underlying ndarray data associated with an index ndarray.
		*/
		data: GenericIntegerIndexArray;

		/**
		* The index ndarray "kind".
		*/
		kind: IndexArrayKinds;

		/**
		* The type of index ndarray.
		*/
		type: 'int';

		/**
		* The data type of the underlying ndarray.
		*/
		dtype: GenericDataType;
	}

	/**
	* Interface describing an object containing "generic" Cartesian index ndarray data.
	*/
	interface CartesianGenericIndexArrayObject extends GenericIntegerIndexArrayObject {
		/**
		* The index ndarray "kind".
		*/
		kind: 'cartesian';
	}

	/**
	* Interface describing an object containing "generic" linear index ndarray data.
	*/
	interface LinearGenericIndexArrayObject extends GenericIntegerIndexArrayObject {
		/**
		* The index ndarray "kind".
		*/
		kind: 'linear';
	}

	/**
	* Interface describing an object containing "generic" boolean index ndarray data.
	*/
	interface GenericBooleanIndexArrayObject extends BaseIndexArrayObject {
		/**
		* An ndarray view of the underlying ndarray data associated with an index ndarray.
		*/
		data: GenericBooleanIndexArray;

		/**
		* The index ndarray "kind".
		*/
		kind: '';

		/**
		* The type of index ndarray.
		*/
		type: 'bool';

		/**
		* The data type of the underlying ndarray.
		*/
		dtype: GenericDataType;
	}

	/**
	* Index ndarray data object.
	*/
	type ndindexObject = MaskIndexArrayObject | BooleanIndexArrayObject | Int32IndexArrayObject | GenericBooleanIndexArrayObject | GenericIntegerIndexArrayObject | CartesianInt32IndexArrayObject | CartesianGenericIndexArrayObject | LinearInt32IndexArrayObject | LinearGenericIndexArrayObject;
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
	type PropertyDescriptor = DataPropertyDescriptor | AccessorPropertyDescriptor;

	/**
	* An object property name.
	*
	* @example
	* const prop: PropertyName = 'foo';
	*/
	type PropertyName = string | symbol;
}

/**
* Module containing definitions for complex numbers.
*
* @example
* import * as complex from `@stdlib/types/complex`;
*
* const x: complex.ComplexLike = { 're': 5.0, 'im': 3.0 };
*/
declare module '@stdlib/types/complex' {
	/**
	* Complex number data type.
	*/
	type ComplexFloatingPointDataType = 'complex64' | 'complex128';

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
	import { ArrayLike } from '@stdlib/types/array'; // eslint-disable-line no-duplicate-imports

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

/**
* Module containing type utilities.
*
* @example
* import * as utilities from `@stdlib/types/utilities`;
*/
declare module '@stdlib/types/utilities' {
	/**
	* Override the properties of a first type with the properties of a second type.
	*/
	type Override<T, U> = Omit<T, keyof U> & U;

	/**
	* Remap all properties of a type for better Intellisense.
	*/
	type Remap<T> = {
		[K in keyof T]: T[K];
	} & {};
}

/**
* Module containing definitions for slices.
*
* @example
* import * as slice from `@stdlib/types/slice`;
*
* const s: slice.Slice = { 'start': 0, 'stop': 10, 'step': 1 };
*/
declare module '@stdlib/types/slice' {
	import { ArrayLike } from '@stdlib/types/array'; // eslint-disable-line no-duplicate-imports

	/**
	* A slice object.
	*
	* @example
	* const s: Slice = { 'start': 0, 'stop': 10, 'step': 1 };
	*/
	interface Slice<T = number | null, U = number | null, V = number | null> {
		/**
		* Starting index (inclusive).
		*/
		start: T;

		/**
		* Ending index (exclusive).
		*/
		stop: U;

		/**
		* Index increment.
		*/
		step: V;
	}

	/**
	* A multi-slice object.
	*
	* @example
	* const s: MultiSlice = { 'ndims': 1, 'data': [ 10 ] };
	*/
	interface MultiSlice {
		/**
		* Number of slice dimensions.
		*/
		ndims: number;

		/**
		* Slice data.
		*/
		data: ArrayLike<Slice | number | null>;
	}
}

/**
* Module containing definitions for WebAssembly.
*
* @example
* import * as wasm from `@stdlib/types/wasm`;
*/
declare module '@stdlib/types/wasm' {
	import { Collection, AccessorArrayLike } from '@stdlib/types/array'; // eslint-disable-line no-duplicate-imports

	/**
	* WebAssembly memory interface.
	*/
	interface Memory {
		/**
		* Underlying `ArrayBuffer` (or `SharedArrayBuffer`) associated with a memory instance.
		*/
		buffer: ArrayBuffer;

		/**
		* Increases the size of the memory instance by a specified number of WebAssembly pages (i.e., 64KiB).
		*
		* ## Notes
		*
		* -   Upon increasing the size, the previous `ArrayBuffer` is detached, thus invalidating any typed arrays which were views over the previous `ArrayBuffer`.
		* -   Detachment means that the previous `ArrayBuffer` byte length becomes zero, and it no longer has bytes accessible to JavaScript.
		* -   `ArrayBuffer` detachment applies even when `delta` is zero.
		* -   Detachment only applies for non-shared memory instances. For a shared memory instance, the initial buffer (which is a `SharedArrayBuffer`) will not become detached and, instead, its length will not be updated.
		* -   Accesses to the `buffer` property after growing a `SharedArrayBuffer` will yield a larger `SharedArrayBuffer` which may access a larger span of memory than the buffer before growing memory.
		* -   Every `SharedArrayBuffer` accessed via the `buffer` property will always refer to the start of the same memory address range and thus manipulate the same data.
		*
		* @param delta - number of WebAssembly pages (i.e., 64KiB) by which to grow the underlying memory
		* @returns size of the previous `ArrayBuffer` (or `SharedArrayBuffer`)
		*/
		grow( delta: number ): number;
	}

	/**
	* WebAssembly module wrapper interface.
	*/
	interface ModuleWrapper {
		/**
		* WebAssembly binary code.
		*/
		binary: Uint8Array;

		/**
		* WebAssembly memory.
		*/
		memory: Memory | null;

		/**
		* WebAssembly memory buffer as a Uint8Array.
		*/
		buffer: Uint8Array | null;

		/**
		* WebAssembly memory buffer as a DataView.
		*/
		view: DataView | null;

		/**
		* "Raw" WebAssembly module exports.
		*/
		exports: Object | null;

		/**
		* Asynchronously initializes a WebAssembly module instance.
		*
		* @returns promise which resolves upon initializing a WebAssembly module instance
		*/
		initialize(): Promise<ModuleWrapper>;

		/**
		* Asynchronously initializes a WebAssembly module instance.
		*
		* @param clbk - callback to invoke upon initializing a WebAssembly module
		*/
		initializeAsync( clbk: ( error: Error | null, mod?: ModuleWrapper ) => void ): void;

		/**
		* Synchronously initializes a WebAssembly module instance.
		*
		* @returns module wrapper instance
		*/
		initializeSync(): ModuleWrapper;

		/**
		* Reallocates the underlying WebAssembly memory instance to a specified number of bytes.
		*
		* ## Notes
		*
		* -   WebAssembly memory can only **grow**, not shrink. Hence, if provided a number of bytes which is less than or equal to the size of the current memory, the function does nothing.
		* -   When non-shared memory is resized, the underlying the `ArrayBuffer` is detached, consequently invalidating any associated typed array views. Before resizing non-shared memory, ensure that associated typed array views no longer need byte access and can be garbage collected.
		*
		* @param nbytes - memory size (in bytes)
		* @returns boolean indicating whether the resize operation was successful
		*/
		realloc( nbytes: number ): boolean;

		/**
		* Returns a boolean indicating whether the underlying WebAssembly memory instance has the capacity to store a provided list of values starting from a specified byte offset.
		*
		* @param byteOffset - byte offset at which to start writing values
		* @param values - input array containing values to write
		* @returns boolean indicating whether the underlying WebAssembly memory instance has enough capacity
		*/
		hasCapacity( byteOffset: number, values: Collection | AccessorArrayLike<any> ): boolean;

		/**
		* Returns a boolean indicating whether a provided list of values is a view of the underlying memory of the WebAssembly module.
		*
		* @param values - input array
		* @returns boolean indicating whether the list is a memory view
		*/
		isView( values: Collection | AccessorArrayLike<any> ): boolean;

		/**
		* Writes values to the underlying WebAssembly memory instance.
		*
		* ## Notes
		*
		* -   The function infers element size (i.e., number of bytes per element) from the data type of the input array. For example, if provided a `Float32Array`, the function writes each element as a single-precision floating-point number to the underlying WebAssembly memory instance.
		* -   In order to write elements as a different data type, you need to perform an explicit cast **before** calling this method. For example, in order to write single-precision floating-point numbers contained in a `Float32Array` as signed 32-bit integers, you must first convert the `Float32Array` to an `Int32Array` before passing the values to this method.
		* -   If provided an array having an unknown or "generic" data type, elements are written as double-precision floating-point numbers.
		*
		* @param byteOffset - byte offset at which to start writing values
		* @param values - input array containing values to write
		* @returns module wrapper instance
		*/
		write( byteOffset: number, values: Collection | AccessorArrayLike<any> ): ModuleWrapper;

		/**
		* Reads values from the underlying WebAssembly memory instance.
		*
		* ## Notes
		*
		* -   The function infers element size (i.e., number of bytes per element) from the data type of the output array. For example, if provided a `Float32Array`, the function reads each element as a single-precision floating-point number from the underlying WebAssembly memory instance.
		* -   In order to read elements as a different data type, you need to perform an explicit cast **after** calling this method. For example, in order to read single-precision floating-point numbers contained in a `Float32Array` as signed 32-bit integers, you must convert the `Float32Array` to an `Int32Array` after reading memory values using this method.
		* -   If provided an output array having an unknown or "generic" data type, elements are read as double-precision floating-point numbers.
		*
		* @param byteOffset - byte offset at which to start reading values
		* @param out - output array
		* @returns module wrapper instance
		*/
		read( byteOffset: number, out: Collection | AccessorArrayLike<any> ): ModuleWrapper;
	}
}
