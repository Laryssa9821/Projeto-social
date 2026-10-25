# 📋 ENTREGA SEMANAL DE REQUISITOS

**Versão:** 12.2  
**Laboratório de Inovação -** Prof. Edilberto Silva — 2026  
**Formato:** Markdown  
**Valor Total da Entrega:** 100%  
**Data de Entrega:** 25/10/2026  
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
│   │   │   ├── RF-002-alteracao-senha.md
│   │   ├── SEMANA-03/
│   │   │   ├── RF-003-dashboard.md
│   │   ├── SEMANA-04/
│   │   │   ├── RF-004-telas-compra-doe.md
│   │   ├── SEMANA-05/
│   │   │   ├── RF-005-tela-financeiro.md
│   │   ├── SEMANA-06/
│   │   │   ├── RF-006-tela-gerente.md
│   │   └── ... (SEMANA-XX)
│
├── src/
│   ├── prototipos/
│   │   ├── SEMANA-01/ ... SEMANA-04/   (sem alteração nesta entrega)
│   │   ├── SEMANA-05/
│   │   │   ├── RF-005-tela_financeiro/
│   │   │   │   ├── login.html
│   │   │   │   ├── tela_do_financeiro.html
│   │   │   │   ├── tela_Adm.html
│   │   │   │   └── style.css
│   │   ├── SEMANA-06/
│   │   │   ├── RF-006-tela_gerente/
│   │   │   │   ├── Tela_gerente.html          (NOVO: painel gerencial)
│   │   │   │   ├── tela_do_financeiro.html
│   │   │   │   ├── tela_Adm.html
│   │   │   │   ├── login.html                 (sem alteração)
│   │   │   │   ├── style.css                  (seção "painel gerencial")
│   │   │   │   └── (demais páginas públicas e institucionais, sem alteração)
│   │   └── ... (SEMANA-XX)
│
├── sistema/
│   └── banco-de-dados/
│       └── DicionariodeDados.md               (ATUALIZADO: categorias e pedido_itens)
└── README.md                                  (reorganizado)
```

**Localização deste arquivo:**  
`docs/requisitos-semanais/SEMANA-06/RF-006-tela-gerente.md`

**Localização do Protótipo HTML+CSS:**  
`src/prototipos/SEMANA-06/RF-006-tela_gerente/Tela_gerente.html` — painel gerencial com oito abas (visão geral, vendas, estoque e produtos, financeiro, repasses sociais, aprovações, relatórios e atividades)

**Dicionário de dados atualizado:**  
`sistema/banco-de-dados/DicionariodeDados.md`

---

## 1️⃣ IDENTIFICAÇÃO DO REQUISITO (10%)

### RF-006: Painel Gerencial (Tela do Gerente) e Atualização do Modelo de Dados

**ID:** RF-006  
**Título:** Implementação da tela do Painel Gerencial (visão geral com alertas e indicadores, vendas e metas, estoque, financeiro, repasses sociais, aprovações, relatórios e atividades) e atualização do dicionário de dados com as tabelas `categorias` e `pedido_itens`  
**Tipo:** Requisito Funcional  
**Prioridade:** ALTA — completa o terceiro painel interno (Administrativo, Financeiro e Gerente), que corresponde aos três perfis previstos no dicionário de dados  
**Complexidade:** MÉDIA — estimado em 5 story points (uma tela nova com oito abas de navegação sem recarregamento e revisão do modelo de dados)  
**Status:** EM DESENVOLVIMENTO  
**Data de Criação:** 24/10/2026  
**Última Atualização:** 24/10/2026

### Breve Descrição

O sistema passa a contar com o **Painel Gerencial** (`Tela_gerente.html`), uma visão executiva que reúne em um só lugar os alertas de pendências, oito indicadores principais, desempenho de vendas contra a meta mensal, situação do estoque, resumo financeiro, repasses às ONGs, solicitações aguardando aprovação, relatórios e últimas atividades do sistema. Em paralelo, o **dicionário de dados** foi revisado: entraram as tabelas `categorias` e `pedido_itens`, o produto passou a se ligar a uma categoria por chave estrangeira, a doação pode ser vinculada ao usuário logado e erros de digitação dos nomes de colunas foram corrigidos. O `README.md` também foi reorganizado.

> **Situação de integração:** nesta entrega a tela do gerente existe como protótipo independente. O `login.html` não foi alterado e **ainda não aponta para `Tela_gerente.html`**; o “Acesso Gerente” continua abrindo o painel financeiro (RF-005). A ligação por perfil fica como próximo requisito (ver pendências).

---

## 2️⃣ DESCRIÇÃO E ATORES (15%)

### Descrição Detalhada

**Por que este requisito existe?**

Até a Semana 5, o sistema tinha um painel administrativo (cadastros) e um painel financeiro (entradas, saídas, repasses e contas). Faltava a visão de quem decide: o gerente precisa saber, de relance, o que exige atenção, como as vendas estão em relação à meta, se há produto acabando, quanto foi repassado às instituições e quais solicitações aguardam sua autorização. Esta entrega resolve três pontos:

- criação de uma tela gerencial própria, de consulta, que consolida informações de vários setores;
- destaque das pendências (contas a vencer, pagamentos atrasados, estoque baixo e repasses aguardando aprovação) logo na abertura;
- revisão do modelo de dados para sustentar vendas com vários itens e produtos organizados por categoria.

### Contexto do Negócio

A Sleep Well vende colchões e colchonetes reciclados, recebe doações e repassa parte dos recursos a instituições parceiras. O gerente acompanha o resultado do negócio e autoriza decisões sensíveis, como repasses e cadastro de novos fornecedores. Por se tratar de um protótipo, todos os valores exibidos são **fictícios e estáticos**, e nenhum cálculo ou gravação é realizado.

### Atores do Sistema

#### 1. GERENTE — Ator Principal

- **Papel:** acompanhar indicadores, alertas, vendas, estoque, resultado financeiro, repasses, relatórios e atividades; analisar solicitações pendentes de autorização.
- **Responsabilidade:** decidir sobre aprovações e acompanhar o desempenho geral do projeto.
- **Permissões:** acesso de consulta às informações de todos os setores (no protótipo, sem restrição de acesso implementada).

#### 2. FINANCEIRO — Ator Secundário (RF-005)

- **Papel:** opera o painel financeiro (transações, repasses, contas a pagar e a receber, vendas) e é solicitante de aprovações ao gerente.

#### 3. ADMINISTRATIVO — Ator Secundário (RF-003)

- **Papel:** mantém os cadastros (produtos, parceiros, fornecedores e clientes) e é solicitante de aprovações ao gerente (ex.: novo fornecedor).

#### 4. SISTEMA — Ator Automático

- **Papel:** alternar as abas sem recarregar a página, destacar o item do menu e atualizar o título do cabeçalho, exibir nome e perfil do usuário logado quando disponíveis no navegador e retornar ao login ao sair.

---

## 3️⃣ ESPECIFICAÇÃO DE CASOS DE USO (25%)

**Objetivo:** Descrever detalhadamente como o requisito é executado.

### UC-021: Visualizar a Visão Geral Gerencial

#### Pré-Condições

- Usuário abriu o painel gerencial.

#### Pós-Condições — Sucesso

- Alertas e indicadores exibidos.

#### Fluxo Principal

1. Sistema abre o painel na aba “Visão Geral”.
2. Sistema exibe o bloco “Atenção Necessária (Pendências)” com quatro alertas: 3 contas próximas do vencimento, 2 pagamentos atrasados, 1 produto com estoque baixo e 2 repasses aguardando aprovação.
3. Sistema exibe oito indicadores: Vendas do Mês, Saldo Disponível, Contas a Pagar, Valores a Receber, Produtos Cadastrados, Clientes Cadastrados, Fornecedores Ativos e Repasses Realizados.
4. Sistema exibe, no cabeçalho, “Gerência” ou, havendo sessão registrada no navegador, o nome e o perfil do usuário logado.

### UC-022: Acompanhar Vendas e Metas

#### Pré-Condições

- Usuário abriu o painel gerencial.

#### Pós-Condições — Sucesso

- Desempenho de vendas exibido.

#### Fluxo Principal

1. Usuário clica em “Vendas” no menu lateral.
2. Sistema exibe a meta mensal (R$ 50.000,00), o realizado (R$ 48.350,00) e o percentual atingido.
3. Sistema exibe quantidade de vendas no mês (68 pedidos), faturamento mensal, produto mais vendido, formas de pagamento mais usadas (Pix 58% e Cartão de Crédito 32%) e comparação com o mês anterior (+12,4%).

### UC-023: Acompanhar Estoque e Produtos

#### Pré-Condições

- Usuário abriu o painel gerencial.

#### Pós-Condições — Sucesso

- Situação dos itens exibida com status colorido.

#### Fluxo Principal

1. Usuário clica em “Estoque e Produtos” no menu lateral.
2. Sistema lista status, produto e detalhes de cada item: Estoque Baixo (amarelo), Indisponível (vermelho) ou Reposição OK (verde).

### UC-024: Consultar o Resumo Financeiro Executivo

#### Pré-Condições

- Usuário abriu o painel gerencial.

#### Pós-Condições — Sucesso

- Visão consolidada de receitas e custos exibida.

#### Fluxo Principal

1. Usuário clica em “Financeiro” no menu lateral.
2. Sistema exibe receitas operacionais (R$ 48.350,00, status Regular) e custos operacionais e insumos (R$ 19.120,00, status Dentro do Orçamento).

### UC-025: Acompanhar Repasses Sociais

#### Pré-Condições

- Usuário abriu o painel gerencial.

#### Pós-Condições — Sucesso

- Repasses por instituição exibidos.

#### Fluxo Principal

1. Usuário clica em “Repasses Sociais” no menu lateral.
2. Sistema lista instituição parceira, projeto vinculado, total repassado e status (Quitado).

### UC-026: Analisar Solicitações de Aprovação

#### Pré-Condições

- Usuário abriu o painel gerencial.

#### Pós-Condições — Sucesso

- Solicitações pendentes exibidas com as ações disponíveis.

#### Fluxo Principal

1. Usuário clica em “Aprovações” no menu lateral.
2. Sistema lista data, setor solicitante, descrição, valor e as ações “Ver Detalhes”, “Aprovar” e “Recusar” de cada solicitação (repasse mensal do Financeiro e cadastro de novo fornecedor do Administrativo).
3. As ações ainda não possuem efeito (ver RN-37).

### UC-027: Consultar Relatórios Executivos

#### Pré-Condições

- Usuário abriu o painel gerencial.

#### Pós-Condições — Sucesso

- Relatórios disponíveis exibidos.

#### Fluxo Principal

1. Usuário clica em “Relatórios” no menu lateral.
2. Sistema exibe três cartões: Relatório Financeiro, Relatório de Vendas e Relatório de Repasses Sociais, cada um com o botão “Baixar PDF” (ainda sem funcionalidade, ver RN-38).

### UC-028: Acompanhar Atividades do Sistema

#### Pré-Condições

- Usuário abriu o painel gerencial.

#### Pós-Condições — Sucesso

- Últimas movimentações exibidas.

#### Fluxo Principal

1. Usuário clica em “Atividades” no menu lateral.
2. Sistema lista as últimas movimentações: venda registrada, conta de fornecedor paga, novo cliente cadastrado, repasse aprovado e produto atualizado pelo administrador.

### Regras de Negócio (RN)

**RN-32:** O painel gerencial é uma tela de consulta que consolida informações de vendas, estoque, financeiro e repasses em uma única página, organizada em oito abas.  
**RN-33:** A abertura exibe o bloco “Atenção Necessária (Pendências)” com quatro alertas: contas próximas do vencimento, pagamentos atrasados, produtos com estoque baixo e repasses aguardando aprovação.  
**RN-34:** A visão geral apresenta oito indicadores: Vendas do Mês, Saldo Disponível, Contas a Pagar, Valores a Receber, Produtos Cadastrados, Clientes Cadastrados, Fornecedores Ativos e Repasses Realizados.  
**RN-35:** A aba “Vendas” compara o realizado com a meta mensal e informa o percentual atingido, as formas de pagamento mais usadas e a variação sobre o mês anterior.  
**RN-36:** Os status de estoque seguem três níveis visuais: Estoque Baixo (amarelo), Indisponível (vermelho) e Reposição OK (verde).  
**RN-37:** As ações “Ver Detalhes”, “Aprovar” e “Recusar” da aba “Aprovações” são apenas visuais; nenhuma solicitação é de fato aprovada ou recusada.  
**RN-38:** Todos os dados do painel gerencial são fictícios e estáticos, e os botões “Baixar PDF” são apenas visuais.  
**RN-39:** O cabeçalho exibe “Gerência” por padrão e, quando existir sessão registrada no navegador (`usuarioLogado`), passa a exibir “nome (perfil)”.  
**RN-40:** O botão “Sair do Sistema” retorna à tela de login.  
**RN-41 (modelo de dados):** um pedido pode ter vários itens (`pedido_itens`), cada produto pertence a uma categoria (`categorias`) e uma doação pode ser vinculada, opcionalmente, ao usuário logado (`usuario_id`).

### Requisitos Não-Funcionais (RNF)

**RNF-22:** A troca de abas deve ocorrer sem recarregar a página, no mesmo padrão dos painéis anteriores (ADR-005 e ADR-009).  
**RNF-23:** Alertas, indicadores e cartões de relatório devem se reorganizar automaticamente conforme a largura da tela (grades com colunas de no mínimo 220 px, 250 px e 260 px).  
**RNF-24:** O acesso ao painel gerencial deve, em entrega futura, ser permitido apenas ao perfil Gerente, a partir do login — permanece como pendência desta entrega.  
**RNF-25:** Os dados do painel devem, em entrega futura, ser carregados do banco de dados; hoje o dicionário ainda não possui tabelas para transações, repasses, contas a pagar e a receber, fornecedores, parceiros e clientes — permanece como pendência desta entrega.

---

## 4️⃣ PROTÓTIPOS/FLUXOS DE TELAS (HTML+CSS) (20%)

**Objetivo:** Visualizar como o requisito aparece na interface por meio do protótipo HTML+CSS.

### Mapa de Telas por Perfil (situação desta entrega)

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ login.html                                                                             │
│   |                                                                                    │
│   |-- Acesso Credenciado --> tela_Adm.html            (Administrativo, RF-003) [ligado]│
│   |-- Acesso Gerente ------> tela_do_financeiro.html  (Financeiro,     RF-005) [ligado]│
│   |                                                                                    │
│   |-- (sem link no login) --> Tela_gerente.html       (Gerente,        RF-006) [NOVO]  │
│                                                                                        │
│ Próximo passo sugerido (RF-007): 3 perfis no login, cada um abrindo a sua tela.        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Tela 1 — Painel Gerencial: Visão Geral

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Painel Gerencial - Visão Geral                                             Gerência    │
├────────────────────────┬───────────────────────────────────────────────────────────────┤
│ Visão Geral            │ ! ATENÇÃO NECESSÁRIA (PENDÊNCIAS)                             │
│ Vendas                 │    - 3 contas próximas do vencimento                          │
│ Estoque e Produtos     │    - 2 pagamentos atrasados                                   │
│ Financeiro             │    - 1 produto com estoque baixo                              │
│ Repasses Sociais       │    - 2 repasses aguardando aprovação                          │
│ Aprovações             │                                                               │
│ Relatórios             │ +------------+ +------------+ +------------+ +------------+   │
│ Atividades             │ | VENDAS MÊS | | SALDO      | | A PAGAR    | | A RECEBER  |   │
│                        │ | R$ 48.350  | | R$ 16.730  | | R$ 6.200   | | R$ 5.000   |   │
│ [Sair do Sistema]      │ +------------+ +------------+ +------------+ +------------+   │
│                        │ +------------+ +------------+ +------------+ +------------+   │
│                        │ | PRODUTOS   | | CLIENTES   | | FORNEC.    | | REPASSES   |   │
│                        │ | 42 itens   | | 185        | | 12 ativos  | | R$ 12.500  |   │
│                        │ +------------+ +------------+ +------------+ +------------+   │
└────────────────────────┴───────────────────────────────────────────────────────────────┘
```

