/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { Array1D, Array2D, Array3D, Array4D, Array5D, Array6D, Array7D, Array8D, Array9D, Array10D } from '@stdlib/types/array';

/**
* Returns an element from a ten-dimensional nested array.
*
* @param x - input array
* @param i0 - first dimension index
* @param i1 - second dimension index
* @param i2 - third dimension index
* @param i3 - fourth dimension index
* @param i4 - fifth dimension index
* @param i5 - sixth dimension index
* @param i6 - seventh dimension index
* @param i7 - eighth dimension index
* @param i8 - ninth dimension index
* @param i9 - tenth dimension index
* @returns nested array element
*
* @example
* var x = [ [ [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ] ] ];
*
* var v = atnd( x, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 );
* // returns 2
*
* v = atnd( x, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 );
* // returns 3
*
* v = atnd( x, -1, -1, -1, -1, -1, -1, -1, -1, -2, -2 );
* // returns 1
*/
declare function atnd<T = unknown>( x: Array10D<T>, i0: number, i1: number, i2: number, i3: number, i4: number, i5: number, i6: number, i7: number, i8: number, i9: number ): T | void;

/**
* Returns an element from a nine-dimensional nested array.
*
* @param x - input array
* @param i0 - first dimension index
* @param i1 - second dimension index
* @param i2 - third dimension index
* @param i3 - fourth dimension index
* @param i4 - fifth dimension index
* @param i5 - sixth dimension index
* @param i6 - seventh dimension index
* @param i7 - eighth dimension index
* @param i8 - ninth dimension index
* @returns nested array element
*
* @example
* var x = [ [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ] ];
*
* var v = atnd( x, 0, 0, 0, 0, 0, 0, 0, 0, 1 );
* // returns 2
*
* v = atnd( x, 0, 0, 0, 0, 0, 0, 0, 1, 0 );
* // returns 3
*
* v = atnd( x, -1, -1, -1, -1, -1, -1, -1, -2, -2 );
* // returns 1
*/
declare function atnd<T = unknown>( x: Array9D<T>, i0: number, i1: number, i2: number, i3: number, i4: number, i5: number, i6: number, i7: number, i8: number ): T | void;

/**
* Returns an element from an eight-dimensional nested array.
*
* @param x - input array
* @param i0 - first dimension index
* @param i1 - second dimension index
* @param i2 - third dimension index
* @param i3 - fourth dimension index
* @param i4 - fifth dimension index
* @param i5 - sixth dimension index
* @param i6 - seventh dimension index
* @param i7 - eighth dimension index
* @returns nested array element
*
* @example
* var x = [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ];
*
* var v = atnd( x, 0, 0, 0, 0, 0, 0, 0, 1 );
* // returns 2
*
* v = atnd( x, 0, 0, 0, 0, 0, 0, 1, 0 );
* // returns 3
*
* v = atnd( x, -1, -1, -1, -1, -1, -1, -2, -2 );
* // returns 1
*/
declare function atnd<T = unknown>( x: Array8D<T>, i0: number, i1: number, i2: number, i3: number, i4: number, i5: number, i6: number, i7: number ): T | void;

/**
* Returns an element from a seven-dimensional nested array.
*
* @param x - input array
* @param i0 - first dimension index
* @param i1 - second dimension index
* @param i2 - third dimension index
* @param i3 - fourth dimension index
* @param i4 - fifth dimension index
* @param i5 - sixth dimension index
* @param i6 - seventh dimension index
* @returns nested array element
*
* @example
* var x = [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ];
*
* var v = atnd( x, 0, 0, 0, 0, 0, 0, 1 );
* // returns 2
*
* v = atnd( x, 0, 0, 0, 0, 0, 1, 0 );
* // returns 3
*
* v = atnd( x, -1, -1, -1, -1, -1, -2, -2 );
* // returns 1
*/
declare function atnd<T = unknown>( x: Array7D<T>, i0: number, i1: number, i2: number, i3: number, i4: number, i5: number, i6: number ): T | void;

