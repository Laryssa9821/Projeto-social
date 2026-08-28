# Projeto-social-sleep-well:
\# 📋 ENTREGA SEMANAL DE REQUISITOS - R01

\*\*Versão:\*\* 1.0    
\*\*Laboratório de Inovação \-\*\* Prof. Edilberto Silva — 2026    
\*\*Formato:\*\* Markdown   
\*\*Valor Total da Entrega:\*\* 100%    
\*\*Data de Entrega:\*\* \[30/08\]    
\*\*Grupo:\*\* Sleep Well    
\*\*Integrantes:\*\* Ana Júlia Bernardes ([ana50466166@edu.df.senac.br](mailto:ana50466166@edu.df.senac.br)) ; Douglas Cerqueira ([douglas51812666@edu.df.senac.br](mailto:douglas51812666@edu.df.senac.br)) ; Fabiane Sarres ([fabiane61909266@edu.df.senac.br](mailto:fabiane61909266@edu.df.senac.br)) ; Gustavo Augusto ([gustavo61867136@edu.df.senac.br](mailto:gustavo61867136@edu.df.senac.br)) ; Hannah Raposo ([hannah46570966@edu.df.senac.br](mailto:hannah46570966@edu.df.senac.br)) ; Laryssa Almeida (laryssa59158836@edu.df.senac.br);

---

## ⚙️ ESTRUTURA DE DIRETÓRIOS

```
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
```

**Localização deste arquivo:**
`docs/requisitos-semanais/SEMANA-01/RF-001-autenticacao-cadastro.md`

**Localização do Protótipo HTML+CSS:**
`src/prototipos/SEMANA-01/RF-001-autenticacao-cadastro/index.html` ⚠️ **OBRIGATÓRIO**


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
O sistema Sleep Well deve permitir que usuários internos (perfis Gerente, Administrativo e Financeiro) façam login escolhendo entre dois modos de acesso — **Credenciado** e **Gerente** —, recuperem sua senha em caso de esquecimento e, quando autorizados, cadastrem novos usuários no painel administrativo, associando cada novo cadastro a um perfil de acesso com permissões específicas por recurso do sistema.

---

## 2️⃣ DESCRIÇÃO E ATORES (15%)

### Descrição Detalhada

**Por que este requisito existe?**
O sistema precisa controlar o acesso ao painel administrativo da Sleep Well para:
- Restringir a área de cadastro de produtos, pedidos e doações a pessoal autorizado
- Diferenciar o nível de permissão entre Gerente, Administrativo e Financeiro
- Garantir que apenas usuários com credenciais válidas alterem dados sensíveis
- Permitir a recuperação de acesso de forma segura, sem expor dados de terceiros
- Manter rastreabilidade de quem cadastra e altera informações do sistema

**Contexto do Negócio:**
A tela inicial do site (`index.html`) apresenta duas abas de acesso — **Acesso Credenciado** (perfil padrão, cor verde) e **Acesso Gerente** (cor azul escuro). A troca de aba altera dinamicamente o texto do botão de login, a cor do botão e a visibilidade do link **"CADASTRE-SE"**, que só é exibido quando a aba **Gerente** está selecionada — refletindo a regra de que apenas o perfil Gerente pode cadastrar novos usuários administrativos (`cadastre-se.html`). Caso o usuário esqueça a senha, ele é direcionado para `senha_esquecida.html`, onde a identidade é confirmada por CPF antes da definição de uma nova senha.

---

## Atores do Sistema

### 1. GERENTE (Ator Principal)
- **Papel:** Autenticar-se pela aba "Acesso Gerente" e cadastrar novos usuários (Administrativo/Financeiro)
- **Responsabilidade:** Validar os dados do novo colaborador antes de submeter o cadastro; gerenciar quem tem acesso ao sistema
- **Permissões (tabela `permissoes`):**
  - ✅ CREATE (cadastrar novo usuário em `usuarios`)
  - ✅ READ (visualizar usuários e perfis)
  - ✅ UPDATE (corrigir dados cadastrais)
  - ✅ DELETE (inativar usuários — campo `ativo`)

