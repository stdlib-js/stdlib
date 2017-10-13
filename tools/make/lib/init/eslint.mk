
# VARIABLES #

# Define the command for bundling the plugin for custom ESLint rules:
BUNDLE_ESLINT_PLUGIN ?= $(NODE) $(TOOLS_PKGS_DIR)/eslint/rules/scripts/bundle

# TARGETS #

# Bundles plugin for custom ESLint rules and copies it to the node_modules folder.

init-eslint-stdlib-plugin:
	$(QUIET) $(BUNDLE_ESLINT_PLUGIN)

.PHONY: init-eslint-stdlib-plugin
