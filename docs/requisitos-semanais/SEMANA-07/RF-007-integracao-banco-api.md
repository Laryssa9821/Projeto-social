# 📋 ENTREGA SEMANAL DE REQUISITOS

**Versão:** 12.2  
**Laboratório de Inovação -** Prof. Edilberto Silva — 2026  
**Formato:** Markdown  
**Valor Total da Entrega:** 100%  
**Data de Entrega:** 08/11/2026  
**Grupo:** Sleep Well — Projeto Social  
**Integrantes:** Ana Júlia Bernardes (ana50466166@edu.df.senac.br) ; Douglas Cerqueira (douglas51812666@edu.df.senac.br) ; Fabiane Sarres (fabiane61909266@edu.df.senac.br) ; Gustavo Augusto (gustavo61867136@edu.df.senac.br) ; Hannah Raposo (hannah46570966@edu.df.senac.br) ; Laryssa Almeida (laryssa59158836@edu.df.senac.br)

---

## ⚙️ ESTRUTURA DE DIRETÓRIOS

```text
Projeto-social/
├── docs/
│   ├── requisitos-semanais/
│   │   ├── SEMANA-01/ ... SEMANA-06/   (sem alteração nesta entrega)
│   │   ├── SEMANA-07/
│   │   │   ├── RF-007-integracao-banco-api.md
│   │   └── ... (SEMANA-XX)
│
├── src/
│   ├── prototipos/
│   │   ├── SEMANA-01/ ... SEMANA-06/   (sem alteração nesta entrega)
│   │   ├── SEMANA-07/
│   │   │   ├── FR-007-integração_banco_api_site/
│   │   │   │   ├── backend/                         (NOVO: API Node.js + Express)
│   │   │   │   │   ├── package.json
│   │   │   │   │   └── src/
│   │   │   │   │       ├── server.js
│   │   │   │   │       ├── config/database.js
│   │   │   │   │       ├── controllers/authController.js
│   │   │   │   │       ├── middlewares/authMiddleware.js
│   │   │   │   │       ├── middlewares/perfilMiddleware.js
│   │   │   │   │       └── routes/authRoutes.js, painelRoutes.js
│   │   │   │   ├── cadastrase.js                    (NOVO: envio do cadastro à API)
│   │   │   │   ├── protegerPagina.js                (NOVO: proteção de páginas e sair())
│   │   │   │   ├── login.html                       (ALTERADO: login pela API)
│   │   │   │   ├── cadastre-se.html                 (ALTERADO: cadastro pela API)
│   │   │   │   ├── tela_Adm.html                    (ALTERADO: proteção, perfil 2)
│   │   │   │   ├── tela_do_financeiro.html          (ALTERADO: proteção, perfil 3)
│   │   │   │   ├── tela_gerente.html                (ALTERADO: proteção, perfil 1)
│   │   │   │   ├── style.css                        (ALTERADO: mensagens do cadastro)
│   │   │   │   └── (demais páginas públicas e institucionais, sem alteração)
│   │   └── ... (SEMANA-XX)
│
├── sistema/
│   └── banco-de-dados/
│       └── DicionariodeDados.md                     (ATUALIZADO: tabelas financeiras)
└── README.md                                        (ainda não atualizado)
```

**Localização deste arquivo:**  
`docs/requisitos-semanais/SEMANA-07/RF-007-integracao-banco-api.md`

**Localização do Protótipo e do Backend:**  
`src/prototipos/SEMANA-07/FR-007-integração_banco_api_site/` — telas HTML e API em `backend/`

**Dicionário de dados atualizado:**  
`sistema/banco-de-dados/DicionariodeDados.md`

---

## 1️⃣ IDENTIFICAÇÃO DO REQUISITO (10%)

### RF-007: Integração entre Site, API e Banco de Dados (Cadastro, Login e Acesso por Perfil)

