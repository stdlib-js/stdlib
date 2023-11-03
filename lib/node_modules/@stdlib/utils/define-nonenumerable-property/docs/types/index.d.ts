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

/**
* Defines a non-enumerable property.
*
* ## Notes
*
* -   Non-enumerable properties are writable and configurable.
*
* @param obj - object on which to define the property
* @param prop - property name
* @param value - value to set
*
* @example
* var objectKeys = require( `@stdlib/utils/keys` );
*
* var obj = {};
*
* setNonEnumerableProperty( obj, 'foo', 'bar' );
*
* var v = obj.foo;
* // returns 'bar'
*
* var keys = objectKeys( obj );
* // returns []
*/
declare function setNonEnumerableProperty( obj: any, prop: PropertyName, value: any ): void;


// EXPORTS //

export = setNonEnumerableProperty;