### Tela 2 — Painel Gerencial: Vendas

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Painel Gerencial - Vendas                                                  Gerência    │
├────────────────────────┬───────────────────────────────────────────────────────────────┤
│ Visão Geral            │ Desempenho de Vendas e Metas                                  │
│ Vendas                 │ Meta mensal: R$ 50.000 | Realizado: R$ 48.350 (96%)           │
│ Estoque e Produtos     │                                                               │
│ Financeiro             │ Métrica / Indicador          | Valor / Desempenho             │
│ Repasses Sociais       │ -----------------------------+-----------------------------   │
│ Aprovações             │ Quantidade de vendas no mês  | 68 pedidos                     │
│ Relatórios             │ Faturamento mensal           | R$ 48.350,00                   │
│ Atividades             │ Produtos mais vendidos       | Colchão Ortop. Reciclável      │
│                        │ Formas de pagto. mais usadas | Pix (58%) | Cartão (32%)       │
│ [Sair do Sistema]      │ Comparação mês anterior      | + 12,4% (crescimento)          │
└────────────────────────┴───────────────────────────────────────────────────────────────┘
```

### Tela 3 — Painel Gerencial: Estoque e Produtos

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Painel Gerencial - Estoque e Produtos                                      Gerência    │
├────────────────────────┬───────────────────────────────────────────────────────────────┤
│ Visão Geral            │ Acompanhamento de Estoque e Insumos                           │
│ Vendas                 │                                                               │
│ Estoque e Produtos     │ Status       | Produto / Item           | Detalhes            │
│ Financeiro             │ -------------+--------------------------+------------------   │
│ Repasses Sociais       │ Est. Baixo   | Colchonete Infantil Eco. | Restam 3 unidades   │
│ Aprovações             │ Indisponível | Travesseiro Fibra PET    | Aguard. reposição   │
│ Relatórios             │ Reposição OK | Colchão Casal Reciclável | 45 unidades         │
│ Atividades             │                                                               │
│                        │                                                               │
│ [Sair do Sistema]      │                                                               │
└────────────────────────┴───────────────────────────────────────────────────────────────┘
```

