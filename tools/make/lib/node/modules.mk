
# TARGETS #

# Install node module dependencies.
#
# This target installs package dependencies by executing [`npm install`][1]. Packages will be installed in a local `node_modules` directory relative to the project's `package.json` file.
#
# [1]: https://docs.npmjs.com/cli/install

install-node-modules: $(ROOT_PACKAGE_JSON)
	$(QUIET) $(NPM) install

.PHONY: install-node-modules


# De-duplicate node module dependencies.
#
# This target searches the local package tree and attempts to simplify the overall structure by moving dependencies further up the tree, where they can be more effectively shared by multiple dependent packages.

dedupe-node-modules: $(NODE_MODULES)
	$(QUIET) $(NPM) dedupe

.PHONY: dedupe-node-modules


# Remove node module dependencies.
#
# This target cleans the `node_modules` directory by removing it entirely.

clean-node-modules:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(NODE_MODULES)

.PHONY: clean-node-modules
