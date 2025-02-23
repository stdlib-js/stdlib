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

/**
* Callback invoked for each array element.
*/
type Nullary<V> = ( this: V ) => void;

/**
* Callback invoked for each array element.
*
* @param value - current array element
*/
type Unary<T, V> = ( this: V, value: T ) => void;

/**
* Callback invoked for each array element.
*
* @param value - current array element
* @param index - current array element index
*/
type Binary<T, V> = ( this: V, value: T, indices: Array<number> ) => void;

/**
* Callback invoked for each array element.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
*/
type Ternary<T, U, V> = ( this: V, value: T, indices: Array<number>, arr: U ) => void;

/**
* Callback invoked for each array element.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
*/
type Callback<T, U, V> = Nullary<V> | Unary<T, V> | Binary<T, V> | Ternary<T, U, V>;

/**
* Invokes a callback function once for each array element.
*
* @param x - input array
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var log = require( '@stdlib/console/log' );
*
* var x = toAccesorArray( [ 1, 2, 3, 4] );
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<T = unknown, V = unknown>( x: AccessorArrayLike<T>, fcn: Callback<T, AccessorArrayLike<T>, V>, thisArg?: ThisParameterType<Callback<T, AccessorArrayLike<T>, V>> ): void;

/**
* Invokes a callback function once for each array element.
*
* @param x - input array
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var x = [ 1, 2, 3, 4];
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<T = unknown, V = unknown>( x: Collection<T>, fcn: Callback<T, Collection<T>, V>, thisArg?: ThisParameterType<Callback<T, Collection<T>, V>> ): void;


// EXPORTS //

export = forEach;
