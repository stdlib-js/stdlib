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
* Setter function.
*
* @param value - property value
*/
type Setter = ( x: any ) => void;

/**
* Defines a write-only accessor.
*
* ## Notes
*
* -   Write-only accessors are enumerable and non-configurable.
*
* @param obj - object on which to define the property
* @param prop - property name
* @param setter - accessor
*
* @example
* var obj = {};
* var val = '';
*
* function setter( v ) {
*     val = v;
* }
*
* setWriteOnlyAccessor( obj, 'foo', setter );
*
* obj.foo = 'beep';
*/
declare function setWriteOnlyAccessor( obj: any, prop: PropertyName, setter: Setter ): void; // tslint:disable-line: max-line-length


// EXPORTS //

export = setWriteOnlyAccessor;
