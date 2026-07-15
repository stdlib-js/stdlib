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

/**
* Returns the loss function string associated with a supported SGD classification loss function value.
*
* @param value - loss function value
* @returns loss function string or null
*
* @example
* var str2enum = require( '@stdlib/ml/base/sgd-classification/loss-function-str2enum' );
*
* var v = resolve( str2enum( 'hinge' ) );
* // returns 'hinge'
*/
declare function resolve( value: any ): string | null;


// EXPORTS //

export = resolve;
