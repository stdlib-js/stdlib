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
RAWGIT_COMMIT_HASH ?= $(shell $(GIT_COMMIT_HASH))

# Define the path to utility for generating asset links:
RAWGIT_URL ?= $(TOOLS_PKGS_DIR)/utils/rawgit-url/bin/cli

# Define command-line flags to be used when invoking the utility:
RAWGIT_URL_FLAGS ?= \
	--slug stdlib-js/stdlib/$(RAWGIT_COMMIT_HASH)


# TARGETS #

# Generate an asset link.
#
# This target generates an asset link based on the current Git hash for inclusion in a project Markdown file.

markdown-asset-link: $(NODE_MODULES)
	$(QUIET) $(RAWGIT_URL) $(RAWGIT_URL_FLAGS) $(MARKDOWN_ASSET_PATH)

.PHONY: markdown-asset-link