### Tela 4 — Painel Gerencial: Financeiro e Repasses Sociais

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ FINANCEIRO - Resumo Financeiro Executivo                                               │
│  Categoria                      | Total do Período | Status                            │
│  -------------------------------+------------------+---------------------              │
│  Receitas Operacionais          | R$ 48.350,00     | Regular                           │
│  Custos Operacionais e Insumos  | R$ 19.120,00     | Dentro do Orçamento               │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ REPASSES SOCIAIS - Acompanhamento de Repasses para ONGs                                │
│  Instituição Parceira     | Projeto Vinculado            | Total     | Status          │
│  -------------------------+------------------------------+-----------+---------        │
│  Instituto Esperança      | Apoio a Famílias Vulneráveis | R$ 7.000  | Quitado         │
│  Associação Amigos do Bem | Educação Infantil Circular   | R$ 5.500  | Quitado         │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Tela 5 — Painel Gerencial: Aprovações

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ APROVAÇÕES - Solicitações Pendentes de Autorização                                     │
│  Data       | Setor      | Solicitação                | Valor    | Ações               │
│  -----------+------------+----------------------------+----------+-------------------- │
│  14/10/2026 | Financeiro | Repasse Inst. Esperança    | R$ 3.500 | Ver|Aprovar|Recusar │
│  13/10/2026 | Administ.  | Novo Fornecedor Mat.-Prima | -        | Ver|Aprovar|Recusar │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Tela 6 — Painel Gerencial: Relatórios e Atividades

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ RELATÓRIOS - Central de Relatórios Executivos                                          │
│  +-------------------------+ +-------------------------+ +-------------------------+   │
│  | Relatório Financeiro    | | Relatório de Vendas     | | Relatório de Repasses   |   │
│  | contas e fluxo de caixa | | faturamento por período | | comprovantes e valores  |   │
│  | [BAIXAR PDF]            | | [BAIXAR PDF]            | | [BAIXAR PDF]            |   │
│  +-------------------------+ +-------------------------+ +-------------------------+   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ ATIVIDADES - Últimas Movimentações do Sistema                                          │
│  - Venda #1031 registrada com sucesso                                                  │
│  - Conta de fornecedor paga no valor de R$ 1.500,00                                    │
│  - Novo cliente cadastrado: João da Silva                                              │
│  - Repasse aprovado para o Instituto Esperança                                         │
│  - Produto atualizado pelo administrador                                               │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Critérios de Aceite

