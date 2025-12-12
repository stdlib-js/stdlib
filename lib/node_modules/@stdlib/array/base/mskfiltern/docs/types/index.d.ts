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
* Returns new arrays by applying a mask to a provided input array in a single pass.
*
* @param x - first input array
* @param mask - mask array
* @returns output arrays
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var out = mskfiltern( x, mask );
* // returns [ [ 2, 4 ] ]
*/
declare function mskfiltern<T = unknown>( x: Collection<T>, mask: Collection ): [ Array<T> ];

/**
* Returns new arrays by applying a mask to two provided input arrays in a single pass.
*
* @param x - first input array
* @param y - second input array
* @param mask - mask array
* @returns output arrays
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var out = mskfiltern( x, y, mask );
* // returns [ [ 2, 4 ], [ 6, 8 ] ]
*/
declare function mskfiltern<T = unknown, U = unknown>( x: Collection<T>, y: Collection<U>, mask: Collection ): [ Array<T>, Array<U> ];

/**
* Returns new arrays by applying a mask to three provided input arrays in a single pass.
*
* @param x - first input array
* @param y - second input array
* @param z - third input array
* @param mask - mask array
* @returns output arrays
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
* var z = [ 1, 1, 1, 1 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var out = mskfiltern( x, y, z, mask );
* // returns [ [ 2, 4 ], [ 6, 8 ], [ 1, 1 ] ]
*/
declare function mskfiltern<T = unknown, U = unknown, V = unknown>( x: Collection<T>, y: Collection<U>, z: Collection<V>, mask: Collection ): [ Array<T>, Array<U>, Array<V> ];

/**
* Returns new arrays by applying a mask to four provided input arrays in a single pass.
*
* @param x - first input array
* @param y - second input array
* @param z - third input array
* @param u - fourth input array
* @param mask - mask array
* @returns output arrays
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
* var z = [ 1, 1, 1, 1 ];
* var u = [ 0, 0, 0, 0 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var out = mskfiltern( x, y, z, u, mask );
* // returns [ [ 2, 4 ], [ 6, 8 ], [ 1, 1 ], [ 0, 0 ] ]
*/
declare function mskfiltern<T = unknown, U = unknown, V = unknown, W = unknown>( x: Collection<T>, y: Collection<U>, z: Collection<V>, u: Collection<W>, mask: Collection ): [ Array<T>, Array<U>, Array<V>, Array<W> ];

/**
* Returns new arrays by applying a mask to five provided input arrays in a single pass.
*
* @param x - first input array
* @param y - second input array
* @param z - third input array
* @param u - fourth input array
* @param v - fifth input array
* @param mask - mask array
* @returns output arrays
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
* var z = [ 1, 1, 1, 1 ];
* var u = [ 0, 0, 0, 0 ];
* var v = [ 1, 2, 3, 4 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var out = mskfiltern( x, y, z, u, v, mask );
* // returns [ [ 2, 4 ], [ 6, 8 ], [ 1, 1 ], [ 0, 0 ], [ 2, 4 ] ]
*/
declare function mskfiltern<T = unknown, U = unknown, V = unknown, W = unknown, S = unknown>( x: Collection<T>, y: Collection<U>, z: Collection<V>, u: Collection<W>, v: Collection<S>, mask: Collection ): [ Array<T>, Array<U>, Array<V>, Array<W>, Array<S> ];

/**
* Returns new arrays by applying a mask to one or more provided input arrays in a single pass.
*
* @param x - first input array
* @param y - second input array (or mask)
* @param arrays - additional input arrays and mask
* @returns output arrays
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var out = mskfiltern( x, y, mask );
* // returns [ [ 2, 4 ], [ 6, 8 ] ]
*/
declare function mskfiltern<T = unknown, U = unknown>( x: Collection<T>, y: Collection, ...arrays: Array<U> ): Array<Array<T|U>>;


// EXPORTS //

export = mskfiltern;
