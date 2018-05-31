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

# Define the commit message for processing Markdown namespace table of contents:
GIT_COMMIT_MESSAGE_TOCS ?= 'Process namespace table of contents'

# Define the commit message for adding packages to namespace table of contents:
GIT_COMMIT_MESSAGE_SRC_URLS ?= 'Insert packages to namespace table of contents'

# Define the command to commit staged files after processing Markdown equations:
GIT_COMMIT_TOCS ?= $(GIT_COMMIT) -m $(GIT_COMMIT_MESSAGE_TOCS)

# Define the command to commit staged files after inserting resource URLs:
GIT_COMMIT_SRC_URLS ?= $(GIT_COMMIT) -m $(GIT_COMMIT_MESSAGE_SRC_URLS)

# Define the path to the remark configuration file:
REMARK_TOC_CONF ?= $(CONFIG_DIR)/remark/.remarkrc.js

# Define the path to the remark ignore file:
REMARK_TOC_IGNORE ?= $(CONFIG_DIR)/remark/.remarkignore

# Define the path to the local remark plugins directory:
REMARK_LOCAL_PLUGINS_DIR ?= $(TOOLS_PKGS_DIR)/remark/plugins

# Define the path to a plugin which processes Markdown equation comments:
REMARK_TOC_PLUGIN ?= $(REMARK_LOCAL_PLUGINS_DIR)/remark-namespace-toc
REMARK_TOC_PLUGIN_SETTINGS ?=
REMARK_TOC_PLUGIN_FLAGS ?= --use $(REMARK_TOC_PLUGIN)=$(REMARK_TOC_PLUGIN_SETTINGS)

# Define command-line options when invoking the remark executable:
REMARK_TOC_FLAGS ?= \
	--ext $(MARKDOWN_FILENAME_EXT) \
	--rc-path $(REMARK_TOC_CONF) \
	--ignore-path $(REMARK_TOC_IGNORE)

# Define the remark output option:
REMARK_EQUATIONS_OUTPUT_FLAG ?= --output


# TARGETS #

# Process Markdown files containing namespace table of contents.
#
# This target processes Markdown files containing Markdown equation elements as follows:
#
# 1.  Files containing equation comments are transformed to include equation elements.
# 2.  SVG files are generated for each equation.
# 3.  Processed files are committed to source control.
# 4.  Resource URLs are inserted in image equation elements.
# 5.  Processed files are committed to source control.

markdown-namespace-tocs: $(NODE_MODULES)
	$(QUIET) $(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_TOC_FLAGS) \
		$(REMARK_TOC_PLUGIN_FLAGS) \
		$(REMARK_EQUATIONS_OUTPUT_FLAG) && \
	$(GIT_ADD) && \
	$(GIT_COMMIT_TOCS)

.PHONY: markdown-namespace-tocs
