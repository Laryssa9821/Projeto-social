# 📋 ENTREGA SEMANAL DE REQUISITOS

**Versão:** 12.2  
**Laboratório de Inovação -** Prof. Edilberto Silva — 2026  
**Formato:** Markdown  
**Valor Total da Entrega:** 100%  
**Data de Entrega:** 26/09/2026  
**Grupo:** Sleep Well — Projeto Social  
**Integrantes:** Ana Júlia Bernardes (ana50466166@edu.df.senac.br) ; Douglas Cerqueira (douglas51812666@edu.df.senac.br) ; Fabiane Sarres (fabiane61909266@edu.df.senac.br) ; Gustavo Augusto (gustavo61867136@edu.df.senac.br) ; Hannah Raposo (hannah46570966@edu.df.senac.br) ; Laryssa Almeida (laryssa59158836@edu.df.senac.br)

---

## ⚙️ ESTRUTURA DE DIRETÓRIOS

```text
Projeto-social/
├── docs/
│   ├── requisitos-semanais/
│   │   ├── SEMANA-01/
│   │   │   ├── RF-001-autenticacao-cadastro.md
│   │   ├── SEMANA-02/
│   │   │   ├── RF-002-melhorias-autenticacao.md
│   │   ├── SEMANA-03/
│   │   │   ├── RF-003-telas-dashboard.md
│   │   └── ... (SEMANA-XX)
│
├── src/
│   ├── prototipos/
│   │   ├── SEMANA-01/
│   │   │   ├── RF-001-autenticacao-cadastro/
│   │   │   │   └── login.html
│   │   ├── SEMANA-02/
│   │   │   ├── RF-002-melhorias-autenticacao/
│   │   │   │   ├── login.html
│   │   │   │   └── (CSS embutido no HTML)
│   │   ├── SEMANA-03/
│   │   │   ├── RF-003-telas_dashboard/
│   │   │   │   ├── login.html
│   │   │   │   ├── tela_Adm.html
│   │   │   │   ├── cadastre-se.html
│   │   │   │   ├── compre_e_ajude.html
│   │   │   │   ├── impacto_social.html
│   │   │   │   ├── sobre_nos.html
│   │   │   │   ├── senha_esquecida.html
│   │   │   │   ├── recuperacao_de_senha.html
│   │   │   │   └── style.css / imagens
│   │   └── ... (SEMANA-XX)
│
├── sistema/
│   └── banco-de-dados/
│       └── DicionariodeDados.md
```

**Localização deste arquivo:**  
`docs/requisitos-semanais/SEMANA-03/RF-003-telas-dashboard.md`

**Localização do Protótipo HTML+CSS:**  
`src/prototipos/SEMANA-03/RF-003-telas_dashboard/tela_de_cadastro.html` — painel administrativo  
`src/prototipos/SEMANA-03/RF-003-telas_dashboard/index.html` — login e rodapé institucional

> **Pendência de organização herdada da Semana 2:** a reorganização em `Backend/`, `Frontend/`, `Dados/`, `Imagens/` e `MD/` ainda não foi implementada. Os arquivos continuam em `docs/` e `src/`.
>
> Caso existam cópias dos arquivos HTML, CSS ou imagens dentro de `docs/requisitos-semanais/SEMANA-03/RF-003-telas_dashboard/`, essa duplicação deve ser removida. O documento de requisitos deve permanecer em `docs/`, enquanto os arquivos do protótipo devem permanecer em `src/`.

---

## 1️⃣ IDENTIFICAÇÃO DO REQUISITO (10%)

### RF-003: Painel Administrativo de Cadastros e Rodapé Institucional

**ID:** RF-003  
**Título:** Implementação do painel administrativo com cadastro de Produtos, Parceiros (ONGs), Fornecedores e Clientes, busca automática de endereço por CEP e inclusão do rodapé institucional nas páginas públicas do site  
**Tipo:** Requisito Funcional  
**Prioridade:** ALTA  
**Complexidade:** ALTA — estimado em 8 story points  
**Status:** EM DESENVOLVIMENTO  
**Data de Criação:** 12/08/2026  
**Última Atualização:** 25/09/2026

### Breve Descrição

O sistema deve oferecer um painel administrativo, acessível aos perfis Gerente e Administrativo, com menu lateral para cadastrar Produtos, Parceiros (ONGs), Fornecedores e Clientes. Os cadastros de Parceiros, Fornecedores e Clientes utilizam busca automática de endereço por CEP via ViaCEP, com tratamento de erros.

