/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';
import { PropertyName } from '@stdlib/types/object';

/**
* Tests whether at least one element in a provided array has a specified own property.
*
* @param arr - input array
* @param prop - property
* @returns result
*
* @example
* var o1 = {
*     'a': 1
* };
* var o2 = {
*     'b': 2
* };
* var o3 = {
*     'c': 3
* };
*
* var bool = anyHasOwnProp( [ o1, o2, o3 ], 'b' );
* // returns true
*
* bool = anyHasOwnProp( [ o1, o2, o3 ], 'd' );
* // returns false
*
* bool = anyHasOwnProp( [ o1, o2, o3 ], 'toString' );
* // returns false
*/
declare function anyHasOwnProp( arr: Collection<unknown> | AccessorArrayLike<unknown>, prop: PropertyName | number ): boolean;


// EXPORTS //

export = anyHasOwnProp;
