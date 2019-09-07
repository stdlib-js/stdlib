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
	* Boolean indicating whether to store duplicate keys.
	*/
	duplicates?: boolean;
}

/**
* Returns a value for an object element that can be serialized as an object key.
*
* @returns key in inverted object
*/
type Nullary = () => string;

/**
* Returns a value for an object element that can be serialized as an object key.
*
* @param key - object key
* @returns key in inverted object
*/
type Unary = ( key: string ) => string;

/**
* Returns a value for an object element that can be serialized as an object key.
*
* @param key - object key
* @param value - object value corresponding to `key`
* @returns key in inverted object
*/
type Binary = ( key: string, value: any ) => string;

/**
* Returns a value for an object element that can be serialized as an object key.
*
* @param key - object key
* @param value - object value corresponding to `key`
* @param obj - the input object
* @returns key in inverted object
*/
type Tertiary = ( key: string, value: any, obj: any ) => string;

/**
* Returns a value for an object element that can be serialized as an object key.
*
* @param key - object key
* @param value - object value corresponding to `key`
* @param obj - the input object
* @returns key in inverted object
*/
type Transform = Nullary | Unary | Binary | Tertiary;

/**
* Inverts an object, such that keys become values and values become keys, according to a transform function.
*
* ## Notes
*
* -   The transform function is provided three arguments:
*
*     -   `key`: object key
*     -   `value`: object value corresponding to `key`
*     -   `obj`: the input object
*
* -   The value returned by a transform function should be a value which can be serialized as an object key. Hence, beware when providing objects having values which are themselves objects. The function relies on native object serialization (`#toString`) when converting transform function return values to keys.
*
* -   Insertion order is not guaranteed, as object key enumeration is not specified according to the ECMAScript specification. In practice, however, most engines use insertion order to sort an object's keys, thus allowing for deterministic inversion.
*
* @param obj - input object
* @param transform - transform function
* @returns inverted object
*
* @example
* function transform( key, value ) {
*     return key + value;
* }
* var obj = {
*     'a': 'beep',
*     'b': 'boop'
* };
* var out = invertBy( obj, transform );
* // returns { 'abeep': 'a', 'bboop': 'b' }
*
* @example
* function transform( key, value ) {
*     return value;
* }
* var obj = {
*     'a': 'beep',
*     'b': 'beep'
* };
* var out = invertBy( obj, transform );
* // returns { 'beep': [ 'a', 'b' ] }
*/
declare function invertBy( obj: any, transform: Transform ): any;

/**
* Inverts an object, such that keys become values and values become keys, according to a transform function.
*
* ## Notes
*
* -   The transform function is provided three arguments:
*
*     -   `key`: object key
*     -   `value`: object value corresponding to `key`
*     -   `obj`: the input object
*
* -   The value returned by a transform function should be a value which can be serialized as an object key. Hence, beware when providing objects having values which are themselves objects. The function relies on native object serialization (`#toString`) when converting transform function return values to keys.
*
* -   Insertion order is not guaranteed, as object key enumeration is not specified according to the ECMAScript specification. In practice, however, most engines use insertion order to sort an object's keys, thus allowing for deterministic inversion.
*
* @param obj - input object
* @param opts - function options
* @param opts.duplicates - boolean indicating whether to store duplicate keys (default: true)
* @param transform - transform function
* @returns inverted object
*
* @example
* function transform( key, value ) {
*     return value;
* }
*
* var obj = {};
* obj.a = 'beep';
* obj.b = 'boop';
* obj.c = 'beep'; // inserted after `a`
*
* var opts = {
*     'duplicates': false
* };
* var out = invertBy( obj, opts, transform );
* // returns { 'beep': 'c', 'boop': 'b' }
*/
declare function invertBy( obj: any, options: Options, transform: Transform ): any; // tslint-disable-line max-line-length


// EXPORTS //

export = invertBy;
