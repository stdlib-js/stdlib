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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Interface describing a meta data object.
*/
interface Meta {
	/**
	* Total number of arguments.
	*
	* ## Notes
	*
	* -   This value is one more than might be expected, as the output array is treated as an implicit argument, even when not explicitly provided.
	*/
	nargs: number;

	/**
	* Number of input arrays.
	*/
	nin: number;

	/**
	* Number of output arrays.
	*/
	nout: number;
}

/**
* Defines non-enumerable read-only properties which expose ndarray function meta data.
*
* @param meta - function meta data
* @param meta.nargs - total number of arguments
* @param meta.nin - total number of input arrays
* @param meta.nout - total number of output arrays
* @param dtypes - list of ndarray data types
* @param obj - object on which to define properties
* @returns object on which properties were defined
*
* @example
* // Define ndarray function meta data:
* var meta = {
*     'nargs': 2,
*     'nin': 1,
*     'nout': 1
* };
*
* // Define the list of ndarray data types:
* var dtypes = [
*     'float64', 'float64',
*     'float32', 'float32',
*     'generic', 'generic'
* ];
*
* // Define an object/function on which to set the properties:
* var obj = {};
*
* // Set the properties:
* setProps( meta, dtypes, obj );
*/
declare function setProps( meta: Meta, dtypes: ArrayLike<any>, obj: any ): any;


// EXPORTS //

export = setProps;
