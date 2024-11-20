/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { BooleanArray } from '@stdlib/types/array';

/**
* Tests if a value is a BooleanArray.
*
* @param value - value to test
* @returns boolean indicating whether a value is a BooleanArray
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var bool = isBooleanArray( new BooleanArray( 10 ) );
* // returns true
*
* @example
* var bool = isBooleanArray( [] );
* // returns false
*/
declare function isBooleanArray( value: any ): value is BooleanArray;


// EXPORTS //

export = isBooleanArray;
