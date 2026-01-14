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
import { OutputPolicy, InputCastingPolicy, DataType, Order, typedndarray } from '@stdlib/types/ndarray';/**
* Input array.
*/
type InputArray<T> = typedndarray<T>;

/**
* Output array.
*/
type OutputArray<U> = typedndarray<U>;

/**
* Interface defining options.
*/
interface Options {
	/**
	* Output array data type.
	*/
	dtype?: DataType;

	/**
	* Output array order.
	*/
	order?: Order;
}

/**
* Dispatch policies.
*/
interface Policies {
	/**
	* Output data type policy.
	*/
	output: OutputPolicy;

	/**
	* Input ndarray casting policy.
	*/
	casting: InputCastingPolicy;
}

/**
* Unary function.
*
* @param x - input ndarray
* @param y - output ndarray
* @returns result
*/
type UnaryFunction<T = unknown, U = unknown> = ( x: InputArray<T>, y: OutputArray<U> ) => OutputArray<U> | void;

/**
* Interface for performing element-wise computation.
*/
interface Unary {
	/**
	* Performs element-wise computation.
	*
	* @param x - input array
	* @param options - options
	* @returns output array
	*/
	<T = unknown, U = unknown>( x: InputArray<T>, options?: Options ): OutputArray<U>; // NOTE: we lose type specificity here, but retaining specificity would likely be difficult and/or tedious to completely enumerate, as the output ndarray data type is dependent on how `x` interacts with output data type policy and whether that policy has been overridden by `options.dtype`. In principle, as well, based on the policy, it is possible to know more exactly which `InputArray` types are actually allowed.

	/**
	* Performs element-wise computation and assigns results to a provided output ndarray.
	*
	* @param x - input array
	* @param y - output array
	* @returns output array
	*/
	assign<T = unknown, U = unknown, V extends OutputArray<U> = OutputArray<U>>( x: InputArray<T>, y: V ): V;
}

/**
* Returns a function which performs element-wise computation.
*
* @param fcn - function applies a unary function to each element in an ndarray
* @param idtypes - list containing lists of supported input data types for each ndarray argument
* @param odtypes - list of supported output data types
* @param policies - dispatch policies
* @returns function which performs element-wise computation
*
* @example
* var base = require( '@stdlib/math/base/special/abs' );
* var dispatch = require( '@stdlib/ndarray/dispatch' );
* var unary = require( '@stdlib/ndarray/base/unary' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var array = require( '@stdlib/ndarray/array' );
*
* var types = [
*     'float64', 'float64',
*     'float32', 'float32',
*     'generic', 'generic'
* ];
* var data = [
*     base,
*     base,
*     base
* ];
* var dispatcher = dispatch( unary, types, data, 2, 1, 1 );
*
* var idt = [ 'float64', 'float32', 'generic' ];
* var odt = idt;
*
* var policies = {
*     'output': 'real_and_generic',
*     'casting': 'none'
* };
* var abs = factory( dispatcher, [ idt ], odt, policies );
*
* var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
* // returns <ndarray>
*
* var y = abs( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*/
declare function factory<T = unknown, U = unknown>( fcn: UnaryFunction<T, U>, idtypes: ArrayLike<ArrayLike<DataType>>, odtypes: ArrayLike<DataType>, policies: Policies ): Unary;


// EXPORTS //

export = factory;
