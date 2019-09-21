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

/// <reference types="@stdlib/types"/>

/**
* Merge strategy.
*
* @returns merged value
*/
type Nullary = () => any;

/**
* Merge strategy.
*
* @param a - target value
* @returns merged value
*/
type Unary = ( a: any ) => any;

/**
* Merge strategy.
*
* @param a - target value
* @param b - source value
* @returns merged value
*/
type Binary = ( a: any, b: any ) => any;

/**
* Merge strategy.
*
* @param a - target value
* @param b - source value
* @param key - object key
* @returns merged value
*/
type Tertiary = ( a: any, b: any, key: string | symbol ) => any;

/**
* Merge strategy.
*
* @param a - target value
* @param b - source value
* @param key - object key
* @returns merged value
*/
type MergeStrategy = Nullary | Unary | Binary | Tertiary;

/**
* Merges objects into a target object.
*
* ## Notes
*
* -   The target object is mutated.
*
* @param target - target object
* @param source - source objects (i.e., objects to be merged into the target object)
* @returns merged (target) object
*/
type MergeFunction = ( target: any, ...source: Array<any> ) => any;

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Merge level.
	*/
	level?: number;

	/**
	* Boolean indicating whether to deep copy merged values.
	*/
	copy?: boolean;

	/**
	* Defines the merge strategy.
	*/
	override?: boolean | MergeStrategy;

	/**
	* Boolean indicating whether new properties can be added to the target object.
	*/
	extend?: boolean;
}

/**
* Interface for merging objects.
*/
interface Merge {
	/**
	* Merges objects into a target object.
	*
	* ## Notes
	*
	* -   The target object is mutated.
	*
	* @param target - target object
	* @param source - source objects (i.e., objects to be merged into the target object)
	* @returns merged (target) object
	*
	* @example
	* var target = {
	*     'a': 'beep'
	* };
	* var source = {
	*     'a': 'boop',
	*     'b': 'bap'
	* };
	*
	* var out = merge( target, source );
	* // returns {'a':'boop', 'b':'bap'}
	*/
	( target: any, ...source: Array<any> ): any;

	/**
	* Returns a function for merging and extending objects.
	*
	* @param options - merge options
	* @param options.level - merge level (default: Infinity)
	* @param options.copy - boolean indicating whether to deep copy merged values (default: true)
	* @param options.override - defines the merge strategy (default: true)
	* @param options.extend - boolean indicating whether new properties can be added to the target object (default: true)
	* @returns function which can be used to merge objects
	*
	* @example
	* var opts = {
	*     'level': 100,
	*     'copy': true,
	*     'override': true,
	*     'extend': true
	* };
	*
	* var mergefcn = merge.factory( opts );
	* // returns <Function>
	*/
	factory( options: Options ): MergeFunction;
}

/**
* Merges objects into a target object.
*
* ## Notes
*
* -   The target object is mutated.
*
* @param target - target object
* @param source - source objects (i.e., objects to be merged into the target object)
* @returns merged (target) object
*
* @example
* var target = {
*     'a': 'beep'
* };
* var source = {
*     'a': 'boop',
*     'b': 'bap'
* };
*
* var out = merge( target, source );
* // returns {'a':'boop', 'b':'bap'}
*
* @example
* var opts = {
*     'level': 100,
*     'copy': true,
*     'override': true,
*     'extend': true
* };
*
* var mergefcn = merge.factory( opts );
* // returns <Function>
*/
declare var merge: Merge;


// EXPORTS //

export = merge;
