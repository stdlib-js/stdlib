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
* Returns the shape defined by the dimensions which are not included in a list of dimensions.
*
* @param shape - array shape
* @param dims - list of dimensions
* @returns output shape
*
* @example
* var sh = complementShape( [ 3, 2 ], [ -1 ] );
* // returns [ 3 ]
*
* sh = complementShape( [ 3, 2, 1 ], [ -2 ] );
* // returns [ 3, 1 ]
*
* sh = complementShape( [ 3 ], [ 0 ] );
* // returns []
*
* sh = complementShape( [ 3, 2 ], [ 0 ] );
* // returns [ 2 ]
*
* sh = complementShape( [ 3 ], [ 0 ] );
* // returns []
*
* sh = complementShape( [], [] );
* // returns []
*/
declare function complementShape( shape: Collection<number>, dims: Collection<number> ): Array<number>;


// EXPORTS //

export = complementShape;