**ID:** RF-007  
**Título:** Integração do site com uma API (Node.js + Express) conectada ao banco MySQL para cadastro de usuários, login com token e acesso aos painéis conforme o perfil (Gerente, Administrativo e Financeiro), além da expansão do dicionário de dados com as tabelas financeiras  
**Tipo:** Requisito Funcional  
**Prioridade:** ALTA — substitui o login de demonstração por autenticação real e é a base para ligar os painéis aos dados do banco  
**Complexidade:** ALTA — estimado em 8 story points (backend novo, conexão segura com o banco, autenticação com token, controle de acesso por perfil e integração com as telas)  
**Status:** EM DESENVOLVIMENTO  
**Data de Criação:** 06/11/2026  
**Última Atualização:** 06/11/2026

### Breve Descrição

Até a Semana 6, o login do protótipo comparava e-mail e senha com três usuários fixos escritos na própria página, e o cadastro não gravava nada. Nesta entrega o projeto ganha um **backend** (`backend/`) que se conecta ao MySQL, grava usuários com senha criptografada, autentica por e-mail e senha, devolve um **token JWT** válido por 8 horas e identifica o perfil do usuário. O site passa a usar essa API: o cadastro envia os dados ao servidor, o login recebe o token e redireciona cada perfil para a sua tela (`tela_gerente.html`, `tela_Adm.html` ou `tela_do_financeiro.html`), e as três telas passam a chamar uma função de proteção de página. O dicionário de dados também foi ampliado com as tabelas financeiras.

> **Situação de integração:** a autenticação está integrada ao banco. Os dados exibidos nos painéis (vendas, transações, repasses etc.) **continuam fictícios**, e o checkout e a recuperação de senha ainda não usam a API.
>
> **Escopo combinado com o professor:** a proteção de dados e o endurecimento de segurança do backend não são requisito de entrega deste semestre e serão trabalhados nas férias, com o acompanhamento do professor (ver “Evolução Futura”).

---

## 2️⃣ DESCRIÇÃO E ATORES (15%)

### Descrição Detalhada

**Por que este requisito existe?**

Com os três painéis prontos (RF-003, RF-005 e RF-006), faltava garantir que cada pessoa entrasse com sua própria conta e visse somente a tela do seu perfil. Esta entrega resolve quatro pontos:

- cadastro real de usuários no banco, com senha forte e criptografada;
- login real, com mensagens de erro vindas do servidor e sessão por token;
- redirecionamento automático de cada perfil para a sua tela (resolvendo a sugestão feita na Semana 6) e alinhamento dos nomes dos perfis entre cadastro e dicionário de dados;
- primeira camada de proteção das telas e das rotas internas da API.

### Contexto do Negócio

A Sleep Well passa a ter três perfis internos com responsabilidades diferentes: o Gerente acompanha o negócio e autoriza decisões, o Administrativo mantém os cadastros e o Financeiro controla entradas, saídas e repasses. Informações como valores, fornecedores e repasses só devem ser vistas por quem tem o perfil adequado, o que exige identificar o usuário no servidor, e não apenas na página.

### Atores do Sistema

#### 1. VISITANTE — Ator Principal do cadastro e do login

- **Papel:** cria uma conta e entra no sistema.
- **Permissões:** acesso às páginas públicas, ao cadastro e ao login.

#### 2. GERENTE (perfil 1) — Ator Secundário

- **Papel:** acessa o painel gerencial (`tela_gerente.html`) e a área de gestão da API.

#### 3. ADMINISTRATIVO (perfil 2) — Ator Secundário

- **Papel:** acessa o painel administrativo (`tela_Adm.html`) e a área de gestão da API.

#### 4. FINANCEIRO (perfil 3) — Ator Secundário

- **Papel:** acessa o painel financeiro (`tela_do_financeiro.html`).

#### 5. API / SISTEMA — Ator Automático

- **Papel:** validar os dados, criptografar a senha, consultar e gravar no MySQL, gerar e conferir o token, aplicar a regra de perfil nas rotas internas e responder em JSON com o código HTTP adequado.

#### 6. BANCO DE DADOS (MySQL) — Ator de Apoio

- **Papel:** armazenar usuários e perfis, acessado pela API por conexão segura (SSL).

---

## 3️⃣ ESPECIFICAÇÃO DE CASOS DE USO (25%)

**Objetivo:** Descrever detalhadamente como o requisito é executado.

### UC-029: Cadastrar Usuário

#### Pré-Condições

- Visitante está na página `cadastre-se.html` e o backend está em execução.

#### Pós-Condições — Sucesso

