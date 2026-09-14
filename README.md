# 📋 ENTREGA SEMANAL DE REQUISITOS

**Versão:** 12.2
**Laboratório de Inovação -** Prof. Edilberto Silva — 2026
**Formato:** Markdown
**Valor Total da Entrega:** 100%
**Data de Entrega:** 14/09/2026
**Grupo:** Sleep Well — Projeto Social
**Integrantes:** Ana Júlia Bernardes (ana50466166@edu.df.senac.br) ; Douglas Cerqueira (douglas51812666@edu.df.senac.br) ; Fabiane Sarres (fabiane61909266@edu.df.senac.br) ; Gustavo Augusto (gustavo61867136@edu.df.senac.br) ; Hannah Raposo (hannah46570966@edu.df.senac.br) ; Laryssa Almeida (laryssa59158836@edu.df.senac.br)

---

## ⚙️ ESTRUTURA DE DIRETÓRIOS

```
Projeto-social/
├── docs/
│   ├── requisitos-semanais/
│   │   ├── SEMANA-01/
│   │   │   ├── RF-001-autenticacao-cadastro.md
│   │   ├── SEMANA-02/
│   │   │   ├── RF-002-melhorias-autenticacao.md
│   │   └── ... (SEMANA-XX)
│
├── src/
│   ├── prototipos/
│   │   ├── SEMANA-01/
│   │   │   ├── RF-001-autenticacao-cadastro/
│   │   │   │   └── index.html
│   │   ├── SEMANA-02/
│   │   │   ├── RF-002-melhorias-autenticacao/
│   │   │   │   ├── index.html
│   │   │   │   └── (CSS embutido no HTML)
│   │   └── ... (SEMANA-XX)
```

**Localização deste arquivo:**
`docs/requisitos-semanais/SEMANA-02/RF-002-melhorias-autenticacao.md`

**Localização do Protótipo HTML+CSS:**
`src/prototipos/SEMANA-02/RF-002-melhorias-autenticacao/index.html`

> **Organização-alvo de pastas (item 6 dos requisitos da Semana 2):** o grupo pretende reorganizar o repositório em `Backend/`, `Frontend/`, `Dados/`, `Imagens/` e `MD/`. Até a conclusão dessa reorganização, os arquivos seguem a estrutura `docs/` e `src/` já usada na Semana 1, conforme verificado no repositório em 13/09/2026.

---


### RF-002: Melhorias no Fluxo de Autenticação do Projeto Social

```markdown
**ID:** RF-002
**Título:** Correção e complemento do login — máscara de e-mail, exibir senha, recuperação de senha e cadastro completo por perfil
**Tipo:** Requisito Funcional
**Prioridade:** ALTA (bloqueia a liberação segura do módulo de login)
**Complexidade:** MÉDIA (estimado em 5 story points)
**Status:** EM DESENVOLVIMENTO
**Data de Criação:** 06/09/2026
**Última Atualização:** 13/09/2026

**Breve Descrição:**
O sistema deve validar o formato do e-mail no login, permitir exibir/ocultar a senha digitada, oferecer um fluxo completo de recuperação de senha (solicitação por e-mail, envio de link e definição de nova senha) e concluir o cadastro dos perfis Gerente, Administrativo e Financeiro, redirecionando o usuário à página inicial após o login.
```


## 2️⃣ DESCRIÇÃO E ATORES (15%)

