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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { FloatingPointDataType as DataType, ArrayLike, FloatOrComplexTypedArray, Complex64Array, Complex128Array } from '@stdlib/types/array';
import { ComplexLike, Complex64, Complex128 } from '@stdlib/types/complex';

/**
* Interface describing function options.
*/
interface BaseOptions {
	/**
	* Boolean indicating whether to include the `stop` value in the output array.
	*
	* ## Notes
	*
	* -   If `false`, the function generates `length + 1` linearly spaced values over the interval `[start, stop]` and only writes `length` values to the output array, thus excluding `stop` from the output array. Accordingly, for a fixed `length`, the spacing between adjacent values in the output array changes depending on the value of `endpoint`.
	*/
	endpoint?: boolean;
}

/**
* Interface describing function options.
*/
interface Options extends BaseOptions {
	/**
	* Output array data type.
	*
	* ## Notes
	*
	* -   Must be a floating-point data type or `'generic'`.
	* -   If both `start` and `stop` are the same type (either `'float64'`, `'complex64'`, or `'complex128'`), the default output array data type is the same type as the input values (either `'float64'`, `'complex64'`, or `'complex128'`, respectively). Otherwise, the default output array data type is `'complex128'`.
	*/
	dtype?: DataType;
}

/**
* Interface describing function options.
*/
interface Float64Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'float64';
}

/**
* Interface describing function options.
*/
interface Float32Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'float32';
}

/**
* Interface describing function options.
*/
interface Complex128Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'complex128';
}

/**
* Interface describing function options.
*/
interface Complex64Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'complex64';
}

/**
* Interface describing function options.
*/
interface GenericOptions extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'generic';
}

/**
* Interface describing `linspace`.
*/
interface Linspace {
	/**
	* Generates a linearly spaced array over a specified interval.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param len - length of output array
	* @param options - function options
	* @param options.dtype - output array data type
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns linearly spaced array
	*
	* @example
	* var arr = linspace( 0.0, 100.0, 6 );
	* // returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
	*
	* @example
	* var opts = {
	*     'dtype': 'float64'
	* };
	* var arr = linspace( 0.0, 100.0, 6, opts );
	* // returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
	*/
	( start: number, stop: number, len: number, options?: BaseOptions | Float64Options ): Float64Array;

	/**
	* Generates a linearly spaced array over a specified interval.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param len - length of output array
	* @param options - function options
	* @param options.dtype - output array data type
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns linearly spaced array
	*
	* @example
	* var opts = {
	*     'dtype': 'float32'
	* };
	* var arr = linspace( 0.0, 100.0, 6 );
	* // returns <Float32Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
	*/
	( start: number, stop: number, len: number, options: Float32Options ): Float32Array;

	/**
	* Generates a linearly spaced array over a specified interval.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param len - length of output array
	* @param options - function options
	* @param options.dtype - output array data type
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns linearly spaced array
	*
	* @example
	* var opts = {
	*     'dtype': 'generic'
	* };
	* var arr = linspace( 0.0, 100.0, 6 );
	* // returns [ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
	*/
	( start: number, stop: number, len: number, options: GenericOptions ): Array<number>;

	/**
	* Generates a linearly spaced array over a specified interval.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param len - length of output array
	* @param options - function options
	* @param options.dtype - output array data type
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns linearly spaced array
	*
	* @example
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* var start = new Complex64( 0.0, 0.0 );
	* var stop = new Complex64( 100.0, 10.0 );
	*
	* var arr = linspace( start, stop, 6 );
	* // returns <Complex64Array>
	*
	* @example
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* var start = new Complex64( 0.0, 0.0 );
	* var stop = new Complex64( 100.0, 10.0 );
	*
	* var opts = {
	*     'dtype': 'complex64'
	* };
	* var arr = linspace( start, stop, 6, opts );
	* // returns <Complex64Array>
	*/
	( start: Complex64, stop: Complex64, len: number, options?: Complex64Options ): Complex64Array;

	/**
	* Generates a linearly spaced array over a specified interval.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param len - length of output array
	* @param options - function options
	* @param options.dtype - output array data type
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns linearly spaced array
	*
	* @example
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* var start = new Complex64( 0.0, 0.0 );
	* var stop = new Complex64( 100.0, 10.0 );
	*
	* var opts = {
	*     'dtype': 'complex64'
	* };
	* var arr = linspace( start, stop, 6, opts );
	* // returns <Complex64Array>
	*/
	( start: number | ComplexLike, stop: number | ComplexLike, len: number, options: Complex64Options ): Complex64Array;

	/**
	* Generates a linearly spaced array over a specified interval.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param len - length of output array
	* @param options - function options
	* @param options.dtype - output array data type
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns linearly spaced array
	*
	* @example
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* var start = new Complex64( 0.0, 0.0 );
	* var stop = new Complex64( 100.0, 10.0 );
	*
	* var opts = {
	*     'dtype': 'generic'
	* };
	* var arr = linspace( start, stop, 6, opts );
	* // returns [...]
	*/
	( start: Complex64, stop: Complex64, len: number, options: GenericOptions ): Array<Complex64>;

