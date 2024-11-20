#/
# @license Apache-2.0
#
# Copyright (c) 2019 The Stdlib Authors.
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

# Define the path of the TypeDoc executable:
TYPEDOC ?= $(BIN_DIR)/typedoc

# Define the path to the TypeDoc configuration file:
TYPEDOC_CONF ?= $(CONFIG_DIR)/typedoc/.typedoc.json

# Define the path to a TypeScript configuration file:
TYPEDOC_TSCONFIG ?= $(CONFIG_DIR)/typedoc/tsconfig.json

# Define the output directory for TypeDoc:
TYPEDOC_OUT ?= $(SRC_DOCS_DIR)/typedoc

# Define the output directory for TypeDoc JSON:
TYPEDOC_JSON_OUT ?= $(TYPEDOC_OUT)/json

# Define the output filepath for TypeDoc JSON:
TYPEDOC_JSON ?= $(TYPEDOC_JSON_OUT)/typedoc.json

# Define the output directory for TypeDoc HTML documentation:
TYPEDOC_HTML_OUT ?= $(TYPEDOC_OUT)/static

# Define the output filepath for the HTML documentation main entry point:
TYPEDOC_HTML ?= $(TYPEDOC_HTML_OUT)/index.html

# Define command-line options to be used when invoking the TypeDoc executable to generate HTML documentation:
TYPEDOC_HTML_FLAGS ?= \
	--options $(TYPEDOC_CONF) \
	--tsconfig $(TYPEDOC_TSCONFIG) \
	--excludeExternals \
	--excludePrivate \
	--excludeProtected \
	--exclude '{**/*test*,**/test*.ts,**/*.js,**/*test.ts}' \
	--name stdlib \
	--theme $(CONFIG_DIR)/typedoc/theme/ \
	--hideGenerator \
	--readme $(CONFIG_DIR)/typedoc/index.md \
	--out $(TYPEDOC_HTML_OUT)

# Define command-line options to be used when invoking the TypeDoc executable to generate TypeDoc JSON:
TYPEDOC_JSON_FLAGS ?= \
	--options $(TYPEDOC_CONF) \
	--tsconfig $(TYPEDOC_TSCONFIG) \
	--excludeExternals \
	--excludePrivate \
	--excludeProtected \
	--exclude '{**/*test*,**/test*.ts,**/*.js,**/*test.ts}' \
	--name stdlib \
	--json $(TYPEDOC_JSON)

# Generate a list of web assets:
typedoc_web_assets ?= $(shell find "$(DOCS_DIR)/assets/web" -type f \( -name \*.png -o -name \*.svg -o -name \*.xml -o -name \*.json -o -name \*.ico \))


# TARGETS #

# Generate TypeDoc HTML documentation.
#
# This target generates source HTML documentation from TypeScript declaration files using [TypeDoc][1].
#
# To install TypeDoc:
#
# ```bash
# $ npm install typedoc
# ```
#
# [1]: https://typedoc.org/

typedoc-html: $(NODE_MODULES) $(TYPEDOC)
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(TYPEDOC_HTML_OUT)
	$(QUIET) $(MKDIR_RECURSIVE) $(TYPEDOC_HTML_OUT)
	$(QUIET) $(NODE) --max_old_space_size=10240 $(TYPEDOC) $(TYPEDOC_HTML_FLAGS) $(SRC_DIR)
	$(QUIET) $(CP) $(typedoc_web_assets) "$(DOCS_DIR)/assets/logo_white.svg" $(TYPEDOC_HTML_OUT)

.PHONY: typedoc-html


# Generate TypeDoc JSON.
#
# This target generates TypeDoc JSON from TypeScript declaration files.
#
# To install TypeDoc:
#
# ```bash
# $ npm install typedoc
# ```
#
# [1]: https://typedoc.org/

typedoc-json: $(NODE_MODULES) $(TYPEDOC)
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(TYPEDOC_JSON)
	$(QUIET) $(MKDIR_RECURSIVE) $(TYPEDOC_JSON_OUT)
	$(QUIET) $(NODE) --max_old_space_size=10240 $(TYPEDOC) $(TYPEDOC_JSON_FLAGS) $(SRC_DIR)

.PHONY: typedoc-json


# View HTML documentation.
#
# This target opens TypeDoc HTML documentation in a local web browser.

view-typedoc-html:
	$(QUIET) $(OPEN) $(TYPEDOC_HTML)

.PHONY: view-typedoc-html


# Remove a TypeDoc output directory.
#
# This target cleans up a TypeDoc output directory by removing it entirely.

clean-typedoc:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(TYPEDOC_OUT)

.PHONY: clean-typedoc


# Rebuild TypeDoc HTML documentation.
#
# This target removes any current documentation and regenerates source HTML documentation from TypeScript declaration files.
#
# To install TypeDoc:
#
# ```bash
# $ npm install typedoc
# ```
#
# [1]: https://typedoc.org/

rebuild-typedoc-html:
	$(QUIET) $(MAKE) -f $(this_file) clean-typedoc
	$(QUIET) $(MAKE) -f $(this_file) typedoc-html

.PHONY: rebuild-typedoc-html
