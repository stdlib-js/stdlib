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

# Define the entry point of the plugin for project-specific custom ESLint rules:
stdlib_custom_eslint_rules_plugin_entry := $(TOOLS_PKGS_DIR)/eslint/rules/scripts/plugin.js

# Define the plugin name for project-specific custom ESLint rules:
stdlib_custom_eslint_rules_plugin_name := eslint-plugin-stdlib

# Define the output directory for the project-specific custom ESLint rules plugin:
stdlib_custom_eslint_rules_plugin_out := $(NODE_MODULES)/$(stdlib_custom_eslint_rules_plugin_name)

# Define the contents of the custom ESLint rules plugin `package.json`:
stdlib_custom_eslint_rules_plugin_package_json := '{"name":"PLUGIN_NAME","version":"0.0.0","main":"index.js"}'
stdlib_custom_eslint_rules_plugin_package_json := $(subst PLUGIN_NAME,$(stdlib_custom_eslint_rules_plugin_name),$(stdlib_custom_eslint_rules_plugin_package_json))

# Define the build output prerequisites:
stdlib_custom_eslint_rules_plugin_prereqs := \
	$(stdlib_custom_eslint_rules_plugin_out)/index.js \
	$(stdlib_custom_eslint_rules_plugin_out)/package.json


# RULES #

#/
# Creates an output directory for installing a custom ESLint rules plugin.
#
# @private
#/
$(stdlib_custom_eslint_rules_plugin_out):
	$(QUIET) $(MKDIR_RECURSIVE) $@

#/
# Creates the main entry point for a custom ESLint rules plugin.
#
# @private
#/
$(stdlib_custom_eslint_rules_plugin_out)/index.js: $(NODE_MODULES) $(stdlib_custom_eslint_rules_plugin_entry) $(stdlib_custom_eslint_rules_plugin_out)
	$(QUIET) NODE_PATH="$(NODE_PATH)" \
	$(BROWSERIFY) $(stdlib_custom_eslint_rules_plugin_entry) \
		--node \
		--ignore-missing \
		--outfile $@ \
		--standalone $(stdlib_custom_eslint_rules_plugin_name)

#/
# Creates a `package.json` for a custom ESLint rules plugin.
#
# @private
#/
$(stdlib_custom_eslint_rules_plugin_out)/package.json: $(stdlib_custom_eslint_rules_plugin_out)
	$(QUIET) printf $(stdlib_custom_eslint_rules_plugin_package_json) > $@

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
init-stdlib-custom-eslint-rules-plugin: clean-stdlib-custom-eslint-rules-plugin $(NODE_MODULES) $(stdlib_custom_eslint_rules_plugin_prereqs)

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
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(stdlib_custom_eslint_rules_plugin_out)

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
