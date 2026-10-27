/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import { RealAndGenericDataType as DataType, realndarray, typedndarray, genericndarray, Order, Mode, Shape } from '@stdlib/types/ndarray';
import * as random from '@stdlib/types/random';

/**
* Output array.
*/
type RandomArray = realndarray | genericndarray<number>;

/**
* Interface defining PRNG options.
*/
interface PRNGOptions {
	/**
	* Pseudorandom number generator which generates uniformly distributed pseudorandom numbers.
	*/
	prng?: random.PRNG;

	/**
	* Pseudorandom number generator seed.
	*/
	seed?: random.PRNGSeedMT19937;

	/**
	* Pseudorandom number generator state.
	*/
	state?: random.PRNGStateMT19937;

	/**
	* Specifies whether to copy a provided pseudorandom number generator state. Default: true.
	*/
	copy?: boolean;
}

/**
* Interface defining options.
*/
interface Options {
	/**
	* Output ndarray data type.
	*/
	dtype?: DataType;

	/**
	* Specifies whether an array is row-major (C-style) or column-major (Fortran-style). Default: 'row-major'.
	*/
	order?: Order;

	/**
	* Specifies how to handle a linear index which exceeds array dimensions. Default: 'throw'.
	*/
	mode?: Mode;

	/**
	* Specifies how to handle subscripts which exceed array dimensions on a per dimension basis. Default: ['throw'].
	*/
	submode?: Array<Mode>;

	/**
	* Boolean indicating whether an array should be read-only. Default: false.
	*/
	readonly?: boolean;
}

/**
* Interface for PRNG properties and methods.
*/
interface PRNG {
	/**
	* Underlying pseudorandom number generator.
	*/
	readonly PRNG: random.PRNG;

	/**
	* PRNG seed.
	*/
	readonly seed: random.PRNGSeedMT19937 | null;

	/**
	* PRNG seed length.
	*/
	readonly seedLength: number | null;

	/**
	* PRNG state.
	*/
	state: random.PRNGStateMT19937 | null;

	/**
	* PRNG state length.
	*/
	readonly stateLength: number | null;

	/**
	* PRNG state size (in bytes).
	*/
	readonly byteLength: number | null;
}

/**
* Interface for generating pseudorandom numbers drawn from a hypergeometric distribution.
*/
interface RandomFunction extends PRNG {
	/**
	* Returns an ndarray containing pseudorandom numbers drawn from a hypergeometric distribution.
	*
	* @param shape - output shape
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @param options - function options
	* @throws distribution parameters and the output shape must be broadcast compatible
	* @returns output ndarray
	*/
	<T extends typedndarray<number>, U extends typedndarray<number>, V extends typedndarray<number>>( shape: Shape, N: number | T, K: number | U, n: number | V, options?: Options ): RandomArray;

	/**
	* Fills an ndarray with pseudorandom numbers drawn from a hypergeometric distribution.
	*
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @param out - output ndarray
	* @throws distribution parameters and the output ndarray must be broadcast compatible
	* @returns output ndarray
	*/
	assign<T extends typedndarray<number>, U extends typedndarray<number>, V extends typedndarray<number>, W extends typedndarray<number>>( N: number | T, K: number | U, n: number | V, out: W ): W;
}

/**
* Interface for generating pseudorandom numbers drawn from a hypergeometric distribution.
*/
interface Random extends PRNG {
	/**
	* Returns an ndarray containing pseudorandom numbers drawn from a hypergeometric distribution.
	*
	* @param shape - output shape
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @param options - function options
	* @throws distribution parameters and the output shape must be broadcast compatible
	* @returns output ndarray
	*
	* @example
	* var out = hypergeometric( [ 3, 3 ], 20, 10, 7 );
	* // returns <ndarray>
	*/
	<T extends typedndarray<number>, U extends typedndarray<number>, V extends typedndarray<number>>( shape: Shape, N: number | T, K: number | U, n: number | V, options?: Options ): RandomArray;

	/**
	* Fills an ndarray with pseudorandom numbers drawn from a hypergeometric distribution.
	*
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @param out - output ndarray
	* @throws distribution parameters and the output ndarray must be broadcast compatible
	* @returns output ndarray
	*
	* @example
	* var zeros = require( '@stdlib/ndarray/zeros' );
	*
	* var out = zeros( [ 3, 3 ] );
	* // returns <ndarray>
	*
	* var v = hypergeometric.assign( 20, 10, 7, out );
	* // returns <ndarray>
	*
	* var bool = ( out === v );
	* // returns true
	*/
	assign<T extends typedndarray<number>, U extends typedndarray<number>, V extends typedndarray<number>, W extends typedndarray<number>>( N: number | T, K: number | U, n: number | V, out: W ): W;

	/**
	* Returns a function for creating ndarrays containing pseudorandom numbers drawn from a hypergeometric distribution.
	*
	* @param options - function options
	* @throws must provide a valid state
	* @returns function for creating ndarrays
	*
	* @example
	* var random = hypergeometric.factory();
	*
	* var out = random( [ 3, 3 ], 20, 10, 7 );
	* // returns <ndarray>
	*
	* @example
	* var random = hypergeometric.factory({
	*     'seed': 297
	* });
	* var out = random( [ 3, 3 ], 20, 10, 7 );
	* // returns <ndarray>
	*/
	factory( options?: PRNGOptions ): RandomFunction;
}

/**
* Generates pseudorandom numbers drawn from a hypergeometric distribution.
*
* @param shape - output shape
* @param N - population size
* @param K - subpopulation size
* @param n - number of draws
* @param options - function options
* @throws distribution parameters and the output shape must be broadcast compatible
* @returns output ndarray
*
* @example
* var out = hypergeometric( [ 3, 3 ], 20, 10, 7 );
* // returns <ndarray>
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var out = zeros( [ 3, 3 ] );
* // returns <ndarray>
*
* var v = hypergeometric.assign( 20, 10, 7, out );
* // returns <ndarray>
*
* var bool = ( v === out );
* // returns true
*
* @example
* var random = hypergeometric.factory();
*
* var out = random( [ 3, 3 ], 20, 10, 7 );
* // returns <ndarray>
*/
declare var hypergeometric: Random;


// EXPORTS //

export = hypergeometric;
