
# VARIABLES #

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the path to the directory containing scripts for mining the git repository:
GIT_SCRIPTS_DIR ?= $(TOOLS_DIR)/git/scripts


# TARGETS #

# Compute additions per day.
#
# This target computes the number of additions committed per day.

stats-additions-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/additions_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/additions_per_day

.PHONY: stats-additions-per-day


# Compute additions per hour.
#
# This target computes the number of additions committed per hour.

stats-additions-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/additions_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/additions_per_hour

.PHONY: stats-additions-per-hour


# Compute additions per month.
#
# This target computes the number of additions committed per month.

stats-additions-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/additions_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/additions_per_month

.PHONY: stats-additions-per-month


# Compute additions per weekday.
#
# This target computes the number of additions committed per weekday.

stats-additions-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/additions_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/additions_per_weekday

.PHONY: stats-additions-per-weekday


# Compute author additions per day.
#
# This target computes the number of additions committed per day per author.

stats-author-additions-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_additions_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_additions_per_day

.PHONY: stats-author-additions-per-day


# Compute author additions per month.
#
# This target computes the number of additions committed per month per author.

stats-author-additions-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_additions_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_additions_per_month

.PHONY: stats-author-additions-per-month


# Compute author additions per weekday.
#
# This target computes the number of additions committed per weekday per author.

stats-author-additions-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_additions_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_additions_per_weekday

.PHONY: stats-author-additions-per-weekday


# Compute author commit intervals.
#
# This target computes the interval between commits for each author.

stats-author-commit-intervals:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commit_intervals
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commit_intervals

.PHONY: stats-author-commit-intervals


# Compute author commits per day.
#
# This target computes the number of commits per day per author.

stats-author-commits-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commits_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commits_per_day

.PHONY: stats-author-commits-per-day


# Compute author commits per hour.
#
# This target computes the number of commits per hour per author.

stats-author-commits-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commits_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commits_per_hour

.PHONY: stats-author-commits-per-hour


# Compute author commits per month.
#
# This target computes the number of commits per month per author.

stats-author-commits-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commits_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commits_per_month

.PHONY: stats-author-commits-per-month


# Compute author commits per weekday.
#
# This target computes the number of commits per weekday per author.

stats-author-commits-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commits_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commits_per_weekday

.PHONY: stats-author-commits-per-weekday


# Compute author days active.
#
# This target computes the number of days each author has committed.

stats-author-days-active:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_days_active
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_days_active

.PHONY: stats-author-days-active


# Compute author deletions per day.
#
# This target computes the number of deletions committed per day per author.

stats-author-deletions-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_deletions_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_deletions_per_day

.PHONY: stats-author-deletions-per-day


# Compute author deletions per month.
#
# This target computes the number of deletions committed per month per author.

stats-author-deletions-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_deletions_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_deletions_per_month

.PHONY: stats-author-deletions-per-month


# Compute author deletions per weekday.
#
# This target computes the number of deletions committed per weekday per author.

stats-author-deletions-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_deletions_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_deletions_per_weekday

.PHONY: stats-author-deletions-per-weekday


# Compute author number of changed files per day.
#
# This target computes the number of files changed per day per author.

stats-author-files-changed-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_files_changed_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_files_changed_per_day

.PHONY: stats-author-files-changed-per-day


# Compute author number of changed files per month.
#
# This target computes the number of files changed per month per author.

stats-author-files-changed-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_files_changed_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_files_changed_per_month

.PHONY: stats-author-files-changed-per-month


# Compute author number of changed files per weekday.
#
# This target computes the number of files changed per weekday per author.

stats-author-files-changed-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_files_changed_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_files_changed_per_weekday

.PHONY: stats-author-files-changed-per-weekday


# Compute author mean commit interval.
#
# This target computes the mean commit interval per author.

stats-author-mean-commit-interval:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_mean_commit_interval
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_mean_commit_interval

.PHONY: stats-author-mean-commit-interval


