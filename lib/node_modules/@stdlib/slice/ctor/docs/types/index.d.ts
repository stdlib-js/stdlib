/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/* eslint-disable max-lines */

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Slice } from '@stdlib/types/slice';

/**
* Interface defining a Slice constructor which is both "newable" and "callable".
*/
interface Constructor {
	/**
	* Slice constructor.
	*
	* @param stop - ending index (exclusive)
	* @throws first argument must be an integer
	* @returns Slice instance
	*
	* @example
	* var s = new Slice( 10 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*/
	new( stop: number ): Slice<null, number, null>;

	/**
	* Slice constructor.
	*
	* @param stop - ending index (exclusive)
	* @returns Slice instance
	*
	* @example
	* var s = new Slice();
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = new Slice( null );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*/
	new( stop?: null ): Slice<null, null, null>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @throws first argument must be an integer
	* @throws second argument must be an integer
	* @returns Slice instance
	*
	* @example
	* var s = new Slice( 3, 10 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = new Slice( 3, 10, null );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = new Slice( 3, 10, void 0 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*/
	new( start: number, stop: number, step?: null ): Slice<number, number, null>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @throws second argument must be an integer
	* @returns Slice instance
	*
	* @example
	* var s = new Slice( null, 10 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = new Slice( void 0, 10 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = new Slice( null, 10, null );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = new Slice( void 0, 10, void 0 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*/
	new( start: null | undefined, stop: number, step?: null ): Slice<null, number, null>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @throws first argument must be an integer
	* @returns Slice instance
	*
	* @example
	* var s = new Slice( 3, null );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = new Slice( 3, void 0 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = new Slice( 3, null, null );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = new Slice( 3, void 0, void 0 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*/
	new( start: number, stop: null | undefined, step?: null ): Slice<number, null, null>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @returns Slice instance
	*
	* @example
	* var s = new Slice( null, null );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = new Slice( void 0, void 0 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*/
	new( start: null | undefined, stop?: null ): Slice<null, null, null>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @throws first argument must be an integer
	* @throws second argument must be an integer
	* @throws third argument must be an integer
	* @throws third argument cannot be zero
	* @returns Slice instance
	*
	* @example
	* var s = new Slice( 3, 10, 2 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns 2
	*/
	new( start: number, stop: number, step: number ): Slice<number, number, number>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @throws second argument must be an integer
	* @throws third argument must be an integer
	* @throws third argument cannot be zero
	* @returns Slice instance
	*
	* @example
	* var s = new Slice( null, 10, 2 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns 2
	*
	* @example
	* var s = new Slice( void 0, 10, 2 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns 2
	*/
	new( start: null | undefined, stop: number, step: number ): Slice<null, number, number>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @throws first argument must be an integer
	* @throws third argument must be an integer
	* @throws third argument cannot be zero
	* @returns Slice instance
	*
	* @example
	* var s = new Slice( 3, null, 2 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns 2
	*
	* @example
	* var s = new Slice( 3, void 0, 2 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns 2
	*/
	new( start: number, stop: null | undefined, step: number ): Slice<number, null, number>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @throws third argument must be an integer
	* @throws third argument cannot be zero
	* @returns Slice instance
	*
	* @example
	* var s = new Slice( null, null, 2 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns 2
	*
	* @example
	* var s = new Slice( void 0, void 0, 2 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns 2
	*/
	new( start: null | undefined, stop: null | undefined, step: number ): Slice<null, null, number>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @returns Slice instance
	*
	* @example
	* var s = new Slice( null, null, null );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = new Slice( void 0, void 0, void 0 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*/
	new( start: null | undefined, stop: null | undefined, step?: null ): Slice<null, null, null>;

	/**
	* Slice constructor.
	*
	* @param stop - ending index (exclusive)
	* @throws first argument must be an integer
	* @returns Slice instance
	*
	* @example
	* var s = Slice( 10 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*/
	( stop: number ): Slice<null, number, null>;

	/**
	* Slice constructor.
	*
	* @param stop - ending index (exclusive)
	* @returns Slice instance
	*
	* @example
	* var s = Slice();
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = Slice( null );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*/
	( stop?: null ): Slice<null, null, null>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @throws first argument must be an integer
	* @throws second argument must be an integer
	* @returns Slice instance
	*
	* @example
	* var s = Slice( 3, 10 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = Slice( 3, 10, null );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = Slice( 3, 10, void 0 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*/
	( start: number, stop: number, step?: null ): Slice<number, number, null>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @throws second argument must be an integer
	* @returns Slice instance
	*
	* @example
	* var s = Slice( void 0, 10 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = Slice( null, 10 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = Slice( null, 10, null );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = Slice( void 0, 10, void 0 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns null
	*/
	( start: null | undefined, stop: number, step?: null ): Slice<null, number, null>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @throws first argument must be an integer
	* @returns Slice instance
	*
	* @example
	* var s = Slice( 3, void 0 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = Slice( 3, null );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = Slice( 3, null, null );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = Slice( 3, void 0, void 0 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*/
	( start: number, stop: null | undefined, step?: null ): Slice<number, null, null>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @returns Slice instance
	*
	* @example
	* var s = Slice( null, null );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = Slice( void 0, void 0 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*/
	( start: null | undefined, stop?: null ): Slice<null, null, null>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @throws first argument must be an integer
	* @throws second argument must be an integer
	* @throws third argument must be an integer
	* @throws third argument cannot be zero
	* @returns Slice instance
	*
	* @example
	* var s = Slice( 3, 10, 2 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns 2
	*/
	( start: number, stop: number, step: number ): Slice<number, number, number>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @throws second argument must be an integer
	* @throws third argument must be an integer
	* @throws third argument cannot be zero
	* @returns Slice instance
	*
	* @example
	* var s = Slice( null, 10, 2 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns 2
	*
	* @example
	* var s = Slice( void 0, 10, 2 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns 10
	*
	* var step = s.step;
	* // returns 2
	*/
	( start: null | undefined, stop: number, step: number ): Slice<null, number, number>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @throws first argument must be an integer
	* @throws third argument must be an integer
	* @throws third argument cannot be zero
	* @returns Slice instance
	*
	* @example
	* var s = Slice( 3, null, 2 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns 2
	*
	* @example
	* var s = Slice( 3, void 0, 2 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns 3
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns 2
	*/
	( start: number, stop: null | undefined, step: number ): Slice<number, null, number>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @throws third argument must be an integer
	* @throws third argument cannot be zero
	* @returns Slice instance
	*
	* @example
	* var s = Slice( null, null, 2 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns 2
	*
	* @example
	* var s = Slice( void 0, void 0, 2 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns 2
	*/
	( start: null | undefined, stop: null | undefined, step: number ): Slice<null, null, number>;

	/**
	* Slice constructor.
	*
	* @param start - starting index (inclusive)
	* @param stop - ending index (exclusive)
	* @param step - index increment
	* @returns Slice instance
	*
	* @example
	* var s = Slice( null, null, null );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*
	* @example
	* var s = Slice( void 0, void 0, void 0 );
	* // returns <Slice>
	*
	* var start = s.start;
	* // returns null
	*
	* var stop = s.stop;
	* // returns null
	*
	* var step = s.step;
	* // returns null
	*/
	( start: null | undefined, stop: null | undefined, step?: null ): Slice<null, null, null>;
}

/**
* Slice constructor.
*
* @param [start] - starting index (inclusive)
* @param stop - ending index (exclusive)
* @param [step] - index increment
* @throws first argument must be an integer or null
* @throws second argument must be an integer or null
* @throws third argument must be an integer or null
* @throws third argument cannot be zero
* @returns Slice instance
*
* @example
* var s = new Slice( 10 );
* // returns <Slice>
*
* var start = s.start;
* // returns null
*
* var stop = s.stop;
* // returns 10
*
* var step = s.step;
* // returns null
*
* @example
* var s = new Slice( 3, 10 );
* // returns <Slice>
*
* var start = s.start;
* // returns 3
*
* var stop = s.stop;
* // returns 10
*
* var step = s.step;
* // returns null
*
* @example
* var s = new Slice( 3, 10, 2 );
* // returns <Slice>
*
* var start = s.start;
* // returns 3
*
* var stop = s.stop;
* // returns 10
*
* var step = s.step;
* // returns 2
*/
declare var ctor: Constructor;


// EXPORTS //

export = ctor;
