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

# Define the path of the JSDoc executable:
JSDOC ?= $(BIN_DIR)/jsdoc

# Define the path to the JSDoc configuration file:
JSDOC_CONF ?= $(CONFIG_DIR)/jsdoc/.jsdoc.json

# Define the path to JSDoc type definitions:
JSDOC_TYPEDEF ?= $(TOOLS_DIR)/docs/jsdoc/typedefs/*.js

# Define the path to the JSDoc JSON template:
JSDOC_JSON_TEMPLATE ?= $(TOOLS_DIR)/docs/jsdoc/templates/json

# Define the output directory for JSDoc:
JSDOC_OUT ?= $(SRC_DOCS_DIR)/jsdoc

# Define the output directory for JSDoc JSON:
JSDOC_JSON_OUT ?= $(JSDOC_OUT)/json

# Define the output filepath for JSDoc JSON:
JSDOC_JSON ?= $(JSDOC_JSON_OUT)/jsdoc.json

# Define the path to the JSDoc HTML template:
JSDOC_HTML_TEMPLATE ?= $(TOOLS_DIR)/docs/jsdoc/templates/html

# Define the output directory for JSDoc HTML documentation:
JSDOC_HTML_OUT ?= $(JSDOC_OUT)/static

# Define the output filepath for HTML documentation:
JSDOC_HTML ?= $(JSDOC_HTML_OUT)/index.html

# Define command-line options to be used when invoking the JSDoc executable to generate HTML documentation:
JSDOC_HTML_FLAGS ?= \
	--template $(JSDOC_HTML_TEMPLATE) \
	--configure $(JSDOC_CONF) \
	--encoding utf8 \
	--destination $(JSDOC_HTML_OUT) \
	--verbose

# Define command-line options to be used when invoking the JSDoc executable to generate JSDoc JSON:
JSDOC_JSON_FLAGS ?= \
	--template $(JSDOC_JSON_TEMPLATE) \
	--configure $(JSDOC_CONF) \
	--encoding utf8 \
	--destination console


# TARGETS #

# Generate JSDoc HTML documentation.
#
# This target generates source HTML documentation from [JSDoc][1]-style comments using [JSDoc][1].
#
# To install JSDoc:
#
# ```bash
# $ npm install jsdoc
# ```
#
# [1]: https://jsdoc.app/

jsdoc-html: $(NODE_MODULES)
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(JSDOC_HTML_OUT)
	$(QUIET) $(MKDIR_RECURSIVE) $(JSDOC_HTML_OUT)
	$(QUIET) $(JSDOC) $(JSDOC_HTML_FLAGS) $(JSDOC_TYPEDEF) $(SOURCES)

.PHONY: jsdoc-html


# Generate JSDoc JSON.
#
# This target generates JSDoc JSON from [JSDoc][1]-style comments.
#
# To install JSDoc:
#
# ```bash
# $ npm install jsdoc
# ```
#
# [1]: https://jsdoc.app/

jsdoc-json: $(NODE_MODULES)
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(JSDOC_JSON)
	$(QUIET) $(MKDIR_RECURSIVE) $(JSDOC_JSON_OUT)
	$(QUIET) $(JSDOC) $(JSDOC_JSON_FLAGS) $(JSDOC_TYPEDEF) $(SOURCES) > $(JSDOC_JSON)

.PHONY: jsdoc-json


# View HTML documentation.
#
# This target opens JSDoc HTML documentation in a local web browser.

view-jsdoc-html:
	$(QUIET) $(OPEN) $(JSDOC_HTML)

.PHONY: view-jsdoc-html


# Remove a JSDoc output directory.
#
# This target cleans up a JSDoc output directory by removing it entirely.

clean-jsdoc:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(JSDOC_OUT)

.PHONY: clean-jsdoc


# Rebuild JSDoc HTML documentation.
#
# This target removes any current documentation and regenerates source HTML documentation from [JSDoc][1]-style comments.
#
# To install JSDoc:
#
# ```bash
# $ npm install jsdoc
# ```
#
# [1]: https://jsdoc.app/

rebuild-jsdoc-html:
	$(QUIET) $(MAKE) -f $(this_file) clean-jsdoc
	$(QUIET) $(MAKE) -f $(this_file) jsdoc-html

.PHONY: rebuild-jsdoc-html
