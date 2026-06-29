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

import { Shape, Order, boolndarray, BooleanDataType } from '@stdlib/types/ndarray';

/**
* Creates an ndarray filled with `false` values and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns `false`-filled array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = falses( 'bool', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ false, false ], [ false, false ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'bool'
*/
declare function falses( dtype: BooleanDataType, shape: Shape, order: Order ): boolndarray;


// EXPORTS //

export = falses;
