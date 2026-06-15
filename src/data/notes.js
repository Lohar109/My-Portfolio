export const notesData = [
  {
    id: 'supabase-pgvector-rag',
    title: 'Custom RAG Architectures with Supabase pgvector & Gemini',
    category: 'AI / Machine Learning',
    difficulty: 'Advanced',
    lastUpdated: '2026-05-12',
    readTime: '6 min read',
    summary: 'A detailed breakdown of how to build a Retrieval-Augmented Generation (RAG) pipeline, leveraging pgvector in Supabase for cosine similarity search and Gemini for context-aware generations.',
    tags: ['Generative AI', 'Supabase', 'PostgreSQL', 'Gemini'],
    content: `# Custom RAG Architectures with Supabase pgvector & Gemini

Retrieval-Augmented Generation (RAG) optimizes the output of a Large Language Model by referencing an authoritative knowledge base outside of its training data before generating a response.

Here is how to design a high-performance RAG pipeline using Supabase's \`pgvector\` extension and Google Gemini.

## 1. Schema Definition (PostgreSQL pgvector)

First, enable the vector extension and define a table with a vector column. For Gemini's \`gemini-embedding-2\` model, the output dimensionality is **1536**.

\`\`\`sql
-- Enable the pgvector extension to work with embeddings
create extension if not exists vector;

-- Create the embeddings table
create table portfolio_embeddings (
  id bigint generated always as identity primary key,
  content text not null,
  embedding vector(1536), -- 1536 dimensions for Gemini embeddings
  metadata jsonb
);
\`\`\`

## 2. Cosine Similarity Matching Function

To search for similar chunks, write a PostgreSQL RPC (Remote Procedure Call) that calculates cosine similarity (using the \`<=>\` operator which computes cosine distance, so \`1 - (a <=> b)\` gives similarity).

\`\`\`sql
create or replace function match_portfolio_embeddings (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql stable
as $$
begin
  return query
  select
    portfolio_embeddings.id,
    portfolio_embeddings.content,
    portfolio_embeddings.metadata,
    1 - (portfolio_embeddings.embedding <=> query_embedding) as similarity
  from portfolio_embeddings
  where 1 - (portfolio_embeddings.embedding <=> query_embedding) > match_threshold
  order by portfolio_embeddings.embedding <=> query_embedding
  limit match_count;
end;
$$;
\`\`\`

## 3. Creating & Storing Embeddings

Use Google's Generative AI API to embed the content chunks and save them in Supabase.

\`\`\`javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function embedAndSave(chunkText, metadata) {
  // Generate high-dimensional vector
  const response = await fetch(
    \`https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-2:embedContent?key=\${process.env.GEMINI_API_KEY}\`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: { parts: [{ text: chunkText }] },
        outputDimensionality: 1536
      })
    }
  );

  const result = await response.json();
  const embedding = result?.embedding?.values;

  // Insert into Supabase pgvector
  const { error } = await supabase.from('portfolio_embeddings').insert({
    content: chunkText,
    embedding,
    metadata
  });

  if (error) throw error;
  console.log("Chunk successfully stored!");
}
\`\`\`

## 4. Query Retrieval

When a user asks a query:
1. Generate the embedding for the user's query.
2. Query Supabase via RPC using cosine similarity.
3. Pass retrieved content chunks as context to Gemini for the final response.

\`\`\`javascript
async function queryRAG(userQuery) {
  // 1. Generate query embedding
  const queryVector = await getGeminiEmbedding(userQuery);

  // 2. Query Supabase RPC
  const { data: contexts, error } = await supabase.rpc('match_portfolio_embeddings', {
    query_embedding: queryVector,
    match_threshold: 0.35,
    match_count: 3
  });

  // 3. Inject context into Gemini System prompt
  const contextText = contexts.map(c => c.content).join('\\n\\n---\\n\\n');
  const systemPrompt = \`You are an AI assistant. Answer the user prompt based ONLY on the following context:\\n\${contextText}\`;

  const responseText = await callGeminiChat(systemPrompt, userQuery);
  return responseText;
}
\`\`\`
`
  },
  {
    id: 'react-rendering-performance',
    title: 'React Rendering Optimization & Core Mechanics',
    category: 'Frontend Development',
    difficulty: 'Intermediate',
    lastUpdated: '2026-06-01',
    readTime: '5 min read',
    summary: 'A deep dive into React’s Virtual DOM, reconciliation algorithms, compiler optimizations, and strategies like memoization, bundle splitting, and windowing.',
    tags: ['React.js', 'JavaScript', 'Performance', 'Vite'],
    content: `# React Rendering Optimization & Core Mechanics

Understanding how React decides when and how to update the real DOM is essential for engineering fluid, lag-free user experiences (60 FPS).

## 1. The React Fiber and Reconciliation

React splits rendering into two phases:
*   **Render Phase**: React crawls the virtual component tree and constructs a new Virtual DOM. In this phase, the **Reconciliation** algorithm (Fiber) compares the new Virtual DOM with the old one (Diffing) to calculate the minimum operations needed. This phase is asynchronous and can be paused or discarded.
*   **Commit Phase**: React applies the calculated changes directly to the real DOM. This phase is synchronous and cannot be interrupted.

### The Diffing Rules
1.  **Different Element Types**: If elements have different tags (e.g., \`<div>\` to \`<span>\`), React destroys the old tree, mounts the new one, and throws away the child states.
2.  **Same Element Types**: React keeps the underlying DOM node and only updates the modified attributes (e.g., \`className\` or style properties).
3.  **Keys on Lists**: Keys help React identify which items have changed, been added, or been removed. Never use array index as keys if the list can change dynamically.

## 2. Memoization: When and How

React re-renders a component if its state changes, or if its parent re-renders. To prevent unnecessary children re-renders:

### React.memo()
Wraps a component to prevent re-rendering if its props have not changed (performs a shallow comparison of props).
\`\`\`javascript
import React from 'react';

const HeavyCard = React.memo(({ title, description }) => {
  console.log("HeavyCard rendered!");
  return (
    <div className="p-6 border rounded-xl shadow-sm bg-white">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-650">{description}</p>
    </div>
  );
});
\`\`\`

### useMemo and useCallback
*   \`useMemo\`: Memoizes a calculated value. Useful for high-computation tasks.
*   \`useCallback\`: Memoizes a function reference. Crucial when passing function callbacks as props to memoized child components.

\`\`\`javascript
import { useMemo, useCallback } from 'react';

function Dashboard({ items, filterTerm }) {
  // Memoize heavy filtering computation
  const filteredItems = useMemo(() => {
    return items.filter(item => item.name.toLowerCase().includes(filterTerm.toLowerCase()));
  }, [items, filterTerm]);

  // Memoize function reference so children don't re-render
  const handleSelect = useCallback((id) => {
    console.log("Selected ID:", id);
  }, []);

  return (
    <ItemList items={filteredItems} onSelect={handleSelect} />
  );
}
\`\`\`

## 3. React 19 & The React Compiler

In React 19, the React Compiler automatically memoizes components, hooks, and dependencies, rendering manual \`useMemo\` and \`useCallback\` hooks obsolete in most scenarios. However, understanding the fundamentals is vital for legacy codebase optimization and resolving complex edge cases.
`
  },
  {
    id: 'postgres-indexing-redis-caching',
    title: 'High Performance Databases: Indexes & Redis Caching',
    category: 'Database & Storage',
    difficulty: 'Advanced',
    lastUpdated: '2026-04-20',
    readTime: '5 min read',
    summary: 'Analyze database read latencies and explore how to apply PostgreSQL indexes and Redis caching patterns (Cache-Aside, Write-Through) to scale relational applications.',
    tags: ['PostgreSQL', 'Redis', 'Database', 'Backend'],
    content: `# High Performance Databases: Indexes & Redis Caching

When scaling application architectures, database read/write bottlenecks are often the primary latency driver. We can mitigate this using proper indexing and distributed in-memory caching.

## 1. PostgreSQL Indexing Strategies

Without indexes, PostgreSQL must perform a full-table sequential scan (\`Seq Scan\`) to find matching records, which scales linearly (\`O(N)\`) with table size. An index enables logarithmic (\`O(log N)\`) search times.

### B-Tree Index (Default)
Ideal for equality (\`=\`) and range queries (\`>\`, \`<\`, \`BETWEEN\`).
\`\`\`sql
CREATE INDEX idx_users_email ON users(email);
\`\`\`

### Composite Index
Used when querying by multiple columns in a specific order (the order of columns in the index declaration matters).
\`\`\`sql
-- Supports: WHERE status = 'active' AND role = 'admin'
-- Supports: WHERE status = 'active'
-- Does NOT support: WHERE role = 'admin'
CREATE INDEX idx_users_status_role ON users(status, role);
\`\`\`

### Index Analysis
Always check if queries use indexes by prefixing queries with \`EXPLAIN ANALYZE\`:
\`\`\`sql
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';
\`\`\`
Look for **Index Scan** in the execution plan, not **Seq Scan**.

---

## 2. Redis Caching Patterns

Redis serves as an ultra-fast, in-memory key-value store, running queries in microsecond ranges compared to milliseconds in relational engines.

### Cache-Aside (Lazy Loading)
The application attempts to read from the cache. On a cache miss, it reads from the SQL database, stores the result in Redis, and returns it.

\`\`\`javascript
import redis from 'redis';
import { db } from './db';

const redisClient = redis.createClient();

async function getProductDetails(productId) {
  const cacheKey = \`product:\${productId}\`;

  // 1. Try fetching from Redis
  const cachedData = await redisClient.get(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  // 2. Fetch from main PostgreSQL Database
  const product = await db.select().from('products').where('id', productId).first();
  
  if (product) {
    // 3. Store in cache with 1-hour expiration time (TTL)
    await redisClient.setEx(cacheKey, 3600, JSON.stringify(product));
  }

  return product;
}
\`\`\`

### Cache Eviction and TTL
Always set a **TTL (Time to Live)** on cache keys. This prevents stale data and ensures Redis does not run out of memory (using policies like \`volatile-lru\` or \`allkeys-lru\` for memory reclaim).
`
  },
  {
    id: 'express-jwt-supabase-auth',
    title: 'Secure Stateless Auth with Express & Supabase',
    category: 'Backend Development',
    difficulty: 'Intermediate',
    lastUpdated: '2026-05-30',
    readTime: '4 min read',
    summary: 'A structural overview of stateless sessions, JWT validation, cookie safety (HttpOnly, SameSite), and Supabase Auth integration in Node/Express servers.',
    tags: ['Express.js', 'Node.js', 'JWT', 'Supabase Auth'],
    content: `# Secure Stateless Auth with Express & Supabase

Modern web applications use token-based, stateless authentication systems to remain highly scalable. Here is a look at implementing JWT-based authentication using Express.js and Supabase Auth.

## 1. Stateless vs. Stateful Auth

*   **Stateful**: Server stores session IDs in memory or database. Client passes cookie. Server checks database on every request.
*   **Stateless**: Server signs a token (JWT) containing user info. Token is sent on each request. Server validates the cryptographic signature without database lookups.

## 2. JWT Verification Middleware in Express

This middleware checks if the user's incoming JWT is valid. If valid, it attaches the decoded user context to the request object.

\`\`\`javascript
import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
  // Extract token from Auth Header (Authorization: Bearer <token>)
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  // Verify the JWT signature against the environment's signing key
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token is invalid or expired' });
    }
    
    req.user = user; // Attach payload
    next();
  });
}
\`\`\`

## 3. Supabase Auth Integration

Supabase provides built-in authentication tables, sign-in/sign-up helper methods, and automatically issues valid JWTs.

\`\`\`javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// Sign-in endpoint in Express
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  // Send back session details (access_token, user info)
  return res.json({
    user: data.user,
    accessToken: data.session.access_token,
    expiresIn: data.session.expires_in
  });
});
\`\`\`

## 4. Best Practices for Token Storage
*   **Access Token**: Store in application memory or securely in client state.
*   **Refresh Token**: Keep in a \`HttpOnly\`, \`Secure\`, and \`SameSite=Strict\` cookie to defend against Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).
`
  },
  {
    id: 'docker-multistage-builds',
    title: 'Docker Multi-Stage Builds for Production Efficiency',
    category: 'DevOps & Deployment',
    difficulty: 'Intermediate',
    lastUpdated: '2026-03-15',
    readTime: '4 min read',
    summary: 'Learn how to write optimized Dockerfiles utilizing multi-stage builds to shrink production image sizes, isolate compiler dependencies, and boost build speeds.',
    tags: ['Docker', 'DevOps', 'CI/CD', 'Nginx'],
    content: `# Docker Multi-Stage Builds for Production Efficiency

In production deployments, keeping container image sizes minimal is vital for rapid start-up times, low bandwidth consumption, and reducing the security vulnerability surface area.

## 1. What are Multi-Stage Builds?

A standard Dockerfile uses a single base image containing compiler tools, dev-dependencies, and tests. A **Multi-Stage Build** allows you to use multiple \`FROM\` statements in a single Dockerfile.
*   You copy build artifacts from earlier stages (e.g., node_modules, dist folders).
*   The final stage only contains the compiled app and runtime dependencies, discarding build-only files.

---

## 2. Optimizing a React SPA with Vite & Nginx

Here is a multi-stage Dockerfile that builds a React application using Node.js and serves it using a lightweight Nginx web server.

\`\`\`dockerfile
# ==========================================
# Stage 1: Build the React Codebase
# ==========================================
FROM node:18-alpine AS builder

WORKDIR /app

# Copy lock files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and compile production bundles
COPY . .
RUN npm run build

# ==========================================
# Stage 2: Production Runtime Server
# ==========================================
FROM nginx:alpine

# Copy built HTML/JS assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration (for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
\`\`\`

## 3. Results Comparison
*   **Single Stage Image (Node base)**: ~1.2 GB (contains node_modules, build packages, compilers).
*   **Multi-Stage Image (Nginx runtime)**: ~32 MB (only contains production HTML/JS bundle and Nginx binary).

**Image size reduction: ~97%!** This leads to faster CI/CD pipelines, faster deployments on Vercel/Render, and a more secure production environment.
`
  }
];