- Usuário gravado no banco com senha criptografada e conta ativa.

#### Fluxo Principal

1. Visitante preenche nome, e-mail, senha, confirmação de senha, telefone (opcional) e tipo de conta (Gerente, Administrativo ou Financeiro).
2. Sistema confere no navegador se os campos obrigatórios estão preenchidos e se as senhas coincidem.
3. Sistema envia os dados para `POST /api/auth/cadastro`.
4. API confere os campos, a força da senha, a igualdade das senhas, o perfil (1, 2 ou 3) e se o e-mail já existe.
5. API criptografa a senha (bcrypt) e grava o usuário como ativo.
6. API responde “Usuário cadastrado com sucesso” (código 201).
7. Sistema exibe a mensagem em verde e leva o visitante ao login em cerca de 1,5 segundo.

#### Fluxos Alternativos

- **A1 — Dados incompletos ou senha fraca (400):** API informa o problema e o visitante corrige.
- **A2 — E-mail já cadastrado (409):** API informa que o e-mail já está em uso.
- **A3 — Servidor indisponível:** sistema informa que não foi possível conectar e pede para verificar se o backend está ligado.

### UC-030: Autenticar e Ser Direcionado ao Painel do Perfil

#### Pré-Condições

- Usuário possui conta ativa e o backend está em execução.

#### Pós-Condições — Sucesso

- Token e dados do usuário guardados no navegador e usuário na tela do seu perfil.

#### Fluxo Principal

1. Usuário informa e-mail e senha em `login.html` e clica em “Entrar”.
2. Sistema envia os dados para `POST /api/auth/login` e o botão passa a mostrar “ENTRANDO...”.
3. API busca o usuário e o perfil no banco, confere se a conta está ativa e compara a senha com o hash gravado.
4. API gera um token válido por 8 horas contendo o id do usuário e o id do perfil, e devolve token e dados do usuário.
5. Sistema guarda `token` e `usuarioLogado` no navegador.
6. Sistema redireciona conforme o perfil: 1 para `tela_gerente.html`, 2 para `tela_Adm.html` e 3 para `tela_do_financeiro.html`.

#### Fluxos Alternativos

- **A1 — E-mail ou senha incorretos (401):** mensagem única “E-mail ou senha incorretos.”, sem indicar qual dado falhou.
- **A2 — Usuário desativado (403):** mensagem informando que o usuário está desativado.
- **A3 — Campos vazios (400):** mensagem pedindo e-mail e senha.
- **A4 — Perfil inválido:** mensagem “O usuário não possui um perfil válido.”
- **A5 — Servidor indisponível:** mensagem de falha de conexão com o servidor.

### UC-031: Acessar o Painel Conforme o Perfil

#### Pré-Condições

- Usuário autenticado (UC-030).

#### Pós-Condições — Sucesso

- Painel exibido com “nome (perfil)” no cabeçalho.

#### Fluxo Principal

1. Ao abrir uma tela interna, o sistema chama `protegerPagina` com o perfil permitido daquela tela.
2. Sistema verifica se há token e dados de usuário no navegador e se o perfil do usuário é o permitido.
3. Sistema exibe a tela e preenche o cabeçalho com o nome e o perfil.
4. Nas rotas `/api/painel/*`, a API exige o token e confere o perfil antes de responder.

#### Fluxos Alternativos

- **A1 — Sem sessão:** usuário é levado ao login.
- **A2 — Perfil diferente do permitido:** sistema exibe aviso de falta de permissão e leva ao login (na API, resposta 403).
- **A3 — Token ausente, inválido ou expirado:** API responde 401 com a mensagem correspondente.

### UC-032: Encerrar a Sessão

#### Pré-Condições

- Usuário está em uma tela interna.

#### Pós-Condições — Sucesso

- Token e dados do usuário removidos do navegador e usuário no login.

#### Fluxo Principal

1. Usuário aciona a saída do sistema.
2. Sistema executa `sair()`, que remove `token` e `usuarioLogado` e abre o login.

> **Observação:** a função `sair()` existe em `protegerPagina.js`, mas o botão “Sair do Sistema” das telas ainda é apenas um link para `login.html` (ver Pontos de Atenção).

### UC-033: Verificar Saúde da API e do Banco (apoio à equipe)

