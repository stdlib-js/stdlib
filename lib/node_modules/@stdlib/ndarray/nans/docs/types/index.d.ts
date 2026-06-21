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

import { Shape, Order, Mode, typedndarray, float64ndarray, float32ndarray, genericndarray, complex128ndarray, complex64ndarray, FloatingPointAndGenericDataType, Float64DataType, Float32DataType, Complex128DataType, Complex64DataType, GenericDataType } from '@stdlib/types/ndarray';

/**
* Interface describing function options.
*/
interface Options {
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
interface Float64Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Float64DataType;
}

/**
* Interface describing function options.
*/
interface Float32Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Float32DataType;
}

/**
* Interface describing function options.
*/
interface Complex128Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Complex128DataType;
}

/**
* Interface describing function options.
*/
interface Complex64Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Complex64DataType;
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
	dtype: FloatingPointAndGenericDataType;
}

/**
* Creates a NaN-filled ndarray having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns NaN-filled ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = nans( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ NaN, NaN ], [ NaN, NaN ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'float64'
*/
declare function nans( shape: Shape | number, options: Float64Options ): float64ndarray;

/**
* Creates a NaN-filled ndarray having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns NaN-filled ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = nans( [ 2, 2 ], {
*     'dtype': 'float32'
* });
* // returns <ndarray>[ [ NaN, NaN ], [ NaN, NaN ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'float32'
*/
declare function nans( shape: Shape | number, options: Float32Options ): float32ndarray;

/**
* Creates a NaN-filled ndarray having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns NaN-filled ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = nans( [ 2, 2 ], {
*     'dtype': 'complex128'
* });
* // returns <ndarray>
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'complex128'
*/
declare function nans( shape: Shape | number, options: Complex128Options ): complex128ndarray;

/**
* Creates a NaN-filled ndarray having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns NaN-filled ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = nans( [ 2, 2 ], {
*     'dtype': 'complex64'
* });
* // returns <ndarray>
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'complex64'
*/
declare function nans( shape: Shape | number, options: Complex64Options ): complex64ndarray;

/**
* Creates a NaN-filled ndarray having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns NaN-filled ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = nans( [ 2, 2 ], {
*     'dtype': 'generic'
* });
* // returns <ndarray>[ [ NaN, NaN ], [ NaN, NaN ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'generic'
*/
declare function nans( shape: Shape | number, options: GenericOptions ): genericndarray<number>;

/**
* Creates a NaN-filled ndarray having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type (default: 'float64')
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns NaN-filled ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = nans( [ 2, 2 ] );
* // returns <ndarray>[ [ NaN, NaN ], [ NaN, NaN ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'float64'
*/
declare function nans( shape: Shape | number, options?: Options ): float64ndarray;

/**
* Creates a NaN-filled ndarray having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type (default: 'float64')
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns NaN-filled ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = nans( [ 2, 2 ] );
* // returns <ndarray>[ [ NaN, NaN ], [ NaN, NaN ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'float64'
*/
declare function nans( shape: Shape | number, options?: OptionsWithDType ): typedndarray<number>;


// EXPORTS //

export = nans;
