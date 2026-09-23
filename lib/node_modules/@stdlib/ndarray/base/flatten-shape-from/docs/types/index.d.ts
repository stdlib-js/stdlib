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

import { Collection } from '@stdlib/types/array';

/**
* Flattens a shape starting from a specified dimension.
*
* @param shape - array shape
* @param dim - dimension to start flattening from
* @returns flattened shape
*
* @example
* var sh = flattenShapeFrom( [ 3, 3, 2 ], 1 );
* // returns [ 3, 6 ]
*
* sh = flattenShapeFrom( [ 3, 2, 1 ], 1 );
* // returns [ 3, 2 ]
*
* sh = flattenShapeFrom( [ 3 ], 0 );
* // returns [ 3 ]
*
* sh = flattenShapeFrom( [ 3, 2 ], 0 );
* // returns [ 6 ]
*/
declare function flattenShapeFrom( shape: Collection<number>, dim: number ): Array<number>;


// EXPORTS //

export = flattenShapeFrom;
