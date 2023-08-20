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

import { PropertyName } from '@stdlib/types/object';

interface Options {
	/**
	* Boolean indicating whether to return a new data structure.
	*/
	copy?: boolean;
}

/**
* Extracts a property value from each element of an object array.
*
* ## Notes
*
* -   The function skips `null` and `undefined` array elements.
* -   Extracted values are not cloned.
*
* @param arr - source array
* @param prop - property to access
* @param options - function options
* @param options.copy - boolean indicating whether to return a new data structure (default: true)
* @throws first argument must be an object array
* @returns destination array
*
* @example
* var arr = [
*     { 'a': 1, 'b': 2 },
*     { 'a': 0.5, 'b': 3 }
* ];
*
* var out = pluck( arr, 'a' );
* // returns [ 1, 0.5 ]
*
* @example
* var arr = [
*     { 'a': 1, 'b': 2 },
*     { 'a': 0.5, 'b': 3 }
* ];
*
* var out = pluck( arr, 'a', {'copy':false} );
* // returns [ 1, 0.5 ]
*
* var bool = ( arr[ 0 ] === out[ 0 ] );
* // returns true
*/
declare function pluck( arr: Array<any>, prop: PropertyName, options?: Options ): Array<any>; // tslint-disable-line max-line-length


// EXPORTS //

export = pluck;
