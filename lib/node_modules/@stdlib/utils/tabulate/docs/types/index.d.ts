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

import { Collection } from '@stdlib/types/object';

/**
* Generates a frequency table.
*
* ## Notes
*
* -   The output is an array of arrays. Each sub-array corresponds to a unique value in the input collection and is structured as follows:
*
*     -   0: unique value
*     -   1: value count
*     -   2: frequency percentage
*
* -   If provided an empty collection, the function returns an empty array.
*
* @param collection - input collection
* @returns frequency table
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'beep' ];
*
* var out = tabulate( arr );
* // returns [ [ 'beep', 2, 0.5 ], [ 'boop', 1, 0.25 ], [ 'foo', 1, 0.25 ] ]
*/
declare function tabulate( collection: Collection ): Array<Array<any>>;


// EXPORTS //

export = tabulate;
