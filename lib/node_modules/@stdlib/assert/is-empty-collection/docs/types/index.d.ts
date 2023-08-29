/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import { Collection } from '@stdlib/types/object';

/**
* Tests if a value is an empty collection.
*
* @param value - value to test
* @returns boolean indicating whether value is an empty collection
*
* @example
* var bool = isEmptyCollection( [] );
* // returns true
*
* @example
* var bool = isEmptyCollection( { 'length': 0 } );
* // returns true
*
* @example
* var bool = isEmptyCollection( [ 1, 2, 3 ] );
* // returns false
*
* @example
* var bool = isEmptyCollection( {} );
* // returns false
*/
declare function isEmptyCollection( value: any ): value is Collection;


// EXPORTS //

export = isEmptyCollection;
