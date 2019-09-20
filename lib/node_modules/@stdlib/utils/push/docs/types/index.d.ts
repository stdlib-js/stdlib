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
* Adds one or more elements to the end of a collection.
*
* ## Notes
*
* -   If the input collection is a typed array, the output value does not equal the input reference and the underlying `ArrayBuffer` may *not* be the same as the `ArrayBuffer` belonging to the input view.
* -   For purposes of generality, always treat the output collection as distinct from the input collection.
*
* @param collection - collection
* @param items - items to add
* @returns updated collection
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
*
* arr = push( arr, 6.0, 7.0 );
* // returns [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* arr = push( arr, 6.0, 7.0 );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*/
declare function push( collection: Collection, ...items: Array<any> ): Collection; // tslint-disable-line max-line-length


// EXPORTS //

export = push;
