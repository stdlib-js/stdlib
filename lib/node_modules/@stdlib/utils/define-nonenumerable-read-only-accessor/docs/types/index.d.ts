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
* Getter function.
*
* @returns property value
*/
type Getter = () => any;

/**
* Defines a non-enumerable read-only accessor.
*
* ## Notes
*
* -   Non-enumerable read-only accessors are non-configurable.
*
* @param obj - object on which to define the property
* @param prop - property name
* @param getter - accessor
*
* @example
* function getter() {
*     return 'bar';
* }
*
* var obj = {};
*
* setNonEnumerableReadOnlyAccessor( obj, 'foo', getter );
*
* try {
*     obj.foo = 'boop';
* } catch ( err ) {
*     console.error( err.message );
* }
*/
declare function setNonEnumerableReadOnlyAccessor( obj: any, prop: PropertyName, getter: Getter ): void; // tslint:disable-line: max-line-length


// EXPORTS //

export = setNonEnumerableReadOnlyAccessor;
