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

# Define the command to commit staged files after processing Markdown equations:
GIT_COMMIT_EQUATIONS ?= $(GIT_COMMIT) -m 'Process Markdown equations'

# Define the command to commit staged files after inserting resource URLs:
GIT_COMMIT_SRC_URLS ?= $(GIT_COMMIT) -m 'Insert src urls into equation elements'

# Define the path relative to a processed Markdown file for storing equation resources:
EQUATION_RESOURCES_PATH ?= ./docs/img/

# Define the path to the remark configuration file:
REMARK_EQUATIONS_CONF ?= $(CONFIG_DIR)/remark/.remarkrc.js

# Define the path to the remark ignore file:
# REMARK_EQUATIONS_IGNORE ?= $(CONFIG_DIR)/remark/.remarkignore FIXME
REMARK_EQUATIONS_IGNORE ?= $(ROOT_DIR)/.remarkignore

# Define the path to a plugin which processes Markdown equation comments:
REMARK_IMG_EQUATIONS_PLUGIN ?= $(TOOLS_PKGS_DIR)/remark/plugins/remark-img-equations
REMARK_IMG_EQUATIONS_PLUGIN_SETTINGS ?=
REMARK_IMG_EQUATIONS_PLUGIN_FLAGS ?= --use $(REMARK_IMG_EQUATIONS_PLUGIN)=$(REMARK_IMG_EQUATIONS_PLUGIN_SETTINGS)

# Define the path to a plugin which creates SVG equation files from Markdown equation comments:
REMARK_SVG_EQUATIONS_PLUGIN ?= $(TOOLS_PKGS_DIR)/remark/plugins/remark-svg-equations-to-file
REMARK_SVG_EQUATIONS_PLUGIN_SETTINGS ?= '"'dir'"':'"'$(EQUATION_RESOURCES_PATH)'"'
REMARK_SVG_EQUATIONS_PLUGIN_FLAGS ?= --use $(REMARK_SVG_EQUATIONS_PLUGIN)=$(REMARK_SVG_EQUATIONS_PLUGIN_SETTINGS)

# Define the path to a plugin which inserts resource URLs into Markdown image equation elements:
REMARK_IMG_EQUATIONS_SRC_URLS_PLUGIN ?= $(TOOLS_PKGS_DIR)/remark/plugins/remark-img-equations-src-urls
REMARK_IMG_EQUATIONS_SRC_URLS_PLUGIN_SETTINGS ?= '"'dir'"':'"'$(EQUATION_RESOURCES_PATH)'"'
REMARK_IMG_EQUATIONS_SRC_URLS_PLUGIN_FLAGS ?= --use $(REMARK_IMG_EQUATIONS_SRC_URLS_PLUGIN)=$(REMARK_IMG_EQUATIONS_SRC_URLS_PLUGIN_SETTINGS)

# Define command-line options when invoking the remark executable:
REMARK_EQUATIONS_FLAGS ?= \
	--ext $(MARKDOWN_FILENAME_EXT) \
	--rc-path $(REMARK_EQUATIONS_CONF) \
	--ignore-path $(REMARK_EQUATIONS_IGNORE)

# Define the remark output option:
REMARK_EQUATIONS_OUTPUT_FLAG ?= --output


# RULES #

