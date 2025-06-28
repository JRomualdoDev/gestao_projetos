CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY NOT NULL,
    projeto_id INTEGER NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    status VARCHAR(10) NOT NULL CHECK (status IN ('todo', 'doing', 'done')),
    prioridade VARCHAR(10) NOT NULL CHECK (prioridade IN ('baixa', 'média', 'alta')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (projeto_id) REFERENCES projects(id)
);
