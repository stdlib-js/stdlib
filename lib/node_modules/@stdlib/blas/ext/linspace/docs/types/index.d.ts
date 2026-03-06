/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import { FloatingPointAndGenericDataType as DataType, boolndarray, realcomplexndarray, realndarray, complexndarray, genericndarray, Mode, Order } from '@stdlib/types/ndarray';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Start of interval.
*/
type Start = number | ComplexLike | realcomplexndarray | genericndarray<number|ComplexLike>;

/**
* Start of interval.
*/
type RealStart = number | realndarray | genericndarray<number>;

/**
* Start of interval.
*/
type ComplexStart = ComplexLike | complexndarray | genericndarray<ComplexLike>;

/**
* End of interval.
*/
type Stop = number | ComplexLike | realcomplexndarray | genericndarray<number|ComplexLike>;

/**
* End of interval.
*/
type RealStop = number | realndarray | genericndarray<number>;

/**
* End of interval.
*/
type ComplexStop = ComplexLike | complexndarray | genericndarray<ComplexLike>;

/**
* Specifies whether to include the end of the interval when writing values to the output ndarray.
*/
type Endpoint = boolean | boolndarray | genericndarray<boolean>;

/**
* Output array.
*/
type OutputArray = realcomplexndarray | genericndarray<number|ComplexLike>;

/**
* Output array.
*/
type RealOutputArray = realndarray | genericndarray<number>;

/**
* Output array.
*/
type ComplexOutputArray = complexndarray | genericndarray<ComplexLike>;

/**
* Interface defining "base" options.
*/
interface BaseOptions {
	/**
	* List of dimensions over which to perform operation.
	*/
	dims?: ArrayLike<number>;
}

/**
* Interface defining options.
*/
interface Options extends BaseOptions {
	/**
	* Array order (either 'row-major' (C-style) or 'column-major' (Fortran-style)).
	*/
	order?: Order;

	/**
	* Specifies how to handle a linear index which exceeds array dimensions (default: 'throw').
	*/
	mode?: Mode;

	/**
	* Specifies how to handle subscripts which exceed array dimensions on a per dimension basis (default: ['throw']).
	*/
	submode?: Array<Mode>;
}

/**
* Interface defining options.
*/
interface OptionsWithDataType extends Options {
	/**
	* Output ndarray data type.
	*/
	dtype: DataType;
}

/**
* Interface for performing an operation on an ndarray.
*/
interface Linspace {
	/**
	* Returns a new ndarray filled with linearly spaced values over a specified interval along one or more ndarray dimensions.
	*
	* @param shape - array shape
	* @param start - start of interval
	* @param stop - end of interval
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	*
	* var out = linspace( [ 2, 4 ], 0.0, 3.0, {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var arr = ndarray2array( out );
	* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
	*/
	<T extends RealStart = RealStart, U extends RealStop = RealStop>( shape: number | ArrayLike<number>, start: T, stop: U, options: OptionsWithDataType ): OutputArray; // TODO: we lose some type specificity here. We could likely improve specificity here by using type maps

	/**
	* Returns a new ndarray filled with linearly spaced values over a specified interval along one or more ndarray dimensions.
	*
	* @param shape - array shape
	* @param start - start of interval
	* @param stop - end of interval
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	*
	* var out = linspace( [ 2, 4 ], 0.0, 3.0, {} );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( out );
	* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
	*/
	<T extends RealStart = RealStart, U extends RealStop = RealStop>( shape: number | ArrayLike<number>, start: T, stop: U, options: Options ): RealOutputArray; // NOTE: we lose some type specificity here, as the output ndarray data type is determined according to type promotion rules

	/**
	* Returns a new ndarray filled with linearly spaced values over a specified interval along one or more ndarray dimensions.
	*
	* @param shape - array shape
	* @param start - start of interval
	* @param stop - end of interval
	* @param endpoint - specifies whether to include the end of the interval when writing values to the output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	*
	* var out = linspace( [ 2, 4 ], 0.0, 3.0, true, {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var arr = ndarray2array( out );
	* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
	*/
	<T extends RealStart = RealStart, U extends RealStop = RealStop, V extends Endpoint = Endpoint>( shape: number | ArrayLike<number>, start: T, stop: U, endpoint: V, options: OptionsWithDataType ): OutputArray; // TODO: we lose some type specificity here. We could likely improve specificity here by using type maps

	/**
	* Returns a new ndarray filled with linearly spaced values over a specified interval along one or more ndarray dimensions.
	*
	* @param shape - array shape
	* @param start - start of interval
	* @param stop - end of interval
	* @param endpoint - specifies whether to include the end of the interval when writing values to the output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	*
	* var out = linspace( [ 2, 4 ], 0.0, 3.0 );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( out );
	* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
	*/
	<T extends RealStart = RealStart, U extends RealStop = RealStop, V extends Endpoint = Endpoint>( shape: number | ArrayLike<number>, start: T, stop: U, endpoint?: V, options?: Options ): RealOutputArray; // NOTE: we lose some type specificity here, as the output ndarray data type is determined according to type promotion rules

