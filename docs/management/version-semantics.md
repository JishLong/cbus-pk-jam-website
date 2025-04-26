<h1 align="center">Version Semantics</h1>

Versions are formatted as `<year>.<major>(.<minor>)?`. Example versions might include `2025.0` or `2025.0.1`.

- `<year>` represents the _year_ of the jam that the version targets. In the version `2025.0`, the code is meant 
  to be deployed for use in the 2025 Columbus Parkour Jam.
- `<major>` represents the _major version_. Versions having the same year but different major versions will differ
  in significant features or user experience.
- `<minor>` represents the _minor version_. Versions having both the same year and major version but different
  minor versions will differ in small bug fixes or tweaks. Versions start off with no minor version appended
  at all, reserving the use of a minor version for quick fixes or tweaks that are made after said version has
  been cut from `main`.

[New versions are cut](version-cutting.md) from `main` with every increment in the year or major version. `main` always 
represents the newest version that is currently in development.

- Increments to the year are done annually when a new Columbus Parkour Jam rolls around. When the year is incremented,
  the major version resets to `0`.
- Increments to the major version are done in a qualitative fashion in which 
  [specific changes are targeted for specific major versions](planning.md). Once all planned work for a specific major 
  version is complete, the major version is incremented.

If additional fixes or tweaks are suddenly determined to be needed on an existing version that has already been cut, 
a minor version is appended to the version (starting at `1`) to represent the inclusion of said changes. The
minor version going forward is then incremented with every additional batch of changes.
