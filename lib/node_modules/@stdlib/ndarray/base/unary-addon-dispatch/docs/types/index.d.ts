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
import { ndarray, typedndarray } from '@stdlib/types/ndarray';

/**
* Add-on function.
*
* @param xbuf - input ndarray data buffer
* @param metaX - input ndarray meta data
* @param ybuf - output ndarray data buffer
* @param metaY - output ndarray meta data
*
* @example
* function addon( xbuf, metaX, ybuf, metaY ) {
*     // Call into native add-on...
* }
*/
type AddonFcn<T, U, V> = ( xbuf: Collection<T>, metaX: DataView, ybuf: Collection<U>, metaY: DataView ) => V;

/**
* Fallback function.
*
* @param x - input ndarray
* @param y - output ndarray
*
* @example
* function fallback( x, y ) {
*     // Fallback JavaScript implementation...
* }
*/
type FallbackFcn<T extends ndarray, U extends ndarray, V> = ( x: T, y: U ) => V;

/**
* Dispatches to a native add-on.
*
* @param x - input ndarray
* @param y - output ndarray
* @returns output ndarray
*/
type Dispatcher<T extends ndarray, U extends ndarray> = ( x: T, y: U ) => U;

/**
* Returns a function which dispatches to a native add-on applying a unary function to an input ndarray.
*
* @param addon - add-on function
* @param fallback - fallback function
* @returns dispatch function
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* function addon( x, metaX, y, metaY ) {
*     // Call into native add-on...
* }
*
* function fallback( x, y ) {
*     // Fallback JavaScript implementation...
* }
*
* // Create a dispatch function:
* var f = dispatch( addon, fallback );
*
* // ...
*
* // Invoke the dispatch function with ndarray arguments:
* var x = array( [ [ 1, 2], [ 3, 4 ] ] );
* var y = zeros( [ 2, 2 ] );
* f( x, y );
*/
declare function dispatch<T = unknown, U extends typedndarray<T> = typedndarray<T>, V = unknown, W extends typedndarray<V> = typedndarray<V>, Q = unknown>( addon: AddonFcn<T, V, Q>, fallback: FallbackFcn<U, W, Q> ): Dispatcher<U, W>;


// EXPORTS //

export = dispatch;
