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
* Defines a configurable read-only accessor.
*
* ## Notes
*
* -   Configurable read-only accessors are **enumerable**.
*
* @param obj - object on which to define property
* @param prop - property name
* @param getter - get accessor
*
* @example
* var obj = {};
*
* function getter() {
*     return 'bar';
* }
*
* setConfigurableReadOnlyAccessor( obj, 'foo', getter );
*
* try {
*     obj.foo = 'boop';
* } catch ( err ) {
*     console.error( err.message );
* }
*/
declare function setConfigurableReadOnlyAccessor( obj: any, prop: PropertyName, getter: Getter ): void; // tslint:disable-line: max-line-length


// EXPORTS //

export = setConfigurableReadOnlyAccessor;
