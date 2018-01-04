
# VARIABLES #

# Define the path to the remark configuration file:
REMARK_RUN_JAVASCRIPT_EXAMPLES_CONF ?= $(CONFIG_DIR)/remark/.remarkrc.js

# Define the path to the remark ignore file:
REMARK_RUN_JAVASCRIPT_EXAMPLES_IGNORE ?= $(CONFIG_DIR)/remark/.remarkignore

# Define the path to a plugin which processes JavaScript examples in Markdown files:
REMARK_RUN_JAVASCRIPT_EXAMPLES_PLUGIN ?= $(TOOLS_PKGS_DIR)/remark/plugins/remark-run-javascript-examples
REMARK_RUN_JAVASCRIPT_EXAMPLES_PLUGIN_SETTINGS ?= '"'maxBuffer'"':10485760
REMARK_RUN_JAVASCRIPT_EXAMPLES_PLUGIN_FLAGS ?= --use $(REMARK_RUN_JAVASCRIPT_EXAMPLES_PLUGIN)=$(REMARK_RUN_JAVASCRIPT_EXAMPLES_PLUGIN_SETTINGS)

# Define command-line options when invoking the remark executable:
REMARK_RUN_JAVASCRIPT_EXAMPLES_FLAGS ?= \
	--ext $(MARKDOWN_FILENAME_EXT) \
	--rc-path $(REMARK_RUN_JAVASCRIPT_EXAMPLES_CONF) \
	--ignore-path $(REMARK_RUN_JAVASCRIPT_EXAMPLES_IGNORE) \
	--no-stdout \
	--no-ignore \
	--no-config \
	--quiet


# TARGETS #

# Run examples.
#
# This target runs JavaScript examples in Markdown files in sequential order.

markdown-examples-javascript: $(NODE_MODULES)
	$(QUIET) $(FIND_MARKDOWN_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | grep 'README.md' | grep -v '/_tools/' | grep -v '/stdlib/tools/' | while read -r file; do \
		echo ""; \
		echo "Running Markdown JavaScript examples: $$file"; \
		NODE_ENV=$(NODE_ENV_EXAMPLES) \
		NODE_PATH=$(NODE_PATH_EXAMPLES) \
		$(REMARK) $$file \
			$(REMARK_RUN_JAVASCRIPT_EXAMPLES_FLAGS) \
			$(REMARK_RUN_JAVASCRIPT_EXAMPLES_PLUGIN_FLAGS) || exit 1; \
	done

.PHONY: markdown-examples-javascript


# Run examples.
#
# This target runs JavaScript examples from a specified list of Markdown files in sequential order.

markdown-examples-javascript-files: $(NODE_MODULES)
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Running Markdown JavaScript examples: $$file"; \
		NODE_ENV=$(NODE_ENV_EXAMPLES) \
		NODE_PATH=$(NODE_PATH_EXAMPLES) \
		$(REMARK) $$file \
			$(REMARK_RUN_JAVASCRIPT_EXAMPLES_FLAGS) \
			$(REMARK_RUN_JAVASCRIPT_EXAMPLES_PLUGIN_FLAGS) || exit 1; \
	done

.PHONY: markdown-examples-javascript-files