- [x] `Tela_gerente.html` presente no protótipo, com oito abas navegáveis sem recarregar a página.
- [x] Bloco de alertas com quatro pendências e oito indicadores na visão geral.
- [x] Abas de vendas (com meta), estoque, financeiro, repasses sociais, aprovações, relatórios e atividades exibidas.
- [x] Nome e perfil do usuário exibidos no cabeçalho quando há sessão registrada no navegador.
- [x] Botão “Sair do Sistema” retorna ao login.
- [x] Dicionário de dados atualizado com `categorias` e `pedido_itens`.
- [ ] Login direcionando o perfil Gerente para `Tela_gerente.html` (RNF-24).
- [ ] Botões de ação das abas (Aprovar, Recusar, Ver Detalhes, Baixar PDF) com funcionalidade (RN-37 e RN-38).
- [ ] Dados do painel vindos do banco de dados (RNF-25).

> Os itens não marcados representam pendências explícitas da entrega e não devem ser apresentados como concluídos.

---

## 5️⃣ ARQUITETURA E ADR (20%)

**Objetivo:** Descrever como o requisito será implementado.

### Arquitetura da Solução

```text
┌──────────────────────────────┐
│          Frontend            │
│ HTML + CSS + JavaScript      │
│ Login + 3 painéis internos:  │
│ Administrativo, Financeiro   │
│ e Gerencial (abas)           │
└──────────────┬───────────────┘
               │ HTTPS
               ▼
┌──────────────────────────────┐
│       API / Backend          │
│       Express.js / Node.js   │
│ Autenticação por perfil e    │
│ consultas gerenciais         │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│          MySQL               │
│ Existentes: perfis, recursos,│
│ permissoes, usuarios,        │
│ recuperacao_senha,           │
│ categorias, produtos,        │
│ pedidos, pedido_itens,       │
│ doacoes                      │
│ A definir: transações,       │
│ repasses, contas a pagar e a │
│ receber, fornecedores,       │
│ parceiros e clientes         │
└──────────────────────────────┘
```

