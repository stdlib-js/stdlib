#/
# @license Apache-2.0
#
# Copyright 2017 The Stdlib Authors
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

# Define the path of the executable:
LIST_BROWSER_COMPATIBLE_PACKAGE_NAMES ?= $(TOOLS_PKGS_DIR)/pkgs/browser-compatible/bin/cli

# Define the command flags:
LIST_BROWSER_COMPATIBLE_PACKAGE_NAMES_FLAGS ?=


# TARGETS #

# List browser compatible packages.
#
# This target prints a list of all packages which are compatible with browser environments.

list-pkgs-browser-compatible: $(LIST_BROWSER_COMPATIBLE_PACKAGE_NAMES) $(NODE_MODULES)
	$(QUIET) $(NODE) $(LIST_BROWSER_COMPATIBLE_PACKAGE_NAMES) $(LIST_BROWSER_COMPATIBLE_PACKAGE_NAMES_FLAGS) $(SRC_DIR)

.PHONY: list-pkgs-browser-compatible
