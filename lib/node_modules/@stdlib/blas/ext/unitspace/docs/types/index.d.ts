/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
import { NumericAndGenericDataType as DataType, realcomplexndarray, realndarray, complexndarray, genericndarray, Mode, Order } from '@stdlib/types/ndarray';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Starting value.
*/
type Start = number | ComplexLike | realcomplexndarray | genericndarray<number|ComplexLike>;

/**
* Starting value.
*/
type RealStart = number | realndarray | genericndarray<number>;

/**
* Starting value.
*/
type ComplexStart = ComplexLike | complexndarray | genericndarray<ComplexLike>;

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
interface Unitspace {
	/**
	* Returns a new ndarray filled with linearly spaced numeric elements which increment by 1 starting from a specified value along one or more ndarray dimensions.
	*
	* @param shape - array shape
	* @param start - starting value
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var out = unitspace( [ 2, 3 ], 1.0, {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>[ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ]
	*/
	<T extends RealStart = RealStart>( shape: number | ArrayLike<number>, start: T, options: OptionsWithDataType ): OutputArray; // TODO: we lose some type specificity here. We could likely improve specificity here by using type maps

	/**
	* Returns a new ndarray filled with linearly spaced numeric elements which increment by 1 starting from a specified value along one or more ndarray dimensions.
	*
	* @param shape - array shape
	* @param start - starting value
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var out = unitspace( [ 2, 3 ], 1.0 );
	* // returns <ndarray>[ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ]
	*/
	<T extends RealStart = RealStart>( shape: number | ArrayLike<number>, start: T, options?: Options ): RealOutputArray; // NOTE: we lose some type specificity here, as the output ndarray data type is determined according to the data type of `start`

	/**
	* Returns a new ndarray filled with linearly spaced numeric elements which increment by 1 starting from a specified value along one or more ndarray dimensions.
	*
	* @param shape - array shape
	* @param start - starting value
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var out = unitspace( [ 2, 3 ], new Complex128( 1.0, 0.0 ), {
	*     'dtype': 'complex128'
	* });
	* // returns <ndarray>
	*/
	<T extends Start = Start>( shape: number | ArrayLike<number>, start: T, options: OptionsWithDataType ): ComplexOutputArray; // TODO: we lose some type specificity here. We could likely improve specificity here by using type maps

	/**
	* Returns a new ndarray filled with linearly spaced numeric elements which increment by 1 starting from a specified value along one or more ndarray dimensions.
	*
	* @param shape - array shape
	* @param start - starting value
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var out = unitspace( [ 2, 3 ], new Complex128( 1.0, 0.0 ) );
	* // returns <ndarray>
	*/
	<T extends ComplexStart = ComplexStart>( shape: number | ArrayLike<number>, start: T, options?: Options ): ComplexOutputArray; // NOTE: we lose some type specificity here, as the output ndarray data type is determined according to the data type of `start`

	/**
	* Fills an ndarray with linearly spaced numeric elements which increment by 1 starting from a specified value along one or more ndarray dimensions.
	*
	* @param x - input ndarray
	* @param start - starting value
	* @param options - function options
	* @returns input ndarray
	*
	* @example
	* var zeros = require( '@stdlib/ndarray/zeros' );
	*
	* var x = zeros( [ 2, 3 ] );
	* // returns <ndarray>[ [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ] ]
	*
	* var out = unitspace.assign( x, 1.0 );
	* // returns <ndarray>[ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ]
	*
	* var bool = ( out === x );
	* // returns true
	*/
	assign<T extends OutputArray = OutputArray>( x: T, start: Start, options?: BaseOptions ): T;
}

/**
* Returns a new ndarray filled with linearly spaced numeric elements which increment by 1 starting from a specified value along one or more ndarray dimensions.
*
* @param shape - array shape
* @param start - starting value
* @param options - function options
* @returns output ndarray
*
* @example
* var out = unitspace( [ 2, 3 ], 1.0 );
* // returns <ndarray>[ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ]
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 3 ] );
* // returns <ndarray>[ [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ] ]
*
* var out = unitspace.assign( x, 1.0 );
* // returns <ndarray>[ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ]
*
* var bool = ( out === x );
* // returns true
*/
declare const unitspace: Unitspace;


// EXPORTS //

export = unitspace;