```markdown
## Descrição Detalhada

**Por que este requisito existe?**
As entregas anteriores identificaram falhas no módulo de autenticação, que precisam ser corrigidas:
- E-mails inválidos podiam ser digitados sem qualquer validação de formato.
- Não havia forma de conferir visualmente a senha digitada (acessibilidade).
- A recuperação de senha não estava implementada de ponta a ponta.
- Os cadastros de Gerente, Administrativo e Financeiro não estavam totalmente funcionais.
- É necessário deixar explícita a conformidade com boas práticas de segurança (OWASP).

**Contexto do Negócio:**
Sem um módulo de autenticação confiável, o Projeto Social não consegue garantir que cada perfil (Gerente, Administrativo, Financeiro e Credenciado) acesse corretamente as funcionalidades sob sua responsabilidade, nem ofereça um caminho seguro de recuperação de acesso quando o usuário esquece a senha.

---

## Atores do Sistema

### 1. GERENTE (Ator Principal)
- **Papel:** Gerenciar perfis, aprovar cadastros pendentes e redefinir acessos.
- **Responsabilidade:** Validar cadastros e administrar permissões dos demais perfis.
- **Permissões:**
  - ✅ CREATE, READ, UPDATE, DELETE (gestão completa de usuários)

### 2. ADMINISTRATIVO (Ator Secundário)
- **Papel:** Gerenciar conteúdo, relatórios administrativos e projetos.
- **Responsabilidade:** Manter seus dados de acesso atualizados e seguros.
- **Permissões:**
  - ✅ CREATE (adicionar registros administrativos)
  - ✅ READ (visualizar dados administrativos)
  - ✅ UPDATE (atualizar dados administrativos)
  - ❌ DELETE (não pode excluir cadastros de outros usuários)

### 3. FINANCEIRO (Ator Secundário)
- **Papel:** Controlar receitas, despesas e doações.
- **Responsabilidade:** Fornecer dados financeiros válidos e manter suas credenciais seguras.
- **Permissões:**
  - ✅ CREATE (adicionar finanças)
  - ✅ READ (visualizar dados financeiros)
  - ✅ UPDATE (atualizar dados financeiros)
  - ❌ DELETE (não pode excluir registros financeiros)

### 4. CREDENCIADO (Ator Externo)
- **Papel:** Pessoa ou entidade vinculada ao projeto que também acessa o sistema com login próprio.
- **Responsabilidade:** Manter e-mail e senha atualizados e válidos para acesso.
- **Permissões:**
  - ✅ READ (visualizar informações relacionadas ao seu próprio cadastro)

> O Credenciado e o Gerente recuperam sua senha pelo mesmo fluxo: solicitação por e-mail, recebimento do link e definição de nova senha (ver UC-003).

### 5. SISTEMA (Ator Automático)
- **Papel:** Processar autenticação, validar regras de negócio, enviar e-mails e criptografar credenciais.
- **Responsabilidade:** Validar formato de e-mail, gerar e expirar tokens de recuperação de senha, criptografar senhas com bcrypt e redirecionar o usuário conforme seu perfil.
- **Permissões:**
  - ✅ Operações automatizadas de banco de dados e envio de notificações por e-mail
```


## 3️⃣ ESPECIFICAÇÃO DE CASOS DE USO (25%)

**Objetivo:** Descrever detalhadamente como o requisito é executado.