# Compute author mean short stats.
#
# This target computes summary statistic averages for each author.

stats-author-mean-shortstats:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_mean_shortstats
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_mean_shortstats

.PHONY: stats-author-mean-shortstats


# Compute author short stats per day.
#
# This target computes summary statistic per day per author.

stats-author-shortstats-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_shortstats_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_shortstats_per_day

.PHONY: stats-author-shortstats-per-day


# Compute author short stats per month.
#
# This target computes summary statistic per month per author.

stats-author-shortstats-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_shortstats_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_shortstats_per_month

.PHONY: stats-author-shortstats-per-month


# Compute authors per day.
#
# This target computes number of authors per day.

stats-authors-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/authors_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/authors_per_day

.PHONY: stats-authors-per-day


# Compute authors per hour.
#
# This target computes number of authors per hour.

stats-authors-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/authors_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/authors_per_hour

.PHONY: stats-authors-per-hour


# Compute authors per month.
#
# This target computes number of authors per month.

stats-authors-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/authors_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/authors_per_month

.PHONY: stats-authors-per-month


# Compute authors per weekday.
#
# This target computes number of authors per weekday.

stats-authors-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/authors_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/authors_per_weekday

.PHONY: stats-authors-per-weekday


# Compute authors per year.
#
# This target computes number of authors per year.

stats-authors-per-year:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/authors_per_year
	$(QUIET) $(GIT_SCRIPTS_DIR)/authors_per_year

.PHONY: stats-authors-per-year


# Compute bytes per file.
#
# This target computes number of bytes per file.

stats-bytes-per-file:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/bytes_per_file
	$(QUIET) $(GIT_SCRIPTS_DIR)/bytes_per_file

.PHONY: stats-bytes-per-file


# Compute bytes per file type.
#
# This target computes number of bytes per file type.

stats-bytes-per-file-type:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/bytes_per_file_type
	$(QUIET) $(GIT_SCRIPTS_DIR)/bytes_per_file_type

.PHONY: stats-bytes-per-file-type


# Compute basic COCOMO 81.
#
# This target computes a basic constructive cost model (COCOMO 81).

stats-cocomo-81-basic:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/cocomo_81_basic
	$(QUIET) $(GIT_SCRIPTS_DIR)/cocomo_81_basic

.PHONY: stats-cocomo-81-basic


# Compute intermediate COCOMO 81.
#
# This target computes an intermediate constructive cost model (COCOMO 81).

stats-cocomo-81-intermediate:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/cocomo_81_intermediate
	$(QUIET) $(GIT_SCRIPTS_DIR)/cocomo_81_intermediate

.PHONY: stats-cocomo-81-intermediate


# Generate a commit interval histogram.
#
# This target generates a histogram of commit intervals.

stats-commit-interval-histogram:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_interval_histogram
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_interval_histogram

.PHONY: stats-commit-interval-histogram


# Compute mean commit interval.
#
# This target computes the mean commit interval.

stats-commit-interval-mean:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_interval_mean
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_interval_mean

.PHONY: stats-commit-interval-mean


# Compute median commit interval.
#
# This target computes the median commit interval.

stats-commit-interval-median:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_interval_median
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_interval_median

.PHONY: stats-commit-interval-median


# Compute commit intervals.
#
# This target computes the interval between consecutive commits.

stats-commit-intervals:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_intervals
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_intervals

.PHONY: stats-commit-intervals


# Print commit messages.
#
# This target prints all commit messages.

stats-commit-messages:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_messages
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_messages

.PHONY: stats-commit-messages


# Classify commit sizes.
#
# This target classifies each commit based on the commit size.

stats-commit-size-classification:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_size_classification
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_size_classification

.PHONY: stats-commit-size-classification


# Compute commit size distribution.
#
# This target computes the commit size distribution.

stats-commit-size-distribution:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_size_distribution
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_size_distribution

.PHONY: stats-commit-size-distribution


