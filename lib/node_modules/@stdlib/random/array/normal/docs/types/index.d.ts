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

import { FloatDataType, FloatTypedArray } from '@stdlib/types/array';
import * as random from '@stdlib/types/random';

/**
* Supported data types.
*/
type DataType = FloatDataType | 'generic';

/**
* Output array.
*/
type RandomArray = FloatTypedArray | Array<number>;

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
* Interface defining factory options.
*/
interface FactoryOptions extends PRNGOptions {
	/**
	* Default output array data type. Default: 'float64'.
	*/
	dtype?: DataType;
}

/**
* Interface defining options.
*/
interface Options {
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
* Interface for generating pseudorandom numbers drawn from a normal distribution with pre-specified parameter values.
*/
interface UnaryFunction extends PRNG {
	/**
	* Returns an array containing pseudorandom numbers drawn from a normal distribution with parameters `mu` (mean) and `sigma` (standard deviation).
	*
	* @param len - array length
	* @param options - function options
	* @returns output array
	*/
	( len: number, options?: Options ): RandomArray;
}

/**
* Interface for generating pseudorandom numbers drawn from a normal distribution without pre-specified parameter values.
*/
interface TernaryFunction extends PRNG {
	/**
	* Returns an array containing pseudorandom numbers drawn from a normal distribution with parameters `mu` (mean) and `sigma` (standard deviation).
	*
	* @param len - array length
	* @param mu - mean
	* @param sigma - standard deviation
	* @param options - function options
	* @returns output array
	*/
	( len: number, mu: number, sigma: number, options?: Options ): RandomArray;
}

/**
* Interface for generating pseudorandom numbers drawn from a normal distribution.
*/
interface Random extends PRNG {
	/**
	* Returns an array containing pseudorandom numbers drawn from a normal distribution with parameters `mu` (mean) and `sigma` (standard deviation).
	*
	* @param len - array length
	* @param mu - mean
	* @param sigma - standard deviation
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = normal( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*/
	( len: number, mu: number, sigma: number, options?: Options ): RandomArray;

	/**
	* Returns a function for creating arrays containing pseudorandom numbers drawn from a normal distribution.
	*
	* ## Notes
	*
	* -   When provided `mu` and `sigma`, the returned function returns random variates drawn from the specified distribution.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @param options - function options
	* @throws `sigma` must be a positive number
	* @throws must provide a valid state
	* @returns function for creating arrays
	*
	* @example
	* var random = normal.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*
	* @example
	* var random = normal.factory( 2.0, 5.0, {
	*     'seed': 297
	* });
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	factory( mu: number, sigma: number, options?: FactoryOptions ): UnaryFunction;

	/**
	* Returns a function for creating arrays containing pseudorandom numbers drawn from a normal distribution.
	*
	* ## Notes
	*
	* -   When not provided `mu` and `sigma`, the returned function requires that both `mu` and `sigma` be provided at each invocation.
	*
	* @param options - function options
	* @throws must provide a valid state
	* @returns function for creating arrays
	*
	* @example
	* var random = normal.factory();
	*
	* var out = random( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = normal.factory({
	*     'seed': 297
	* });
	* var out = random( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*/
	factory( options?: FactoryOptions ): TernaryFunction;
}

/**
* Returns an array containing pseudorandom numbers drawn from a normal distribution with parameters `mu` (mean) and `sigma` (standard deviation).
*
* @param len - array length
* @param mu - mean
* @param sigma - standard deviation
* @param options - function options
* @returns output array
*
* @example
* var out = normal( 10, 2.0, 5.0 );
* // returns <Float64Array>
*
* @example
* var random = normal.factory( 2.0, 5.0 );
*
* var out = random( 10 );
* // returns <Float64Array>
*/
declare var normal: Random;


// EXPORTS //

export = normal;
