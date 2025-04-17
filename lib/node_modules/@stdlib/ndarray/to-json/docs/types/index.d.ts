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

import { typedndarray, realcomplexndarray, boolndarray, DataType, Order } from '@stdlib/types/ndarray';

/**
* Interface describing serialized ndarray flags.
*/
interface Flags {
	/**
	* Boolean indicating if an ndarray is read-only.
	*/
	READONLY: boolean;
}

/**
* Interface describing a returned JSON representation of an ndarray.
*/
interface JSONObject<T> {
	/**
	* Serialized object type.
	*/
	type: 'ndarray';

	/**
	* Underlying data type.
	*/
	dtype: DataType;

	/**
	* Configuration flags.
	*/
	flags: Flags;

	/**
	* Memory layout order.
	*/
	order: Order;

	/**
	* Array dimensions.
	*/
	shape: Array<number>;

	/**
	* Index strides.
	*/
	strides: Array<number>;

	/**
	* Data.
	*/
	data: Array<T>;
}

/**
* Serializes an ndarray as a JSON object.
*
* ## Notes
*
* -   The function does **not** serialize data outside of the buffer region defined by the ndarray view.
*
* @param x - input ndarray
* @returns JSON object
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
* // returns <ndarray>
*
* var o = ndarray2json( x );
* // returns {...}
*/
declare function ndarray2json( x: realcomplexndarray ): JSONObject<number>;

/**
* Serializes an ndarray as a JSON object.
*
* ## Notes
*
* -   The function does **not** serialize data outside of the buffer region defined by the ndarray view.
*
* @param x - input ndarray
* @returns JSON object
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( new BooleanArray( 4 ) );
* // returns <ndarray>
*
* var o = ndarray2json( x );
* // returns {...}
*/
declare function ndarray2json( x: boolndarray ): JSONObject<boolean>;

/**
* Serializes an ndarray as a JSON object.
*
* ## Notes
*
* -   The function does **not** serialize data outside of the buffer region defined by the ndarray view.
*
* @param x - input ndarray
* @returns JSON object
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
* // returns <ndarray>
*
* var o = ndarray2json( x );
* // returns {...}
*/
declare function ndarray2json<T = unknown>( x: typedndarray<T> ): JSONObject<T>;


// EXPORTS //

export = ndarray2json;
