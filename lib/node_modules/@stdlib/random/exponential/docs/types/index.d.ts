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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { FloatDataType, floatndarray, genericndarray, Order, Mode, Shape, ndarray } from '@stdlib/types/ndarray';
import * as random from '@stdlib/types/random';

/**
* Supported data types.
*/
type DataType = FloatDataType | 'generic';

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
* Interface defining ndarray options.
*/
interface ndarrayOptions { // tslint:disable-line:class-name
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
* Interface defining factory options.
*/
interface FactoryOptions extends PRNGOptions, ndarrayOptions {
	/**
	* Default output array data type. Default: 'float64'.
	*/
	dtype?: DataType;
}

/**
* Interface defining options.
*/
interface Options extends ndarrayOptions {
	/**
	* Output array data type.
	*/
	dtype?: DataType;
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
* Interface for generating pseudorandom numbers drawn from an exponential distribution.
*/
interface RandomFunction extends PRNG {
	/**
	* Returns an ndarray containing pseudorandom numbers drawn from an exponential distribution.
	*
	* @param shape - array shape
	* @param lambda - rate parameter
	* @param options - function options
	* @throws distribution parameters and the array shape must be broadcast compatible
	* @returns output array
	*/
	( shape: Shape, lambda: number | ndarray, options?: Options ): RandomArray;

	/**
	* Fills an ndarray with pseudorandom numbers drawn from an exponential distribution.
	*
	* @param out - output array
	* @param lambda - rate parameter
	* @throws distribution parameters and the output array must be broadcast compatible
	* @returns output array
	*/
	assign( out: ndarray, lambda: number | ndarray ): ndarray;
}

/**
* Interface for generating pseudorandom numbers drawn from an exponential distribution.
*/
interface Random extends PRNG {
	/**
	* Returns an ndarray containing pseudorandom numbers drawn from an exponential distribution.
	*
	* @param shape - array shape
	* @param lambda - rate parameter
	* @param options - function options
	* @throws distribution parameters and the array shape must be broadcast compatible
	* @returns output array
	*
	* @example
	* var out = exponential( [ 3, 3 ], 2.0 );
	* // returns <ndarray>
	*/
	( shape: Shape, lambda: number | ndarray, options?: Options ): RandomArray;

	/**
	* Fills an ndarray with pseudorandom numbers drawn from an exponential distribution.
	*
	* @param out - output array
	* @param lambda - rate parameter
	* @throws distribution parameters and the output array must be broadcast compatible
	* @returns output array
	*
	* @example
	* var zeros = require( `@stdlib/ndarray/zeros` );
	*
	* var arr = zeros( [ 3, 3 ] );
	* // returns <ndarray>
	*
	* var out = exponential.assign( arr, 2.0 );
	* // returns <ndarray>
	*
	* var bool = ( out === arr );
	* // returns true
	*/
	assign( out: ndarray, lambda: number | ndarray ): ndarray;

	/**
	* Returns a function for creating arrays containing pseudorandom numbers drawn from an exponential distribution.
	*
	* @param options - function options
	* @throws must provide a valid state
	* @returns function for creating arrays
	*
	* @example
	* var random = exponential.factory();
	*
	* var out = random( [ 3, 3 ], 2.0 );
	* // returns <ndarray>
	*
	* @example
	* var random = exponential.factory({
	*     'seed': 297
	* });
	* var out = random( [ 3, 3 ], 2.0 );
	* // returns <ndarray>
	*/
	factory( options?: FactoryOptions ): RandomFunction;
}

/**
* Generates pseudorandom numbers drawn from an exponential distribution.
*
* @param shape - array shape
* @param lambda - rate parameter
* @param options - function options
* @throws distribution parameters and the array shape must be broadcast compatible
* @returns output array
*
* @example
* var out = exponential( [ 3, 3 ], 2.0 );
* // returns <ndarray>
*
* @example
* var zeros = require( `@stdlib/ndarray/zeros` );
*
* var arr = zeros( [ 3, 3 ] );
* // returns <ndarray>
*
* var out = exponential.assign( arr, 2.0 );
* // returns <ndarray>
*
* var bool = ( out === arr );
* // returns true
*
* @example
* var random = exponential.factory();
*
* var out = random( [ 3, 3 ], 2.0 );
* // returns <ndarray>
*/
declare var exponential: Random;


// EXPORTS //

export = exponential;
