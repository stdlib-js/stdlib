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
* Parses a string-serialized MultiSlice object.
*
* ## Notes
*
* -   The function returns `null` if provided an invalid string.
*
* @param str - input string
* @returns MultiSlice object (or null)
*
* var s = str2multislice( 'MultiSlice(null,null,null)' );
* // returns <MultiSlice>
*
* var v = s.data;
* // returns [ null, null, null ]
*
* @example
* var s = str2multislice( 'MultiSlice(10,Slice(0,10,1),null)' );
* // returns <MultiSlice>
*
* var v = s.data;
* // returns [ 10, <Slice>, null ]
*
* @example
* var s = str2multislice( 'MultiSlice(foo,bar)' );
* // returns null
*/
declare function str2multislice( str: string ): MultiSlice | null;


// EXPORTS //

export = str2multislice;