Além disso, as páginas públicas do site — login, cadastro, “Compre e Ajude”, “Impacto Social” e “Sobre Nós” — devem apresentar um rodapé institucional com links de navegação, informações de transparência, segurança e formas de pagamento.

---

## 2️⃣ DESCRIÇÃO E ATORES (15%)

### Descrição Detalhada

**Por que este requisito existe?**

A Semana 2 corrigiu e complementou o módulo de autenticação, mas ainda não havia uma interface estruturada para os principais dados operacionais do Projeto Social. Esta entrega acrescenta:

- cadastro de Produtos;
- cadastro de Parceiros (ONGs);
- cadastro de Fornecedores;
- cadastro de Clientes;
- consulta automática de endereço por CEP;
- painel administrativo com navegação entre os quatro cadastros;
- rodapé institucional nas páginas públicas.

### Contexto do Negócio

A Sleep Well transforma resíduos plásticos em colchonetes recicláveis e possui uma cadeia envolvendo fornecedores, parceiros/ONGs e clientes. O painel administrativo centraliza esses dados e cria base para futuras operações de catálogo, pedidos e relatórios de impacto social.

### Atores do Sistema

#### 1. GERENTE — Ator Principal

- **Papel:** acessar o Painel Administrativo e gerenciar Produtos, Parceiros, Fornecedores e Clientes.
- **Responsabilidade:** garantir a consistência dos dados cadastrados.
- **Permissões:** CREATE, READ, UPDATE e DELETE nos quatro cadastros.

#### 2. ADMINISTRATIVO — Ator Secundário

- **Papel:** auxiliar na gestão de Produtos e Clientes e consultar os demais cadastros.
- **Permissões:** CREATE/READ/UPDATE em Produtos e Clientes; READ nos quatro cadastros; não possui DELETE nem gerenciamento de Parceiros e Fornecedores.

#### 3. VISITANTE DO SITE — Ator Externo

- **Papel:** navegar pelas páginas públicas e visualizar o rodapé institucional.
- **Permissões:** READ das páginas públicas.

#### 4. SISTEMA — Ator Automático

- **Papel:** validar formulários, consultar o ViaCEP, controlar a navegação do painel e renderizar o rodapé.
- **Responsabilidade:** impedir envios inválidos e tratar falhas de consulta e validação.

---

## 3️⃣ ESPECIFICAÇÃO DE CASOS DE USO (25%)

**Objetivo:** Descrever detalhadamente como o requisito é executado.

### UC-004: Cadastrar Produto no Painel Administrativo

#### Pré-Condições

- Usuário autenticado como Gerente ou Administrativo.
- Painel administrativo disponível.

#### Pós-Condições — Sucesso

- Produto cadastrado.
- Confirmação exibida.
- Formulário liberado para novo cadastro.

#### Fluxo Principal

1. Usuário acessa o Painel Administrativo.
2. Sistema exibe “Cadastrar Produto”.
3. Usuário informa código, data, nome, tipo e fornecedor.
4. Usuário seleciona “Cadastrar Produto”.
5. Sistema valida os campos obrigatórios.
6. Sistema confirma o cadastro e limpa o formulário.

#### Fluxo Alternativo A1 — Campo obrigatório vazio

1. Sistema identifica o campo pendente.
2. Sistema impede o envio e destaca o campo.
3. Usuário corrige o formulário e tenta novamente.

#### Fluxo Alternativo A2 — Troca de cadastro

1. Usuário seleciona Parceiros, Fornecedores ou Clientes.
2. Sistema troca a tela sem recarregar a página.
3. Dados não salvos do formulário atual são descartados.

### UC-005: Cadastrar Parceiro (ONG) com Busca Automática de Endereço

#### Pré-Condições

- Usuário autenticado como Gerente.
- Serviço ViaCEP disponível.

#### Pós-Condições — Sucesso

- Parceiro cadastrado com dados institucionais e endereço.
- Confirmação exibida.

#### Fluxo Principal