### 2. USUÁRIO CREDENCIADO — Administrativo/Financeiro (Ator Secundário)
- **Papel:** Autenticar-se pela aba "Acesso Credenciado" para operar os módulos liberados ao seu perfil
- **Responsabilidade:** Manter suas credenciais em sigilo e solicitar recuperação de senha quando necessário
- **Permissões:**
  - ✅ READ (conforme `recurso_id` liberado ao seu `perfil_id`)
  - ❌ Sem acesso à tela de cadastro de novos usuários (link "CADASTRE-SE" fica oculto nesta aba)

### 3. SISTEMA (Ator Automático)
- **Papel:** Validar credenciais, aplicar hash de senha, controlar sessão e checar permissões por perfil
- **Responsabilidade:** Consultar `usuarios`/`perfis`/`permissoes`, gerar e expirar tokens de recuperação de senha (`recuperacao_senha`), impedir e-mails duplicados
- **Permissões:**
  - ✅ Todas as operações de leitura e escrita necessárias à autenticação

**Benefícios por ator:**
- **Gerente:** controla com segurança quem acessa o sistema administrativo
- **Credenciado:** acessa rapidamente apenas os módulos relevantes ao seu trabalho
- **Negócio:** reduz risco de acesso indevido a dados de doações, pedidos e produtos

---

## 3️⃣ ESPECIFICAÇÃO DE CASOS DE USO (25%)

## UC-001: Autenticar Usuário e Selecionar Tipo de Acesso

### Pré-Condições
- ✅ Sistema disponível e banco de dados MySQL operacional
- ✅ Usuário possui registro ativo na tabela `usuarios` (`ativo = TRUE`)
- ✅ Usuário possui `perfil_id` válido vinculado à tabela `perfis`

### Pós-Condições (Sucesso)
- ✅ Sessão autenticada é criada para o usuário
- ✅ Usuário é redirecionado à área correspondente ao seu perfil
- ✅ Tentativa de login bem-sucedida pode ser registrada em log

### Pós-Condições (Falha)
- ✅ Mensagem de erro exibida sem detalhar qual campo está incorreto (e-mail ou senha)
- ✅ Sessão não é criada
- ✅ Tentativa de login registrada em log para auditoria

### Fluxo Principal (Login)
1. Usuário acessa a tela inicial (`index.html`)
2. Sistema exibe as abas "Acesso Credenciado" (ativa por padrão) e "Acesso Gerente"
3. Usuário seleciona a aba correspondente ao seu tipo de acesso
4. Sistema atualiza o campo oculto `tipo_acesso`, o texto e a cor do botão "ENTRAR" (verde para Credenciado, azul para Gerente)
5. Usuário informa e-mail/usuário e senha nos campos obrigatórios
6. Usuário clica no botão "ENTRAR"
7. Sistema valida se os campos obrigatórios foram preenchidos
8. Sistema consulta a tabela `usuarios` pelo e-mail informado
9. Sistema compara o hash bcrypt da senha informada com o campo `senha` armazenado
10. Sistema verifica se o `perfil_id` do usuário é compatível com o `tipo_acesso` selecionado e se `ativo = TRUE`
11. Sistema cria a sessão de autenticação e redireciona o usuário à área correspondente ao seu perfil

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
2a.2. Sistema exibe `senha_esquecida.html`, solicitando CPF, senha atual, nova senha e confirmação
2a.3. Sistema valida o CPF informado (algoritmo módulo 11)
2a.4. Sistema gera um registro em `recuperacao_senha` vinculado ao e-mail, com `expira_em` definido e `usado = 0`
2a.5. Sistema valida se a nova senha e a confirmação coincidem
2a.6. Sistema aplica hash bcrypt à nova senha e atualiza o campo `senha` em `usuarios`
2a.7. Sistema marca o token de recuperação como utilizado (`usado = 1`) e exibe confirmação

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
**RN-04:** Confirmação de senha deve ser idêntica à senha informada
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
```
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
```
*Aba ativa por padrão; botão em verde (`--earth-green`); link "CADASTRE-SE" oculto (`visibility: hidden`).*

### Tela 2: Login — Aba "Acesso Gerente" Selecionada
```
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
```
*Botão muda para azul escuro (`--dark-blue`); link de cadastro torna-se visível (regra RN-06), implementado via `mudarAcesso()` em JavaScript.*

