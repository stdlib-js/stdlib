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

import resolveParentPathBy = require( './index' );

/**
* Callback to invoke after processing a path.
*
* @param error - error object or null
* @param result - test result
*/
type Callback = ( error: Error | null, result: boolean ) => void;

/**
* Checks whether a path passes a test.
*
* @param path - resolved path
* @param next - callback
*/
function predicate( path: string, next: Callback ): void {
	next( null, ( path === path ) );
}

/**
* Checks whether a path passes a test.
*
* @param path - resolved path
*/
function predicateSync( path: string ): boolean {
	return ( path === path );
}

/**
* Callback invoked upon resolving a path.
*
* @param error - error object
* @param path - resolved path
*/
function done( error: Error | null, path: string | null ): void {
	if ( error || path === null ) {
		throw new Error( 'beep' );
	}
}


// TESTS //

// The function returns void...
{
	resolveParentPathBy( 'package.json', predicate, done ); // $ExpectType void
	resolveParentPathBy( 'package.json', {}, predicate, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	resolveParentPathBy( 123, predicate, done ); // $ExpectError
	resolveParentPathBy( false, predicate, done ); // $ExpectError
	resolveParentPathBy( true, predicate, done ); // $ExpectError
	resolveParentPathBy( null, predicate, done ); // $ExpectError
	resolveParentPathBy( undefined, predicate, done ); // $ExpectError
	resolveParentPathBy( [], predicate, done ); // $ExpectError
	resolveParentPathBy( {}, predicate, done ); // $ExpectError
	resolveParentPathBy( ( x: number ): number => x, predicate, done ); // $ExpectError

	resolveParentPathBy( 123, {}, predicate, done ); // $ExpectError
	resolveParentPathBy( false, {}, predicate, done ); // $ExpectError
	resolveParentPathBy( true, {}, predicate, done ); // $ExpectError
	resolveParentPathBy( null, {}, predicate, done ); // $ExpectError
	resolveParentPathBy( undefined, {}, predicate, done ); // $ExpectError
	resolveParentPathBy( [], {}, predicate, done ); // $ExpectError
	resolveParentPathBy( {}, {}, predicate, done ); // $ExpectError
	resolveParentPathBy( ( x: number ): number => x, {}, predicate, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a predicate function argument which is not a function with the expected signature...
{
	resolveParentPathBy( '/var/log/', 1, done ); // $ExpectError
	resolveParentPathBy( '/var/log/', false, done ); // $ExpectError
	resolveParentPathBy( '/var/log/', true, done ); // $ExpectError
	resolveParentPathBy( '/var/log/', null, done ); // $ExpectError
	resolveParentPathBy( '/var/log/', undefined, done ); // $ExpectError
	resolveParentPathBy( '/var/log/', [], done ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, done ); // $ExpectError
	resolveParentPathBy( '/var/log/', ( x: number ): number => x, done ); // $ExpectError

	resolveParentPathBy( '/var/log/', {}, 1, done ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, false, done ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, true, done ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, null, done ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, undefined, done ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, [], done ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, {}, done ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a "done" callback argument which is not a function with the expected signature...
{
	resolveParentPathBy( '/var/log/', predicate, 1 ); // $ExpectError
	resolveParentPathBy( '/var/log/', predicate, false ); // $ExpectError
	resolveParentPathBy( '/var/log/', predicate, true ); // $ExpectError
	resolveParentPathBy( '/var/log/', predicate, null ); // $ExpectError
	resolveParentPathBy( '/var/log/', predicate, undefined ); // $ExpectError
	resolveParentPathBy( '/var/log/', predicate, [] ); // $ExpectError
	resolveParentPathBy( '/var/log/', predicate, {} ); // $ExpectError
	resolveParentPathBy( '/var/log/', predicate, ( x: number ): number => x ); // $ExpectError

	resolveParentPathBy( '/var/log/', {}, predicate, 1 ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, predicate, false ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, predicate, true ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, predicate, null ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, predicate, undefined ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, predicate, [] ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, predicate, {} ); // $ExpectError
	resolveParentPathBy( '/var/log/', {}, predicate, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	resolveParentPathBy( 'package.json', null, predicate, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an `dir` option which is not a string...
{
	resolveParentPathBy( 'package.json', { 'dir': 123 }, predicate, done ); // $ExpectError
	resolveParentPathBy( 'package.json', { 'dir': true }, predicate, done ); // $ExpectError
	resolveParentPathBy( 'package.json', { 'dir': false }, predicate, done ); // $ExpectError
	resolveParentPathBy( 'package.json', { 'dir': null }, predicate, done ); // $ExpectError
	resolveParentPathBy( 'package.json', { 'dir': [] }, predicate, done ); // $ExpectError
	resolveParentPathBy( 'package.json', { 'dir': {} }, predicate, done ); // $ExpectError
	resolveParentPathBy( 'package.json', { 'dir': ( x: number ): number => x }, predicate, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	resolveParentPathBy(); // $ExpectError
	resolveParentPathBy( 'C:\\foo\\bar\\baz' ); // $ExpectError
	resolveParentPathBy( 'C:\\foo\\bar\\baz', {} ); // $ExpectError
	resolveParentPathBy( 'C:\\foo\\bar\\baz', predicate ); // $ExpectError
	resolveParentPathBy( 'C:\\foo\\bar\\baz', {}, predicate ); // $ExpectError
	resolveParentPathBy( 'C:\\foo\\bar\\baz', {}, predicate, done, {} ); // $ExpectError
}

// Attached to the main export is a `sync` method which returns a string or null...
{
	resolveParentPathBy.sync( 'package.json', predicateSync ); // $ExpectType string | null
	resolveParentPathBy.sync( 'package.json', {}, predicateSync ); // $ExpectType string | null
}

// The compiler throws an error if the `sync` method is provided a first argument which is not a string...
{
	resolveParentPathBy.sync( 123, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( false, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( true, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( null, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( undefined, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( [], predicateSync ); // $ExpectError
	resolveParentPathBy.sync( {}, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( ( x: number ): number => x, predicateSync ); // $ExpectError

	resolveParentPathBy.sync( 123, {}, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( false, {}, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( true, {}, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( null, {}, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( undefined, {}, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( [], {}, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( {}, {}, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( ( x: number ): number => x, {}, predicateSync ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a predicate function argument which is not a function with the expected signature...
{
	resolveParentPathBy.sync( 'package.json', 123 ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', false ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', true ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', null ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', undefined ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', [] ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', {} ); // $ExpectError

	resolveParentPathBy.sync( 'package.json', {}, 123 ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', {}, false ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', {}, true ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', {}, null ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', {}, undefined ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', {}, [] ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', {}, {} ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an options argument which is not an object...
{
	resolveParentPathBy.sync( 'package.json', null, predicateSync ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an `dir` option which is not a string...
{
	resolveParentPathBy.sync( 'package.json', { 'dir': 123 }, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', { 'dir': true }, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', { 'dir': false }, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', { 'dir': null }, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', { 'dir': [] }, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', { 'dir': {} }, predicateSync ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', { 'dir': ( x: number ): number => x }, predicateSync ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an unsupported number of arguments...
{
	resolveParentPathBy.sync(); // $ExpectError
	resolveParentPathBy.sync( 'package.json' ); // $ExpectError
	resolveParentPathBy.sync( 'package.json', {}, predicateSync, {} ); // $ExpectError
}
