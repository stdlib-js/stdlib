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

import { FloatDataType, FloatTypedArray, RealDataType, RealTypedArray } from '@stdlib/types/array';
import * as random from '@stdlib/types/random';

/**
* Supported data types.
*/
type DataType = RealDataType | 'generic';

/**
* Supported floating-point data types.
*/
type NormalizedDataType = FloatDataType | 'generic';

/**
* Output array.
*/
type RandomArray = RealTypedArray | Array<number>;

/**
* Output array.
*/
type NormalizedRandomArray = FloatTypedArray | Array<number>;

/**
* Interface defining PRNG options.
*/
interface PRNGOptions {
	/**
	* Pseudorandom number generator seed.
	*/
	seed?: random.PRNGSeedMINSTD;

	/**
	* Pseudorandom number generator state.
	*/
	state?: random.PRNGStateMINSTD;

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
	* Default output array data type when generating integer values. Default: 'float64'.
	*/
	idtype?: DataType;

	/**
	* Default output array data type when generating normalized values. Default: 'float64'.
	*/
	ndtype?: NormalizedDataType;
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
* Interface defining options.
*/
interface NormalizedOptions {
	/**
	* Output array data type.
	*/
	dtype?: NormalizedDataType;
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
	readonly seed: random.PRNGSeedMINSTD;

	/**
	* PRNG seed length.
	*/
	readonly seedLength: number;

	/**
	* PRNG state.
	*/
	state: random.PRNGStateMINSTD;

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
* Interface for generating pseudorandom numbers using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.
*/
interface UnaryFunction extends PRNG {
	/**
	* Returns an array containing pseudorandom integers on the interval `[1, 2147483646]`.
	*
	* @param len - array length
	* @param options - function options
	* @returns output array
	*/
	( len: number, options?: Options ): RandomArray;

	/**
	* Returns an array containing pseudorandom numbers on the interval `[0,1)`.
	*
	* @param len - array length
	* @param options - function options
	* @returns output array
	*/
	normalized( len: number, options?: NormalizedOptions ): NormalizedRandomArray; // tslint:disable-line:max-line-length
}

/**
* Interface for generating pseudorandom numbers using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.
*/
interface Random extends PRNG {
	/**
	* Returns an array containing pseudorandom integers on the interval `[1, 2147483646]`.
	*
	* @param len - array length
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = minstd( 10 );
	* // returns <Float64Array>
	*/
	( len: number, options?: Options ): RandomArray;

	/**
	* Returns an array containing pseudorandom numbers on the interval `[0,1)`.
	*
	* @param len - array length
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = minstd.normalized( 10 );
	* // returns <Float64Array>
	*/
	normalized( len: number, options?: NormalizedOptions ): NormalizedRandomArray; // tslint:disable-line:max-line-length

	/**
	* Returns a function for creating arrays containing pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.
	*
	* @param options - function options
	* @throws must provide a valid state
	* @returns function for creating arrays
	*
	* @example
	* var random = minstd.factory();
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*
	* @example
	* var random = minstd.factory();
	*
	* var out = random.normalized( 10 );
	* // returns <Float64Array>
	*
	* @example
	* var random = minstd.factory({
	*     'seed': 297
	* });
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	factory( options?: FactoryOptions ): UnaryFunction;
}

/**
* Returns an array containing pseudorandom numbers using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.
*
* @param len - array length
* @param options - function options
* @returns output array
*
* @example
* var out = minstd( 10 );
* // returns <Float64Array>
*
* @example
* var out = minstd.normalized( 10 );
* // returns <Float64Array>
*
* @example
* var random = minstd.factory();
*
* var out = random( 10 );
* // returns <Float64Array>
*/
declare var minstd: Random;


// EXPORTS //

export = minstd;
