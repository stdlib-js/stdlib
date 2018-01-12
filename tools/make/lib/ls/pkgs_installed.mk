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

# Define the path to the executable to list installed package dependencies:
LIST_INSTALLED_PACKAGES ?= $(TOOLS_PKGS_DIR)/pkgs/installed/bin/cli

# Define the command flags:
LIST_INSTALLED_PACKAGES_FLAGS ?=


# TARGETS #

# List installed package dependencies.
#
# This target prints a list of all installed package dependencies.

list-pkgs-installed: $(NODE_MODULES) $(LIST_INSTALLED_PACKAGES)
	$(QUIET) $(NODE) $(LIST_INSTALLED_PACKAGES) $(LIST_INSTALLED_PACKAGES_FLAGS) $(ROOT_DIR)

.PHONY: list-pkgs-installed


# List installed package dependencies.
#
# This target prints the logical dependency tree for all installed package dependencies.

list-pkgs-installed-logical-tree: $(NODE_MODULES)
	$(QUIET) $(NPM) ls

.PHONY: list-pkgs-installed-logical-tree


# List installed production package dependencies.
#
# This target prints the logical dependency tree for installed package dependencies list in the `dependencies` tree of the root `package.json`.

list-pkgs-installed-logical-tree-prod: $(NODE_MODULES)
	$(QUIET) $(NPM) ls --prod

.PHONY: list-pkgs-installed-logical-tree-prod


# List installed development package dependencies.
#
# This target prints the logical dependency tree for installed package dependencies list in the `devDependencies` tree of the root `package.json`.

list-pkgs-installed-logical-tree-dev: $(NODE_MODULES)
	$(QUIET) $(NPM) ls --dev

.PHONY: list-pkgs-installed-logical-tree-dev


# List installed package dependencies.
#
# This target prints the logical dependency tree for all installed package dependencies as JSON.

list-pkgs-installed-logical-tree-json: $(NODE_MODULES)
	$(QUIET) $(NPM) ls --json

.PHONY: list-pkgs-installed-logical-tree-json


# List installed production package dependencies.
#
# This target prints the logical dependency tree as JSON for installed package dependencies list in the `dependencies` tree of the root `package.json`.

list-pkgs-installed-logical-tree-prod-json: $(NODE_MODULES)
	$(QUIET) $(NPM) ls --prod --json

.PHONY: list-pkgs-installed-logical-tree-prod-json


# List installed development package dependencies.
#
# This target prints the logical dependency tree as JSON for installed package dependencies list in the `devDependencies` tree of the root `package.json`.

list-pkgs-installed-logical-tree-dev-json: $(NODE_MODULES)
	$(QUIET) $(NPM) ls --dev --json

.PHONY: list-pkgs-installed-logical-tree-dev-json