1. Usuário seleciona “Parceiros”.
2. Sistema exibe o formulário de ONG/instituição.
3. Usuário informa nome, CNPJ, data, tipo, área, e-mail e telefone.
4. Usuário informa o CEP.
5. Sistema consulta o ViaCEP.
6. Sistema preenche rua, bairro, cidade e UF.
7. Usuário confirma número e complemento.
8. Usuário seleciona “Cadastrar Parceiro”.
9. Sistema valida e confirma o cadastro.

#### Fluxos Alternativos

- **CEP não encontrado:** sistema informa o erro e permite nova tentativa.
- **CEP inválido:** sistema informa que o CEP deve conter oito dígitos numéricos.
- **Falha no ViaCEP:** sistema informa a indisponibilidade e permite nova tentativa.

### UC-006: Cadastrar Fornecedor com Anexo de Documentos

#### Pré-Condições

- Usuário autenticado como Gerente.
- Serviço ViaCEP disponível.

#### Pós-Condições — Sucesso

- Fornecedor cadastrado com dados, endereço e arquivos selecionados.
- Confirmação exibida.

#### Fluxo Principal

1. Usuário seleciona “Fornecedores”.
2. Sistema exibe o formulário.
3. Usuário informa razão social, CNPJ, telefone, e-mail e ramo.
4. Usuário informa o CEP e o sistema consulta o ViaCEP.
5. Usuário anexa documentos.
6. Usuário seleciona “Cadastrar Fornecedor”.
7. Sistema valida e confirma o cadastro.

#### Fluxos Alternativos

- **Ramo “Outros”:** sistema exibe campo para especificação e o torna obrigatório.
- **Arquivo não suportado:** navegador bloqueia formatos diferentes de PDF, JPG, PNG, DOC e DOCX.

### UC-007: Cadastrar Cliente com Busca Automática de Endereço

#### Pré-Condições

- Usuário autenticado como Gerente ou Administrativo.
- Serviço ViaCEP disponível.

#### Pós-Condições — Sucesso

- Cliente cadastrado com dados e endereço.
- Confirmação exibida.

#### Fluxo Principal

1. Usuário seleciona “Clientes”.
2. Sistema exibe o formulário.
3. Usuário informa nome, CPF/CNPJ, e-mail e WhatsApp.
4. Usuário informa o CEP.
5. Sistema consulta o ViaCEP e preenche o endereço.
6. Usuário confirma número e demais dados.
7. Usuário seleciona “Cadastrar Cliente”.
8. Sistema valida e confirma o cadastro.

#### Fluxo Alternativo A1 — CEP inválido ou não encontrado

Sistema aplica o tratamento definido no UC-005.

#### Fluxo Alternativo A2 — CPF/CNPJ

A validação completa de CPF/CNPJ no backend permanece como pendência técnica desta entrega.

### UC-008: Consultar Rodapé Institucional

#### Pré-Condições

- Visitante acessa uma página pública do site.

#### Pós-Condições — Sucesso

- Rodapé institucional exibido com links, informações de segurança, transparência e formas de pagamento.

#### Fluxo Principal

1. Visitante acessa uma página pública.
2. Sistema exibe o rodapé institucional.
3. Visitante pode acessar “Sobre Nós”, “Impacto Social” e “Compre e Ajude”.
4. Visitante visualiza informações de segurança e transparência.
5. Visitante visualiza CNPJ, direitos autorais e formas de pagamento.

#### Fluxo Alternativo A1 — Link ainda não implementado

Caso o destino ainda não exista, a ausência permanece registrada como pendência no RNF-12 para entrega futura.

### Regras de Negócio (RN)

**RN-10:** O código do produto deve ser único no sistema.  
**RN-11:** CNPJ de Parceiros e Fornecedores deve seguir o formato `00.000.000/0000-00` e ser único.  
**RN-12:** O CEP dos cadastros de Parceiro, Fornecedor e Cliente deve ser consultado no ViaCEP antes do preenchimento automático do endereço.  
**RN-13:** O campo “Especifique qual é o ramo...” é obrigatório quando “Outros” for selecionado.  
**RN-14:** Somente Gerente e Administrativo têm acesso ao Painel Administrativo; Financeiro e Credenciado não visualizam esse menu.  
**RN-15:** Anexos do cadastro de Fornecedor devem aceitar PDF, JPG, PNG, DOC ou DOCX.  
**RN-16:** O cadastro de Cliente deverá validar CPF/CNPJ de forma completa no backend; nesta entrega, essa validação permanece como pendência técnica.

