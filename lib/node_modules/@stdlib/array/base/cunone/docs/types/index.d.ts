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
* Interface describing `cunone`.
*/
interface cunone {
	/**
	* Cumulatively tests whether every element in a provided array is falsy.
	*
	* @param x - input array
	* @returns output array
	*
	* @example
	* var x = [ false, false, false, true, false ];
	*
	* var y = cunone( x );
	*  // returns [ true, true, true, false, false ];
	*/
	( x: Collection | AccessorArrayLike<any> ): Array<boolean>;

	/**
	* Cumulatively tests whether every element in an array is falsy and assigns the results to a provided output array.
	*
	* @param x - input array
	* @param y - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var x = [ false, false, false, true, false ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = cunone.assign( x, y, 2, 0 );
	* // returns [ true, null, true, null, true, null, false, null, false, null ];
	*/
	assign<T, U extends Collection<T> | AccessorArrayLike<T>>( x: Collection | AccessorArrayLike<any>, y: U, stride: number, offset: number ): U;
}

/**
* Cumulatively tests whether every element in a provided array is falsy.
*
* @param x - input array
* @returns output array
*
* @example
* var x = [ false, false, false, true, false ];
*
* var result = cunone( x );
* // returns [ true, true, true, false, false ];
*
* @example
* var x = [ false, false, false, true, false ];
* var y = [ false, null, false, null, false, null, false, null, false, null ];
*
* var arr = cunone.assign( x, y, 2, 0 );
* // returns [ true, null, true, null, true, null, false, null, false, null ];
*/
declare var cunone: cunone;


// EXPORTS //

export = cunone;