/**
* Returns an element from a six-dimensional nested array.
*
* @param x - input array
* @param i0 - first dimension index
* @param i1 - second dimension index
* @param i2 - third dimension index
* @param i3 - fourth dimension index
* @param i4 - fifth dimension index
* @param i5 - sixth dimension index
* @returns nested array element
*
* @example
* var x = [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ];
*
* var v = atnd( x, 0, 0, 0, 0, 0, 1 );
* // returns 2
*
* v = atnd( x, 0, 0, 0, 0, 1, 0 );
* // returns 3
*
* v = atnd( x, -1, -1, -1, -1, -2, -2 );
* // returns 1
*/
declare function atnd<T = unknown>( x: Array6D<T>, i0: number, i1: number, i2: number, i3: number, i4: number, i5: number ): T | void;

/**
* Returns an element from a five-dimensional nested array.
*
* @param x - input array
* @param i0 - first dimension index
* @param i1 - second dimension index
* @param i2 - third dimension index
* @param i3 - fourth dimension index
* @param i4 - fifth dimension index
* @returns nested array element
*
* @example
* var x = [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ];
*
* var v = atnd( x, 0, 0, 0, 0, 1 );
* // returns 2
*
* v = atnd( x, 0, 0, 0, 1, 0 );
* // returns 3
*
* v = atnd( x, -1, -1, -1, -2, -2 );
* // returns 1
*/
declare function atnd<T = unknown>( x: Array5D<T>, i0: number, i1: number, i2: number, i3: number, i4: number ): T | void;

/**
* Returns an element from a four-dimensional nested array.
*
* @param x - input array
* @param i0 - first dimension index
* @param i1 - second dimension index
* @param i2 - third dimension index
* @param i3 - fourth dimension index
* @returns nested array element
*
* @example
* var x = [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ];
*
* var v = atnd( x, 0, 0, 0, 1 );
* // returns 2
*
* v = atnd( x, 0, 0, 1, 0 );
* // returns 3
*
* v = atnd( x, -1, -1, -2, -2 );
* // returns 1
*/
declare function atnd<T = unknown>( x: Array4D<T>, i0: number, i1: number, i2: number, i3: number ): T | void;

/**
* Returns an element from a three-dimensional nested array.
*
* @param x - input array
* @param i0 - first dimension index
* @param i1 - second dimension index
* @param i2 - third dimension index
* @returns nested array element
*
* @example
* var x = [ [ [ 1, 2 ], [ 3, 4 ] ] ];
*
* var v = atnd( x, 0, 0, 1 );
* // returns 2
*
* v = atnd( x, 0, 1, 0 );
* // returns 3
*
* v = atnd( x, -1, -2, -2 );
* // returns 1
*/
declare function atnd<T = unknown>( x: Array3D<T>, i0: number, i1: number, i2: number ): T | void;

/**
* Returns an element from a two-dimensional nested array.
*
* @param x - input array
* @param i0 - first dimension index
* @param i1 - second dimension index
* @returns nested array element
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var v = atnd( x, 0, 1 );
* // returns 2
*
* v = atnd( x, 1, 0 );
* // returns 3
*
* v = atnd( x, -2, -2 );
* // returns 1
*/
declare function atnd<T = unknown>( x: Array2D<T>, i0: number, i1: number ): T | void;

/**
* Returns an element from a one-dimensional nested array.
*
* @param x - input array
* @param i0 - first dimension index
* @returns nested array element
*
* @example
* var x = [ 1, 2 ];
*
* var v = atnd( x, 1 );
* // returns 2
*
* v = atnd( x, 0 );
* // returns 1
*
* v = atnd( x, -2 );
* // returns 1
*/
declare function atnd<T = unknown>( x: Array1D<T>, i0: number ): T | void;

/**
* Returns an element from an n-dimensional nested array.
*
* @param x - input array
* @param i0 - first dimension index
* @param indices - dimension indices
* @returns nested array element
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var v = atnd( x, 0, 1 );
* // returns 2
*
* v = atnd( x, 1, 0 );
* // returns 3
*
* v = atnd( x, -2, -2 );
* // returns 1
*/
declare function atnd<T = unknown, U = unknown>( x: Array<T>, i0: number, ...indices: Array<number> ): U | void;


// EXPORTS //

export = atnd;
