/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Interface describing `cusome`.
*/
interface cusome {
	/**
	* Cumulatively tests whether at least `n` array elements in a provided array are truthy.
	*
	* @param x - input array
	* @param n - number of elements
	* @returns output array
	*
	* @example
	* var x = [ false, false, false, true, true ];
	*
	* var y = cusome( x, 2 );
	* // returns [ false, false, false, false, true ];
	*/
	( x: Collection | AccessorArrayLike<any>, n: number ): Array<boolean>;

	/**
	* Cumulatively tests whether at least `n` array elements in a provided array are truthy and assigns the results to a provided output array.
	*
	* @param x - input array
	* @param n - number of elements
	* @param y - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var x = [ false, false, false, true, true ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = cusome.assign( x, 2, y, 2, 0 );
	* // returns [ false, null, false, null, false, null, false, null, true, null ];
	*/
	assign<T, U extends Collection<T> | AccessorArrayLike<T>>( x: Collection | AccessorArrayLike<any>, n: number, y: U, stride: number, offset: number ): U;
}

/**
* Cumulatively tests whether at least `n` array elements in a provided array are truthy.
*
* @param x - input array
* @param n - number of elements
* @returns output array
*
* @example
* var x = [ false, false, false, true, true ];
*
* var result = cusome( x, 2 );
* // returns [ false, false, false, false, true ];
*
* @example
* var x = [ false, false, false, true, true ];
* var y = [ false, null, false, null, false, null, false, null, false, null ];
*
* var arr = cusome.assign( x, y, 2, 0 );
* // returns [ false, null, false, null, false, null, false, null, true, null ];
*/
declare var cusome: cusome;


// EXPORTS //

export = cusome;
