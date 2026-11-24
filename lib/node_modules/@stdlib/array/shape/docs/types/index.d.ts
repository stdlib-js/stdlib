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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Determines (nested) array dimensions.
*
* @param arr - array
* @returns array shape
*
* @example
* var arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
*
* var sh = arrayShape( arr );
* // returns [ 3, 3 ]
*
* @example
* var arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ];
*
* var sh = arrayShape( arr );
* // returns [ 3 ]
*
* @example
* var arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], null ];
*
* var sh = arrayShape( arr );
* // returns [ 3 ]
*/
declare function arrayShape( arr: ArrayLike<any> ): Array<number>;


// EXPORTS //

export = arrayShape;
