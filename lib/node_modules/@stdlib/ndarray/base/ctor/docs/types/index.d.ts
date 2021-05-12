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

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import { ndarray, DataType, Order } from '@stdlib/types/ndarray';
import { Buffer } from 'buffer';

/**
* Interface defining a ndarray constructor which is both "newable" and "callable".
*/
interface Constructor {
	/**
	* ndarray constructor.
	*
	* ## Notes
	*
	* -   To create a zero-dimensional array,
	*
	*     ```javascript
	*     var buffer = [ 1 ];
	*     var shape = [];
	*     var strides = [ 0 ];
	*     var offset = 0;
	*
	*     var out = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	*     ```
	*
	* @param dtype - data type
	* @param buffer - data buffer
	* @param shape - array shape
	* @param strides - array strides
	* @param offset - index offset
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @returns ndarray instance
	*
	* @example
	* var buffer = [ 1, 2, 3, 4, 5, 6 ];
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var out = new ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	*/
	new( dtype: DataType, buffer: ArrayLike<any> | Buffer, shape: ArrayLike<number>, strides: ArrayLike<number>, offset: number, order: Order ): ndarray; // tslint-disable-line max-line-length

	/**
	* ndarray constructor.
	*
	* ## Notes
	*
	* -   To create a zero-dimensional array,
	*
	*     ```javascript
	*     var buffer = [ 1 ];
	*     var shape = [];
	*     var strides = [ 0 ];
	*     var offset = 0;
	*
	*     var out = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	*     ```
	*
	* @param dtype - data type
	* @param buffer - data buffer
	* @param shape - array shape
	* @param strides - array strides
	* @param offset - index offset
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @returns ndarray instance
	*
	* @example
	* var buffer = [ 1, 2, 3, 4, 5, 6 ];
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var out = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	*/
	( dtype: DataType, buffer: ArrayLike<any> | Buffer, shape: ArrayLike<number>, strides: ArrayLike<number>, offset: number, order: Order ): ndarray; // tslint-disable-line max-line-length
}

/**
* ndarray constructor.
*
* ## Notes
*
* -   To create a zero-dimensional array,
*
*     ```javascript
*     var buffer = [ 1 ];
*     var shape = [];
*     var strides = [ 0 ];
*     var offset = 0;
*
*     var out = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*     ```
*
* @param dtype - data type
* @param buffer - data buffer
* @param shape - array shape
* @param strides - array strides
* @param offset - index offset
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ndarray instance
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var out = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*/
declare var ctor: Constructor;


// EXPORTS //

export = ctor;
