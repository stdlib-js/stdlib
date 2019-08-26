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

interface Options {
	/**
	* Boolean indicating whether to deep copy.
	*/
	copy?: boolean;

	/**
	* Maximum depth to flatten.
	*/
	depth?: number;

	/**
	* Boolean indicating whether to flatten arrays.
	*/
	flattenArrays?: boolean;

	/**
	* Key path delimiter.
	*/
	delimiter?: string;
}

/**
* Flattens an object.
*
* @param obj - object to flatten
* @returns flattened object
*/
type Unary = ( obj: any ) => any;

/**
* Interface for the flattenObject function.
*/
interface FlattenObject {
	/**
	* Flattens an object.
	*
	* @param obj - object to flatten
	* @param options - function options
	* @param options.depth - maximum depth to flatten
	* @param options.copy - boolean indicating whether to deep copy (default: false)
	* @param options.flattenArrays - boolean indicating whether to flatten arrays (default: false)
	* @param options.delimiter - key path delimiter (default: '.')
	* @returns flattened object
	*
	* @example
	* var obj = {'a':{'b':{'c':'d'}}};
	*
	* var out = flattenObject( obj );
	* // returns {'a.b.c':'d'}
	*/
	( obj: any, options?: Options ): any;

	/**
	* Returns a function to flatten an object.
	*
	* @param options - function options
	* @param options.depth - maximum depth to flatten
	* @param options.copy - boolean indicating whether to deep copy (default: false)
	* @param options.flattenArrays - boolean indicating whether to flatten arrays (default: false)
	* @param options.delimiter - key path delimiter (default: '.')
	* @returns flatten function
	*
	* @example
	* var flatten = flattenObject.factory({
	*     'copy': true,
	*     'delimiter': '|'
	* });
	*
	* var obj = {'a':{'b':{'c':'d'}}};
	* var out = flatten( obj );
	* // returns {'a|b|c':'d'}
	*/
	factory( options?: Options ): Unary;
}

/**
* Flatten an object.
*
* @param obj - object to flatten
* @param options - function options
* @param options.depth - maximum depth to flatten
* @param options.copy - boolean indicating whether to deep copy (default: false)
* @param options.flattenArrays - boolean indicating whether to flatten arrays (default: false)
* @param options.delimiter - key path delimiter (default: '.')
* @returns flattened object
*
* @example
* var obj = {'a':{'b':{'c':'d'}}};
*
* var out = flattenObject( obj );
* // returns {'a.b.c':'d'}
*
* @example
* var flatten = flattenObject.factory({
*     'depth': 2,
*     'copy': true,
*     'delimiter': '|'
* });
*
* var obj = {'a':{'b':{'c':'d'}}};
*
* var out = flatten( obj );
* // returns {'a|b':{'c':'d'}}
*/
declare var flattenObject: FlattenObject;


// EXPORTS //

export = flattenObject;