### ADR-011: Painel Gerencial como Visão Executiva de Consulta

**Status:** ACEITO

**Contexto:** o gerente precisa acompanhar vários setores sem navegar entre o painel administrativo e o financeiro, que são telas operacionais.

**Decisão:** criar um painel próprio (`Tela_gerente.html`), de consulta, reaproveitando a estrutura de cabeçalho, menu lateral e abas dos painéis anteriores (ADR-005 e ADR-009) e colocando as pendências no topo da visão geral.

**Alternativas:**

- Acrescentar as informações gerenciais ao painel financeiro — não adotado, por misturar a visão executiva com a operação do Financeiro.

**Consequências:** a leitura fica rápida e o perfil Gerente passa a ter tela própria; em contrapartida, os indicadores repetem valores que também aparecem em outros painéis e precisarão vir de uma fonte única de dados (RNF-25).

### ADR-012: Normalização de Pedidos e Produtos no Dicionário de Dados

**Status:** ACEITO

**Contexto:** o pedido guardava a quantidade em uma única coluna e o produto guardava a categoria como texto livre, o que não comportava pedidos com vários produtos nem a organização do catálogo.

**Decisão:** criar a tabela `pedido_itens` (pedido, produto, quantidade e preço unitário no momento da compra), remover `quantidade` de `pedidos`, criar a tabela `categorias` (nome e slug) e trocar `categoria` por `categoria_id` (chave estrangeira) em `produtos`. Incluir `usuario_id` (opcional) em `doacoes`.

