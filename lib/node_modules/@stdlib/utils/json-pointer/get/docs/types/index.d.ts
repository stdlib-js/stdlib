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
* Retrieves the value at a specified JSON Pointer from a document.
*
* ## Notes
*
* -   Implements retrieval per RFC 6901.
* -   An empty string pointer refers to the root of the document.
*
* @param document - JSON document
* @param pointer - JSON Pointer string
* @throws first argument must be an object or array
* @throws second argument must be a string
* @throws pointer must resolve to an existing location in the document
* @throws tokens must not be prototype pollution vectors
* @throws array index must be within bounds
* @returns value at the specified location
*
* @example
* var out = get( { 'foo': [ 'bar', 'baz' ] }, '/foo/0' );
* // returns 'bar'
*
* @example
* var out = get( { 'foo': 'bar' }, '/foo' );
* // returns 'bar'
*
* @example
* var out = get( { 'foo': 'bar' }, '' );
* // returns { 'foo': 'bar' }
*/
declare function get( document: Record<string, any> | Array<any>, pointer: string ): any;


// EXPORTS //

export = get;
