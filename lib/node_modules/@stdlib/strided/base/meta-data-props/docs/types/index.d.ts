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
	* Total number of arguments (excluding offsets).
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
* Defines non-enumerable read-only properties which expose strided array function meta data.
*
* @param meta - function meta data
* @param meta.nargs - total number of arguments (excluding offsets)
* @param meta.nin - total number of input arrays
* @param meta.nout - total number of output arrays
* @param dtypes - list of strided array data types
* @param obj - object on which to define properties
* @param bool - boolean indicating whether the provided object should describe an "ndarray" function interface
* @returns object on which properties were defined
*
* @example
* // Define strided array function meta data:
* var meta = {
*     'nargs': 7,
*     'nin': 1,
*     'nout': 1
* };
*
* // Define the list of strided array data types:
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
* setProps( meta, dtypes, obj, false );
*/
declare function setProps( meta: Meta, dtypes: ArrayLike<any>, obj: any, bool: boolean ): any; // tslint:disable-line:max-line-length


// EXPORTS //

export = setProps;
