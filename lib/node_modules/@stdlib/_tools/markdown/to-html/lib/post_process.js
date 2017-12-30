'use strict';

// MODULES //

var replace = require( '@stdlib/string/replace' );


// VARIABLES //

var RE_VIEW_BOX = /(?:(view-box)(=".*?"))/g;
var RE_CLIP_PATH_OPEN = /(?:<(clip-path)(.*?>))/g;
var RE_CLIP_PATH_CLOSE = /<\/clip-path>/g;


// MAIN //

/**
* Applies post-processing to output HTML.
*
* ## Notes
*
* * The need for this function stems from rehype and how it treats foreign namespaces in HTML. For background, see the following issues:
*
*   - https://github.com/rhysd/rehype-react/issues/5
*   - https://github.com/wooorm/rehype/issues/2
*   - https://github.com/syntax-tree/hast/issues/6
*
* * __WARNING__: this function is ad-hoc, undoubtedly not comprehensive, and will inevitably have to be updated as additional issues arise.
*
*
* @private
* @param {string} html - HTML to process
* @returns {string} output HTML
*/
function postProcess( html ) {
	html = replace( html, RE_VIEW_BOX, 'viewBox$2' );
	html = replace( html, RE_CLIP_PATH_OPEN, '<clipPath$2' );
	html = replace( html, RE_CLIP_PATH_CLOSE, '</clipPath>' );
	return html;
} // end FUNCTION postProcess()


// EXPORTS //

module.exports = postProcess;
