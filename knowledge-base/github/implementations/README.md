# GitHub Implementation Patterns

Verified implementation patterns for GitHub operations using MCP.

## Contents

### PR Operations
- `pr_investigation.js` - Core PR investigation patterns
- `pr_patterns.js` - Common PR workflow implementations

## Usage

```javascript
// Import patterns
const { createFeatureUpdate, reviewPullRequest } = require('./pr_patterns');

// Create feature update
await createFeatureUpdate({
    owner: 'org-name',
    repo: 'repo-name',
    feature: 'new-feature',
    files: [
        { path: 'src/feature.js', content: '...' }
    ],
    description: 'Implements new feature'
});

// Review PR
await reviewPullRequest({
    owner: 'org-name',
    repo: 'repo-name',
    branch: 'feature/new-feature',
    files: ['src/feature.js']
});
```

## Pattern Guidelines

1. Error Handling
   - Use try/catch blocks
   - Provide useful error messages
   - Handle operation-specific errors

2. Implementation Notes
   - Verify operations after completion
   - Handle base64 content properly
   - Use consistent naming conventions

3. Testing
   - Test in isolation
   - Verify error cases
   - Document test results