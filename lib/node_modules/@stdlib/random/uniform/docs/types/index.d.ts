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

import { RealFloatingPointAndGenericDataType as DataType, floatndarray, genericndarray, Order, Mode, Shape, typedndarray } from '@stdlib/types/ndarray';
import * as random from '@stdlib/types/random';

/**
* Output array.
*/
type RandomArray = floatndarray | genericndarray<number>;

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
* Interface for generating pseudorandom numbers drawn from a uniform distribution.
*/
interface RandomFunction extends PRNG {
	/**
	* Returns an ndarray containing pseudorandom numbers drawn from a uniform distribution.
	*
	* @param shape - output shape
	* @param a - minimum support (inclusive)
	* @param b - maximum support (exclusive)
	* @param options - function options
	* @throws distribution parameters and the output shape must be broadcast compatible
	* @returns output ndarray
	*/
	<T extends typedndarray<number>, U extends typedndarray<number>>( shape: Shape, a: number | T, b: number | U, options?: Options ): RandomArray;

	/**
	* Fills an ndarray with pseudorandom numbers drawn from a uniform distribution.
	*
	* @param a - minimum support (inclusive)
	* @param b - maximum support (exclusive)
	* @param out - output ndarray
	* @throws distribution parameters and the output ndarray must be broadcast compatible
	* @returns output ndarray
	*/
	assign<T extends typedndarray<number>, U extends typedndarray<number>, V extends typedndarray<number>>( a: number | T, b: number | U, out: V ): V;
}

/**
* Interface for generating pseudorandom numbers drawn from a uniform distribution.
*/
interface Random extends PRNG {
	/**
	* Returns an ndarray containing pseudorandom numbers drawn from a uniform distribution.
	*
	* @param shape - output shape
	* @param a - minimum support (inclusive)
	* @param b - maximum support (exclusive)
	* @param options - function options
	* @throws distribution parameters and the output shape must be broadcast compatible
	* @returns output ndarray
	*
	* @example
	* var out = uniform( [ 3, 3 ], 0.0, 1.0 );
	* // returns <ndarray>
	*/
	<T extends typedndarray<number>, U extends typedndarray<number>>( shape: Shape, a: number | T, b: number | U, options?: Options ): RandomArray;

	/**
	* Fills an ndarray with pseudorandom numbers drawn from a uniform distribution.
	*
	* @param a - minimum support (inclusive)
	* @param b - maximum support (exclusive)
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
	* var v = uniform.assign( 0.0, 1.0, out );
	* // returns <ndarray>
	*
	* var bool = ( out === v );
	* // returns true
	*/
	assign<T extends typedndarray<number>, U extends typedndarray<number>, V extends typedndarray<number>>( a: number | T, b: number | U, out: V ): V;

	/**
	* Returns a function for creating ndarrays containing pseudorandom numbers drawn from a uniform distribution.
	*
	* @param options - function options
	* @throws must provide a valid state
	* @returns function for creating ndarrays
	*
	* @example
	* var random = uniform.factory();
	*
	* var out = random( [ 3, 3 ], 0.0, 1.0 );
	* // returns <ndarray>
	*
	* @example
	* var random = uniform.factory({
	*     'seed': 297
	* });
	* var out = random( [ 3, 3 ], 0.0, 1.0 );
	* // returns <ndarray>
	*/
	factory( options?: PRNGOptions ): RandomFunction;
}

/**
* Generates pseudorandom numbers drawn from a uniform distribution.
*
* @param shape - output shape
* @param a - minimum support (inclusive)
* @param b - maximum support (exclusive)
* @param options - function options
* @throws distribution parameters and the output shape must be broadcast compatible
* @returns output ndarray
*
* @example
* var out = uniform( [ 3, 3 ], 0.0, 1.0 );
* // returns <ndarray>
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var out = zeros( [ 3, 3 ] );
* // returns <ndarray>
*
* var v = uniform.assign( 0.0, 1.0, out );
* // returns <ndarray>
*
* var bool = ( v === out );
* // returns true
*
* @example
* var random = uniform.factory();
*
* var out = random( [ 3, 3 ], 0.0, 1.0 );
* // returns <ndarray>
*/
declare var uniform: Random;


// EXPORTS //

export = uniform;
