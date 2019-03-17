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

import { PropertyName, DataPropertyDescriptor } from '@stdlib/types/object';

/**
* Interface describing the property descriptor object for creating a memoized object property.
*
* @example
* function foo() {
*     return 'bar';
* }
*
* var desc: PropertyDescriptor =  {
*     'configurable': false,
*     'enumerable': false,
*     'writable': false,
*     'value': foo
* };
*/
interface PropertyDescriptor extends DataPropertyDescriptor {
	/**
	* Returns a memoized property value.
	*
	* @returns memoized property value
	*/
	value(): any;
}

/**
* Defines a memoized object property.
*
* @param obj - object on which to define property
* @param prop - property name
* @param desc - property descriptor
*
* @example
* var obj = {};
*
* function foo() {
*     return 'bar';
* }
*
* defineMemoizedProperty( obj, 'foo', {
*     'configurable': false,
*     'enumerable': false,
*     'writable': false,
*     'value': foo
* });
*
* var v = obj.foo;
* // returns 'bar'
*/
declare function defineMemoizedProperty( obj: any, prop: PropertyName, desc: PropertyDescriptor ): void; // tslint:disable-line: max-line-length


// EXPORTS //

export = defineMemoizedProperty;