### Requisitos Não-Funcionais (RNF)

**RNF-09:** A consulta ao ViaCEP deve possuir tratamento de erro e indisponibilidade sem bloquear a interface.  
**RNF-10:** O painel administrativo deve ser responsivo para desktop e tablet.  
**RNF-11:** O rodapé institucional deve estar presente nas páginas públicas previstas nesta entrega.  
**RNF-12:** Links do rodapé sem destino funcional devem ser corrigidos em entrega futura.  
**RNF-13:** A navegação entre os quatro formulários deve ocorrer sem recarregamento completo da página.

---

## 4️⃣ PROTÓTIPOS/FLUXOS DE TELAS (HTML+CSS) (20%)

**Objetivo:** Visualizar como o requisito aparece na interface por meio do protótipo HTML+CSS.

### Tela 1 — Painel Administrativo: Cadastro de Produto

```text
┌───────────────────────────────────────────────────────────┐
│ 🛏  Cadastrar Produto             Usuário Administrador ⚙ │
├──────────────┬────────────────────────────────────────────┤
│ 📦 Produtos  │  Cadastrar Novo Produto                    │
│ 🤝 Parceiros │  Código: [ PROD-1023              ]        │
│ 🚚 Fornecedores│ Data: [ __/__/____ ]                     │
│ 👥 Clientes  │  Nome: [ Selecione...             ▼]      │
│              │  Tipo: [ Selecione...             ▼]      │
│ ⏻ Sair       │  Fornecedor: [ Selecione...        ▼]      │
│              │                    [ CADASTRAR PRODUTO ]   │
└──────────────┴────────────────────────────────────────────┘
```

### Tela 2 — Cadastro de Parceiro com CEP

```text
┌───────────────────────────────────────────────────────────┐
│ 🛏  Cadastrar Parceiro            Usuário Administrador ⚙│
├──────────────┬────────────────────────────────────────────┤
│ 📦 Produtos  │  Cadastrar Novo Parceiro (ONG)             │
│ 🤝*Parceiros │  Nome: [ Instituto Esperança       ]       │
│ 🚚 Fornecedores│ CNPJ: [ 12.345.678/0001-90      ]        │
│ 👥 Clientes  │  Tipo: [ Associação ▼] Área: [ Educação ▼]│
│              │  E-mail: [ contato@ong.org.br      ]       │
│ ⏻ Sair       │  CEP: [ 70000-000 ] ✅ ViaCEP             │
│              │  Rua/Bairro/Cidade/UF preenchidos         │
│              │                    [ CADASTRAR PARCEIRO ]  │
└──────────────┴────────────────────────────────────────────┘
```

### Tela 3 — Cadastro de Fornecedor

```text
┌───────────────────────────────────────────────────────────┐
│ 🛏  Cadastrar Fornecedor          Usuário Administrador ⚙│
├──────────────┬────────────────────────────────────────────┤
│ 📦 Produtos  │  Cadastrar Novo Fornecedor                 │
│ 🤝 Parceiros │  Razão Social: [ Indústria Alfa Ltda ]    │
│ 🚚*Fornecedores│ CNPJ: [ 00.000.000/0000-00 ]            │
│ 👥 Clientes  │  Ramo: [ Outros ▼ ]                       │
│              │  Especifique: [____________________]       │
│ ⏻ Sair       │  📎 Anexar Arquivos: [ Selecionar ]       │
│              │                  [ CADASTRAR FORNECEDOR ]  │
└──────────────┴────────────────────────────────────────────┘
```

### Tela 4 — Cadastro de Cliente com erro de CEP

```text
┌───────────────────────────────────────────────────────────┐
│ 🛏  Cadastrar Cliente             Usuário Administrador ⚙ │
├──────────────┬────────────────────────────────────────────┤
│ 📦 Produtos  │  Cadastrar Novo Cliente                    │
│ 🤝 Parceiros │  Nome: [ João da Silva             ]       │
│ 🚚 Fornecedores│ CPF/CNPJ: [ 123.456.789-00      ]        │
│ 👥*Clientes  │  E-mail: [ joao@email.com         ]       │
│              │  CEP: [ 00000-00 ]                         │
│ ⏻ Sair       │  ⚠️ CEP não encontrado!                   │
│              │                    [ CADASTRAR CLIENTE ]   │
└──────────────┴────────────────────────────────────────────┘
```