```markdown
## UC-001: Realizar Login (com máscara de e-mail e exibir senha)

### Pré-Condições
- ✅ Sistema disponível
- ✅ Banco de dados funcionando
- ✅ Usuário previamente cadastrado

### Pós-Condições (Sucesso)
- ✅ Sessão do usuário iniciada
- ✅ Usuário redirecionado à página inicial do seu perfil

### Pós-Condições (Falha)
- ✅ Mensagem de erro exibida
- ✅ Sessão não iniciada
- ✅ Tentativa registrada em log

### Fluxo Principal
1. Usuário acessa a tela de login.
2. Sistema exibe os campos de e-mail e senha.
3. Usuário digita o e-mail; o sistema remove espaços desnecessários durante a digitação.
4. Usuário digita a senha.
5. Usuário clica no ícone de "olho" para exibir ou ocultar a senha digitada.
6. Usuário seleciona "Entrar".
7. Sistema valida o formato do e-mail ao submeter o formulário (exigindo o formato padrão como usuario@dominio.com).
8. Sistema verifica a senha informada.
9. Sistema identifica o perfil do usuário (Gerente, Administrativo, Financeiro ou Credenciado).
10. Sistema inicia a sessão.
11. Sistema redireciona automaticamente o usuário para a página inicial do seu perfil.

### Fluxo Alternativo A1: E-mail em formato inválido
1a.1. Sistema detecta que o e-mail não segue o formato válido.
1a.2. Sistema exibe mensagem de alerta: "E-mail não validado! Por favor, insira um e-mail válido (exemplo: usuario@gmail.com ou usuario@outlook.com)."
1a.3. Usuário corrige o e-mail e tenta novamente.

### Fluxo Alternativo A2: Credenciais inválidas
8a.1. Sistema não encontra o usuário ou a senha não confere.
8a.2. Sistema exibe mensagem genérica de erro, sem indicar se o erro é no e-mail ou na senha.
8a.3. Usuário pode tentar novamente ou selecionar "Esqueci minha senha".

### Regras de Negócio (RN)
**RN-01:** O e-mail deve seguir formato válido (usuário@domínio.extensão) para que o envio do formulário seja liberado; caso contrário, o envio é bloqueado e uma mensagem de alerta é exibida.
**RN-02:** O ícone de mostrar/ocultar senha não pode expor a senha em texto simples fora do campo do formulário.
**RN-03:** Após 5 tentativas de login malsucedidas, o sistema bloqueia temporariamente novas tentativas (mitigação de força bruta, conforme OWASP).
**RN-04:** Cada usuário deve ter exatamente um perfil (Gerente, Administrativo ou Financeiro) no momento do cadastro.
**RN-05:** Somente o Gerente pode aprovar ou revisar cadastros de Administrativo e Financeiro.
**RN-06:** As senhas devem ser armazenadas com hash (bcrypt), nunca em texto puro.

### Requisitos Não-Funcionais (RNF)
**RNF-01:** Resposta do login em menos de 2 segundos.
**RNF-02:** Ícone de mostrar senha com aria-label descritivo, atendendo WCAG 2.1.
**RNF-03:** Comunicação via HTTPS obrigatória.
**RNF-04:** Suporta 1000+ usuários simultâneos.
**RNF-05:** Backup diário automático do banco de dados.
**RNF-06:** Sistema deve manter separação entre os perfis Gerente, Administrativo, Financeiro e Credenciado.

## UC-002: Cadastro por Perfil (Gerente, Administrativo, Financeiro)

### Pré-Condições
- ✅ Sistema disponível
- ✅ Usuário autorizado a realizar o cadastro

### Pós-Condições (Sucesso)
- ✅ Usuário cadastrado com perfil definido
- ✅ Confirmação de cadastro exibida

### Pós-Condições (Falha)
- ✅ Cadastro não realizado
- ✅ Mensagem de erro exibida

### Fluxo Principal
1. Usuário acessa a tela de cadastro.
2. Usuário seleciona o perfil desejado: Gerente, Administrativo ou Financeiro.
3. Usuário informa nome, e-mail e senha.
4. Sistema valida o formato do e-mail e a força da senha.
5. Sistema verifica se o e-mail já está cadastrado.
6. Sistema registra o novo usuário com o perfil selecionado.
7. Sistema informa que o cadastro foi concluído.
8. Sistema redireciona o usuário para a tela de login.

### Fluxo Alternativo A1: E-mail já cadastrado
1. Sistema identifica e-mail duplicado.
2. Sistema informa que o e-mail já está em uso.
3. Usuário informa outro e-mail ou retorna ao login.

## UC-003: Recuperação de Senha

### Pré-Condições
- ✅ Usuário possui cadastro prévio com e-mail válido
- ✅ Serviço de envio de e-mail disponível

### Pós-Condições (Sucesso)
- ✅ Link de recuperação enviado ao e-mail informado
- ✅ Nova senha definida e criptografada

### Pós-Condições (Falha)
- ✅ Link não enviado ou expirado
- ✅ Mensagem de erro exibida

### Fluxo Principal
1. Usuário clica em "Esqueci minha senha" na tela de login.
2. Sistema exibe uma tela solicitando somente o e-mail cadastrado.
3. Usuário informa o e-mail e envia a solicitação.
4. Sistema valida se o e-mail existe na base.
5. Sistema gera um token de recuperação com prazo de expiração e envia um link para o e-mail informado.
6. Usuário acessa o e-mail e clica no link recebido.
7. Sistema direciona o usuário para a tela de definição de nova senha.
8. Usuário informa e confirma a nova senha.
9. Sistema valida a força da senha e grava o novo hash.
10. Sistema informa que a senha foi redefinida com sucesso e redireciona para o login.

> O Credenciado e o Gerente recuperam sua senha por este mesmo fluxo, sem distinção de perfil.

### Fluxo Alternativo A1: E-mail não encontrado
4a.1. Sistema não localiza o e-mail informado.
4a.2. Sistema exibe mensagem neutra (ex.: "Se o e-mail existir em nossa base, um link foi enviado"), sem confirmar quais e-mails estão cadastrados.

### Fluxo Alternativo A2: Link expirado
6a.1. Sistema identifica que o token do link expirou.
6a.2. Sistema informa que o link expirou e oferece a opção de solicitar um novo.

### Regras de Negócio (RN)
**RN-07:** O token de recuperação deve expirar em, no máximo, 30 minutos.
**RN-08:** O token deve ser de uso único; após a troca de senha, ele é invalidado.
**RN-09:** A nova senha deve seguir os mesmos critérios mínimos de segurança do cadastro (RN-06).

### Requisitos Não-Funcionais (RNF)
**RNF-07:** O e-mail de recuperação deve ser enviado em até 1 minuto após a solicitação.
**RNF-08:** O link de recuperação deve usar HTTPS e token aleatório (não sequencial).
```


