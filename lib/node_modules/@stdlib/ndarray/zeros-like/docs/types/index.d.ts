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

/* eslint-disable max-lines */

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Shape, Order, ndarray, typedndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray, DataType, Mode } from '@stdlib/types/ndarray';

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
* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float64'
*
* var y = zerosLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'float64'
*/
declare function zerosLike( x: float64ndarray, options?: Options ): float64ndarray;

/**
* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float32'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float32'
*
* var y = zerosLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'float32'
*/
declare function zerosLike( x: float32ndarray, options?: Options ): float32ndarray;

/**
* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'complex128'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'complex128'
*
* var y = zerosLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'complex128'
*/
declare function zerosLike( x: complex128ndarray, options?: Options ): complex128ndarray;

/**
* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'complex64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'complex64'
*
* var y = zerosLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'complex64'
*/
declare function zerosLike( x: complex64ndarray, options?: Options ): complex64ndarray;

/**
* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'int32'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'int32'
*
* var y = zerosLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'int32'
*/
declare function zerosLike( x: int32ndarray, options?: Options ): int32ndarray;

/**
* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'int16'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'int16'
*
* var y = zerosLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'int16'
*/
declare function zerosLike( x: int16ndarray, options?: Options ): int16ndarray;

/**
* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'int8'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'int8'
*
* var y = zerosLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'int8'
*/
declare function zerosLike( x: int8ndarray, options?: Options ): int8ndarray;

/**
* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'uint32'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'uint32'
*
* var y = zerosLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'uint32'
*/
declare function zerosLike( x: uint32ndarray, options?: Options ): uint32ndarray;

/**
* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'uint16'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'uint16'
*
* var y = zerosLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'uint16'
*/
declare function zerosLike( x: uint16ndarray, options?: Options ): uint16ndarray;

/**
* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'uint8'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'uint8'
*
* var y = zerosLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'uint8'
*/
declare function zerosLike( x: uint8ndarray, options?: Options ): uint8ndarray;

/**
* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'uint8c'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'uint8c'
*
* var y = zerosLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'uint8c'
*/
declare function zerosLike( x: uint8cndarray, options?: Options ): uint8cndarray;

/**
* Creates a zero-filled double-precision floating-point array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'generic'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'generic'
*
* var y = zerosLike( x, {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'float64'
*/
declare function zerosLike( x: ndarray, options: Float64Options ): float64ndarray;

/**
* Creates a zero-filled single-precision floating-point array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float64'
*
* var y = zerosLike( x, {
*     'dtype': 'float32'
* });
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'float32'
*/
declare function zerosLike( x: ndarray, options: Float32Options ): float32ndarray;

/**
* Creates a zero-filled double-precision complex floating-point array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float64'
*
* var y = zerosLike( x, {
*     'dtype': 'complex128'
* });
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'complex128'
*/
declare function zerosLike( x: ndarray, options: Complex128Options ): complex128ndarray;

/**
* Creates a zero-filled single-precision complex floating-point array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float64'
*
* var y = zerosLike( x, {
*     'dtype': 'complex64'
* });
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'complex64'
*/
declare function zerosLike( x: ndarray, options: Complex64Options ): complex64ndarray;

/**
* Creates a zero-filled 32-bit signed integer array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float64'
*
* var y = zerosLike( x, {
*     'dtype': 'int32'
* });
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'int32'
*/
declare function zerosLike( x: ndarray, options: Int32Options ): int32ndarray;

/**
* Creates a zero-filled 16-bit signed integer array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float64'
*
* var y = zerosLike( x, {
*     'dtype': 'int16'
* });
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'int16'
*/
declare function zerosLike( x: ndarray, options: Int16Options ): int16ndarray;

/**
* Creates a zero-filled 8-bit signed integer array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float64'
*
* var y = zerosLike( x, {
*     'dtype': 'int8'
* });
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'int8'
*/
declare function zerosLike( x: ndarray, options: Int8Options ): int8ndarray;

/**
* Creates a zero-filled 32-bit unsigned integer array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float64'
*
* var y = zerosLike( x, {
*     'dtype': 'uint32'
* });
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'uint32'
*/
declare function zerosLike( x: ndarray, options: Uint32Options ): uint32ndarray;

/**
* Creates a zero-filled 16-bit unsigned integer array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float64'
*
* var y = zerosLike( x, {
*     'dtype': 'uint16'
* });
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'uint16'
*/
declare function zerosLike( x: ndarray, options: Uint16Options ): uint16ndarray;

/**
* Creates a zero-filled 8-bit unsigned integer array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float64'
*
* var y = zerosLike( x, {
*     'dtype': 'uint8'
* });
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'uint8'
*/
declare function zerosLike( x: ndarray, options: Uint8Options ): uint8ndarray;

/**
* Creates a zero-filled clamped 8-bit unsigned integer array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float64'
*
* var y = zerosLike( x, {
*     'dtype': 'uint8c'
* });
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'uint8c'
*/
declare function zerosLike( x: ndarray, options: Uint8COptions ): uint8cndarray;

/**
* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param options.readonly - boolean indicating whether an array should be read-only
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'generic'
*
* var y = zerosLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'generic'
*/
declare function zerosLike( x: ndarray, options?: Options | OptionsWithDType ): typedndarray<number>;


// EXPORTS //

export = zerosLike;
