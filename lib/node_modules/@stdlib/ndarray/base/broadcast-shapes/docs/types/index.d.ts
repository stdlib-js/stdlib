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

import { ArrayLike } from '@stdlib/types/array';

/**
* Broadcasts array shapes to a single shape.
*
* ## Notes
*
* -   Two respective dimensions in two shape arrays are compatible if
*
*     1.  the dimensions are equal.
*     2.  one dimension is `1`.
*
* -   The function returns `null` if provided incompatible shapes (i.e., shapes which cannot be broadcast with one another).
*
* @param shapes - array shapes
* @returns broadcast shape
*
* @example
* var shapes = [
*     [ 8, 1, 6, 1 ],
*     [ 7, 1, 5 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 8, 7, 6, 5 ]
*
* @example
* var shapes = [
*     [ 5, 4 ],
*     [ 1 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 5, 4 ]
*
* @example
* var shapes = [
*     [ 5, 4 ],
*     [ 4 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 5, 4 ]
*
* @example
* var shapes = [
*     [ 15, 3, 5 ],
*     [ 15, 1, 5 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 15, 3, 5 ]
*
* @example
* var shapes = [
*     [ 15, 3, 5 ],
*     [ 3, 5 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 15, 3, 5 ]
*
* @example
* var shapes = [
*     [ 15, 3, 5 ],
*     [ 3, 1 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 15, 3, 5 ]
*
* @example
* var shapes = [
*     [ 8, 1, 1, 6, 1 ],
*     [ 1, 7, 1, 5 ],
*     [ 8, 4, 1, 6, 5 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 8, 4, 7, 6, 5 ]
*
* @example
* var shapes = [
*     [ 8, 1, 1, 6, 1 ],
*     [ 0 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 8, 1, 1, 6, 0 ]
*
* @example
* var shapes = [
*     [ 8, 1, 1, 6, 1 ],
*     [ 8, 0, 1, 6, 1 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 8, 0, 1, 6, 1 ]
*
* @example
* var shapes = [
*     [ 8, 8, 1, 6, 1 ],
*     [ 8, 0, 1, 6, 1 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns null
*
* @example
* var shapes = [
*     []
* ];
*
* var out = broadcastShapes( shapes );
* // returns []
*
* @example
* var shapes = [
*     [],
*     []
* ];
*
* var out = broadcastShapes( shapes );
* // returns []
*
* @example
* var shapes = [];
*
* var out = broadcastShapes( shapes );
* // returns []
*
* @example
* var shapes = [
*     [ 3, 2, 1 ],
*     []
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 3, 2, 1 ]
*
* @example
* var shapes = [
*     [],
*     [ 3, 2, 1 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 3, 2, 1 ]
*/
declare function broadcastShapes( shapes: ArrayLike<ArrayLike<number>> ): ArrayLike<number>; // tslint:disable-line:max-line-length


// EXPORTS //

export = broadcastShapes;