	/**
	* Generates a linearly spaced array over a specified interval.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param len - length of output array
	* @param options - function options
	* @param options.dtype - output array data type
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns linearly spaced array
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	*
	* var start = new Complex128( 0.0, 0.0 );
	* var stop = new Complex128( 100.0, 10.0 );
	*
	* var opts = {
	*     'dtype': 'generic'
	* };
	* var arr = linspace( start, stop, 6, opts );
	* // returns [...]
	*/
	( start: ComplexLike, stop: number | ComplexLike, len: number, options: GenericOptions ): Array<Complex128>;

	/**
	* Generates a linearly spaced array over a specified interval.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param len - length of output array
	* @param options - function options
	* @param options.dtype - output array data type
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns linearly spaced array
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	*
	* var start = new Complex128( 0.0, 0.0 );
	* var stop = new Complex128( 100.0, 10.0 );
	*
	* var opts = {
	*     'dtype': 'generic'
	* };
	* var arr = linspace( start, stop, 6, opts );
	* // returns [...]
	*/
	( start: number | ComplexLike, stop: ComplexLike, len: number, options: GenericOptions ): Array<Complex128>;

	/**
	* Generates a linearly spaced array over a specified interval.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param len - length of output array
	* @param options - function options
	* @param options.dtype - output array data type
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns linearly spaced array
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	*
	* var start = new Complex128( 0.0, 0.0 );
	* var stop = 100.0;
	*
	* var arr = linspace( start, stop, 6 );
	* // returns <Complex128Array>
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	*
	* var start = new Complex128( 0.0, 0.0 );
	* var stop = 100.0;
	*
	* var opts = {
	*     'dtype': 'complex128'
	* };
	* var arr = linspace( start, stop, 6, opts );
	* // returns <Complex128Array>
	*/
	( start: ComplexLike, stop: number | ComplexLike, len: number, options?: Complex128Options ): Complex128Array;

	/**
	* Generates a linearly spaced array over a specified interval.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param len - length of output array
	* @param options - function options
	* @param options.dtype - output array data type
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns linearly spaced array
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	*
	* var start = 0.0;
	* var stop = new Complex128( 100.0, 10.0 );
	*
	* var arr = linspace( start, stop, 6 );
	* // returns <Complex128Array>
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	*
	* var start = 0.0;
	* var stop = new Complex128( 100.0, 10.0 );
	*
	* var opts = {
	*     'dtype': 'complex128'
	* };
	* var arr = linspace( start, stop, 6, opts );
	* // returns <Complex128Array>
	*/
	( start: number | ComplexLike, stop: ComplexLike, len: number, options?: Complex128Options ): Complex128Array;

	/**
	* Generates a linearly spaced array over a specified interval.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param len - length of output array
	* @param options - function options
	* @param options.dtype - output array data type
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns linearly spaced array
	*
	* @example
	* var start = 0.0;
	* var stop = 100.0;
	*
	* var opts = {
	*     'dtype': 'complex128'
	* };
	* var arr = linspace( start, stop, 6, opts );
	* // returns <Complex128Array>
	*/
	( start: number, stop: number, len: number, options: Complex128Options ): Complex128Array;

	/**
	* Generates a linearly spaced array over a specified interval.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param len - length of output array
	* @param options - function options
	* @param options.dtype - output array data type
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns linearly spaced array
	*
	* @example
	* var arr = linspace( 0.0, 100.0, 6 );
	* // returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
	*/
	( start: number | ComplexLike, stop: number | ComplexLike, len: number, options?: Options ): FloatOrComplexTypedArray;

	/**
	* Generates a linearly spaced sequence over a specified interval and assigns results to a provided output array.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param out - output array
	* @param options - function options
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var out = new Float64Array( 6 );
	* var arr = linspace.assign( 0.0, 100.0, out );
	* // returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
	*/
	assign( start: number, stop: number, out: Float64Array, options?: BaseOptions ): Float64Array;

	/**
	* Generates a linearly spaced sequence over a specified interval and assigns results to a provided output array.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param out - output array
	* @param options - function options
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns output array
	*
	* @example
	* var Float32Array = require( `@stdlib/array/float32` );
	*
	* var out = new Float32Array( 6 );
	* var arr = linspace.assign( 0.0, 100.0, out );
	* // returns <Float32Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
	*/
	assign( start: number, stop: number, out: Float32Array, options?: BaseOptions ): Float32Array;

	/**
	* Generates a linearly spaced sequence over a specified interval and assigns results to a provided output array.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param out - output array
	* @param options - function options
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns output array
	*
	* @example
	* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	* var arr = linspace.assign( 0.0, 100.0, out );
	* // returns [ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
	*/
	assign( start: number, stop: number, out: Array<number>, options?: BaseOptions ): Array<number>;

