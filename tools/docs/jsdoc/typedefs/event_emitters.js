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
* An HTTP request object. This object provides access request status, headers, and data and implements the [Readable Stream]{@link https://nodejs.org/api/stream.html} interface.
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
