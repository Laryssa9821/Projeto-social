# 📋 ENTREGA SEMANAL DE REQUISITOS

**Versão:** 1.0    
**Laboratório de Inovação -** Prof. Edilberto Silva — 2026    
**Formato:** Markdown   
**Valor Total da Entrega:** 100%    
**Data de Entrega:** [30/08]    
**Grupo:** Sleep Well    
**Integrantes:** Ana Júlia Bernardes (ana50466166@edu.df.senac.br) ; Douglas Cerqueira (douglas51812666@edu.df.senac.br) ; Fabiane Sarres (fabiane61909266@edu.df.senac.br) ; Gustavo Augusto (gustavo61867136@edu.df.senac.br) ; Hannah Raposo (hannah46570966@edu.df.senac.br) ; Laryssa Almeida (laryssa59158836@edu.df.senac.br);[cite: 1]

---

## ⚙️ ESTRUTURA DE DIRETÓRIOS

```text
sleep-well-arquitetura/
├── docs/
│   ├── requisitos-semanais/
│   │   ├── SEMANA-01/
│   │   │   ├── RF-001-autenticacao-cadastro.md (ESTE ARQUIVO - ENTREGAR)
│   │   └── ... (SEMANA-XX)
│
├── src/
│   ├── prototipos/
│   │   ├── SEMANA-01/
│   │   │   ├── RF-001-autenticacao-cadastro/
│   │   │   │   ├── index.html (tela de Login)
│   │   │   │   ├── cadastre-se.html (tela de Cadastro)
│   │   │   │   ├── senha_esquecida.html (tela de Recuperação de Senha)
│   │   │   │   ├── sobre_nos.html
│   │   │   │   ├── compre_e_ajude.html
│   │   │   │   ├── impacto_social.html
│   │   │   │   └── style.css (CSS compartilhado entre as telas)
│   │   └── ... (SEMANA-XX)

**Localização deste arquivo:**
`docs/requisitos-semanais/SEMANA-01/RF-001-autenticacao-cadastro.md`[cite: 1]

**Localização do Protótipo HTML+CSS:**
`src/prototipos/SEMANA-01/RF-001-autenticacao-cadastro/index.html` ⚠️ **OBRIGATÓRIO**[cite: 1]


## 1️⃣ IDENTIFICAÇÃO DO REQUISITO (10%)

### RF-001: Autenticação e Cadastro de Usuários

**ID:** RF-001  
**Título:** Autenticar usuários internos (Credenciado/Gerente), recuperar senha e cadastrar novos usuários administrativos  
**Tipo:** Requisito Funcional  
**Prioridade:** ALTA (bloqueia o acesso a todas as demais funcionalidades administrativas do sistema)  
**Complexidade:** MÉDIA-ALTA (estimado 8 story points)  
**Status:** EM DESENVOLVIMENTO  
**Data de Criação:** [Data]  
**Última Atualização:** 28/08/2026  

**Breve Descrição:**  
O sistema Sleep Well deve permitir que usuários internos (perfis Gerente, Administrativo e Financeiro) façam login escolhendo entre dois modos de acesso — **Credenciado** e **Gerente** —, recuperem sua senha em caso de esquecimento informando seu e-mail cadastrado e, quando autorizados, cadastrem novos usuários no painel administrativo, associando cada novo cadastro a um perfil de acesso com permissões específicas por recurso do sistema.

---

## 2️⃣ DESCRIÇÃO E ATORES (15%)

### Descrição Detalhada

**Por que este requisito existe?**
O sistema precisa controlar o acesso ao painel administrativo da Sleep Well para:
- Restringir a área de cadastro de produtos, pedidos e doações a pessoal autorizado[cite: 1]
- Diferenciar o nível de permissão entre Gerente, Administrativo e Financeiro[cite: 1]
- Garantir que apenas usuários com credenciais válidas alterem dados sensíveis[cite: 1]
- Permitir a recuperação de acesso de forma segura, sem expor dados de terceiros[cite: 1]
- Manter rastreabilidade de quem cadastra e altera informações do sistema[cite: 1]

**Contexto do Negócio:**
A tela inicial do site (`index.html`) apresenta duas abas de acesso — **Acesso Credenciado** (perfil padrão, cor verde) e **Acesso Gerente** (cor azul escuro). A troca de aba altera dinamicamente o texto do botão de login, a cor do botão e a visibilidade do link **"CADASTRE-SE"**, que só é exibido quando a aba **Gerente** está selecionada — refletindo a regra de que apenas o perfil Gerente pode cadastrar novos usuários administrativos (`cadastre-se.html`). Caso o usuário esqueça a senha, ele é direcionado para `senha_esquecida.html`, onde informa o e-mail cadastrado e redefine a sua senha diretamente na tela.

---

## Atores do Sistema

### 1. GERENTE (Ator Principal)
- **Papel:** Autenticar-se pela aba "Acesso Gerente" e cadastrar novos usuários (Administrativo/Financeiro)[cite: 1]
- **Responsabilidade:** Validar os dados do novo colaborador antes de submeter o cadastro; gerenciar quem tem acesso ao sistema[cite: 1]
- **Permissões (tabela `permissoes`):**
  - ✅ CREATE (cadastrar novo usuário em `usuarios`)[cite: 1]
  - ✅ READ (visualizar usuários e perfis)[cite: 1]
  - ✅ UPDATE (corrigir dados cadastrais)[cite: 1]
  - ✅ DELETE (inativar usuários — campo `ativo`)[cite: 1]

### 2. USUÁRIO CREDENCIADO — Administrativo/Financeiro (Ator Secundário)
- **Papel:** Autenticar-se pela aba "Acesso Credenciado" para operar os módulos liberados ao seu perfil[cite: 1]
- **Responsabilidade:** Manter suas credenciais em sigilo e solicitar recuperação de senha quando necessário[cite: 1]
- **Permissões:**
  - ✅ READ (conforme `recurso_id` liberado ao seu `perfil_id`)[cite: 1]
  - ❌ Sem acesso à tela de cadastro de novos usuários (link "CADASTRE-SE" fica oculto nesta aba)[cite: 1]

### 3. SISTEMA (Ator Automático)
- **Papel:** Validar credenciais, aplicar hash de senha, controlar sessão e checar permissões por perfil[cite: 1]
- **Responsabilidade:** Consultar `usuarios`/`perfis`/`permissoes`, gerar e expirar tokens de recuperação de senha (`recuperacao_senha`), impedir e-mails duplicados[cite: 1]
- **Permissões:**
  - ✅ Todas as operações de leitura e escrita necessárias à autenticação[cite: 1]

**Benefícios por ator:**
- **Gerente:** controla com segurança quem acessa o sistema administrativo[cite: 1]
- **Credenciado:** acessa rapidamente apenas os módulos relevantes ao seu trabalho[cite: 1]
- **Negócio:** reduz risco de acesso indevido a dados de doações, pedidos e produtos[cite: 1]

---

## 3️⃣ ESPECIFICAÇÃO DE CASOS DE USO (25%)

## UC-001: Autenticar Usuário e Selecionar Tipo de Acesso

### Pré-Condições
- ✅ Sistema disponível e banco de dados MySQL operacional[cite: 1]
- ✅ Usuário possui registro ativo na tabela `usuarios` (`ativo = TRUE`)[cite: 1]
- ✅ Usuário possui `perfil_id` válido vinculado à tabela `perfis`[cite: 1]

### Pós-Condições (Sucesso)
- ✅ Sessão autenticada é criada para o usuário[cite: 1]
- ✅ Usuário é redirecionado à área correspondente ao seu perfil[cite: 1]
- ✅ Tentativa de login bem-sucedida pode ser registrada em log[cite: 1]

### Pós-Condições (Falha)
- ✅ Mensagem de erro exibida sem detalhar qual campo está incorreto (e-mail ou senha)[cite: 1]
- ✅ Sessão não é criada[cite: 1]
- ✅ Tentativa de login registrada em log para auditoria[cite: 1]

### Fluxo Principal (Login)
1. Usuário acessa a tela inicial (`index.html`)[cite: 1]
2. Sistema exibe as abas "Acesso Credenciado" (ativa por padrão) e "Acesso Gerente"[cite: 1]
3. Usuário seleciona a aba correspondente ao seu tipo de acesso[cite: 1]
4. Sistema atualiza o campo oculto `tipo_acesso`, o texto e a cor do botão "ENTRAR" (verde para Credenciado, azul para Gerente)[cite: 1]
5. Usuário informa e-mail/usuário e senha nos campos obrigatórios[cite: 1]
6. Usuário clica no botão "ENTRAR"[cite: 1]
7. Sistema valida se os campos obrigatórios foram preenchidos[cite: 1]
8. Sistema consulta a tabela `usuarios` pelo e-mail informado[cite: 1]
9. Sistema compara o hash bcrypt da senha informada com o campo `senha` armazenado[cite: 1]
10. Sistema verifica se o `perfil_id` do usuário é compatível com o `tipo_acesso` selecionado e se `ativo = TRUE`[cite: 1]
11. Sistema cria a sessão de autenticação e redireciona o usuário à área correspondente ao seu perfil[cite: 1]

### Fluxo Alternativo A1: Cadastro de Novo Usuário (Gerente)
1a.1. Usuário seleciona a aba "Acesso Gerente", tornando visível o link "CADASTRE-SE"  
1a.2. Usuário clica em "CADASTRE-SE" e é direcionado a `cadastre-se.html`  
1a.3. Usuário preenche nome completo, e-mail, senha, confirmação de senha, telefone e tipo de conta (Administrativo ou Financeiro)  
1a.4. Sistema valida se senha e confirmação de senha coincidem  
1a.5. Sistema valida se o e-mail já existe em `usuarios` (RN-01)  
1a.6. Sistema aplica hash bcrypt à senha e insere o novo registro em `usuarios`, vinculando o `perfil_id` correspondente  
1a.7. Sistema exibe mensagem de sucesso e redireciona para a tela de login  

### Fluxo Alternativo A2: Recuperação de Senha
2a.1. Usuário clica em "Esqueceu a senha?" na tela de login  
2a.2. Sistema exibe `senha_esquecida.html`, solicitando o e-mail cadastrado, nova senha e confirmação de senha  
2a.3. Sistema valida se o e-mail informado existe na tabela `usuarios`  
2a.4. Sistema valida se a nova senha e a confirmação coincidem  
2a.5. Sistema aplica hash bcrypt à nova senha e atualiza o campo `senha` em `usuarios`  
2a.6. Sistema exibe confirmação e disponibiliza atalho para retornar ao login  

### Fluxo Alternativo A3: Credenciais Inválidas
9a.1. Sistema não encontra correspondência entre o hash da senha informada e o armazenado  
9a.2. Sistema exibe mensagem genérica "E-mail ou senha inválidos"  
9a.3. Sistema não informa qual dos dois campos está incorreto (proteção contra enumeração de usuários)  

### Fluxo Alternativo A4: E-mail Duplicado no Cadastro
1a.5a. Sistema identifica que o e-mail informado já existe em `usuarios`  
1a.5b. Sistema exibe mensagem "E-mail já cadastrado"  
1a.5c. Usuário pode informar outro e-mail ou recuperar a senha da conta existente  

### Fluxo Alternativo A5: Falha de Conexão com o Banco de Dados
8a.1. Sistema tenta reconectar ao MySQL até 3 vezes (retry automático)  
8a.2. Se falhar, exibe mensagem de erro de conexão  
8a.3. Usuário pode tentar novamente mais tarde  

### Regras de Negócio (RN)
**RN-01:** E-mail deve ser único na tabela `usuarios`  
**RN-02:** Senha deve ser armazenada apenas como hash bcrypt irreversível, nunca em texto plano  
**RN-03:** Senha deve ter no mínimo 6 caracteres no cadastro e entre 8 e 70 caracteres na alteração  
**RN-04:** Confirmação de senha deve ser idêntica à nova senha informada  
**RN-05:** Todo usuário deve estar vinculado a um `perfil_id` válido existente em `perfis`  
**RN-06:** O link "CADASTRE-SE" e a tela de cadastro só ficam disponíveis quando a aba "Acesso Gerente" está selecionada  
**RN-07:** Telefone, quando informado, deve seguir formato válido para o Brasil  
**RN-08:** Token de recuperação de senha (`recuperacao_senha`) expira em `expira_em` e só pode ser usado uma vez (`usado`)  
**RN-09:** Usuários inativos (`ativo = FALSE`) não podem efetuar login  

### Requisitos Não-Funcionais (RNF)
**RNF-01:** Tempo de resposta do login < 2 segundos  
**RNF-02:** Comunicação sempre via HTTPS  
**RNF-03:** Interface responsiva (mobile 320px+ e desktop 1024px+), conforme `style.css` já implementado com media queries  
**RNF-04:** Mensagens de erro de login não devem revelar se o e-mail existe ou não (mitigação de enumeração de contas)  
**RNF-05:** Proteção contra tentativas de força bruta (limite de tentativas/bloqueio temporário)  
**RNF-06:** Conformidade com WCAG 2.1 (contraste, foco visível nos campos, `label` associado a cada `input`)  
**RNF-07:** Sessão deve expirar após período de inatividade configurável  

---

## 4️⃣ PROTÓTIPOS/FLUXOS DE TELAS (HTML+CSS) (20%)

**Arquivos entregues:** `index.html`, `cadastre-se.html`, `senha_esquecida.html` (com `style.css` compartilhado)

### Tela 1: Login (`index.html`) — Estado Inicial
```text
┌─────────────────────────────────────┐
│         ACESSE SUA CONTA             │
├─────────────────────────────────────┤
│ [Acesso Credenciado*] [Acesso Gerente]│
│                                       │
│ E-mail ou Usuário: [______________]  │
│ Senha:             [______________]  │
│                        Esqueceu a senha?│
│                                       │
│        [ ENTRAR - CREDENCIADO ]      │
│                                       │
│  Ou entre com:  (G) (f)              │
│                                       │
└─────────────────────────────────────┘

