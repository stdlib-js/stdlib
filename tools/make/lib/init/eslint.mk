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

# Define the entry point of the plugin for custom ESLint rules:
STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_ENTRY ?= $(TOOLS_PKGS_DIR)/eslint/rules/scripts/plugin.js

# Define the plugin name for custom ESLint rules:
STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_NAME ?= eslint-plugin-stdlib

# Define the output directory for the custom ESLint rules plugin bundle:
STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_OUT ?= $(NODE_MODULES)/$(STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_NAME)

# Define the output filename for the custom ESLint rules plugin bundle:
STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_BUNDLE ?= $(STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_OUT)/index.js

# Define command-line options to be used when invoking the browserify executable:
BROWSERIFY_STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_FLAGS ?= \
	--node \
	--outfile $(STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_BUNDLE) \
	--standalone $(STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_NAME)


# RULES #

#/
# Initializes custom [ESLint][eslint] rules.
#
# ## Notes
#
# -   This rule bundles a custom ESLint rules plugin as a node module and installs the plugin in the project `node_modules` directory.
#
# [eslint]: http://eslint.org/
#
# @example
# make init-stdlib-custom-eslint-rules-plugin
#/
init-stdlib-custom-eslint-rules-plugin: $(NODE_MODULES)
	$(QUIET) $(MKDIR_RECURSIVE) $(STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_OUT)
	$(QUIET) NODE_PATH="$(NODE_PATH)" \
	$(BROWSERIFY) \
		$(STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_ENTRY) \
		$(BROWSERIFY_STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_FLAGS)

.PHONY: init-stdlib-custom-eslint-rules-plugin

#/
# Initializes custom [ESLint][eslint] plugins.
#
# [eslint]: http://eslint.org/
#
# @example
# make init-stdlib-custom-eslint-plugins
#/
init-stdlib-custom-eslint-plugins: init-stdlib-custom-eslint-rules-plugin

.PHONY: init-stdlib-custom-eslint-plugins

#/
# Removes a custom [ESLint][eslint] rule plugin.
#
# [eslint]: http://eslint.org/
#
# @example
# make clean-stdlib-custom-eslint-rules-plugin
#/
clean-stdlib-custom-eslint-rules-plugin:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_OUT)

.PHONY: clean-stdlib-custom-eslint-rules-plugin

#/
# Removes custom [ESLint][eslint] plugins.
#
# [eslint]: http://eslint.org/
#
# @example
# make clean-stdlib-custom-eslint-plugins
#/
clean-stdlib-custom-eslint-plugins: clean-stdlib-custom-eslint-rules-plugin

.PHONY: clean-stdlib-custom-eslint-plugins
