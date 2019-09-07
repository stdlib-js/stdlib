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

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Boolean indicating whether to return a new data structure.
	*/
	copy?: boolean;

	/**
	* Key path separator.
	*/
	sep?: string;
}

/**
* Extracts a nested property value from each element of an object array.
*
* ## Notes
*
* -   If a key path does not exist, the function sets the plucked value as `undefined`.
* -   Extracted values are not cloned.
*
* @param arr - source array
* @param path - key path
* @param options - function options
* @param options.copy - boolean indicating whether to return a new data structure (default: true)
* @param options.sep - key path separator (default: '.')
* @returns destination array
*
* @example
* var arr = [
*     {'a':{'b':{'c':1}}},
*     {'a':{'b':{'c':2}}}
* ];
*
* var out = deepPluck( arr, 'a.b.c' );
* // returns [ 1, 2 ]
*
* @example
* var arr = [
*     {'a':[0,1,2]},
*     {'a':[3,4,5]}
* ];
*
* var out = deepPluck( arr, ['a',1] );
* // returns [ 1, 4 ]
*
* @example
* var arr = [
*     {'a':{'b':{'c':1}}},
*     {'a':{'b':{'c':2}}}
* ];
*
* var out = deepPluck( arr, 'a.b.c', {'copy':false} );
* // returns [ 1, 2 ]
*
* var bool = ( arr[ 0 ] === out[ 0 ] );
* // returns true
*
* @example
* var arr = [
*     {'a':{'b':{'c':1}}},
*     {'a':{'b':{'c':2}}}
* ];
*
* var out = deepPluck( arr, 'a|b|c', {'sep':'|'} );
* // returns [ 1, 2 ]
*/
declare function deepPluck( arr: Array<any>, path: Array<any> | string, options?: Options ): Array<any>; // tslint-disable-line max-line-length


// EXPORTS //

export = deepPluck;