## 4️⃣ PROTÓTIPOS/FLUXOS DE TELAS (HTML+CSS) (20%)

**Objetivo:** Visualizar como o requisito aparece na interface do usuário com protótipo HTML+CSS.


### Mockup/Descrição das Telas

**Tela 1: Login com máscara de e-mail e ícone de mostrar senha**
```
┌─────────────────────────────────────┐
│  Login — Projeto Social             │
├─────────────────────────────────────┤
│  E-mail: [ email@gmail.com      ]   │
│  Senha:  [ ************  ] (👁)     │
│                                     │
│  [ ENTRAR ]                         │
│  Esqueceu a senha?                  │
└─────────────────────────────────────┘
```

**Tela 2: Recuperação de senha — solicitação por e-mail**
```
┌─────────────────────────────────────┐
│  Recuperar senha                    │
├─────────────────────────────────────┤
│  Informe seu e-mail cadastrado:     │
│  [ email@gmail.com               ]  │
│                                     │
│  [ ENVIAR LINK ]                    │
│  Voltar para o login                │
└─────────────────────────────────────┘
```

**Tela 3: Definição de nova senha (via link recebido)**
```
┌─────────────────────────────────────┐
│  Definir nova senha                 │
├─────────────────────────────────────┤
│  Nova senha:       [ ********** ]   │
│  Confirmar senha:  [ ********** ]   │
│                                     │
│  [ SALVAR NOVA SENHA ]              │
└─────────────────────────────────────┘
```

**Tela 4: Cadastro com seleção de perfil**
```
┌─────────────────────────────────────┐
│  Cadastro de Usuário                │
├─────────────────────────────────────┤
│  Perfil: ( ) Gerente                │
│          ( ) Administrativo         │
│          ( ) Financeiro             │
│  Nome:   [ João Silva            ]  │
│  E-mail: [ joao@email.com        ]  │
│  Senha:  [ ********** ]             │
│                                     │
│  [ CADASTRAR ]                      │
│  Voltar para login                  │
└─────────────────────────────────────┘
```

**Tela 5: Erro de validação de e-mail**

Ao tentar submeter o formulário com um e-mail sem "@" ou sem extensão (ex.: `joaoemail.com`), o envio é bloqueado via JavaScript (`return false`) e o navegador exibe um alerta nativo (`alert`) com a mensagem "E-mail não validado! Por favor, insira um e-mail válido (exemplo: usuario@gmail.com ou usuario@outlook.com)." O mockup abaixo representa esse estado de forma conceitual, com o alerta sobreposto à tela de login:

```
┌─────────────────────────────────────┐
│  Login — Projeto Social             │
├─────────────────────────────────────┤
│  E-mail: [ joaoemail.com     ] ❌   │
│  Senha:  [ ************  ] (👁)     │
│                                     │
│  [ ENTRAR ]                         │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ ⚠️  E-mail não validado!      │  │
│  │ Por favor, insira um e-mail   │  │
│  │ válido (exemplo:              │  │
│  │ usuario@gmail.com ou          │  │
│  │ usuario@outlook.com).         │  │
│  │                        [ OK ] │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```


## 5️⃣ ARQUITETURA E ADR (20%)

**Objetivo:** Descrever como o requisito será implementado.

## Arquitetura da Solução

### Diagrama de Componentes

```
┌───────────────────────┐
│   Frontend            │ (HTML + CSS + JS)
│   Login / Cadastro /  │
│   Recuperação de senha│
└──────┬────────────────┘
       │ HTTPS
       ▼
┌───────────────────────┐
│  API REST — Backend   │ (Express.js / Node.js)
│  Autenticação,        │
│  validações e envio   │
│  de e-mail            │
└──────┬────────────────┘
       │ Consultas
       ▼
┌───────────────────────┐
│   Banco de Dados      │ (PostgreSQL — ACID)
│   Tabelas: usuario,   │
│   perfil, token_senha │
└───────────────────────┘
```

### ADR-001: Confirmação do Banco de Dados

