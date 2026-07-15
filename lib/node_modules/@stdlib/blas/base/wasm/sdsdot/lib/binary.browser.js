/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

'use strict';

// MODULES //

var base64ToUint8Array = require( '@stdlib/string/base/base64-to-uint8array' );


// MAIN //

var wasm = base64ToUint8Array( 'AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEaA2AAAGAGf31/f39/AX1gCH99f39/f39/AX0CDwEDZW52Bm1lbW9yeQIAAAMEAwABAgczAxFfX3dhc21fY2FsbF9jdG9ycwAACGNfc2RzZG90AAEQY19zZHNkb3RfbmRhcnJheQACCvICAwMAAQsvACAAIAEgAiADQQEgAGsiACADbEEAIANBAEwbIAQgBSAAIAVsQQAgBUEATBsQAgu7AgIBfwF8IABBAEoEfSABuyEJAkAgA0EBRyAGQQFHckUEQAJAIABBBXAiBkUNAANAIAYgCEYNASACIARBAnRqKgIAuyAFIAdBAnRqKgIAu6IgCaAhCSAIQQFqIQggB0EBaiEHIARBAWohBAwACwALIABBBEwNAQNAIAAgBkwNAiAJIAIgBEECdGoiAyoCELsgBSAHQQJ0aiIIKgIQu6IgAyoCDLsgCCoCDLuiIAMqAgi7IAgqAgi7oiADKgIAuyAIKgIAu6IgAyoCBLsgCCoCBLuioKCgoKAhCSAGQQVqIQYgB0EFaiEHIARBBWohBAwACwALA0AgACAIRg0BIAIgBEECdGoqAgC7IAUgB0ECdGoqAgC7oiAJoCEJIAhBAWohCCAGIAdqIQcgAyAEaiEEDAALAAsgCbYFIAELCw==' );


// EXPORTS //

module.exports = wasm;
