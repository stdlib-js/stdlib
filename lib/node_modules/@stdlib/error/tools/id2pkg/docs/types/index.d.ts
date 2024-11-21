/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Returns a package name associated with a specified error code identifier prefix.
*
* @param id - identifier prefix
* @returns package name
*
* @example
* var v = id2pkg( '0YK' );
* // returns '@stdlib/math/base/special/sin'
*/
declare function id2pkg( id: string ): string | null;


// EXPORTS //

export = id2pkg;