#/
# Processes Markdown files containing Markdown equation elements.
#
# ## Notes
#
# -   Processing happens as follows:
#
#     1.  Files containing equation comments are transformed to include equation elements.
#     2.  SVG files are generated for each equation.
#     3.  Processed files are committed to source control.
#     4.  Resource URLs are inserted in image equation elements.
#     5.  Processed files are committed to source control.
#
# @param {string} [MARKDOWN_FILTER] - file path pattern (e.g., `.*/math/base/special/.*`)
# @param {string} [MARKDOWN_PATTERN] - filename pattern (e.g., `*.md`)
#
# @example
# make markdown-equations
#
# @example
# make markdown-equations MARKDOWN_PATTERN='README.md' MARKDOWN_FILTER='.*/math/base/special/.*'
#/
markdown-equations: $(NODE_MODULES) assert-clean-working-directory
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_EQUATIONS_FLAGS) \
		$(REMARK_IMG_EQUATIONS_PLUGIN_FLAGS) \
		$(REMARK_SVG_EQUATIONS_PLUGIN_FLAGS) \
		$(REMARK_EQUATIONS_OUTPUT_FLAG) && \
	$(GIT_ADD) && $(GIT_COMMIT_EQUATIONS) && \
	NODE_PATH="$(NODE_PATH)" $(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_EQUATIONS_FLAGS) \
		$(REMARK_IMG_EQUATIONS_SRC_URLS_PLUGIN_FLAGS) \
		$(REMARK_EQUATIONS_OUTPUT_FLAG) && \
	$(GIT_ADD) && $(GIT_COMMIT_SRC_URLS)

.PHONY: markdown-equations

#/
# Transforms Markdown files containing equation comment markup to include image equation elements.
#
# @param {string} [MARKDOWN_FILTER] - file path pattern (e.g., `.*/math/base/special/.*`)
# @param {string} [MARKDOWN_PATTERN] - filename pattern (e.g., `*.md`)
#
# @example
# make markdown-img-equations
#
# @example
# make markdown-img-equations MARKDOWN_PATTERN='README.md' MARKDOWN_FILTER='.*/math/base/special/.*'
#/
markdown-img-equations: $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_EQUATIONS_FLAGS) \
		$(REMARK_IMG_EQUATIONS_PLUGIN_FLAGS) \
		$(REMARK_EQUATIONS_OUTPUT_FLAG)

.PHONY: markdown-img-equations

#/
# Generates SVG equation files from Markdown equation comments.
#
# @param {string} [MARKDOWN_FILTER] - file path pattern (e.g., `.*/math/base/special/.*`)
# @param {string} [MARKDOWN_PATTERN] - filename pattern (e.g., `*.md`)
#
# @example
# make markdown-svg-equations
#
# @example
# make markdown-svg-equations MARKDOWN_PATTERN='README.md' MARKDOWN_FILTER='.*/math/base/special/.*'
markdown-svg-equations: $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_EQUATIONS_FLAGS) \
		$(REMARK_SVG_EQUATIONS_PLUGIN_FLAGS)

.PHONY: markdown-svg-equations

#/
# Inserts resource URLs into Markdown image equation elements.
#
# ## Notes
#
# -   This recipe assumes that image SVG equation files already exist and have been committed to source control.
#
# @param {string} [MARKDOWN_FILTER] - file path pattern (e.g., `.*/math/base/special/.*`)
# @param {string} [MARKDOWN_PATTERN] - filename pattern (e.g., `*.md`)
#
# @example
# make markdown-img-equations-src-urls
#
# @example
# make markdown-img-equations-src-urls MARKDOWN_PATTERN='README.md' MARKDOWN_FILTER='.*/math/base/special/.*'
markdown-img-equations-src-urls: $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_EQUATIONS_FLAGS) \
		$(REMARK_IMG_EQUATIONS_SRC_URLS_PLUGIN_FLAGS) \
		$(REMARK_EQUATIONS_OUTPUT_FLAG)

.PHONY: markdown-img-equations-src-urls

#/
# Removes SVG equation files.
#
# @param {string} [SVG_EQUATIONS_FILTER] - file path pattern (e.g., `.*/math/base/special/.*`)
# @param {string} [SVG_EQUATIONS_PATTERN] - filename pattern (e.g., `equation*.svg`)
#
# @example
# make clean-markdown-svg-equations
#
# @example
# make clean-markdown-svg-equations SVG_EQUATIONS_PATTERN='equations*.svg' SVG_EQUATIONS_FILTER='.*/math/base/special/.*'
#/
clean-markdown-svg-equations:
	$(QUIET) $(DELETE) -f $(SVG_EQUATION_FILES)

.PHONY: clean-markdown-svg-equations
