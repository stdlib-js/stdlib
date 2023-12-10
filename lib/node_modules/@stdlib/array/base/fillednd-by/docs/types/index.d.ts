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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Shape } from '@stdlib/types/ndarray';

/**
* One-dimensional array.
*/
type Array1D<T> = Array<T>;

/**
* One-dimensional array shape.
*/
type Shape1D = [ number ];

/**
* Two-dimensional array.
*/
type Array2D<T> = Array<Array1D<T>>;

/**
* Two-dimensional array shape.
*/
type Shape2D = [ number, number ];

/**
* Three-dimensional array.
*/
type Array3D<T> = Array<Array2D<T>>;

/**
* Three-dimensional array shape.
*/
type Shape3D = [ number, number, number ];

/**
* Four-dimensional array.
*/
type Array4D<T> = Array<Array3D<T>>;

/**
* Four-dimensional array shape.
*/
type Shape4D = [ number, number, number, number ];

/**
* Five-dimensional array.
*/
type Array5D<T> = Array<Array4D<T>>;

/**
* Five-dimensional array shape.
*/
type Shape5D = [ number, number, number, number, number ];

/**
* Six-dimensional array.
*/
type Array6D<T> = Array<Array5D<T>>;

/**
* Six-dimensional array shape.
*/
type Shape6D = [ number, number, number, number, number, number ];

/**
* Seven-dimensional array.
*/
type Array7D<T> = Array<Array6D<T>>;

/**
* Seven-dimensional array shape.
*/
type Shape7D = [ number, number, number, number, number, number, number ];

/**
* Eight-dimensional array.
*/
type Array8D<T> = Array<Array7D<T>>;

/**
* Eight-dimensional array shape.
*/
type Shape8D = [ number, number, number, number, number, number, number, number ];

/**
* Nine-dimensional array.
*/
type Array9D<T> = Array<Array8D<T>>;

/**
* Nine-dimensional array shape.
*/
type Shape9D = [ number, number, number, number, number, number, number, number, number ];

/**
* Ten-dimensional array.
*/
type Array10D<T> = Array<Array9D<T>>; // WARNING: arbitrarily limited to 10 dimensions, which should be fine for most practical purposes

/**
* Ten-dimensional array shape.
*/
type Shape10D = [ number, number, number, number, number, number, number, number, number, number ];

/**
* Nullary callback function.
*
* @returns fill value
*/
type Nullary<T, V> = ( this: V ) => T;

/**
* Unary callback function.
*
* @param indices - current array element indices
* @returns fill value
*/
type Unary<T, V> = ( this: V, indices: Array<number> ) => T;

/**
* Callback function.
*
* @param indices - current array element indices
* @returns fill value
*/
type Callback<T, V> = Nullary<T, V> | Unary<T, V>;

/**
* Creates a filled one-dimensional nested array according to a provided callback function.
*
* @param shape - array shape
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns output array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var out = filledndBy( [ 3 ], constantFunction( 1.0 ) );
* // returns [ 1.0, 1.0, 1.0 ]
*/
declare function filledndBy<T = unknown, V = unknown>( shape: Shape1D, clbk: Callback<T, V>, thisArg?: ThisParameterType<Callback<T, V>> ): Array1D<T>;
/**
* Creates a filled two-dimensional nested array according to a provided callback function.
*
* @param shape - array shape
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns output array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var out = filledndBy( [ 1, 3 ], constantFunction( 1.0 ) );
* // returns [ [ 1.0, 1.0, 1.0 ] ]
*/
declare function filledndBy<T = unknown, V = unknown>( shape: Shape2D, clbk: Callback<T, V>, thisArg?: ThisParameterType<Callback<T, V>> ): Array2D<T>;
/**
* Creates a filled three-dimensional nested array according to a provided callback function.
*
* @param shape - array shape
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns output array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var out = filledndBy( [ 1, 1, 3 ], constantFunction( 1.0 ) );
* // returns [ [ [ 1.0, 1.0, 1.0 ] ] ]
*/
declare function filledndBy<T = unknown, V = unknown>( shape: Shape3D, clbk: Callback<T, V>, thisArg?: ThisParameterType<Callback<T, V>> ): Array3D<T>;