### Tela 5 — Rodapé Institucional

```text
┌─────────────────────────────────────────────────────────────┐
│  Sleep Well — Colchonetes Recicláveis                       │
│  Transformando resíduos plásticos em conforto e dignidade.  │
│                                                             │
│  Institucional        Transparência        Segurança        │
│  • Sobre Nós          • Termos de Uso      🔒 SSL            │
│  • Impacto Social     • Política Privac.   🛡 Proc. Seguro   │
│  • Compre e Ajude     • Trocas/Devoluções  🌱 Cert. Socio.   │
│                       • Rastrear Pedido                      │
├─────────────────────────────────────────────────────────────┤
│  Sleep Well Brasil • CNPJ: 00.000.000/0001-00               │
│  © 2026 Sleep Well. Todos os direitos reservados.           │
│                              ⚡ Pix  💳 Cartão  📄 Boleto      │
└─────────────────────────────────────────────────────────────┘
```

### Critérios de Aceite

- [x] `login.html` e `tela_Adm.html` previstos no protótipo.
- [x] Quatro formulários distintos: Produtos, Parceiros, Fornecedores e Clientes.
- [x] Navegação entre formulários sem recarregamento completo.
- [x] Consulta ao ViaCEP com tratamento de erro.
- [x] Campo condicional para “Outros” no cadastro de Fornecedor.
- [x] Rodapé institucional previsto nas páginas públicas.
- [ ] Links de páginas ainda não implementadas devem ser corrigidos em entrega futura.
- [ ] Validação completa de CPF/CNPJ deve ser implementada no backend.

> Os itens não marcados representam pendências explícitas da entrega e não devem ser apresentados como concluídos.

---

## 5️⃣ ARQUITETURA E ADR (20%)

**Objetivo:** Descrever como o requisito será implementado.

### Arquitetura da Solução

```text
┌──────────────────────────────┐
│          Frontend            │
│ HTML + CSS + JavaScript      │
│ Painel + Rodapé Institucional│
└──────────────┬───────────────┘
               │ HTTPS
               ▼
┌──────────────────────────────┐
│       API / Backend          │
│       Express.js / Node.js   │
│ Validação + CRUD + regras    │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│          PostgreSQL          │
│ Dados do sistema e cadastros │
└──────────────────────────────┘

               ▲
               │ HTTPS
               │
┌──────────────────────────────┐
│           ViaCEP             │
│ Consulta de endereço por CEP │
└──────────────────────────────┘
```

### ADR-004: Integração com ViaCEP

**Status:** ACEITO

**Contexto:** Parceiros, Fornecedores e Clientes precisam de endereço completo e o preenchimento manual aumenta a possibilidade de erro.

**Decisão:** utilizar a API pública ViaCEP para consultar rua, bairro, cidade e UF a partir do CEP, com tratamento para CEP inválido, inexistente ou indisponibilidade.

**Alternativas:**

- Preenchimento totalmente manual — não adotado nesta fase.
- Base própria de CEPs — não adotada nesta fase devido à necessidade de manutenção.

**Consequências:** menor esforço de preenchimento e maior padronização, com dependência de serviço externo.

### ADR-005: Navegação do Painel sem Recarregamento Completo

**Status:** ACEITO

**Contexto:** o painel precisa alternar entre quatro formulários de maneira rápida.

**Decisão:** utilizar JavaScript para exibir e ocultar os blocos de cada formulário dentro do painel, atualizando o item ativo do menu e o título da tela.

**Alternativas:**

- Uma página independente para cada cadastro — não adotada nesta fase.
- Framework SPA completo — não adotado nesta fase do protótipo.

**Consequências:** navegação mais fluida e menor quantidade de recarregamentos, exigindo controle do estado dos formulários.

### ADR-006: Estrutura de Dados dos Novos Cadastros

**Status:** PROPOSTO

**Contexto:** os novos formulários precisam ser compatíveis com o modelo de dados do projeto.

**Decisão:** propor as entidades `parceiros`, `fornecedores` e `clientes` no dicionário de dados, mantendo os relacionamentos necessários com Produtos e Pedidos.

**Alternativas:**

- Reaproveitar `usuarios` para todas as entidades — não adotado devido às diferentes finalidades e regras de negócio.
- Adiar a modelagem — mantido apenas como pendência até a atualização formal do dicionário.