*Aba ativa por padrão; botão em verde (`--earth-green`); link "CADASTRE-SE" oculto (`visibility: hidden`).*[cite: 1]

### Tela 2: Login — Aba "Acesso Gerente" Selecionada
┌─────────────────────────────────────┐
│         ACESSE SUA CONTA             │
├─────────────────────────────────────┤
│ [Acesso Credenciado] [Acesso Gerente*]│
│                                       │
│ E-mail ou Usuário: [______________]  │
│ Senha:             [______________]  │
│                        Esqueceu a senha?│
│                                       │
│         [ ENTRAR - GERENTE ]         │
│                                       │
│  Ainda não tem conta? CADASTRE-SE    │
└─────────────────────────────────────┘

*Botão muda para azul escuro (`--dark-blue`); link de cadastro torna-se visível (regra RN-06), implementado via `mudarAcesso()` em JavaScript.*[cite: 1]

### Tela 3: Cadastro de Usuário (`cadastre-se.html`)
┌─────────────────────────────────────┐
│   Crie sua conta e faça parte da     │
│         rede de cuidado              │
├─────────────────────────────────────┤
│ Nome completo *      [____________]  │
│ E-mail *             [____________]  │
│ Senha *              [____________]  │
│ Confirmar senha *    [____________]  │
│ Telefone             [____________]  │
│ Tipo de conta   [Administrativo ▾]   │
│                                       │
│           [ CADASTRAR ]              │
│                                       │
│  Já tem uma conta? Faça login        │
└─────────────────────────────────────┘

