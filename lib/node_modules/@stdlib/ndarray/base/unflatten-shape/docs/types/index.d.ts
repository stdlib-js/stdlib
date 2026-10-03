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

import { ArrayLike } from '@stdlib/types/array';

/**
* Interface describing `unflattenShape`.
*/
interface Routine {
	/**
	* Expands a dimension over multiple dimensions.
	*
	* @param shape - array shape
	* @param dim - dimension to be unflattened
	* @param sizes - new shape of the unflattened dimension
	* @returns unflattened shape
	*
	* @example
	* var sh = unflattenShape( [ 6, 2, 1 ], 0, [ 3, 2 ] );
	* // returns [ 3, 2, 2, 1 ]
	*/
	( shape: ArrayLike<number>, dim: number, sizes: ArrayLike<number> ): Array<number>;

	/**
	* Expands a dimension over multiple dimensions.
	*
	* @param shape - array shape
	* @param dim - dimension to be unflattened
	* @param sizes - new shape of the unflattened dimension
	* @param out - output array
	* @returns unflattened shape
	*
	* @example
	* var o = [ 0, 0, 0, 0 ];
	*
	* var out = unflattenShape.assign( [ 6, 2, 1 ], 0, [ 3, 2 ], o );
	* // returns [ 3, 2, 2, 1 ]
	*
	* var bool = ( out === o );
	* // returns true
	*/
	assign<T extends ArrayLike<number> = ArrayLike<number>>( shape: ArrayLike<number>, dim: number, sizes: ArrayLike<number>, out: T ): T;
}

/**
* Expands a dimension over multiple dimensions.
*
* @param shape - array shape
* @param dim - dimension to be unflattened
* @param sizes - new shape of the unflattened dimension
* @returns unflattened shape
*
* @example
* var sh = unflattenShape( [ 6, 2, 1 ], 0, [ 3, 2 ] );
* // returns [ 3, 2, 2, 1 ]
*
* @example
* var o = [ 0, 0, 0, 0 ];
*
* var out = unflattenShape.assign( [ 6, 2, 1 ], 0, [ 3, 2 ], o );
* // returns [ 3, 2, 2, 1 ]
*
* var bool = ( out === o );
* // returns true
*/
declare var unflattenShape: Routine;


// EXPORTS //

export = unflattenShape;
