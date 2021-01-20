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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { TypedArray } from '@stdlib/types/array';
import { Collection } from '@stdlib/types/object';


/**
* Array or typed array.
*/
type ArrayOrTypedArray = Array<any> | TypedArray;

/**
* Converts an array to the same data type as a second input array.
*
* @param x - array to convert
* @param y - array having the desired output data type
* @returns output array
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var y = new Float64Array( 0 );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convertSame( x, y );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function convertSame( x: Collection, y: ArrayOrTypedArray ): ArrayOrTypedArray; // tslint:disable-line:max-line-length unified-signatures


// EXPORTS //

export = convertSame;