### Tela 3: Cadastro de Usuário (`cadastre-se.html`)
```
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
```
*Campos obrigatórios marcados com `*`; `select` "Tipo de conta" mapeia para `perfil_id` (Administrativo/Financeiro) na tabela `perfis`.*

### Tela 4: Recuperação de Senha (`senha_esquecida.html`)
```
┌─────────────────────────────────────┐
│        Alteração de Senha            │
│ Senha entre 8 e 70 caracteres        │
├─────────────────────────────────────┤
│ CPF                  [000.000.000-00]│
│ Senha atual           [____________] │
│ Nova senha            [____________] │
│ Confirme a senha      [____________] │
│                                       │
│           [ CONFIRMAR ]              │
│                                       │
│  Limpar   |   ← Voltar para o login  │
└─────────────────────────────────────┘
```
*Confirmação de identidade por CPF antes da alteração; campos "Nova senha"/"Confirme a senha" validados pela RN-04.*

**CRITÉRIOS ATENDIDOS:**
- ✅ HTML semanticamente correto (`header`, `nav`, `main`, `form`, `label`)
- ✅ CSS responsivo (media query `max-width: 768px` em `style.css`)
- ✅ 4 telas representadas (login credenciado, login gerente, cadastro, recuperação de senha)
- ✅ Estados diferentes via classes (`.active`, `.active-link`) e JavaScript (`mudarAcesso`)
- ✅ Descrição de cada elemento das telas

---

## 5️⃣ ARQUITETURA E ADR (20%)

**Objetivo:** Descrever como o requisito será implementado.

## Arquitetura da Solução

### Diagrama de Componentes

```
┌────────────────────┐
│      Frontend       │ (HTML5 + CSS3 + JS)
│ index / cadastre-se │
│ / senha_esquecida   │
└─────────┬───────────┘
          │ HTTPS
          ▼
┌──────────────────────┐
│  API REST Backend     │ (Express.js)
│  POST /login          │
│  POST /usuarios       │
│  POST /recuperar-senha│
└─────────┬─────────────┘
          │ Validações + bcrypt
          ▼
┌───────────────────────────┐
│        MySQL BD           │ (ACID Transactions)
│ Tabelas: usuarios, perfis, │
│ permissoes, recursos,      │
│ recuperacao_senha          │
└───────────────────────────┘
```

### ADR-001: MySQL como Banco de Dados

**Status:** ACEITO
**Contexto:** O sistema precisa de armazenamento relacional estruturado e consistente de dados (ACID) para garantir que as credenciais e permissões de diferentes níveis de acesso sejam gerenciadas de forma segura.
**Decisão:** Utilizar **MySQL** como banco de dados relacional.
**Alternativas consideradas:** PostgreSQL, SQLite
**Consequências:**
- Garantia de integridade ACID para os dados sensíveis.
- Familiaridade técnica da equipe, agilizando o desenvolvimento.
- Adequado para crescimento futuro do sistema.
- Necessita de gestão de esquema das tabelas.

### ADR-002: Bcrypt para Senhas

**Status:** ACEITO

**Contexto:** Senhas de usuários (`usuarios.senha`) devem ser armazenadas de forma segura e irreversível, conforme RN-02 e o Dicionário de Dados ("hash irreversível (Bcrypt)").

**Decisão:** Usar bcrypt com 12 rounds de salt.

**Alternativas:** Scrypt, PBKDF2

**Consequências:** ✅ OWASP recomendado, ✅ Adaptativo, ⚠️ Custo de CPU maior por login

### ADR-003: REST API com Express.js

**Status:** ACEITO

**Contexto:** API escalável e simples para servir as telas de login, cadastro e recuperação de senha do frontend.

**Decisão:** Usar Express.js 4.18+ com Node.js 18 LTS.

**Alternativas:** Django, Rails

**Consequências:** ✅ Rápido, ✅ JavaScript full-stack

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
- ✅ Diagrama de componentes claro
- ✅ 3 ADRs com Status, Contexto, Decisão, Alternativas, Consequências
- ✅ Tecnologias justificadas
- ✅ Fluxo de dados documentado

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
```

---


**Template v12.2 — Entrega Semanal de Requisitos**
**Laboratório de Inovação Prof. Edilberto Silva — 2026**

*"Cada entrega vale 100%. Seja minucioso, justificado, exemplificado!"*

*"Fé, Força e Foco!"*

