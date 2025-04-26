<h1 align="center">Planning</h1>

All work that is done should be split into individual issues on the 
[GitHub project board](https://github.com/users/JishLong/projects/3/views/1). Each issue should be filled out with the
following important details:

- An issue number (will be automatically created by GitHub).
- One label that best describes the semantics of the issue. The labels available to choose from are:
  - `bug` - an existing feature not working as intended
  - `chore` - something more "meta' that doesn't directly involve development
  - `devops` - altering or adding to the build/deployment process
  - `documentation` - altering or adding documentation
  - `feature` - a new feature
  - `spike` - researching something
  - `tweak` - slight changes to an existing feature
- A milestone ([version](version-semantics.md)).
- A descriptive title.
- A description containing more specific details about the issue.

Each issue will also reside in one of the following columns, and will move between columns during its life:

- `Open` - issues that have not yet been started
- `Backburner` - issues that have been started but are not currently being worked on for one reason or another
- `In Progress` - issues that are currently being worked on
- `Development Complete` - issues that are out of development and ready to be reviewed and merged
- `Merged / Done` - issues that are fully complete and merged (if applicable)

Before development on each major version is started, a small planning session is done to create issues that will go
into said version. Once all issues planned for the version are complete, the 
[version is incremented](version-cutting.md).

If changes are determined to be needed on an existing version, a small batch of issues is planned for that
version. When all of them are complete, the minor version for said version is incremented.
