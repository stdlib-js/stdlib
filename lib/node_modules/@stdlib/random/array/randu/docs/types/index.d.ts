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
	* Name of pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers. Default: 'mt19937'.
	*/
	name?: 'mt19937' | 'minstd' | 'minstd-shuffle';

	/**
	* Pseudorandom number generator seed.
	*/
	seed?: random.PRNGSeedMT19937 | random.PRNGSeedMINSTD;

	/**
	* Pseudorandom number generator state.
	*/
	state?: random.PRNGStateMT19937 | random.PRNGStateMINSTD;

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
	readonly seed: random.PRNGSeedMT19937 | random.PRNGSeedMINSTD;

	/**
	* PRNG seed length.
	*/
	readonly seedLength: number;

	/**
	* PRNG state.
	*/
	state: random.PRNGStateMT19937 | random.PRNGStateMINSTD;

	/**
	* PRNG state length.
	*/
	readonly stateLength: number;

	/**
	* PRNG state size (in bytes).
	*/
	readonly byteLength: number;
}

/**
* Interface for generating uniformly distributed pseudorandom numbers between `0` and `1`.
*/
interface UnaryFunction extends PRNG {
	/**
	* Returns an array containing uniformly distributed pseudorandom numbers between `0` and `1`.
	*
	* @param len - array length
	* @param options - function options
	* @returns output array
	*/
	( len: number, options?: Options ): RandomArray;
}

/**
* Interface for generating uniformly distributed pseudorandom numbers between `0` and `1`.
*/
interface Random extends PRNG {
	/**
	* Returns an array containing uniformly distributed pseudorandom numbers between `0` and `1`.
	*
	* @param len - array length
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = randu( 10 );
	* // returns <Float64Array>
	*/
	( len: number, options?: Options ): RandomArray;

	/**
	* Returns a function for creating arrays containing uniformly distributed pseudorandom numbers between `0` and `1`.
	*
	* @param options - function options
	* @throws must provide a valid state
	* @returns function for creating arrays
	*
	* @example
	* var random = randu.factory();
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*
	* @example
	* var random = randu.factory({
	*     'seed': 297
	* });
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	factory( options?: FactoryOptions ): UnaryFunction;
}

/**
* Returns an array containing uniformly distributed pseudorandom numbers between `0` and `1`.
*
* @param len - array length
* @param options - function options
* @returns output array
*
* @example
* var out = randu( 10 );
* // returns <Float64Array>
*
* @example
* var random = randu.factory();
*
* var out = random( 10 );
* // returns <Float64Array>
*/
declare var randu: Random;


// EXPORTS //

export = randu;
