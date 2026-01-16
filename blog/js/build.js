/**
 * Simple static blog generator
 * Converts markdown to HTML, updates index
 * No complex build system - just what's needed
 */

class BlogBuilder {
    constructor() {
        this.template = '';
        this.posts = [];
    }
    
    /**
     * Load post template
     */
    loadTemplate() {
        // Load HTML template for posts
    }
    
    /**
     * Convert markdown content to HTML post
     */
    generatePost(postData) {
        // Apply template with post data
        // Handle markdown conversion
        // Generate static HTML file
    }
    
    /**
     * Update blog index with new post
     */
    updateIndex() {
        // Regenerate index.html with all posts
        // Sort by date, limit recent posts
    }
    
    /**
     * Generate RSS feed
     */
    generateFeed() {
        // Simple RSS generation
    }
}

// Usage: node blog/js/build.js