	/**
	* Generates a linearly spaced sequence over a specified interval and assigns results to a provided output array.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param out - output array
	* @param options - function options
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns output array
	*
	* @example
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* var start = new Complex64( 0.0, 0.0 );
	* var stop = new Complex64( 100.0, 10.0 );
	*
	* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	* var arr = linspace.assign( start, stop, out );
	* // returns [...]
	*/
	assign( start: Complex64, stop: Complex64, out: Array<any>, options?: BaseOptions ): Array<Complex64>;

	/**
	* Generates a linearly spaced sequence over a specified interval and assigns results to a provided output array.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param out - output array
	* @param options - function options
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns output array
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	*
	* var start = new Complex128( 0.0, 0.0 );
	* var stop = new Complex128( 100.0, 10.0 );
	*
	* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	* var arr = linspace.assign( start, stop, out );
	* // returns [...]
	*/
	assign( start: ComplexLike, stop: number | ComplexLike, out: Array<any>, options?: BaseOptions ): Array<Complex128>;

	/**
	* Generates a linearly spaced sequence over a specified interval and assigns results to a provided output array.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param out - output array
	* @param options - function options
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns output array
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	*
	* var start = new Complex128( 0.0, 0.0 );
	* var stop = new Complex128( 100.0, 10.0 );
	*
	* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	* var arr = linspace.assign( start, stop, out );
	* // returns [...]
	*/
	assign( start: number | ComplexLike, stop: ComplexLike, out: Array<any>, options?: BaseOptions ): Array<Complex128>;

	/**
	* Generates a linearly spaced sequence over a specified interval and assigns results to a provided output array.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param out - output array
	* @param options - function options
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns output array
	*
	* @example
	* var Complex128Array = require( `@stdlib/array/complex128` );
	*
	* var out = new Complex128Array( 6 );
	* var arr = linspace.assign( 0.0, 100.0, out );
	* // returns <Complex128Array>
	*/
	assign( start: number | ComplexLike, stop: number | ComplexLike, out: Complex128Array, options?: BaseOptions ): Complex128Array;

	/**
	* Generates a linearly spaced sequence over a specified interval and assigns results to a provided output array.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param out - output array
	* @param options - function options
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns output array
	*
	* @example
	* var Complex64Array = require( `@stdlib/array/complex64` );
	*
	* var out = new Complex64Array( 6 );
	* var arr = linspace.assign( 0.0, 100.0, out );
	* // returns <Complex64Array>
	*/
	assign( start: number | ComplexLike, stop: number | ComplexLike, out: Complex64Array, options?: BaseOptions ): Complex64Array;

	/**
	* Generates a linearly spaced sequence over a specified interval and assigns results to a provided output array.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param out - output array
	* @param options - function options
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var out = new Float64Array( 6 );
	* var arr = linspace.assign( 0.0, 100.0, out );
	* // returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
	*/
	assign( start: number, stop: number, out: ArrayLike<any>, options?: BaseOptions ): ArrayLike<number>;

	/**
	* Generates a linearly spaced sequence over a specified interval and assigns results to a provided output array.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param out - output array
	* @param options - function options
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* var start = new Complex64( 0.0, 0.0 );
	* var stop = new Complex64( 100.0, 10.0 );
	*
	* var out = [ 0, 0, 0, 0, 0, 0 ];
	* var arr = linspace.assign( start, stop, out );
	* // returns [...]
	*/
	assign( start: ComplexLike, stop: number | ComplexLike, out: ArrayLike<any>, options?: BaseOptions ): ArrayLike<ComplexLike>;

	/**
	* Generates a linearly spaced sequence over a specified interval and assigns results to a provided output array.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param out - output array
	* @param options - function options
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* var start = new Complex64( 0.0, 0.0 );
	* var stop = new Complex64( 100.0, 10.0 );
	*
	* var out = [ 0, 0, 0, 0, 0, 0 ];
	* var arr = linspace.assign( start, stop, out );
	* // returns [...]
	*/
	assign( start: number | ComplexLike, stop: ComplexLike, out: ArrayLike<any>, options?: BaseOptions ): ArrayLike<ComplexLike>;
}

/**
* Generates a linearly spaced array over a specified interval.
*
* @param start - start of interval
* @param stop - end of interval
* @param len - length of output array
* @param options - function options
* @param options.dtype - output array data type
* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
* @returns linearly spaced array
*
* @example
* var arr = linspace( 0.0, 100.0, 6 );
* // returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* var arr = new Float32Array( 6 );
* var out = linspace.assign( 0.0, 100.0, arr );
* // returns <Float32Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
*
* var bool = ( arr === out );
* // returns true
*/
declare var linspace: Linspace;


// EXPORTS //

export = linspace;