**Alternativas:**

- Manter categoria como texto e um único item por pedido — não adotado, por limitar o carrinho e gerar categorias escritas de formas diferentes.

**Consequências:** o modelo passa a suportar carrinho com vários produtos e relatórios por categoria; o checkout (RF-004) e o painel precisarão ser adaptados quando forem integrados ao banco.

### Continuidade das ADRs anteriores

- **ADR-001 a ADR-003 (Semana 2):** autenticação, recuperação de senha e segurança — ainda não aplicadas ao login de protótipo (RN-25, Semana 5).
- **ADR-005 (Semana 3) e ADR-009 (Semana 5):** navegação por abas sem recarregamento — reaproveitada no painel gerencial.
- **ADR-006 (Semana 3):** estrutura de `parceiros`, `fornecedores` e `clientes` — segue **PROPOSTO**, sem tabelas correspondentes no `DicionariodeDados.md`.
- **ADR-007 (Semana 4):** o `style.css` segue como arquivo único consolidado, sem `@import`; a seção do painel gerencial foi acrescentada ao final.
- **ADR-008 (Semana 4):** modal único de checkout — sem alteração; o modelo de dados do pedido foi ajustado (ADR-012).
- **ADR-010 (Semana 5):** perfil definido pela aba do login, de forma provisória — mantido; o próximo requisito propõe substituí-lo por um perfil por tela (ver pendências).

