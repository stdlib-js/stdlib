/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { RealFloatingPointAndGenericDataType as DataType, FloatTypedArray } from '@stdlib/types/array';
import * as random from '@stdlib/types/random';

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
* Interface for generating pseudorandom numbers drawn from a triangular distribution with pre-specified parameter values.
*/
interface UnaryFunction extends PRNG {
	/**
	* Returns an array containing pseudorandom numbers drawn from a triangular distribution.
	*
	* @param len - array length
	* @param options - function options
	* @returns output array
	*/
	( len: number, options?: Options ): RandomArray;

	/**
	* Fills an array with pseudorandom numbers drawn from a triangular distribution.
	*
	* @param out - output array
	* @returns output array
	*/
	assign( out: RandomArray ): RandomArray;
}

/**
* Interface for generating pseudorandom numbers drawn from a triangular distribution without pre-specified parameter values.
*/
interface QuaternaryFunction extends PRNG {
	/**
	* Returns an array containing pseudorandom numbers drawn from a triangular distribution.
	*
	* @param len - array length
	* @param a - minimum support
	* @param b - maximum support
	* @param c - mode
	* @param options - function options
	* @returns output array
	*/
	( len: number, a: number, b: number, c: number, options?: Options ): RandomArray;

	/**
	* Fills an array with pseudorandom numbers drawn from a triangular distribution.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param c - mode
	* @param out - output array
	* @returns output array
	*/
	assign( a: number, b: number, c: number, out: RandomArray ): RandomArray;
}

/**
* Interface for generating pseudorandom numbers drawn from a triangular distribution.
*/
interface Random extends PRNG {
	/**
	* Returns an array containing pseudorandom numbers drawn from a triangular distribution.
	*
	* @param len - array length
	* @param a - minimum support
	* @param b - maximum support
	* @param c - mode
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = triangular( 10, 2.0, 5.0, 3.0 );
	* // returns <Float64Array>
	*/
	( len: number, a: number, b: number, c: number, options?: Options ): RandomArray;

	/**
	* Fills an array with pseudorandom numbers drawn from a triangular distribution.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param c - mode
	* @param out - output array
	* @returns output array
	*
	* @example
	* var zeros = require( '@stdlib/array/zeros' );
	*
	* var x = zeros( 10, 'float64' );
	* // returns <Float64Array>
	*
	* var out = triangular( 2.0, 5.0, 3.0, out );
	* // returns <Float64Array>
	*
	* var bool = ( out === x );
	* // returns true
	*/
	assign( a: number, b: number, c: number, out: RandomArray ): RandomArray;

	/**
	* Returns a function for creating arrays containing pseudorandom numbers drawn from a triangular distribution.
	*
	* ## Notes
	*
	* -   When provided distribution parameters, the returned function returns random variates drawn from the specified distribution.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param c - mode
	* @param options - function options
	* @throws must provide a valid state
	* @returns function for creating arrays
	*
	* @example
	* var random = triangular.factory( 2.0, 5.0, 3.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*
	* @example
	* var random = triangular.factory( 2.0, 5.0, 3.0, {
	*     'seed': 297
	* });
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	factory( a: number, b: number, c: number, options?: FactoryOptions ): UnaryFunction;

	/**
	* Returns a function for creating arrays containing pseudorandom numbers drawn from a triangular distribution.
	*
	* ## Notes
	*
	* -   When not provided distribution parameters, the returned function requires that distribution parameters be provided at each invocation.
	*
	* @param options - function options
	* @throws must provide a valid state
	* @returns function for creating arrays
	*
	* @example
	* var random = triangular.factory();
	*
	* var out = random( 10, 2.0, 5.0, 3.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = triangular.factory({
	*     'seed': 297
	* });
	* var out = random( 10, 2.0, 5.0, 3.0 );
	* // returns <Float64Array>
	*/
	factory( options?: FactoryOptions ): QuaternaryFunction;
}

/**
* Returns an array containing pseudorandom numbers drawn from a triangular distribution.
*
* @param len - array length
* @param a - minimum support
* @param b - maximum support
* @param c - mode
* @param options - function options
* @returns output array
*
* @example
* var out = triangular( 10, 2.0, 5.0, 3.0 );
* // returns <Float64Array>
*
* @example
* var random = triangular.factory( 2.0, 5.0, 3.0 );
*
* var out = random( 10 );
* // returns <Float64Array>
*/
declare var triangular: Random;


// EXPORTS //

export = triangular;
