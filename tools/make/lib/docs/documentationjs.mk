#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#/

# VARIABLES #

# Define the path of the documentation.js executable:
DOCUMENTATIONJS ?= $(BIN_DIR)/documentation

# Define the path to JSDoc type definitions:
DOCUMENTATIONJS_TYPEDEF ?= $(TOOLS_DIR)/docs/jsdoc/typedefs/*.js

# Define the output directory for documentation.js:
DOCUMENTATIONJS_OUT ?= $(SRC_DOCS_DIR)/documentationjs

# Define the output directory for documentation.js JSON:
DOCUMENTATIONJS_JSON_OUT ?= $(DOCUMENTATIONJS_OUT)/json

# Define the output filepath for documentation.js JSON:
DOCUMENTATIONJS_JSON ?= $(DOCUMENTATIONJS_JSON_OUT)/documentationjs.json

# Define the output directory for documentation.js HTML documentation:
DOCUMENTATIONJS_HTML_OUT ?= $(DOCUMENTATIONJS_OUT)/static

# Define the output filepath for HTML documentation:
DOCUMENTATIONJS_HTML ?= $(DOCUMENTATIONJS_HTML_OUT)/index.html

# Define command-line options to be used when invoking the documentation.js executable to generate HTML documentation:
DOCUMENTATIONJS_HTML_FLAGS ?= \
	--format html \
	--output $(DOCUMENTATIONJS_HTML_OUT)

# Define command-line options to be used when invoking the documentation.js executable to generate JSON:
DOCUMENTATIONJS_JSON_FLAGS ?= --format json


# TARGETS #

# Generate HTML documentation.
#
# This target generates source HTML documentation from [JSDoc][1]-style comments using [documentation.js][2].
#
# To install documentation.js:
#
# ```bash
# $ npm install documentation
# ```
#
# [1]: https://jsdoc.app/
# [2]: https://github.com/documentationjs/documentation

documentationjs-html: $(NODE_MODULES)
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DOCUMENTATIONJS_HTML_OUT)
	$(QUIET) $(MKDIR_RECURSIVE) $(DOCUMENTATIONJS_HTML_OUT)
	$(QUIET) $(DOCUMENTATIONJS) $(DOCUMENTATIONJS_HTML_FLAGS) $(DOCUMENTATIONJS_TYPEDEF) $(SOURCES)

.PHONY: documentationjs-html


# Generate JSDoc JSON.
#
# This target generates JSDoc JSON from [JSDoc][1]-style comments.
#
# To install documentation.js:
#
# ```bash
# $ npm install documentation
# ```
#
# [1]: https://jsdoc.app/
# [2]: https://github.com/documentationjs/documentation

documentationjs-json: $(NODE_MODULES)
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DOCUMENTATIONJS_JSON)
	$(QUIET) $(MKDIR_RECURSIVE) $(DOCUMENTATIONJS_JSON_OUT)
	$(QUIET) $(DOCUMENTATIONJS) $(DOCUMENTATIONJS_JSON_FLAGS) $(DOCUMENTATIONJS_TYPEDEF) $(SOURCES) > $(DOCUMENTATIONJS_JSON)

.PHONY: documentationjs-json


# View HTML documentation.
#
# This target opens documentation.js HTML documentation in a local web browser.

view-documentationjs-html:
	$(QUIET) $(OPEN) $(DOCUMENTATIONJS_HTML)

.PHONY: view-documentationjs-html


# Remove a documentation.js output directory.
#
# This target cleans up a documentation.js output directory by removing it entirely.

clean-documentationjs:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DOCUMENTATIONJS_OUT)

.PHONY: clean-documentationjs


# Rebuild HTML documentation.
#
# This target removes any current documentation and regenerates source HTML documentation from [JSDoc][1]-style comments using [documentation.js][2].
#
# To install documentation.js:
#
# ```bash
# $ npm install documentation
# ```
#
# [1]: https://jsdoc.app/
# [2]: https://github.com/documentationjs/documentation

rebuild-documentationjs-html:
	$(QUIET) $(MAKE) -f $(this_file) clean-documentationjs
	$(QUIET) $(MAKE) -f $(this_file) documentationjs-html

.PHONY: rebuild-documentationjs-html

