# push_files

Push multiple files to a GitHub repository in a single commit.

## Parameters
```javascript
{
    owner: string,   // Repository owner (required)
    repo: string,    // Repository name (required)
    branch: string,  // Target branch (required)
    files: [        // Array of files (required)
        {
            path: string,    // File path
            content: string  // File content
        }
    ],
    message: string  // Commit message (required)
}
```

## Usage Example
```javascript
await push_files({
    owner: "org-name",
    repo: "repo-name",
    branch: "main",
    files: [
        {
            path: "docs/README.md",
            content: "# Project Documentation\n..."
        },
        {
            path: "src/index.js",
            content: "console.log('Hello World');"
        }
    ],
    message: "Update documentation and source code"
});
```

## Notes
- More efficient than individual file updates
- All files committed together
- Branch must exist before operation

## Error Handling
- Verify all file paths
- Check branch existence
- Handle content size limits