*Campos obrigatórios marcados com `*`; `select` "Tipo de conta" mapeia para `perfil_id` (Administrativo/Financeiro) na tabela `perfis`.*[cite: 1]

### Tela 4: Recuperação de Senha (`senha_esquecida.html`)
┌─────────────────────────────────────┐
│        Alteração de Senha            │
│ Senha entre 8 e 70 caracteres        │
├─────────────────────────────────────┤
│ E-mail               [____________]  │
│ Nova senha            [____________] │
│ Confirme a senha      [____________] │
│                                       │
│           [ CONFIRMAR ]              │
│                                       │
│  Limpar   |   ← Voltar para o login  │
└─────────────────────────────────────┘

*Identificação e validação via E-mail; campos "Nova senha"/"Confirme a senha" validados pela RN-04 e RN-03.*

**CRITÉRIOS ATENDIDOS:**
- ✅ HTML semanticamente correto (`header`, `nav`, `main`, `form`, `label`)[cite: 1]
- ✅ CSS responsivo (media query `max-width: 768px` em `style.css`)[cite: 1]
- ✅ 4 telas representadas (login credenciado, login gerente, cadastro, recuperação de senha)[cite: 1]
- ✅ Estados diferentes via classes (`.active`, `.active-link`) e JavaScript (`mudarAcesso`)[cite: 1]
- ✅ Descrição de cada elemento das telas[cite: 1]

