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

// TypeScript Version: 4.1

/**
* Callback invoked after creating a REPL environment.
*/
type Nullary = () => void;

/**
* Callback invoked after creating a REPL environment.
*
* @param error - error object or null
*/
type Unary = ( error: Error | null ) => void;

/**
* Callback invoked after creating a REPL environment.
*
* @param error - error object or null
* @param server - server object
*/
type Binary = ( error: Error | null, server: any ) => void;

/**
* Callback invoked after creating a REPL environment.
*
* @param error - error object or null
* @param server - server object
*/
type Callback = Nullary | Unary | Binary;

/**
* Starts a REPL environment.
*
* @param clbk - callback to invoke upon starting a REPL
*
* @example
* repl( onStart );
*
* function onStart( error, server ) {
*     if ( error ) {
*         throw error;
*     }
*     server.close();
* }
*/
declare function repl( clbk: Callback ): void;

/**
* Starts a REPL environment.
*
* @param options - REPL options
* @param clbk - callback to invoke upon starting a REPL
* @throws must provide valid options
*
* @example
* repl( {}, onStart );
*
* function onStart( error, server ) {
*     if ( error ) {
*         throw error;
*     }
*     server.close();
* }
*/
declare function repl( options: any, clbk: Callback ): void;


// EXPORTS //

export = repl;