### Tecnologias Escolhidas

| Camada | Tecnologia | Versão | Justificativa |
|---|---|---:|---|
| Frontend | HTML5 + CSS3 + JavaScript | ES2015+ | Web padrão e continuidade do projeto |
| Backend | Express.js / Node.js | 4.18+ | API, autenticação e regras de negócio |
| BD | MySQL | 8.0+ | Continuidade da decisão já registrada para o projeto |
| Validação | express-validator | 7+ | Validação no backend |
| Ícones | Font Awesome | 6.0 | Ícones do menu lateral e dos cabeçalhos |
| Tipografia | Google Fonts (Montserrat e Inter) | — | Montserrat nas páginas públicas; Inter nos painéis internos |
| Sessão (protótipo) | localStorage do navegador | — | Guarda nome e perfil apenas para demonstração (ADR-010) |

---

## 6️⃣ QUALIDADE E CONFORMIDADE (10%)

**Objetivo:** Verificar se o documento e o protótipo seguem os padrões de qualidade definidos pelo template.

### Checklist de Qualidade

- [x] Estrutura compatível com o Template v12.2.
- [x] Identificação, atores, casos de uso, protótipos, arquitetura e qualidade presentes.
- [x] Markdown estruturado para renderização no GitHub.
- [x] Blocos de código com linguagem definida quando aplicável.
- [x] Diagramas ASCII legíveis e com quadros alinhados.
- [x] Referências internas consistentes: RF-006, UC-021 a UC-028, RN-32 a RN-41 e RNF-22 a RNF-25.
- [x] Dicionário de dados revisado (novas tabelas e correção de nomes de colunas).
- [x] Pendências explicitamente identificadas.
- [ ] Tela do gerente ligada ao login.
- [ ] Botões de ação do painel gerencial funcionais.
- [ ] Tabelas financeiras, de fornecedores, parceiros e clientes incluídas no dicionário de dados.

### Ajustes Realizados no Dicionário de Dados

| Tabela | Ajuste |
|---|---|
| `categorias` | Tabela nova: `id`, `nome`, `slug` e `criado_em` |
| `pedido_itens` | Tabela nova: `pedido_id`, `produto_id`, `quantidade` e `preco_unitario` |
| `pedidos` | Coluna `quantidade` removida (passa a existir por item) |
| `produtos` | `categoria` (texto) trocada por `categoria_id` (chave estrangeira); `criado_em` corrigido para `CURRENT_TIMESTAMP`; `estoque` com regra `>= 0` |
| `doacoes` | Coluna `usuario_id` (opcional) incluída; descrição do `status` corrigida |
| Vários | Nomes corrigidos: `atualizdo_em` → `atualizado_em`, `complemto` → `complemento`, `TINYINY` → `TINYINT`; `usado` com padrão `0` |
| Formato | Tabelas reescritas em colunas separadas por `|` |

### Pontos de Atenção Identificados

