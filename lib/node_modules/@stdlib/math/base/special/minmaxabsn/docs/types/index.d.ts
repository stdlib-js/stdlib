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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

interface MinMaxAbsN {
	/**
	* Returns the minimum and maximum absolute values.
	*
	* ## Notes
	*
	* -   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), positive infinity is the greatest lower bound and negative infinity is the least upper bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, positive infinity is the identity element for the minimum and negative infinity is the identity element for the maximum, and thus, if not provided any arguments, the function returns positive infinity for both the minimum and maximum absolute values.
	*
	* @returns minimum and maximum absolute values
	*
	* @example
	* var v = minmaxabsn();
	* // returns [ Infinity, Infinity ]
	*/
	(): Array<number>;

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @returns minimum and maximum absolute values
	*
	* @example
	* var v = minmaxabsn( 3.14 );
	* // returns [ 3.14, 3.14 ]
	*/
	( x: number ): Array<number>; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @param y - second number
	* @returns minimum and maximum absolute values
	*
	* @example
	* var v = minmaxabsn( 3.14, 4.2 );
	* // returns [ 3.14, 4.2 ]
	*
	* @example
	* var v = minmaxabsn( 3.14, NaN );
	* // returns [ NaN, NaN ]
	*
	* @example
	* var v = minmaxabsn( +0.0, -0.0 );
	* // returns [ 0.0, 0.0 ]
	*/
	( x: number, y: number ): Array<number>; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @param y - second number
	* @param z - third number
	* @returns minimum and maximum absolute values
	*
	* @example
	* var v = minmaxabsn( 3.14, 4.2, -3.8 );
	* // returns [ 3.14, 4.2 ]
	*/
	( x: number, y: number, z: number ): Array<number>; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @param y - second number
	* @param z - third number
	* @param w - fourth number
	* @returns minimum and maximum absolute values
	*
	* @example
	* var v = minmaxabsn( 3.14, 4.2, -3.8, 3.9 );
	* // returns [ 3.14, 4.2 ]
	*/
	( x: number, y: number, z: number, w: number ): Array<number>; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @param y - second number
	* @param z - third number
	* @param w - fourth number
	* @param v - fifth number
	* @returns minimum and maximum absolute values
	*
	* @example
	* var v = minmaxabsn( 3.14, 4.2, -3.8, 3.9, 3.6 );
	* // returns [ 3.14, 4.2 ]
	*/
	( x: number, y: number, z: number, w: number, v: number ): Array<number>; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @param y - second number
	* @param args - numbers
	* @returns minimum and maximum absolute values
	*
	* @example
	* var v = minmaxabsn( 3.14, 4.2 );
	* // returns [ 3.14, 4.2 ]
	*
	* @example
	* var v = minmaxabsn( 3.14, NaN );
	* // returns [ NaN, NaN ]
	*
	* @example
	* var v = minmaxabsn( +0.0, -0.0 );
	* // returns [ 0.0, 0.0 ]
	*/
	( x: number, y: number, ...args: Array<number> ): Array<number>; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param out - output object
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns minimum and maximum absolute values
	*
	* @example
	* var out = [ 0.0, 0.0 ];
	* var v = minmaxabsn( out, 1, 0 );
	* // returns [ Infinity, -Infinity ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign<T = unknown>( out: Collection<T>, stride: number, offset: number ): Collection<T | number>;

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @param out - output object
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns minimum and maximum absolute values
	*
	* @example
	* var out = [ 0.0, 0.0 ];
	* var v = minmaxabsn( 3.14, out, 1, 0 );
	* // returns [ 3.14, 3.14 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign<T = unknown>( x: number, out: Collection<T>, stride: number, offset: number ): Collection<T | number>;

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @param y - second number
	* @param out - output object
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns minimum and maximum absolute values
	*
	* @example
	* var out = [ 0.0, 0.0 ];
	* var v = minmaxabsn( 3.14, -8.0, out, 1, 0 );
	* // returns [ 3.14, 8.0 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign<T = unknown>( x: number, y: number, out: Collection<T>, stride: number, offset: number ): Collection<T | number>;

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @param y - second number
	* @param z - third number
	* @param out - output object
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns minimum and maximum absolute values
	*
	* @example
	* var out = [ 0.0, 0.0 ];
	* var v = minmaxabsn( 3.14, -8.0, 6.5, out, 1, 0 );
	* // returns [ 3.14, 8.0 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign<T = unknown>( x: number, y: number, z: number, out: Collection<T>, stride: number, offset: number ): Collection<T | number>;

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @param y - second number
	* @param z - third number
	* @param w - fourth number
	* @param out - output object
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns minimum and maximum absolute values
	*
	* @example
	* var out = [ 0.0, 0.0 ];
	* var v = minmaxabsn( 3.14, -8.0, 6.5, 7.2, out, 1, 0 );
	* // returns [ 3.14, 8.0 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign<T = unknown>( x: number, y: number, z: number, w: number, out: Collection<T>, stride: number, offset: number ): Collection<T | number>;

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @param y - second number
	* @param z - third number
	* @param w - fourth number
	* @param v - fifth number
	* @param out - output object
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns minimum and maximum absolute values
	*
	* @example
	* var out = [ 0.0, 0.0 ];
	* var v = minmaxabsn( 3.14, -8.0, 6.5, 7.2, 5.2, out, 1, 0 );
	* // returns [ 3.14, 8.0 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign<T = unknown>( x: number, y: number, z: number, w: number, v: number, out: Collection<T>, stride: number, offset: number ): Collection<T | number>;

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @param y - second number
	* @param args - numbers
	* @param out - output object
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns minimum and maximum absolute values
	*
	* @example
	* var out = [ 0.0, 0.0 ];
	* var v = minmaxabsn( 3.14, -8.0, 6.5, 7.2, 5.2, -5.4, out, 1, 0 );
	* // returns [ 3.14, 8.0 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign<T = unknown>( x: number, y: number, ...args: Array<number|Collection<T>> ): Collection<T | number>;
}

/**
* Returns the minimum and maximum absolute values.
*
* @param x - first number
* @param y - second number
* @param args - numbers
* @returns minimum and maximum absolute values
*
* @example
* var v = minmaxabsn( 3.14, 4.2 );
* // returns [ 3.14, 4.2 ]
*
* @example
* var v = minmaxabsn( 3.14, NaN );
* // returns [ NaN, NaN ]
*
* @example
* var v = minmaxabsn( +0.0, -0.0 );
* // returns [ 0.0, 0.0 ]
*/
declare var minmaxabsn: MinMaxAbsN;


// EXPORTS //

export = minmaxabsn;