---

## 5️⃣ ARQUITETURA E ADR (20%)

**Objetivo:** Descrever como o requisito será implementado.[cite: 1]

## Arquitetura da Solução

### Diagrama de Componentes

┌────────────────────┐
│      Frontend      │ (HTML5 + CSS3 + JS)
│ index / cadastre-se│
│ / senha_esquecida  │
└─────────┬──────────┘
          │ HTTPS
          ▼
┌──────────────────────┐
│  API REST Backend    │ (Express.js)
│  POST /login         │
│  POST /usuarios      │
│  POST /recuperar-senha│
└─────────┬────────────┘
          │ Validações + bcrypt
          ▼
┌───────────────────────────┐
│        MySQL BD           │ (ACID Transactions)
│ Tabelas: usuarios, perfis,│
│ permissoes, recursos,     │
│ recuperacao_senha         │
└───────────────────────────┘

### ADR-001: MySQL como Banco de Dados

**Status:** ACEITO  
**Contexto:** O sistema precisa de armazenamento relacional estruturado e consistente de dados (ACID) para garantir que as credenciais e permissões de diferentes níveis de acesso sejam gerenciadas de forma segura.[cite: 1]  
**Decisão:** Utilizar **MySQL** como banco de dados relacional.[cite: 1]  
**Alternativas consideradas:** PostgreSQL, SQLite[cite: 1]  
**Consequências:**  
- Garantia de integridade ACID para os dados sensíveis.[cite: 1]  
- Familiaridade técnica da equipe, agilizando o desenvolvimento.[cite: 1]  
- Adequado para crescimento futuro do sistema.[cite: 1]  
- Necessita de gestão de esquema das tabelas.[cite: 1]  