#### Fluxo Principal

1. Desenvolvedor acessa `GET /` (API no ar), `GET /teste-banco` (conexão com o MySQL) ou `GET /diagnostico-banco` (nome do banco, servidor e quantidade de usuários).
2. API responde 200 em caso de sucesso ou 500 com a descrição do erro.

### Regras de Negócio (RN)

**RN-42:** Existem três perfis: 1 – Gerente, 2 – Administrativo e 3 – Financeiro. Cada um acessa apenas a sua tela interna.  
**RN-43:** A senha deve ter no mínimo 10 caracteres, com letra maiúscula, letra minúscula, número e caractere especial, e é gravada somente criptografada (bcrypt).  
**RN-44:** O e-mail é único e é guardado sem espaços e em letras minúsculas.  
**RN-45:** Para usuário inexistente ou senha errada, a mensagem é a mesma (“E-mail ou senha incorretos.”).  
**RN-46:** Usuário com conta desativada não consegue entrar.  
**RN-47:** O token de acesso vale 8 horas e é enviado no cabeçalho `Authorization: Bearer <token>`.  
**RN-48:** O destino após o login é definido pelo perfil gravado no banco, independentemente da aba (“Acesso Credenciado” ou “Acesso Gerente”) escolhida na tela.  
**RN-49:** O navegador guarda `token` e `usuarioLogado` (id, nome, e-mail, id do perfil e nome do perfil); os painéis exibem “nome (perfil)” no cabeçalho.  
**RN-50:** Rotas internas da API: `/api/painel/usuario` (qualquer usuário autenticado), `/gerente` (perfil 1), `/administrativo` (perfil 2), `/financeiro` (perfil 3) e `/gestao` (perfis 1 e 2).  
**RN-51:** Nesta entrega apenas a autenticação usa o banco; os dados dos painéis continuam estáticos.

### Requisitos Não-Funcionais (RNF)

**RNF-26:** As consultas ao banco usam comandos parametrizados, e a senha nunca é gravada nem devolvida em texto puro.  
**RNF-27:** A conexão com o MySQL usa SSL com certificado de autoridade; credenciais do banco e segredo do token ficam em variáveis de ambiente, fora do código.  
**RNF-28:** A API responde em JSON com códigos HTTP adequados (200, 201, 400, 401, 403, 404, 409 e 500).  
**RNF-29:** As telas informam o andamento (“ENTRANDO...”, “CADASTRANDO...”) e avisam quando o servidor está fora do ar.  
**RNF-30 (evolução futura):** aprofundar a segurança e a proteção de dados da API (origem permitida no CORS, rotas de diagnóstico, registros em log e controle do perfil no cadastro). Fora do escopo de entrega deste semestre, a ser trabalhado nas férias com o professor.

---

## 4️⃣ PROTÓTIPOS/FLUXOS DE TELAS (HTML+CSS) (20%)

**Objetivo:** Visualizar como o requisito aparece na interface por meio do protótipo HTML+CSS.