**Status:** ACEITO

**Contexto:** No documento da Semana 1, o ADR-001 definia PostgreSQL como banco de dados, mas a revisão apontou a dúvida "SQLite??", indicando necessidade de confirmação formal da tecnologia usada pelo grupo.

**Decisão:** Mantém-se PostgreSQL 14+ como banco de dados relacional principal do projeto, conforme decidido na Semana 1. O uso de SQLite fica restrito a ambiente local de testes/protótipo, quando necessário, e não substitui o PostgreSQL em produção.

**Alternativas:**
- MySQL: menos aderente às necessidades de consistência do projeto
- SQLite: adequado apenas para testes locais, não para produção

**Consequências:** ✅ Elimina a ambiguidade da revisão anterior, ✅ Mantém consistência com a arquitetura da Semana 1, ⚠️ Migração futura para SQLite (se decidida) exige novo ADR específico

### ADR-002: Recuperação de Senha via Token Temporário

**Status:** ACEITO

**Contexto:** A recuperação de senha precisa ser segura e não pode expor se um e-mail está ou não cadastrado no sistema.

**Decisão:** Implementar recuperação de senha por token de uso único, com expiração de 30 minutos, enviado por e-mail.

**Alternativas:**
- Enviar a senha atual por e-mail: rejeitada, por expor a senha em texto simples
- Perguntas de segurança: rejeitada, por ser menos segura que o token temporário

**Consequências:** ✅ Maior segurança no processo de recuperação, ⚠️ Requer serviço de envio de e-mails configurado, ⚠️ Necessita rotina de expiração/limpeza de tokens não utilizados

### ADR-003: Conformidade com Diretrizes OWASP

**Status:** ACEITO

**Contexto:** A revisão anterior apontou a ausência de referência explícita à OWASP ("OWASP??") no tratamento de autenticação e senhas.

**Decisão:** O módulo de autenticação seguirá recomendações do OWASP Top 10 e do OWASP Authentication Cheat Sheet, aplicando: hash de senhas com bcrypt, limite de tentativas de login, mensagens de erro genéricas em login e recuperação de senha, tokens de recuperação únicos e com expiração curta, e uso obrigatório de HTTPS.

**Alternativas:**
- Boas práticas informais, sem referência a um padrão reconhecido: rejeitada, por dificultar auditoria

**Consequências:** ✅ Maior segurança e rastreabilidade, ✅ Facilita auditorias e avaliação do laboratório, ⚠️ Exige atenção contínua às atualizações do OWASP Top 10

---

## Tecnologias Escolhidas

| Camada | Tecnologia | Versão | Justificativa |
|--------|-----------|--------|---------------|
| Frontend | HTML5 + CSS3 + JavaScript | ES2015+ | Web padrão |
| Backend | Express.js | 4.18+ | Minimalista, rápido |
| BD | PostgreSQL | 14+ | ACID, confiável (ver ADR-001) |
| Hash | bcrypt | 5+ | OWASP recomendado (ver ADR-003) |
| Validação | express-validator | 7+ | Robusta para e-mail e campos |
| E-mail | Nodemailer (ou serviço equivalente) | — | Necessário para o fluxo de recuperação de senha (UC-003) |

---

```

## 📊 RESUMO DE PONTUAÇÃO

```
┌─────────────────────────────────────┬────────┬──────────────┐
│ Tópico                              │ Peso   │ Seu Score    │
├─────────────────────────────────────┼────────┼──────────────┤
│ 1. Identificação do Requisito       │ 10%    │ 10/10        │
│ 2. Descrição e Atores               │ 15%    │ 15/15        │
│ 3. Especificação de Casos de Uso    │ 25%    │ 25/25        │
│ 4. Protótipos/Telas (HTML+CSS)      │ 20%    │ 20/20        │ 
│ 5. Arquitetura e ADR                │ 20%    │ 20/20        │
│ 6. Qualidade e Conformidade         │ 10%    │ 10/10        │
├─────────────────────────────────────┼────────┼──────────────┤
│ TOTAL                               │ 100%   │ 100/100      │
└─────────────────────────────────────┴────────┴──────────────┘
```


---

**Template v12.2 — Entrega Semanal de Requisitos**
**Laboratório de Inovação Prof. Edilberto Silva — 2026**

*"Cada entrega vale 100%. Seja minucioso, justificado, exemplificado!"*

*"Fé, Força e Foco!"*
