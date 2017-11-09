
# VARIABLES #

# Define the entry point of the plugin for custom ESLint rules:
BUNDLE_ESLINT_ENTRY ?= $(TOOLS_PKGS_DIR)/eslint/rules/scripts/plugin.js

# Define the path to the browserify executable:
BROWSERIFY ?= $(BIN_DIR)/browserify

# Define the plugin name
ESLINT_PLUGIN_NAME ?= eslint-plugin-stdlib

# Define the output directory for the bundle:
BUNDLE_ESLINT_OUTDIR ?= $(NODE_MODULES)/$(ESLINT_PLUGIN_NAME)

# Define the output file for the bundle:
BUNDLE_ESLINT_OUTFILE ?= $(BUNDLE_ESLINT_OUTDIR)/index.js

# Define command-line options to be used when invoking the browserify executable:
BROWSERIFY_ESLINT_PLUGIN_FLAGS ?= --node --outfile $(BUNDLE_ESLINT_OUTFILE) --standalone $(ESLINT_PLUGIN_NAME)

# TARGETS #

# Creates eslint plugin package directory.

create-plugin-folder:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(BUNDLE_ESLINT_OUTDIR)
	$(QUIET) $(MKDIR_RECURSIVE) $(BUNDLE_ESLINT_OUTDIR)

# Bundles plugin for custom ESLint rules and copies it to the node_modules folder.

init-eslint-stdlib-plugin: $(NODE_MODULES) create-plugin-folder
	$(QUIET) NODE_ENV=$(NODE_ENV_TEST) \
	NODE_PATH=$(NODE_PATH_TEST) \
	$(BROWSERIFY) \
		$(BUNDLE_ESLINT_ENTRY) \
		$(BROWSERIFY_ESLINT_PLUGIN_FLAGS)

.PHONY: init-eslint-stdlib-plugin
