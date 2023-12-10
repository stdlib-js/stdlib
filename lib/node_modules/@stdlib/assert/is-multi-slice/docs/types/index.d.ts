/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { MultiSlice } from '@stdlib/types/slice';

/**
* Tests if a value is a MultiSlice object.
*
* @param value - value to test
* @returns boolean indicating if a value is a MultiSlice object
*
* @example
* var Slice = require( `@stdlib/slice/ctor` );
* var MultiSlice = require( `@stdlib/slice/multi` );
*
* var s = new MultiSlice( new Slice( 0, 10, 1 ), null, 1 );
*
* var bool = isMultiSlice( s );
* // returns true
*/
declare function isMultiSlice( value: any ): value is MultiSlice;


// EXPORTS //

export = isMultiSlice;
