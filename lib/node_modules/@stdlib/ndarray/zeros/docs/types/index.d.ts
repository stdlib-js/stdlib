/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import { Shape, Order, typedndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray, DataType, Mode } from '@stdlib/types/ndarray';

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
	dtype: 'float64';
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
	dtype: 'float32';
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
	dtype: 'complex128';
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
	dtype: 'complex64';
}

/**
* Interface describing function options.
*/
interface Int32Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: 'int32';
}

/**
* Interface describing function options.
*/
interface Int16Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: 'int16';
}

/**
* Interface describing function options.
*/
interface Int8Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: 'int8';
}

/**
* Interface describing function options.
*/
interface Uint32Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: 'uint32';
}

/**
* Interface describing function options.
*/
interface Uint16Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: 'uint16';
}

/**
* Interface describing function options.
*/
interface Uint8Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: 'uint8';
}

/**
* Interface describing function options.
*/
interface Uint8COptions extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: 'uint8c';
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
	dtype: DataType;
}

/**
* Creates a zero-filled array having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var arr = zeros( [ 2, 2 ], {
*     'dtype': float64'
* });
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'float64'
*/
declare function zeros( shape: Shape | number, options: Float64Options ): float64ndarray;

/**
* Creates a zero-filled array having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var arr = zeros( [ 2, 2 ], {
*     'dtype': float32'
* });
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'float32'
*/
declare function zeros( shape: Shape | number, options: Float32Options ): float32ndarray;

/**
* Creates a zero-filled array having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var arr = zeros( [ 2, 2 ], {
*     'dtype': complex128'
* });
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'complex128'
*/
declare function zeros( shape: Shape | number, options: Complex128Options ): complex128ndarray;

/**
* Creates a zero-filled array having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var arr = zeros( [ 2, 2 ], {
*     'dtype': complex64'
* });
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'complex64'
*/
declare function zeros( shape: Shape | number, options: Complex64Options ): complex64ndarray;

/**
* Creates a zero-filled array having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var arr = zeros( [ 2, 2 ], {
*     'dtype': int32'
* });
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'int32'
*/
declare function zeros( shape: Shape | number, options: Int32Options ): int32ndarray;

/**
* Creates a zero-filled array having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var arr = zeros( [ 2, 2 ], {
*     'dtype': int16'
* });
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'int16'
*/
declare function zeros( shape: Shape | number, options: Int16Options ): int16ndarray;

/**
* Creates a zero-filled array having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var arr = zeros( [ 2, 2 ], {
*     'dtype': int8'
* });
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'int8'
*/
declare function zeros( shape: Shape | number, options: Int8Options ): int8ndarray;

/**
* Creates a zero-filled array having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var arr = zeros( [ 2, 2 ], {
*     'dtype': uint32'
* });
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'uint32'
*/
declare function zeros( shape: Shape | number, options: Uint32Options ): uint32ndarray;

/**
* Creates a zero-filled array having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var arr = zeros( [ 2, 2 ], {
*     'dtype': uint16'
* });
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'uint16'
*/
declare function zeros( shape: Shape | number, options: Uint16Options ): uint16ndarray;

/**
* Creates a zero-filled array having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var arr = zeros( [ 2, 2 ], {
*     'dtype': uint8'
* });
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'uint8'
*/
declare function zeros( shape: Shape | number, options: Uint8Options ): uint8ndarray;

/**
* Creates a zero-filled array having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var arr = zeros( [ 2, 2 ], {
*     'dtype': uint8c'
* });
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'uint8c'
*/
declare function zeros( shape: Shape | number, options: Uint8COptions ): uint8cndarray;

/**
* Creates a zero-filled array having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type (default: 'float64')
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var arr = zeros( [ 2, 2 ] );
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'float64'
*/
declare function zeros( shape: Shape | number, options?: Options ): float64ndarray;

/**
* Creates a zero-filled array having a specified shape and data type.
*
* @param shape - array shape
* @param options - options
* @param options.dtype - underlying data type (default: 'float64')
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var arr = zeros( [ 2, 2 ] );
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'float64'
*/
declare function zeros( shape: Shape | number, options?: OptionsWithDType ): typedndarray<number>; unified-signatures


// EXPORTS //

export = zeros;
