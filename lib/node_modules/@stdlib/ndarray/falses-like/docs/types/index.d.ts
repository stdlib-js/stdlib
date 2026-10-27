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

/* eslint-disable max-lines */

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Shape, Order, Mode, ndarray, typedndarray, boolndarray, genericndarray, BooleanAndGenericDataType, BooleanDataType, GenericDataType } from '@stdlib/types/ndarray';

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Array shape.
	*
	* ## Notes
	*
	* -   If provided, this option overrides the input array's inferred shape.
	*/
	shape?: Shape | number;

	/**
	* Array order (either 'row-major' (C-style) or 'column-major' (Fortran-style)).
	*
	* ## Notes
	*
	* -   If provided, this option overrides the input array's inferred order.
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

	/**
	* Boolean indicating whether an array should be read-only (default: false).
	*/
	readonly?: boolean;
}

/**
* Interface describing function options.
*/
interface BooleanOptions extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: BooleanDataType;
}

/**
* Interface describing function options.
*/
interface GenericOptions extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: GenericDataType;
}

/**
* Interface describing function options.
*/
interface OptionsWithDType extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: BooleanAndGenericDataType;
}

/**
* Creates an ndarray filled with `false` values and having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns filled ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*     'dtype': 'bool'
* });
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'bool'
*
* var y = falsesLike( x );
* // returns <ndarray>[ [ false, false ], [ false, false ] ]
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'bool'
*/
declare function falsesLike<T extends typedndarray<boolean>>( x: T, options?: Options ): T;

/**
* Creates an ndarray filled with `false` values and having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns filled ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*     'dtype': 'generic'
* });
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'generic'
*
* var y = falsesLike( x );
* // returns <ndarray>[ [ false, false ], [ false, false ] ]
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'generic'
*/
declare function falsesLike( x: genericndarray<unknown>, options?: Options ): genericndarray<boolean>;

/**
* Creates a boolean ndarray filled with `false` values and having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns filled ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*     'dtype': 'generic'
* });
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'generic'
*
* var y = falsesLike( x, {
*     'dtype': 'bool'
* });
* // returns <ndarray>[ [ false, false ], [ false, false ] ]
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'bool'
*/
declare function falsesLike( x: ndarray, options: BooleanOptions ): boolndarray;

/**
* Creates a "generic" ndarray filled with `false` values and having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns filled ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*     'dtype': 'bool'
* });
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'bool'
*
* var y = falsesLike( x, {
*     'dtype': 'generic'
* });
* // returns <ndarray>[ [ false, false ], [ false, false ] ]
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'generic'
*/
declare function falsesLike( x: ndarray, options: GenericOptions ): genericndarray<boolean>;

/**
* Creates an ndarray filled with `false` values and having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns filled ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*     'dtype': 'generic'
* });
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'generic'
*
* var y = falsesLike( x );
* // returns <ndarray>[ [ false, false ], [ false, false ] ]
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'generic'
*/
declare function falsesLike( x: ndarray, options?: Options | OptionsWithDType ): typedndarray<boolean>;


// EXPORTS //

export = falsesLike;