**Consequências:** alinhamento entre interface e modelo de dados, mas a persistência definitiva depende da implementação correspondente no backend.

### Continuidade das ADRs da Semana 2

- **ADR-001:** PostgreSQL como banco relacional principal.
- **ADR-002:** recuperação de senha por token temporário.
- **ADR-003:** práticas de segurança aplicadas ao módulo de autenticação.

### Tecnologias Escolhidas

| Camada | Tecnologia | Versão | Justificativa |
|---|---|---:|---|
| Frontend | HTML5 + CSS3 + JavaScript | ES2015+ | Web padrão e continuidade do projeto |
| Backend | Express.js / Node.js | 4.18+ | API e regras de negócio |
| BD | MySQL | 8.0+ | Banco de dados relacional amplamente utilizado, com bom desempenho, documentação ampla e compatibilidade com Node.js |
| Hash | bcrypt | 5+ | Continuidade da segurança da autenticação |
| Validação | express-validator | 7+ | Validação no backend |
| E-mail | Nodemailer ou equivalente | — | Continuidade da recuperação de senha |
| CEP | ViaCEP | — | Consulta automática de endereço |
| Ícones | Font Awesome | 6+ | Elementos visuais do painel |
| Tipografia | Google Fonts | — | Identidade visual |

---

## 6️⃣ QUALIDADE E CONFORMIDADE (10%)

**Objetivo:** Verificar se o documento e o protótipo seguem os padrões de qualidade definidos pelo template.

### Checklist de Qualidade

- [x] Estrutura compatível com o Template v12.2.
- [x] Identificação, atores, casos de uso, protótipos, arquitetura e qualidade presentes.
- [x] Markdown estruturado para renderização no GitHub.
- [x] Blocos de código com linguagem definida quando aplicável.
- [x] Diagramas ASCII legíveis.
- [x] Referências internas consistentes: RF-003, UC-004 a UC-008, RN-10 a RN-16 e RNF-09 a RNF-13.
- [x] Pendências explicitamente identificadas.
- [ ] Todos os links institucionais possuem páginas funcionais.
- [ ] Novas entidades formalizadas no dicionário de dados.
- [ ] Validação completa de CPF/CNPJ implementada no backend.

> As pendências são mantidas visíveis para acompanhamento na próxima entrega e não são contabilizadas como funcionalidades concluídas.

---

## 📊 RESUMO DE PONTUAÇÃO

| Tópico | Peso | Conteúdo entregue |
|---|---:|---|
| 1. Identificação do Requisito | 10% | RF-003, prioridade, complexidade, status e descrição |
| 2. Descrição e Atores | 15% | contexto, atores e permissões |
| 3. Especificação de Casos de Uso | 25% | UC-004 a UC-008, RN e RNF |
| 4. Protótipos/Telas (HTML+CSS) | 20% | quatro cadastros, rodapé e fluxos |
| 5. Arquitetura e ADR | 20% | componentes, ViaCEP, navegação e dados |
| 6. Qualidade e Conformidade | 10% | checklist e pendências |
| **TOTAL** | **100%** | **Estrutura completa para avaliação** |

> **Importante:** a tabela apresenta os pesos dos critérios, conforme o modelo. Ela não atribui antecipadamente nota 100/100 à entrega; a avaliação final cabe ao professor.

---

## ✅ PENDÊNCIAS PARA A SEMANA 04

1. Remover eventual duplicação de arquivos de protótipo dentro de `docs/requisitos-semanais/SEMANA-03/`.
2. Implementar as páginas funcionais referenciadas pelo rodapé, incluindo Rastrear Pedido, Termos de Uso, Política de Privacidade e Trocas e Devoluções.
3. Atualizar `sistema/banco-de-dados/DicionariodeDados.md` com `parceiros`, `fornecedores` e `clientes`, caso ainda não estejam formalizadas.
4. Implementar validação completa de CPF/CNPJ no cadastro de Cliente.
5. Avançar a reorganização de diretórios em `Backend/`, `Frontend/`, `Dados/`, `Imagens/` e `MD/`, planejada desde a Semana 2.

---

**Template v12.2 — Entrega Semanal de Requisitos**  
**Laboratório de Inovação Prof. Edilberto Silva — 2026**

*"Cada entrega vale 100%. Seja minucioso, justificado, exemplificado!"*

*"Fé, Força e Foco!"*
