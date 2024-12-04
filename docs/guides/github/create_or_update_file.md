# create_or_update_file

Create or update a single file in a GitHub repository.

## Parameters
```javascript
{
    owner: string,    // Repository owner (required)
    repo: string,     // Repository name (required)
    path: string,     // File path (required)
    content: string,  // File content (required)
    message: string,  // Commit message (required)
    branch: string,   // Target branch (required)
    sha: string       // File SHA (required for updates)
}
```

## Usage Example
```javascript
// Create new file
await create_or_update_file({
    owner: "org-name",
    repo: "repo-name",
    path: "docs/README.md",
    content: "# Project Documentation\n...",
    message: "Add documentation",
    branch: "main"
});

// Update existing file
await create_or_update_file({
    owner: "org-name",
    repo: "repo-name",
    path: "docs/README.md",
    content: "# Updated Documentation\n...",
    message: "Update documentation",
    branch: "main",
    sha: "existing-file-sha"
});
```

## Notes
- SHA required when updating existing files
- Use clear commit messages
- Verify file content after operation

## Error Handling
- Handle missing SHA errors
- Check path validity
- Verify content encoding