	/**
	* Returns a new ndarray filled with linearly spaced values over a specified interval along one or more ndarray dimensions.
	*
	* @param shape - array shape
	* @param start - start of interval
	* @param stop - end of interval
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	*
	* var out = linspace( [ 2, 4 ], 0.0, 3.0, {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var arr = ndarray2array( out );
	* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
	*/
	<T extends Start = Start, U extends Stop = Stop>( shape: number | ArrayLike<number>, start: T, stop: U, options: OptionsWithDataType ): ComplexOutputArray; // TODO: we lose some type specificity here. We could likely improve specificity here by using type maps

	/**
	* Returns a new ndarray filled with linearly spaced values over a specified interval along one or more ndarray dimensions.
	*
	* @param shape - array shape
	* @param start - start of interval
	* @param stop - end of interval
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	*
	* var out = linspace( [ 2, 4 ], 0.0, 3.0, {} );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( out );
	* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
	*/
	<T extends Start = Start, U extends Stop = Stop>( shape: number | ArrayLike<number>, start: T, stop: U, options: Options ): ComplexOutputArray; /* eslint-disable-line @typescript-eslint/unified-signatures */ // NOTE: we lose some type specificity here, as the output ndarray data type is determined according to type promotion rules

	/**
	* Returns a new ndarray filled with linearly spaced values over a specified interval along one or more ndarray dimensions.
	*
	* @param shape - array shape
	* @param start - start of interval
	* @param stop - end of interval
	* @param endpoint - specifies whether to include the end of the interval when writing values to the output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	*
	* var out = linspace( [ 2, 4 ], 0.0, 3.0, true, {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var arr = ndarray2array( out );
	* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
	*/
	<T extends Start = Start, U extends Stop = Stop, V extends Endpoint = Endpoint>( shape: number | ArrayLike<number>, start: T, stop: U, endpoint: V, options: OptionsWithDataType ): ComplexOutputArray; // TODO: we lose some type specificity here. We could likely improve specificity here by using type maps

	/**
	* Returns a new ndarray filled with linearly spaced values over a specified interval along one or more ndarray dimensions.
	*
	* @param shape - array shape
	* @param start - start of interval
	* @param stop - end of interval
	* @param endpoint - specifies whether to include the end of the interval when writing values to the output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	*
	* var out = linspace( [ 2, 4 ], 0.0, 3.0, true );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( out );
	* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
	*/
	<T extends Start = Start, U extends Stop = Stop, V extends Endpoint = Endpoint>( shape: number | ArrayLike<number>, start: T, stop: U, endpoint?: V, options?: Options ): ComplexOutputArray; // NOTE: we lose some type specificity here, as the output ndarray data type is determined according to type promotion rules

	/**
	* Fills an ndarray with linearly spaced values over a specified interval along one or more ndarray dimensions.
	*
	* @param out - output ndarray
	* @param start - start of interval
	* @param stop - end of interval
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var zeros = require( '@stdlib/ndarray/zeros' );
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	*
	* var x = zeros( [ 2, 4 ] );
	* // returns <ndarray>
	*
	* var out = linspace.assign( x, 0.0, 3.0 );
	* // returns <ndarray>
	*
	* var bool = ( out === x );
	* // returns true
	*
	* var arr = ndarray2array( out );
	* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
	*/
	assign<T extends OutputArray = OutputArray>( out: T, start: Start, stop: Stop, options: BaseOptions ): T;

	/**
	* Fills an ndarray with linearly spaced values over a specified interval along one or more ndarray dimensions.
	*
	* @param out - output ndarray
	* @param start - start of interval
	* @param stop - end of interval
	* @param endpoint - specifies whether to include the end of the interval when writing values to the output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var zeros = require( '@stdlib/ndarray/zeros' );
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	*
	* var x = zeros( [ 2, 4 ] );
	* // returns <ndarray>
	*
	* var out = linspace.assign( x, 0.0, 3.0 );
	* // returns <ndarray>
	*
	* var bool = ( out === x );
	* // returns true
	*
	* var arr = ndarray2array( out );
	* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
	*/
	assign<T extends OutputArray = OutputArray>( out: T, start: Start, stop: Stop, endpoint?: Endpoint, options?: BaseOptions ): T;
}

/**
* Returns a new ndarray filled with linearly spaced values over a specified interval along one or more ndarray dimensions.
*
* @param shape - array shape
* @param start - start of interval
* @param stop - end of interval
* @param endpoint - specifies whether to include the end of the interval when writing values to the output ndarray
* @param options - function options
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var out = linspace( [ 2, 4 ], 0.0, 3.0 );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = zeros( [ 2, 4 ] );
* // returns <ndarray>
*
* var out = linspace.assign( x, 0.0, 3.0 );
* // returns <ndarray>
*
* var bool = ( out === x );
* // returns true
*
* var arr = ndarray2array( out );
* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
*/
declare const linspace: Linspace;


// EXPORTS //

export = linspace;
