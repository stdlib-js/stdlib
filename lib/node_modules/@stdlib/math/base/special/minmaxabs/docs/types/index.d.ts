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

interface MinMaxAbs {
	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @param y - second number
	* @returns minimum and maximum absolute values
	*
	* @example
	* var v = minmaxabs( 3.14, 4.2 );
	* // returns [ 3.14, 4.2 ]
	*
	* @example
	* var v = minmaxabs( 3.14, NaN );
	* // returns [ NaN, NaN ]
	*
	* @example
	* var v = minmaxabs( +0.0, -0.0 );
	* // returns [ 0.0, 0.0 ]
	*/
	( x: number, y: number ): Array<number>;

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
	* var v = minmaxabs( 3.14, -8.0, out, 1, 0 );
	* // returns [ 3.14, 8.0 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign<T = unknown>( x: number, y: number, out: Collection<T>, stride: number, offset: number ): Collection<T | number>;
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
* var v = minmaxabs( 3.14, 4.2 );
* // returns [ 3.14, 4.2 ]
*
* @example
* var v = minmaxabs( 3.14, NaN );
* // returns [ NaN, NaN ]
*
* @example
* var v = minmaxabs( +0.0, -0.0 );
* // returns [ 0.0, 0.0 ]
*/
declare var minmaxabs: MinMaxAbs;


// EXPORTS //

export = minmaxabs;
