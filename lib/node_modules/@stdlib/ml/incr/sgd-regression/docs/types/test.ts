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

import incrSGDRegression = require( './index' );


// TESTS //

// The function returns a model object...
{
	incrSGDRegression(); // $ExpectType Model
	incrSGDRegression( { 'learningRate': 'pegasos' } ); // $ExpectType Model
}

// The compiler throws an error if the function is provided a first argument which is not an object...
{
	incrSGDRegression( 'abc' ); // $ExpectError
	incrSGDRegression( false ); // $ExpectError
	incrSGDRegression( true ); // $ExpectError
	incrSGDRegression( null ); // $ExpectError
	incrSGDRegression( 123 ); // $ExpectError
	incrSGDRegression( [] ); // $ExpectError
	incrSGDRegression( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an `epsilon` option which is not a number...
{
	incrSGDRegression( { 'epsilon': 'abc' } ); // $ExpectError
	incrSGDRegression( { 'epsilon': null } ); // $ExpectError
	incrSGDRegression( { 'epsilon': true } ); // $ExpectError
	incrSGDRegression( { 'epsilon': false } ); // $ExpectError
	incrSGDRegression( { 'epsilon': [] } ); // $ExpectError
	incrSGDRegression( { 'epsilon': {} } ); // $ExpectError
	incrSGDRegression( { 'epsilon': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `eta0` option which is not a number...
{
	incrSGDRegression( { 'eta0': 'abc' } ); // $ExpectError
	incrSGDRegression( { 'eta0': null } ); // $ExpectError
	incrSGDRegression( { 'eta0': true } ); // $ExpectError
	incrSGDRegression( { 'eta0': false } ); // $ExpectError
	incrSGDRegression( { 'eta0': [] } ); // $ExpectError
	incrSGDRegression( { 'eta0': {} } ); // $ExpectError
	incrSGDRegression( { 'eta0': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `lambda` option which is not a number...
{
	incrSGDRegression( { 'lambda': 'abc' } ); // $ExpectError
	incrSGDRegression( { 'lambda': null } ); // $ExpectError
	incrSGDRegression( { 'lambda': true } ); // $ExpectError
	incrSGDRegression( { 'lambda': false } ); // $ExpectError
	incrSGDRegression( { 'lambda': [] } ); // $ExpectError
	incrSGDRegression( { 'lambda': {} } ); // $ExpectError
	incrSGDRegression( { 'lambda': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `learningRate` option which is not a recognized learning rate...
{
	incrSGDRegression( { 'learningRate': 'abc' } ); // $ExpectError
	incrSGDRegression( { 'learningRate': 123 } ); // $ExpectError
	incrSGDRegression( { 'learningRate': true } ); // $ExpectError
	incrSGDRegression( { 'learningRate': false } ); // $ExpectError
	incrSGDRegression( { 'learningRate': [] } ); // $ExpectError
	incrSGDRegression( { 'learningRate': {} } ); // $ExpectError
	incrSGDRegression( { 'learningRate': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `loss` option which is not a recognized loss option...
{
	incrSGDRegression( { 'loss': 'abc' } ); // $ExpectError
	incrSGDRegression( { 'loss': 123 } ); // $ExpectError
	incrSGDRegression( { 'loss': true } ); // $ExpectError
	incrSGDRegression( { 'loss': false } ); // $ExpectError
	incrSGDRegression( { 'loss': [] } ); // $ExpectError
	incrSGDRegression( { 'loss': {} } ); // $ExpectError
	incrSGDRegression( { 'loss': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `intercept` option which is not a boolean...
{
	incrSGDRegression( { 'intercept': 'abc' } ); // $ExpectError
	incrSGDRegression( { 'intercept': 123 } ); // $ExpectError
	incrSGDRegression( { 'intercept': null } ); // $ExpectError
	incrSGDRegression( { 'intercept': [] } ); // $ExpectError
	incrSGDRegression( { 'intercept': {} } ); // $ExpectError
	incrSGDRegression( { 'intercept': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	incrSGDRegression( {}, {} ); // $ExpectError
}

// The compiler throws an error if the `update` method of the returned model object is provided a first argument that is not a numeric array...
{
	const accumulator = incrSGDRegression();
	accumulator( 'abc', 2.5 ); // $ExpectError
	accumulator( false, 2.5 ); // $ExpectError
	accumulator( true, 2.5 ); // $ExpectError
	accumulator( null, 2.5 ); // $ExpectError
	accumulator( 123, 2.5 ); // $ExpectError
	accumulator( {}, 2.5 ); // $ExpectError
	accumulator( ( x: number ): number => x, 2.5 ); // $ExpectError
}

// The compiler throws an error if the `update` method of the returned model object is provided a second argument that is not a number...
{
	const accumulator = incrSGDRegression();
	accumulator( [ 2.3, 1.0, 5.0 ], 'abc' ); // $ExpectError
	accumulator( [ 2.3, 1.0, 5.0 ], false ); // $ExpectError
	accumulator( [ 2.3, 1.0, 5.0 ], true ); // $ExpectError
	accumulator( [ 2.3, 1.0, 5.0 ], null ); // $ExpectError
	accumulator( [ 2.3, 1.0, 5.0 ], [] ); // $ExpectError
	accumulator( [ 2.3, 1.0, 5.0 ], {} ); // $ExpectError
	accumulator( [ 2.3, 1.0, 5.0 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `update` method of the returned model object is provided an invalid number of arguments...
{
	const accumulator = incrSGDRegression();
	accumulator(); // $ExpectError
	accumulator( [ 2.3, 1.0, 5.0 ] ); // $ExpectError
	accumulator( [ 2.3, 1.0, 5.0 ], 2.0, 2.0 ); // $ExpectError
}

// The compiler throws an error if the `predict` method of the returned model object is provided a first argument that is not a numeric array...
{
	const accumulator = incrSGDRegression();
	accumulator.predict( 'abc' ); // $ExpectError
	accumulator.predict( false ); // $ExpectError
	accumulator.predict( true ); // $ExpectError
	accumulator.predict( null ); // $ExpectError
	accumulator.predict( 123 ); // $ExpectError
	accumulator.predict( {} ); // $ExpectError
	accumulator.predict( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `predict` method of the returned model object is provided an invalid number of arguments...
{
	const accumulator = incrSGDRegression();
	accumulator.predict(); // $ExpectError
	accumulator.predict( [ 2.3, 1.0, 5.0 ], {} ); // $ExpectError
}
