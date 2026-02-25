# Test Plan – QA API E-commerce Lab

Objetivo: validar qualidade de endpoints críticos de uma API REST pública (Fake Store API) simulando cenário de e-commerce.

Escopo:
- Produtos (listagem e item)
- Autenticação (login)
- Carrinho/Pedido (criação)

Tipos de teste:
- Funcional (happy path)
- Negativo (dados inválidos / comportamento inesperado)
- Contrato básico (estrutura mínima do JSON)
- Não-funcional leve (tempo de resposta)

Critérios de saída:
- Endpoints críticos com status correto
- Respostas com estrutura consistente
- Falhas registradas como evidência no repositório

Ferramentas:
- Postman (criação e execução local)
- Newman (execução via linha de comando e CI)
- GitHub Actions (execução automática)