/**
* Creates a filled four-dimensional nested array according to a provided callback function.
*
* @param shape - array shape
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns output array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var out = filledndBy( [ 1, 1, 1, 3 ], constantFunction( 1.0 ) );
* // returns [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ]
*/
declare function filledndBy<T = unknown, V = unknown>( shape: Shape4D, clbk: Callback<T, V>, thisArg?: ThisParameterType<Callback<T, V>> ): Array4D<T>;

/**
* Creates a filled five-dimensional nested array according to a provided callback function.
*
* @param shape - array shape
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns output array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var out = filledndBy( [ 1, 1, 1, 1, 3 ], constantFunction( 1.0 ) );
* // returns [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ]
*/
declare function filledndBy<T = unknown, V = unknown>( shape: Shape5D, clbk: Callback<T, V>, thisArg?: ThisParameterType<Callback<T, V>> ): Array5D<T>;

/**
* Creates a filled six-dimensional nested array according to a provided callback function.
*
* @param shape - array shape
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns output array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var out = filledndBy( [ 1, 1, 1, 1, 1, 3 ], constantFunction( 1.0 ) );
* // returns [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ]
*/
declare function filledndBy<T = unknown, V = unknown>( shape: Shape6D, clbk: Callback<T, V>, thisArg?: ThisParameterType<Callback<T, V>> ): Array6D<T>;

/**
* Creates a filled seven-dimensional nested array according to a provided callback function.
*
* @param shape - array shape
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns output array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var out = filledndBy( [ 1, 1, 1, 1, 1, 1, 3 ], constantFunction( 1.0 ) );
* // returns [ [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ] ]
*/
declare function filledndBy<T = unknown, V = unknown>( shape: Shape7D, clbk: Callback<T, V>, thisArg?: ThisParameterType<Callback<T, V>> ): Array7D<T>;

/**
* Creates a filled eight-dimensional nested array according to a provided callback function.
*
* @param shape - array shape
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns output array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var out = filledndBy( [ 1, 1, 1, 1, 1, 1, 1, 3 ], constantFunction( 1.0 ) );
* // returns [ [ [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ] ] ]
*/
declare function filledndBy<T = unknown, V = unknown>( shape: Shape8D, clbk: Callback<T, V>, thisArg?: ThisParameterType<Callback<T, V>> ): Array8D<T>;

/**
* Creates a filled nine-dimensional nested array according to a provided callback function.
*
* @param shape - array shape
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns output array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var out = filledndBy( [ 1, 1, 1, 1, 1, 1, 1, 1, 3 ], constantFunction( 1.0 ) );
* // returns [ [ [ [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ] ] ] ]
*/
declare function filledndBy<T = unknown, V = unknown>( shape: Shape9D, clbk: Callback<T, V>, thisArg?: ThisParameterType<Callback<T, V>> ): Array9D<T>;

/**
* Creates a filled ten-dimensional nested array according to a provided callback function.
*
* @param shape - array shape
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns output array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var out = filledndBy( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ], constantFunction( 1.0 ) );
* // returns [ [ [ [ [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ] ] ] ] ]
*/
declare function filledndBy<T = unknown, V = unknown>( shape: Shape10D, clbk: Callback<T, V>, thisArg?: ThisParameterType<Callback<T, V>> ): Array10D<T>;

/**
* Creates a filled n-dimensional nested array according to a provided callback function.
*
* @param shape - array shape
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns output array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var out = filledndBy( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ], constantFunction( 1.0 ) );
* // returns [ [ [ [ [ [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ] ] ] ] ]
*/
declare function filledndBy<T = unknown, V = unknown>( shape: Shape, clbk: Callback<T, V>, thisArg?: ThisParameterType<Callback<T, V>> ): Array<T>;


// EXPORTS //

export = filledndBy;
