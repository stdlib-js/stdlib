
# VARIABLES #

# Define the `git` command:
GIT ?= git

# Define the command for staging files:
GIT_ADD ?= $(GIT) add

# Define the command for committing files:
GIT_COMMIT ?= $(GIT) commit

# Define the commit message for processing Markdown equations:
GIT_COMMIT_MESSAGE_EQUATIONS ?= '"Process Markdown equations"'

# Define the commit message for inserting resource URLs into HTML equation elements:
GIT_COMMIT_MESSAGE_SRC_URLS ?= '"Insert src urls into equation elements"'

# Define the command to commit staged files after processing Markdown equations:
GIT_COMMIT_EQUATIONS ?= $(GIT_COMMIT) -m $(GIT_COMMIT_MESSAGE_EQUATIONS)

# Define the command to commit staged files after inserting resource URLs:
GIT_COMMIT_SRC_URLS ?= $(GIT_COMMIT) -m $(GIT_COMMIT_MESSAGE_SRC_URLS)

# Define the path to the [remark][1] executable.
#
# To install remark:
#     $ npm install remark-cli
#
# [1]: https://github.com/wooorm/remark/

REMARK ?= $(BIN_DIR)/remark

# Define the path to the remark ignore file:
REMARK_IGNORE ?= $(CONFIG_DIR)/.remarkignore

# Define the path to the local remark plugins directory:
REMARK_LOCAL_PLUGINS_DIR ?= $(TOOLS_DIR)/remark/plugins

# Define paths to local plugins:
REMARK_HTML_EQUATIONS_PLUGIN ?= $(REMARK_LOCAL_PLUGINS_DIR)/remark-html-equations
REMARK_SVG_EQUATIONS_PLUGIN ?= $(REMARK_LOCAL_PLUGINS_DIR)/remark-svg-equations
REMARK_EQUATION_SRC_URLS_PLUGIN ?= $(REMARK_LOCAL_PLUGINS_DIR)/remark-html-equation-src-urls

# Define Markdown extensions:
REMARK_EXT ?= md

# Define command-line options when invoking the remark executable:
REMARK_FLAGS ?= \
		--ext $(REMARK_EXT) \
		--ignore-path $(REMARK_IGNORE)

# Define the remark output option:
REMARK_OUTPUT_FLAG ?= --output


# TARGETS #

# Generate HTML equation elements.
#
# This target transforms Markdown files containing equation comment markup to include HTML equation elements.

markdown-html-equations: $(NODE_MODULES)
	$(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_FLAGS) \
		--use $(REMARK_HTML_EQUATIONS_PLUGIN) \
		$(REMARK_OUTPUT_FLAG)

.PHONY: markdown-html-equations


# Generate SVG equation files.
#
# This target generates SVG equations files from Markdown equation elements.

markdown-svg-equations: $(NODE_MODULES)
	$(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_FLAGS) \
		--use $(REMARK_SVG_EQUATIONS_PLUGIN)

.PHONY: markdown-svg-equations


# Insert resource URLs.
#
# This target inserts resource URLs into Markdown HTML equation elements. Note that this target assumes that SVG equation files already exist and have been committed to source control.

markdown-equation-src-urls: $(NODE_MODULES)
	$(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_FLAGS) \
		--use $(REMARK_EQUATION_SRC_URLS_PLUGIN) \
		$(REMARK_OUTPUT_FLAG)

.PHONY: markdown-equation-src-urls


# Processes Markdown files containing equations.
#
# This target processes Markdown files containing Markdown equation elements as follows:
#
# 1. Files containing equation elements are transformed to include HTML equation elements.
# 2. SVG files are generated for each equation.
# 3. Processed files are committed to source control.
# 4. Resource URLs are inserted in HTML equation elements.
# 5. Processed files are committed to source control.

markdown-equations: $(NODE_MODULES)
	$(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_FLAGS) \
		--use $(REMARK_HTML_EQUATIONS_PLUGIN) \
		--use $(REMARK_SVG_EQUATIONS_PLUGIN) \
		$(REMARK_OUTPUT_FLAG) && \
	$(GIT_ADD) && \
	$(GIT_COMMIT_EQUATIONS) && \
	$(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_FLAGS) \
		--use $(REMARK_EQUATION_SRC_URLS_PLUGIN) \
		$(REMARK_OUTPUT_FLAG) && \
	$(GIT_ADD) && \
	$(GIT_COMMIT_SRC_URLS)

.PHONY: markdown-equations

