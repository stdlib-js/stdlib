/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

/**
* Utility type to reverse a tuple type.
*/
type ReverseTuple<T extends Array<any>> = T extends [infer First, ...infer Rest] ? [...ReverseTuple<Rest>, First] : []; // eslint-disable-line @typescript-eslint/no-explicit-any

/**
* Curry function type for curryRight.
*/
type CurryRightFunction<
	TThis,
	TArgs extends Array<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
	TReturn
> = ( this: TThis, ...args: TArgs ) => TReturn;

/**
* Curry function.
*
* @param v - curried function parameter
* @returns partially applied curry function or curried function result
*/
type Closure<
	TArgs extends Array<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
	TReturn
> = ReverseTuple<TArgs> extends [infer TFirst, ...infer TRest]
	? ( v: TFirst ) => Closure<ReverseTuple<TRest>, TReturn>
	: TReturn;

/**
* Transforms a function into a sequence of functions each accepting a single argument.
*
* ## Notes
*
* -   Until return value resolution, each invocation returns a new partially applied curry function.
* -   This function applies arguments starting from the right.
*
* @param fcn - function to curry
* @param arity - number of parameters
* @param thisArg - evaluation context
* @throws `arity` must be a positive integer
* @returns curry function
*
* @example
* function add( x, y ) {
*     return x + y;
* }
*
* var f = curryRight( add );
*
* var sum = f( 2 )( 3 );
* // returns 5
*/
declare function curryRight<
	TThis extends object,
	TArgs extends Array<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
	TReturn
>(
	fcn: CurryRightFunction<TThis, TArgs, TReturn>,
	arity: number,
	thisArg?: TThis
): Closure<TArgs, TReturn>;

/**
* Transforms a function into a sequence of functions each accepting a single argument.
*
* ## Notes
*
* -   Until return value resolution, each invocation returns a new partially applied curry function.
* -   This function applies arguments starting from the right.
*
* @param fcn - function to curry
* @param thisArg - evaluation context
* @returns curry function
*
* @example
* function add( x, y ) {
*     return x + y;
* }
*
* var f = curryRight( add );
*
* var sum = f( 2 )( 3 );
* // returns 5
*/
declare function curryRight<
	TThis extends object,
	TArgs extends Array<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
	TReturn
>(
	fcn: CurryRightFunction<TThis, TArgs, TReturn>,
	thisArg?: TThis
): Closure<TArgs, TReturn>;


// EXPORTS //

export = curryRight;
