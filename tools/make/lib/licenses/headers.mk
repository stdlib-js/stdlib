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

# Define the command for inserting license headers:
INSERT_LICENSE_HEADERS ?= NODE_PATH="$(NODE_PATH)" $(NODE) $(TOOLS_PKGS_DIR)/licenses/scripts/insert_headers

# Define the command for removing license headers:
REMOVE_LICENSE_HEADERS ?= NODE_PATH="$(NODE_PATH)" $(NODE) $(TOOLS_PKGS_DIR)/licenses/scripts/remove_headers

# Define the command for updating license headers:
UPDATE_LICENSE_HEADERS ?= NODE_PATH="$(NODE_PATH)" $(NODE) $(TOOLS_PKGS_DIR)/licenses/scripts/update_headers


# RULES #

#/
# Removes file license headers.
#
# @param {string} [FILES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {string} [FILES_PATTERN] - filename pattern (e.g., `*.js`)
#
# @example
# make remove-license-headers
#
# @example
# make remove-license-headers FILES_FILTER=".*/math/base/special/abs/.*"
#/
remove-license-headers: $(NODE_MODULES)
	$(QUIET) $(FIND_FILES_CMD) | $(REMOVE_LICENSE_HEADERS)

.PHONY: remove-license-headers

#/
# Inserts file license headers.
#
# @param {string} [FILES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {string} [FILES_PATTERN] - filename pattern (e.g., `*.js`)
#
# @example
# make insert-license-headers
#
# @example
# make insert-license-headers FILES_FILTER=".*/math/base/special/abs/.*"
#/
insert-license-headers: $(NODE_MODULES)
	$(QUIET) $(FIND_FILES_CMD) | $(INSERT_LICENSE_HEADERS)

.PHONY: insert-license-headers

#/
# Updates file license headers.
#
# @param {string} [FILES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {string} [FILES_PATTERN] - filename pattern (e.g., `*.js`)
#
# @example
# make update-license-headers
#
# @example
# make update-license-headers FILES_FILTER=".*/math/base/special/abs/.*"
#/
update-license-headers: $(NODE_MODULES)
	$(QUIET) $(FIND_FILES_CMD) | $(UPDATE_LICENSE_HEADERS)

.PHONY: update-license-headers
