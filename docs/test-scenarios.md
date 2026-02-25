# Cenários de Teste

CT-01 – Listar produtos
- Quando: GET /products
- Então: status 200, lista não vazia

CT-02 – Buscar produto por ID
- Quando: GET /products/1
- Então: status 200, possui id e title

CT-03 – Buscar produto inexistente
- Quando: GET /products/9999
- Então: comportamento tratado (status 200 com objeto vazio ou status 404, dependendo da API)

CT-04 – Login válido
- Quando: POST /auth/login com credenciais válidas
- Então: status 200 e token

CT-05 – Login inválido
- Quando: POST /auth/login com senha errada
- Então: status 401/400 (erro tratado)

CT-06 – Criar carrinho/pedido (simulado)
- Quando: POST /carts com userId e products
- Então: status 200/201 e id retornado
