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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/object';

/**
 * Interface describing an interface for computing minimum and maximum values.
 */
 interface MinMax {
	/**
	* Returns the minimum and maximum values.
	*
	* @returns minimum and maximum values
	*
	* @example
	* var v = minmax();
	* // returns [ Infinity, -Infinity ]
	*/
	(): Array<number>;

	/**
	* Returns the minimum and maximum values.
	*
	* @param x - first number
	* @returns minimum and maximum values
	*
	* @example
	* var v = minmax( 3.14 );
	* // returns [ 3.14, 3.14 ]
	*/
	( x: number ): Array<number>;
	/**
	* Returns the minimum and maximum values.
	*
	* @param x - first number
	* @param y - second number
	* @returns minimum and maximum values
	*
	* @example
	* var v = minmax( 3.14, 4.2 );
	* // returns [ 3.14, 4.2 ]
	*
	* var v = minmax( 3.14, NaN );
	* // returns [ NaN, NaN ]
	*
	* @example
	* var v = minmax( +0.0, -0.0 );
	* // returns [ -0.0, 0.0 ]
	*/
	( x: number, y: number ): Array<number>;

	/**
	* Returns the minimum and maximum values.
	*
	* @param x - first number
	* @param y - second number
	* @param z - third number
	* @returns minimum and maximum values
	*
	* @example
	* var v = minmax( 3.14, 4.2, -1.0 );
	* // returns [ -1.0, 4.2 ]
	*/
	( x: number, y: number, z: number ): Array<number>;

	/**
	* Returns the minimum and maximum values.
	*
	* @param x - first number
	* @param y - second number
	* @param z - third number
	* @param w - fourth number
	* @returns minimum and maximum values
	*
	* @example
	* var v = minmax( 3.14, 4.2, -1.0, 2.0 );
	* // returns [ -1.0, 4.2 ]
	*/
	( x: number, y: number, z: number, w: number ): Array<number>;

	/**
	* Returns the minimum and maximum values.
	*
	* @param x - first number
	* @param y - second number
	* @param z - third number
	* @param w - fourth number
	* @param v - fifth number
	* @returns minimum and maximum values
	*
	* @example
	* var v = minmax( 3.14, 4.2, -1.0, 2.0, 1.0 );
	* // returns [ -1.0, 4.2 ]
	*/
	( x: number, y: number, z: number, w: number, v: number ): Array<number>;

	/**
	* Returns the minimum and maximum values.
	*
	* @param x - first number
	* @param y - second number
	* @param args - numbers
	* @returns minimum and maximum values
	*
	* @example
	* var v = minmax( 3.14, 4.2 );
	* // returns [ 3.14, 4.2 ]
	*
	* var v = minmax( 3.14, NaN );
	* // returns [ NaN, NaN ]
	*
	* @example
	* var v = minmax( +0.0, -0.0 );
	* // returns [ -0.0, 0.0 ]
	*/
	( x: number, y: number, ...args: Array<number> ): Array<number>;

	/**
	* Returns the minimum and maximum values and assigns results to a provided output array.
	*
	* @param out - output object
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns minimum and maximum values
	*
	* @example
	* var out = [ 0.0, 0.0 ];
	* var v = minmax( out, 1, 0 );
	* // returns [ Infinity, -Infinity ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign( out: Collection, stride: number, offset: number ): Collection;

	/**
	* Returns the minimum and maximum values and assigns results to a provided output array.
	*
	* @param x - first number
	* @param out - output object
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns minimum and maximum values
	*
	* @example
	* var out = [ 0.0, 0.0 ];
	* var v = minmax( 5.9, out, 1, 0 );
	* // returns [ 5.9, 5.9 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign( x: number, out: Collection, stride: number, offset: number ): Collection; // tslint-disable-line max-line-length

	/**
	* Returns the minimum and maximum values and assigns results to a provided output array.
	*
	* @param x - first number
	* @param y - second number
	* @param out - output object
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns minimum and maximum values
	*
	* @example
	* var out = [ 0.0, 0.0 ];
	* var v = minmax( 5.9, 3.14, out, 1, 0 );
	* // returns [ 3.14, 5.9 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign( x: number, y: number, out: Collection, stride: number, offset: number ): Collection; // tslint-disable-line max-line-length

	/**
	* Returns the minimum and maximum values and assigns results to a provided output array.
	*
	* @param x - first number
	* @param y - second number
	* @param z - third number
	* @param out - output object
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns minimum and maximum values
	*
	* @example
	* var out = [ 0.0, 0.0 ];
	* var v = minmax( 5.9, 3.14, 4.2, out, 1, 0 );
	* // returns [ 3.14, 5.9 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign( x: number, y: number, z: number, out: Collection, stride: number, offset: number ): Collection; // tslint-disable-line max-line-length

	/**
	* Returns the minimum and maximum values and assigns results to a provided output array.
	*
	* @param x - first number
	* @param y - second number
	* @param z - third number
	* @param w - fourth number
	* @param out - output object
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns minimum and maximum values
	*
	* @example
	* var out = [ 0.0, 0.0 ];
	* var v = minmax( 5.9, 3.14, 4.2, 3.9, out, 1, 0 );
	* // returns [ 3.14, 5.9 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign( x: number, y: number, z: number, w: number, out: Collection, stride: number, offset: number ): Collection; // tslint-disable-line max-line-length

	/**
	* Returns the minimum and maximum values and assigns results to a provided output array.
	*
	* @param x - first number
	* @param y - second number
	* @param z - third number
	* @param w - fourth number
	* @param v - fifth number
	* @param out - output object
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns minimum and maximum values
	*
	* @example
	* var out = [ 0.0, 0.0 ];
	* var v = minmax( 5.9, 3.14, 4.2, 3.9, 3.8, out, 1, 0 );
	* // returns [ 3.14, 5.9 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign( x: number, y: number, z: number, w: number, v: number, out: Collection, stride: number, offset: number ): Collection; // tslint-disable-line max-line-length

	/**
	* Returns the minimum and maximum values and assigns results to a provided output array.
	*
	* @param x - first number
	* @param y - second number
	* @param args - numbers
	* @param out - output object
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns minimum and maximum values
	*
	* @example
	* var out = [ 0.0, 0.0 ];
	* var v = minmax( 5.9, 3.14, 4.2, 3.9, 3.8, 3.7, out, 1, 0 );
	* // returns [ 3.14, 5.9 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign( x: number, y: number, ...args: Array<number|Collection> ): Collection; // tslint-disable-line max-line-length
}

/**
* Returns the minimum and maximum values.
*
* @param x - first number
* @param y - second number
* @param args - numbers
* @returns minimum and maximum values
*
* @example
* var v = minmax( 3.14, 4.2 );
* // returns [ 3.14, 4.2 ]
*
* var v = minmax( 3.14, NaN );
* // returns [ NaN, NaN ]
*
* @example
* var v = minmax( +0.0, -0.0 );
* // returns [ -0.0, 0.0 ]
*/
declare var minmax: MinMax;


// EXPORTS //

export = minmax;
