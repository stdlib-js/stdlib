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

# Define the asset file path relative to the project root:
MARKDOWN_ASSET_PATH ?=

# Get the current Git hash:
JSDELIVR_COMMIT_HASH ?= $(shell $(GIT_COMMIT_HASH))

# Define the path to utility for generating asset links:
JSDELIVR_URL ?= $(TOOLS_PKGS_DIR)/utils/jsdelivr-url/bin/cli

# Define command-line flags to be used when invoking the utility:
JSDELIVR_URL_FLAGS ?= \
	--slug stdlib-js/stdlib/$(JSDELIVR_COMMIT_HASH)


# RULES #

#/
# Generates an asset URL for inclusion in a Markdown file.
#
# ## Notes
#
# -   The asset URL is derived the current Git hash.
#
# @param {string} MARKDOWN_ASSET_PATH - asset file path relative to the project root directory (e.g., `MARKDOWN_ASSET_PATH='./README.md'`)
#
# @example
# make markdown-asset-url MARKDOWN_ASSET_PATH='./README.md'
#/
markdown-asset-url: $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(JSDELIVR_URL) $(JSDELIVR_URL_FLAGS) $(MARKDOWN_ASSET_PATH)

.PHONY: markdown-asset-url