# Compute mean commit size.
#
# This target computes the average commit size.

stats-commit-size-mean:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_size_mean
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_size_mean

.PHONY: stats-commit-size-mean


# Compute commit size mode.
#
# This target computes the commit size mode.

stats-commit-size-mode:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_size_mode
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_size_mode

.PHONY: stats-commit-size-mode


# Classify commit sizes by number of files changed.
#
# This target classifies each commit by commit size, where size is determined based on the number of files changed.

stats-commit-size-nfiles-classification:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_size_nfiles_classification
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_size_nfiles_classification

.PHONY: stats-commit-size-nfiles-classification


# Compute commit sizes.
#
# This target computes the size of each commit.

stats-commit-sizes:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_sizes
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_sizes

.PHONY: stats-commit-sizes


# Compute commits per day.
#
# This target computes the number of commits per day.

stats-commits-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commits_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/commits_per_day

.PHONY: stats-commits-per-day


# Compute commits per hour.
#
# This target computes the number of commits per hour.

stats-commits-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commits_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/commits_per_hour

.PHONY: stats-commits-per-hour


# Compute commits per month.
#
# This target computes the number of commits per month.

stats-commits-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commits_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/commits_per_month

.PHONY: stats-commits-per-month


# Compute commits per weekday.
#
# This target computes the number of commits per weekday.

stats-commits-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commits_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/commits_per_weekday

.PHONY: stats-commits-per-weekday


# Compute commits per year.
#
# This target computes the number of commits per year.

stats-commits-per-year:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commits_per_year
	$(QUIET) $(GIT_SCRIPTS_DIR)/commits_per_year

.PHONY: stats-commits-per-year


# Compute deletions per day.
#
# This target computes the number of deletions per day.

stats-deletions-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/deletions_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/deletions_per_day

.PHONY: stats-deletions-per-day


# Compute deletions per hour.
#
# This target computes the number of deletions per hour.

stats-deletions-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/deletions_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/deletions_per_hour

.PHONY: stats-deletions-per-hour


# Compute deletions per month.
#
# This target computes the number of deletions per month.

stats-deletions-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/deletions_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/deletions_per_month

.PHONY: stats-deletions-per-month


# Compute deletions per weekday.
#
# This target computes the number of deletions per weekday.

stats-deletions-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/deletions_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/deletions_per_weekday

.PHONY: stats-deletions-per-weekday


# Compute files changed per day.
#
# This target computes the number of files changed per day.

stats-files-changed-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/files_changed_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/files_changed_per_day

.PHONY: stats-files-changed-per-day


# Compute files changed per hour.
#
# This target computes the number of files changed per hour.

stats-files-changed-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/files_changed_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/files_changed_per_hour

.PHONY: stats-files-changed-per-hour


# Compute files changed per month.
#
# This target computes the number of files changed per month.

stats-files-changed-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/files_changed_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/files_changed_per_month

.PHONY: stats-files-changed-per-month


# Compute files changed per weekday.
#
# This target computes the number of files changed per weekday.

stats-files-changed-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/files_changed_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/files_changed_per_weekday

.PHONY: stats-files-changed-per-weekday


# Compute lines per author.
#
# This target computes the number of lines attributed to each author.

stats-lines-per-author:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/lines_per_author
	$(QUIET) $(GIT_SCRIPTS_DIR)/lines_per_author

.PHONY: stats-lines-per-author


# Compute lines per file.
#
# This target computes the number of lines in each file.

stats-lines-per-file:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/lines_per_file
	$(QUIET) $(GIT_SCRIPTS_DIR)/lines_per_file

.PHONY: stats-lines-per-file


# Compute lines per file type.
#
# This target computes the number of lines per file type.

stats-lines-per-file-type:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/lines_per_file_type
	$(QUIET) $(GIT_SCRIPTS_DIR)/lines_per_file_type

.PHONY: stats-lines-per-file-type