### Tela 1 — Cadastro de Usuário (cadastre-se.html)

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ CADASTRE-SE                                                                            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  Nome completo *      [                                        ]                       │
│  E-mail *             [                                        ]                       │
│  Senha *              [ mínimo 10 caracteres                   ]                       │
│  Confirmar senha *    [ digite a senha novamente               ]                       │
│  Telefone             [ (00) 00000-0000                        ]                       │
│  Tipo de conta *      [ Selecione o tipo de conta           v  ]                       │
│                           1 - Gerente | 2 - Administrativo | 3 - Financeiro            │
│                                                                                        │
│                       [ CADASTRAR ]        (vira "CADASTRANDO..." durante o envio)     │
│     Mensagem: verde = sucesso (volta ao login em 1,5 s) | vermelha = erro da API       │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Tela 2 — Login (login.html)

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ ACESSE SUA CONTA                                                                       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│      [ Acesso Credenciado ]   [ Acesso Gerente ]    (abas só mudam o texto do botão)   │
│                                                                                        │
│      ! Mensagem de erro da API (ex.: E-mail ou senha incorretos.)                      │
│      [ Digite seu e-mail                        ]                                      │
│      [ Senha                                (o) ]       Esqueceu a senha?              │
│                                                                                        │
│                 [ ENTRAR ]       (vira "ENTRANDO..." durante o envio)                  │
│                                                                                        │
│      Destino definido pelo perfil do usuário no banco, não pela aba escolhida.         │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Fluxo 3 — Autenticação e Acesso por Perfil

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ NAVEGADOR (login.html)        API (Express)                       MySQL                │
│ ---------------------        -------------                       -----                 │
│ 1. e-mail + senha ---------> POST /api/auth/login                                      │
│                              2. busca usuário + perfil --------> usuarios / perfis     │
│                              3. compara senha (bcrypt)  <------- hash da senha         │
│                              4. gera token JWT (8 h) com id_usuario e id_perfil        │
│ 5. recebe token + dados <---- 200 OK                                                   │
│ 6. guarda "token" e "usuarioLogado" no navegador (localStorage)                        │
│ 7. redireciona pelo id_perfil:                                                         │
│       1 -> tela_gerente.html    2 -> tela_Adm.html    3 -> tela_do_financeiro.html     │
│ 8. a tela chama protegerPagina([perfil]); sem token ou com outro perfil, volta ao login│
│ 9. /api/painel/*: Bearer token --> 401 (sem token/vencido) | 403 (outro perfil)        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Quadro 4 — Perfis, Telas e Rotas

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Perfil               | id  | Tela do protótipo       | Rota (/api/painel)              │
│ ---------------------+-----+-------------------------+-------------------------        │
│ Gerente              | 1   | tela_gerente.html       | /gerente, /gestao               │
│ Administrativo       | 2   | tela_Adm.html           | /administrativo, /gestao        │
│ Financeiro           | 3   | tela_do_financeiro.html | /financeiro                     │
│ Qualquer autenticado | -   | -                       | /usuario                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Critérios de Aceite

- [x] Backend com rotas `POST /api/auth/cadastro` e `POST /api/auth/login`, conectado ao MySQL.
- [x] Cadastro com senha forte, e-mail único e senha criptografada.
- [x] Login retorna token com validade de 8 horas e dados do usuário.
- [x] Redirecionamento por perfil: 1 para o gerente, 2 para o administrativo e 3 para o financeiro.
- [x] Tipos de conta do cadastro alinhados ao dicionário (Gerente, Administrativo e Financeiro).
- [x] Rotas `/api/painel/*` protegidas por token e por perfil.
- [x] Dicionário de dados ampliado com tabelas financeiras.
- [ ] Proteção das páginas funcionando no navegador (falta carregar `protegerPagina.js` nas telas — ajuste rápido).
- [ ] “Sair do Sistema” encerrando a sessão.
- [ ] Painéis exibindo dados reais do banco.
- [ ] Recuperação de senha e checkout integrados à API.

> Os itens seguem em fase de conclusão.

---

## 5️⃣ ARQUITETURA E ADR (20%)

**Objetivo:** Descrever como o requisito será implementado.

### Arquitetura da Solução

```text
┌──────────────────────────────┐
│          Frontend            │
│ HTML + CSS + JavaScript      │
│ login, cadastre-se, painéis  │
│ protegerPagina.js            │
│ cadastrase.js                │
└──────────────┬───────────────┘
               │ HTTP + JSON (porta 3000)
               ▼
┌──────────────────────────────┐
│       API / Backend          │
│   Node.js + Express          │
│ routes -> controllers        │
│ middlewares: token e perfil  │
│ bcrypt + JWT                 │
└──────────────┬───────────────┘
               │ mysql2 (pool, SSL)
               ▼
┌──────────────────────────────┐
│          MySQL               │
│ usuarios, perfis e demais    │
│ tabelas do dicionário        │
└──────────────────────────────┘
```

### ADR-013: Autenticação por Token JWT com o Perfil no Token

**Status:** ACEITO (substitui a ADR-010)

**Contexto:** o perfil era definido pela aba do login e guardado no navegador, sem nenhuma verificação real.

**Decisão:** autenticar e-mail e senha no servidor (bcrypt) e devolver um token JWT de 8 horas com `id_usuario` e `id_perfil`; o navegador guarda o token e envia no cabeçalho `Authorization`.

**Alternativas:**

- Sessão guardada no servidor — não adotada, por exigir armazenamento de sessões e simplificar menos a comunicação entre site e API.

**Consequências:** o servidor passa a decidir quem é o usuário e qual o seu perfil. O armazenamento do token no navegador e a revogação após a saída do usuário ficam para a evolução de segurança combinada com o professor.

### ADR-014: API em Camadas com Pool de Conexões e SSL

**Status:** ACEITO

**Contexto:** a ADR de backend (Express com MySQL) já estava prevista desde a Semana 2, mas ainda não havia código.

**Decisão:** organizar a API em rotas, controladores e middlewares; usar pool de conexões `mysql2` com SSL e certificado; ler credenciais e segredo do token de variáveis de ambiente.

**Alternativas:**

- Concentrar a lógica em um único arquivo — não adotado, por dificultar a manutenção conforme surgirem novas rotas.

**Consequências:** cada nova funcionalidade entra como rota e controlador. Exige que cada pessoa da equipe configure o próprio arquivo de variáveis e o certificado, que não devem ir para o repositório.

### ADR-015: Proteção em Duas Camadas (Página e Rota)

**Status:** ACEITO (implementação parcial; aprofundamento nas férias com o professor)

**Contexto:** as telas internas são arquivos estáticos que qualquer pessoa pode abrir.

**Decisão:** a página confere token e perfil no navegador para orientar o usuário (`protegerPagina`), e a API confere token e perfil em cada rota interna, que é a proteção que vale de fato.

**Alternativas:**

- Proteger apenas no navegador — não adotado, por poder ser contornado.

**Consequências:** a proteção definitiva depende de os dados dos painéis passarem a vir da API protegida. Nesta fase, a camada ativa no navegador só funciona depois que `protegerPagina.js` for carregado nas telas.

### Continuidade das ADRs anteriores

- **ADR-001 a ADR-003 (Semana 2):** autenticação, recuperação de senha e segurança — cadastro e login passam a seguir (senha criptografada e validação); a recuperação de senha segue sem API.
- **ADR-006 (Semana 3):** parceiros, fornecedores e clientes — parcialmente atendida: o dicionário passou a descrever fornecedores, mas ainda não define `clientes` nem `parceiros`.
- **ADR-007 (Semana 4):** `style.css` segue como arquivo único consolidado.
- **ADR-010 (Semana 5):** perfil definido pela aba do login — substituída pela ADR-013.
- **ADR-011 e ADR-012 (Semana 6):** painel gerencial e normalização de pedidos — mantidas.

### Tecnologias Escolhidas

| Camada | Tecnologia | Versão | Justificativa |
|---|---|---:|---|
| Frontend | HTML5 + CSS3 + JavaScript | ES2015+ | Web padrão e continuidade do projeto |
| Backend | Node.js + Express | conforme `package.json` | API, autenticação e regras de negócio |
| BD | MySQL (conexão com SSL) | 8.0+ | Continuidade da decisão do projeto |
| Acesso ao BD | mysql2 | conforme `package.json` | Pool de conexões e consultas parametrizadas |
| Senha | bcryptjs | conforme `package.json` | Criptografia da senha (custo 10) |
| Sessão | jsonwebtoken (JWT) | conforme `package.json` | Token de 8 horas com perfil |
| Configuração | dotenv | conforme `package.json` | Variáveis de ambiente |
| Integração | cors | conforme `package.json` | Permite o site chamar a API |
| Desenvolvimento | nodemon | conforme `package.json` | Reinício automático do servidor |

---

## 6️⃣ QUALIDADE E CONFORMIDADE (10%)

**Objetivo:** Verificar se o documento e o protótipo seguem os padrões de qualidade definidos pelo template.

### Checklist de Qualidade

- [x] Estrutura compatível com o Template v12.2.
- [x] Identificação, atores, casos de uso, protótipos, arquitetura e qualidade presentes.
- [x] Markdown estruturado para renderização no GitHub.
- [x] Blocos de código com linguagem definida quando aplicável.
- [x] Diagramas ASCII legíveis e com quadros alinhados.
- [x] Referências internas consistentes: RF-007, UC-029 a UC-033, RN-42 a RN-51 e RNF-26 a RNF-30.
- [x] Pendências e evoluções futuras explicitamente identificadas.
- [ ] Proteção de páginas ativa no navegador.
- [ ] Dicionário de dados padronizado e consistente com o código.
- [ ] Segurança e proteção de dados do backend aprofundadas (evolução futura, combinada com o professor).

### Resumo das Correções, Ajustes, Alterações e Melhorias da Semana

| Tipo | O que mudou |
|---|---|
| **Novo** | Backend (Express + MySQL) com cadastro, login, token JWT e rotas protegidas por perfil |
| **Novo** | `cadastrase.js` (envio do cadastro à API) e `protegerPagina.js` (proteção de páginas e função de saída) |
| **Novo** | Dicionário: tabelas Fornecedor, Vendas, Transacoes, anexos, Repasses, contas_pagas e contas_receber |
| **Alteração** | Login deixou de usar três usuários fixos escritos na página e passou a consultar a API; o campo agora é “Digite seu e-mail” |
| **Alteração** | Cadastro: senha mínima de 6 para 10 caracteres; envio real para a API |
| **Alteração** | Redirecionamento do login passou a ser por perfil do banco (1, 2 ou 3); o Gerente agora abre `tela_gerente.html` |
| **Correção** | Tipos de conta do cadastro agora coincidem com o dicionário (Gerente, Administrativo e Financeiro), resolvendo os perfis com nomes trocados apontados nas Semanas 5 e 6 |
| **Correção** | `tela_gerente.html`: removida a linha sem efeito (`paineis.format = ...`) e a troca de abas passou a ignorar painel inexistente |
| **Melhoria** | Senha forte validada no servidor e gravada com hash; mensagem única para e-mail ou senha incorretos |
| **Melhoria** | Botões com estado de carregamento e mensagens de sucesso e erro no cadastro (`style.css`) |
| **Melhoria** | Telas internas passam a chamar `protegerPagina` com o perfil permitido (falta carregar o script nas telas, ver pendências) |

### Pendências de Funcionamento (ajustes rápidos)

1. **Proteção das páginas ainda não ativa:** `tela_Adm.html`, `tela_do_financeiro.html` e `tela_gerente.html` chamam `protegerPagina([...])`, mas não carregam o arquivo `protegerPagina.js`; por isso a função não existe na página e o bloqueio por perfil não acontece. Correção de uma linha por tela: `<script src="protegerPagina.js"></script>`, antes do bloco que a chama.
2. **“Sair do Sistema” não encerra a sessão:** o botão é só um link para `login.html`; a função `sair()` não é usada, e o token continua guardado.
3. **Menu do gerente com item quebrado:** em `tela_gerente.html`, o item “Visão Geral” perdeu o texto e o ícone e saiu da lista (`<li>`), ficando um link vazio.
4. **Abas do login sem efeito:** “Acesso Credenciado” e “Acesso Gerente” só trocam o texto do botão, pois o destino agora vem do perfil; remover as abas ou ajustar o texto. Os quatro links do rodapé do `login.html` continuam vazios.
5. **Mensagem de erro copiada no cadastro:** em caso de falha, a função de cadastro registra “Erro no login” e responde “Erro interno ao realizar o login”.
6. **Dicionário diferente do código e com falhas:**
   - o código usa `id_usuario` e `id_perfil`; as tabelas `usuarios` e `perfis` do dicionário usam `id` e `perfil_id`;
   - `clientes` e `parceiros` são referenciadas por chaves estrangeiras, mas não têm tabela;
   - `Fornecedor` está sem chave primária, com o campo `racao_social` (razão social) e nome no singular;
   - `Transacoes` não lista, entre os campos, as colunas das chaves estrangeiras (`id_fornecedor`, `id_parceiro`, `id_venda`, `id_doacao`, `id_usuario`);
   - `contas_pagas` deveria ser `contas_pagar` (a conta tem status aberta, paga ou cancelada);
   - descrições copiadas (“Identificador único da venda” em `Transacoes`, `anexos` e `Repasses`) e índices com nomes de colunas inexistentes (`id_vencimento`, `id_valor`, `id_doacoes`).
7. **Endereço da API fixo no código:** `http://localhost:3000` aparece no login e no cadastro; configurar por ambiente.
8. **Organização do repositório:** criar um `.gitignore` (para não enviar o arquivo `.env` e o certificado `certs/ca.pem` ao GitHub) e um guia de execução do backend (variáveis necessárias, `npm install` e `npm run dev`); renomear a pasta `FR-007-...` para o padrão `RF-00X`; incluir a extensão `.md` no documento da Semana 5 e atualizar o `README.md` com as Semanas 6 e 7.
9. **Recuperação de senha e painéis:** as telas e a tabela de recuperação existem, mas não há rota na API; as rotas `/api/painel/*` devolvem apenas uma mensagem de boas-vindas, e os painéis seguem com dados fictícios.

### Evolução Futura — Segurança e Proteção de Dados

Combinado com o professor: este tema **não é requisito de entrega deste semestre** e será trabalhado nas férias, com o acompanhamento dele. Itens já identificados pela equipe:

- restringir a escolha do perfil no cadastro público (hoje o formulário aceita Gerente, Administrativo e Financeiro);
- proteger ou remover as rotas de diagnóstico (`/teste-banco` e `/diagnostico-banco`) e restringir a origem permitida no CORS;
- evitar registrar e-mails em log e revisar as mensagens de erro devolvidas pela API;
- avaliar o armazenamento do token no navegador e a revogação após a saída do usuário;
- aplicar proteção de dados pessoais no banco e na API (LGPD), incluindo a recuperação de senha integrada.

> As pendências são mantidas visíveis para acompanhamento e não são contabilizadas como funcionalidades concluídas; a evolução futura segue o combinado com o professor.

---

## 📊 RESUMO DE PONTUAÇÃO

| Tópico | Peso | Conteúdo entregue |
|---|---:|---|
| 1. Identificação do Requisito | 10% | RF-007, prioridade, complexidade, status e descrição |
| 2. Descrição e Atores | 15% | contexto, perfis, API e banco |
| 3. Especificação de Casos de Uso | 25% | UC-029 a UC-033, RN e RNF |
| 4. Protótipos/Telas (HTML+CSS) | 20% | cadastro, login, fluxo de autenticação e quadro de perfis |
| 5. Arquitetura e ADR | 20% | camadas, token, API em camadas, proteção em duas camadas e tecnologias |
| 6. Qualidade e Conformidade | 10% | checklist, resumo de alterações, pendências e evolução futura |
| **TOTAL** | **100%** | **Estrutura completa para avaliação** |

> **Importante:** a tabela apresenta os pesos dos critérios, conforme o modelo. Ela não atribui antecipadamente nota 100/100 à entrega; a avaliação final cabe ao professor.

---

## ✅ PENDÊNCIAS PARA A SEMANA 08

1. **Ajustes rápidos de funcionamento:** carregar `protegerPagina.js` nas telas, fazer “Sair do Sistema” chamar `sair()`, corrigir o item “Visão Geral” do menu do gerente, remover ou ajustar as abas do login e corrigir os links vazios do rodapé.
2. **Próximo requisito sugerido (RF-008): Cadastros Reais no Painel Administrativo.** Ligar o painel administrativo (perfil 2) ao banco por rotas da API: cadastro, listagem, edição e exclusão de fornecedores, parceiros, clientes e produtos, em substituição aos dados fictícios.
3. Padronizar o dicionário de dados (nomes de colunas, chaves primárias, tabelas `clientes` e `parceiros`, `contas_pagar`) e conferi-lo com o banco real.
4. Criar o `.gitignore` e o guia de execução do backend; atualizar o `README.md` (Semanas 6 e 7), renomear `FR-007` para `RF-007` e padronizar os nomes dos documentos.
5. Integrar recuperação de senha e checkout (`pedidos`, `pedido_itens` e `doacoes`) à API e conectar o painel financeiro às tabelas de transações, repasses e contas a pagar e a receber.
6. **Evolução futura (férias, com o professor):** segurança e proteção de dados do backend, conforme a seção “Evolução Futura”.

---

**Template v12.2 — Entrega Semanal de Requisitos**  
**Laboratório de Inovação Prof. Edilberto Silva — 2026**

*"Cada entrega vale 100%. Seja minucioso, justificado, exemplificado!"*

*"Fé, Força e Foco!"*
