/**
* @license Apache-2.0
*
* Copyright (c) 2016 The Stdlib Authors.
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

/**
* An object which emits events.
*
* @typedef {Object} EventEmitter
*
* @see Node.js EventEmitter [documentation]{@link https://nodejs.org/api/events.html}
*/

/**
* A stream interface for reading from a data source.
*
* @typedef {EventEmitter} ReadableStream
*
* @see Node.js stream [documentation]{@link https://nodejs.org/api/stream.html}
*/

/**
* A stream interface for writing to a destination.
*
* @typedef {EventEmitter} WritableStream
*
* @see Node.js stream [documentation]{@link https://nodejs.org/api/stream.html}
*/

/**
* A stream interface implementing both readable and writable stream interfaces.
*
* @typedef {EventEmitter} DuplexStream
*
* @see Node.js stream [documentation]{@link https://nodejs.org/api/stream.html}
*/

/**
* A duplex stream where the output is causally connected to the input.
*
* @typedef {DuplexStream} TransformStream
*
* @see Node.js stream [documentation]{@link https://nodejs.org/api/stream.html}
*/

/**
* A Node.js stream.
*
* @typedef {(ReadableStream|WritableStream|DuplexStream|TransformStream)} Stream
*
* @see Node.js stream [documentation]{@link https://nodejs.org/api/stream.html}
*/

/**
* An HTTP request object. This object provides access to request status, headers, and data and implements the [Readable Stream]{@link https://nodejs.org/api/stream.html} interface.
*
* @typedef {EventEmitter} IncomingMessage
*
* @see Node.js HTTP [documentation]{@link https://nodejs.org/api/http.html}
*/

/**
* An HTTP response object. This object implements, but does not inherit from, the [Writable Stream]{@link https://nodejs.org/api/stream.html} interface.
*
* @typedef {EventEmitter} ServerResponse
*
* @see Node.js HTTP [documentation]{@link https://nodejs.org/api/http.html}
*/