1. **Tela do gerente sem ligação com o login:** `login.html` não foi alterado; “Acesso Gerente” ainda abre `tela_do_financeiro.html`, e nenhuma página tem link para `Tela_gerente.html`.
2. **Pendências da Semana 5 que continuam:** `login.html` mantém a função `validarLogin` duplicada e os quatro links vazios do rodapé; `cadastre-se.html` mantém os perfis com nomes trocados em relação ao login; `tela_Adm.html` mantém o script de exibição do usuário com erros de digitação.
3. **Estilos repetidos:** a seção “Painel Gerencial” acrescentada ao `style.css` repete classes que já existiam (cartões, tabelas, selos de status e abas), e `Tela_gerente.html` repete as mesmas regras em um bloco `<style>` próprio. Basta manter uma única definição no `style.css`.
4. **Documento da Semana 5 sem extensão:** o arquivo está no repositório como `RF-005-tela_financeiro`; precisa ser renomeado para `RF-005-tela-financeiro.md` para que o GitHub o exiba como Markdown.
5. **README desatualizado:** lista os requisitos até a Semana 5 e afirma que o dicionário detalha “clientes, parceiros e fornecedores”, tabelas que ainda não existem nele.
6. **Detalhes de código:** `Tela_gerente.html` contém a linha `paineis.format = paineis.forEach(...)` (sem efeito, pode ser simplificada) e `tela_do_financeiro.html` tem o comentário com a palavra “SEL5ETOR” digitada com erro.

> As pendências são mantidas visíveis para acompanhamento na próxima entrega e não são contabilizadas como funcionalidades concluídas.

---

## 📊 RESUMO DE PONTUAÇÃO

| Tópico | Peso | Conteúdo entregue |
|---|---:|---|
| 1. Identificação do Requisito | 10% | RF-006, prioridade, complexidade, status e descrição |
| 2. Descrição e Atores | 15% | contexto, atores e permissões |
| 3. Especificação de Casos de Uso | 25% | UC-021 a UC-028, RN e RNF |
| 4. Protótipos/Telas (HTML+CSS) | 20% | mapa de telas por perfil e as abas do painel gerencial |
| 5. Arquitetura e ADR | 20% | componentes, painel gerencial, normalização do modelo de dados e tecnologias |
| 6. Qualidade e Conformidade | 10% | checklist, ajustes do dicionário, pontos de atenção e pendências |
| **TOTAL** | **100%** | **Estrutura completa para avaliação** |

> **Importante:** a tabela apresenta os pesos dos critérios, conforme o modelo. Ela não atribui antecipadamente nota 100/100 à entrega; a avaliação final cabe ao professor.

---

## ✅ PENDÊNCIAS PARA A SEMANA 07

1. **Próximo requisito sugerido (RF-007): Login por Perfil e Proteção das Telas Internas.** Login com os três perfis do dicionário (Administrativo, Financeiro e Gerente), cada um abrindo a sua tela (`tela_Adm.html`, `tela_do_financeiro.html` e `Tela_gerente.html`), com bloqueio de acesso direto sem login e limpeza da sessão ao sair.
2. Alinhar os nomes dos perfis entre login, cadastro e dicionário de dados, e remover a função `validarLogin` duplicada em `login.html`.
3. Corrigir o script de exibição do usuário em `tela_Adm.html` e os links vazios do rodapé em `login.html` (RNF-16).
4. Incluir no `DicionariodeDados.md` as tabelas financeiras (transações, repasses, contas a pagar e a receber) e `parceiros`, `fornecedores` e `clientes` (ADR-006).
5. Dar funcionalidade às ações dos painéis: Aprovar, Recusar, Ver Detalhes, Nova Transação, Nova Venda, Pagar e Baixar PDF.
6. Unificar os estilos repetidos em `style.css`, renomear o documento da Semana 5 para `.md` e atualizar o `README.md` com a Semana 6 e a descrição correta do dicionário.
7. Implementar a busca real de pedidos em “Rastrear Pedido” (RNF-17) e conectar o checkout às tabelas `pedidos`, `pedido_itens` e `doacoes`.
8. Implementar validação completa de CPF/CNPJ nos cadastros (pendência herdada da Semana 3, RN-16).

---

**Template v12.2 — Entrega Semanal de Requisitos**  
**Laboratório de Inovação Prof. Edilberto Silva — 2026**

*"Cada entrega vale 100%. Seja minucioso, justificado, exemplificado!"*

*"Fé, Força e Foco!"*
