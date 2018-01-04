
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


# TARGETS #

# Initialize custom ESLint rules.
#
# This target bundles a custom ESLint rules plugin as a node module and installs the plugin in the `node_modules` directory.

init-stdlib-custom-eslint-rules-plugin: $(NODE_MODULES)
	$(QUIET) $(MKDIR_RECURSIVE) $(STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_OUT)
	$(QUIET) NODE_PATH=$(NODE_PATH) \
	$(BROWSERIFY) \
		$(STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_ENTRY) \
		$(BROWSERIFY_STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_FLAGS)

.PHONY: init-stdlib-custom-eslint-rules-plugin


# Initialize custom ESLint plugins.
#
# This target initializes custom ESLint plugins specific to the project.

init-stdlib-custom-eslint-plugins: init-stdlib-custom-eslint-rules-plugin

.PHONY: init-stdlib-custom-eslint-plugins


# Remove custom ESLint rules plugin.
#
# This target cleans up a custom ESLint rules plugin by removing the plugin directory.

clean-stdlib-custom-eslint-rules-plugin:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(STDLIB_CUSTOM_ESLINT_RULES_PLUGIN_OUT)

.PHONY: clean-stdlib-custom-eslint-rules-plugin


# Remove custom ESLint plugin directories.
#
# This target cleans up custom ESLint plugin directories by removing them entirely.

clean-stdlib-custom-eslint-plugins: clean-stdlib-custom-eslint-rules-plugin

.PHONY: clean-stdlib-custom-eslint-plugins
