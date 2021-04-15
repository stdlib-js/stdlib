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
* Returns the data type enumeration constant for a provided ndarray data buffer.
*
* @param arr - strided array
* @returns data type enumeration constant or null
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( 10 );
*
* var c = dtypeEnum( x );
* // returns <number>
*/
declare function dtypeEnum( arr: Collection ): number | null;


// EXPORTS //

export = dtypeEnum;
