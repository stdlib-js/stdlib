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

# Define the commit message for adding packages to namespace table of contents:
GIT_COMMIT_MESSAGE_TOCS ?= 'Update namespace table of contents'

# Define the command to commit staged files after updating namespace table of contents:
GIT_COMMIT_TOCS ?= $(GIT_COMMIT) -m $(GIT_COMMIT_MESSAGE_TOCS)

# Define the path to the remark configuration file:
REMARK_TOC_CONF ?= $(CONFIG_DIR)/remark/.remarkrc.js

# Define the path to the remark ignore file:
# REMARK_TOC_IGNORE ?= $(CONFIG_DIR)/remark/.remarkignore FIXME
REMARK_TOC_IGNORE ?= $(ROOT_DIR)/.remarkignore

# Define the path to the local remark plugins directory:
REMARK_LOCAL_PLUGINS_DIR ?= $(TOOLS_PKGS_DIR)/remark/plugins

# Define the path to a plugin which processes Markdown table of contents comments:
REMARK_TOC_PLUGIN ?= $(REMARK_LOCAL_PLUGINS_DIR)/remark-namespace-toc
REMARK_TOC_PLUGIN_SETTINGS ?=
REMARK_TOC_PLUGIN_FLAGS ?= --use $(REMARK_TOC_PLUGIN)=$(REMARK_TOC_PLUGIN_SETTINGS)

# Define command-line options when invoking the remark executable:
REMARK_TOC_FLAGS ?= \
	--ext $(MARKDOWN_FILENAME_EXT) \
	--rc-path $(REMARK_TOC_CONF) \
	--ignore-path $(REMARK_TOC_IGNORE)

# Define the remark output option:
REMARK_TOC_OUTPUT_FLAG ?= --output


# TARGETS #

# Update table of contents in Markdown files containing namespace table of contents comments.
#
# Processed files are committed to source control.

markdown-namespace-tocs: $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_TOC_FLAGS) \
		$(REMARK_TOC_PLUGIN_FLAGS) \
		$(REMARK_TOC_OUTPUT_FLAG) && \
	$(GIT_ADD) && \
	$(GIT_COMMIT_TOCS)

.PHONY: markdown-namespace-tocs
