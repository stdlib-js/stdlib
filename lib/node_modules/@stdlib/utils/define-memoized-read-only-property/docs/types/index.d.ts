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

import { PropertyName } from '@stdlib/types/object';

/**
* Returns a property value.
*
* @returns property value
*/
type Getter = () => any;

/**
* Defines a memoized read-only object property.
*
* ## Notes
*
* -   Read-only properties are **enumerable** and **non-configurable**.
*
* @param obj - object on which to define property
* @param prop - property name
* @param fcn - function whose return value will be memoized and set as the property value
*
* @example
* var obj = {};
*
* function foo() {
*     return 'bar';
* }
*
* setMemoizedReadOnly( obj, 'foo', foo );
*
* var v = obj.foo;
* // returns 'bar'
*/
declare function setMemoizedReadOnly( obj: any, prop: PropertyName, fcn: Getter ): void; // tslint:disable-line: max-line-length


// EXPORTS //

export = setMemoizedReadOnly;