### ADR-002: Bcrypt para Senhas

**Status:** ACEITO  

**Contexto:** Senhas de usuários (`usuarios.senha`) devem ser armazenadas de forma segura e irreversível, conforme RN-02 e o Dicionário de Dados ("hash irreversível (Bcrypt)").[cite: 1]  

**Decisão:** Usar bcrypt com 12 rounds de salt.[cite: 1]  

**Alternativas:** Scrypt, PBKDF2[cite: 1]  

**Consequências:** ✅ OWASP recomendado, ✅ Adaptativo, ⚠️ Custo de CPU maior por login[cite: 1]  

### ADR-003: REST API com Express.js

**Status:** ACEITO  

**Contexto:** API escalável e simples para servir as telas de login, cadastro e recuperação de senha do frontend.[cite: 1]  

**Decisão:** Usar Express.js 4.18+ com Node.js 18 LTS.[cite: 1]  

**Alternativas:** Django, Rails[cite: 1]  

**Consequências:** ✅ Rápido, ✅ JavaScript full-stack[cite: 1]  

---

## Tecnologias Escolhidas

| Camada | Tecnologia | Versão | Justificativa |
|--------|-----------|--------|---------------|
| Frontend | HTML5 + CSS3 + JavaScript | ES2015+ | Web padrão, já prototipado em `index.html`/`cadastre-se.html`/`senha_esquecida.html` |
| Backend | Express.js | 4.18+ | Minimalista, rápido |
| BD | MySQL | 8+ | ACID, familiaridade da equipe (ver ADR-001) |
| Hash | bcrypt | 5+ | OWASP recomendado (ver ADR-002) |
| Validação | express-validator | 7+ | Robusta |

---

**CRITÉRIOS ATENDIDOS (20%):**
- ✅ Diagrama de componentes claro[cite: 1]
- ✅ 3 ADRs com Status, Contexto, Decisão, Alternativas, Consequências[cite: 1]
- ✅ Tecnologias justificadas[cite: 1]
- ✅ Fluxo de dados documentado[cite: 1]

---

## 6️⃣ QUALIDADE E CONFORMIDADE (10%)

### Checklist de Qualidade

```markdown
- [x] Sem erros ortográficos (revisado)
- [x] Sem erros gramaticais
- [x] Markdown renderiza corretamente no GitHub
- [x] Código está com syntax highlighting (```language)
- [x] Diagramas ASCII art são legíveis
- [x] Nenhuma seção está com "TODO" ou "..."
- [x] Documento tem tamanho apropriado (3-5 páginas)
- [x] Referências internas consistentes (RF-001, UC-001, RN-XX, RNF-XX)
- [x] Formatação consistente (títulos, listas, espaçamento)
