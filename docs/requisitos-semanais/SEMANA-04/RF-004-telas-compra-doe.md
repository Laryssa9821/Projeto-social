📋 ENTREGA SEMANAL DE REQUISITOS
Versão: 12.2
Laboratório de Inovação - Prof. Edilberto Silva — 2026
Formato: Markdown
Valor Total da Entrega: 100%
Data de Entrega: 04/10/2026
Grupo: Sleep Well — Projeto Social
Integrantes: Ana Júlia Bernardes (ana50466166@edu.df.senac.br) ; Douglas Cerqueira (douglas51812666@edu.df.senac.br) ; Fabiane Sarres (fabiane61909266@edu.df.senac.br) ; Gustavo Augusto (gustavo61867136@edu.df.senac.br) ; Hannah Raposo (hannah46570966@edu.df.senac.br) ; Laryssa Almeida (laryssa59158836@edu.df.senac.br)
Projeto-social/
├── docs/
│   ├── requisitos-semanais/
│   │   ├── SEMANA-01/
│   │   │   ├── RF-001-autenticacao-cadastro.md
│   │   ├── SEMANA-02/
│   │   │   ├── RF-002-melhorias-autenticacao.md
│   │   ├── SEMANA-03/
│   │   │   ├── RF-003-telas-dashboard.md
│   │   ├── SEMANA-04/
│   │   │   ├── RF-004-telas-compra-doe.md
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
│   │   │   │   └── style.css (base: importa de SEMANA-02)
│   │   ├── SEMANA-04/
│   │   │   ├── RF-004-telas_compra_doe/
│   │   │   │   ├── compre_e_ajude.html
│   │   │   │   ├── rastreio.html
│   │   │   │   ├── termo_de_uso.html
│   │   │   │   ├── privacidade.html
│   │   │   │   ├── trocas-devolucoes.html
│   │   │   │   └── style.css (importa de SEMANA-03)
│   │   └── ... (SEMANA-XX)
│
├── sistema/
│   └── banco-de-dados/
│       └── DicionariodeDados.md

Localização deste arquivo:
docs/requisitos-semanais/SEMANA-04/RF-004-telas-compra-doe.md

Localização do Protótipo HTML+CSS:
src/prototipos/SEMANA-04/RF-004-telas_compra_doe/compre_e_ajude.html — vitrine de produtos, doação e checkout
src/prototipos/SEMANA-04/RF-004-telas_compra_doe/rastreio.html, termo_de_uso.html, privacidade.html, trocas-devolucoes.html — páginas institucionais referenciadas pelo rodapé

1️⃣ IDENTIFICAÇÃO DO REQUISITO (10%)
RF-004: Fluxo de Compra e Doação com Checkout e Páginas Institucionais
ID: RF-004
Título: Implementação da vitrine de produtos com fluxo de compra/doação (modal de checkout, seleção de forma de pagamento e busca de CEP) e das páginas institucionais Rastrear Pedido, Termos de Uso, Política de Privacidade e Trocas e Devoluções, referenciadas pelo rodapé desde a Semana 3
Tipo: Requisito Funcional
Prioridade: ALTA — fecha o ciclo de venda/doação e resolve as pendências de links do rodapé institucional
Complexidade: ALTA — estimado em 8 story points (modal em duas etapas, três meios de pagamento, quatro páginas institucionais novas)
Status: EM DESENVOLVIMENTO
Data de Criação: 01/10/2026
Última Atualização: 03/10/2026

Breve Descrição
O sistema deve permitir que o visitante compre um colchão/colchonete ou faça uma doação direta pela página “Compre e Ajude”, preenchendo dados pessoais, endereço de entrega (quando aplicável, com busca automática por CEP) e forma de pagamento (Pix, cartão de crédito ou boleto) em um modal de checkout com duas etapas. Além disso, o rodapé institucional — presente desde a Semana 3 — passa a apontar para quatro páginas reais: Rastrear Pedido, Termos de Uso, Política de Privacidade e Trocas e Devoluções, encerrando a pendência registrada no RNF-12 da entrega anterior.

2️⃣ DESCRIÇÃO E ATORES (15%)
Descrição Detalhada
Por que este requisito existe?

A Semana 3 entregou o painel administrativo e o rodapé institucional, mas deixou três pendências explícitas: (1) a página “Compre e Ajude” ainda não tinha um fluxo de compra/doação funcional; (2) os links do rodapé para Termos de Uso, Política de Privacidade, Trocas e Devoluções e Rastrear Pedido apontavam para # ou para uma página inexistente (rastreio.html); (3) não havia nenhuma etapa de pagamento simulada. Esta entrega resolve os três pontos:

vitrine de produtos (Colchonete Solteiro, Colchonete Casal e Doação Direta) com modal de checkout;
etapa de pagamento com campos específicos por método (Pix, cartão, boleto), sempre com aviso de que nenhuma cobrança real é processada;
busca automática de endereço por CEP no checkout, reaproveitando o mesmo padrão de CEP do painel administrativo (RN-12 da Semana 3);
quatro páginas institucionais novas, todas com o rodapé completo e links cruzados entre si.
Contexto do Negócio
A Sleep Well vende colchões/colchonetes reciclados e também aceita doações diretas para financiar a produção de itens para pessoas em situação de vulnerabilidade. O checkout precisa diferenciar esses dois fluxos — a doação não exige endereço de entrega, enquanto a compra exige — e, por se tratar de um protótipo, nenhuma etapa de pagamento deve processar dados financeiros reais.

Atores do Sistema
1. VISITANTE/CLIENTE — Ator Principal
Papel: navegar pela vitrine, comprar um produto ou realizar uma doação direta, preencher o checkout e escolher a forma de pagamento.
Responsabilidade: informar dados pessoais e, quando aplicável, de entrega, corretos para o pedido ou doação.
Permissões: CREATE de um pedido ou de uma doação (via formulário público, sem autenticação).
2. SISTEMA — Ator Automático
Papel: validar os campos obrigatórios do checkout, alternar a exibição da seção de endereço conforme o tipo de operação (compra ou doação), consultar o ViaCEP, alternar os campos da etapa de pagamento conforme o método escolhido e exibir a confirmação final.
Responsabilidade: impedir o avanço para a etapa de pagamento sem os campos obrigatórios preenchidos e deixar explícito, em tela, que o checkout é demonstrativo.
3. GERENTE/ADMINISTRATIVO — Ator Secundário (herdado da Semana 3)
Papel: os pedidos e doações registrados neste fluxo são os mesmos que, futuramente, alimentarão as tabelas pedidos e doacoes já previstas no dicionário de dados, geridas pelo painel administrativo.
Permissões: conforme já definido na Semana 3 (RF-003) para os cadastros do painel.
3️⃣ ESPECIFICAÇÃO DE CASOS DE USO (25%)
Objetivo: Descrever detalhadamente como o requisito é executado.

UC-009: Comprar Produto (Colchão ou Colchonete)
Pré-Condições
Visitante está na página “Compre e Ajude”.
Serviço ViaCEP disponível.
Pós-Condições — Sucesso
Pedido confirmado na tela, com nome do cliente e forma de pagamento informados.
Modal fechado e formulário limpo.
Fluxo Principal
Visitante clica em “Comprar e Ajudar” em um dos produtos (Colchonete Solteiro ou Casal).
Sistema abre o modal “Finalizar Pedido”, exibindo nome do produto e valor.
Visitante preenche nome completo, CPF e e-mail.
Visitante preenche o CEP; sistema consulta o ViaCEP e completa rua, bairro, cidade e UF.
Visitante confirma número e complemento.
Visitante clica em “Continuar para pagamento”.
Sistema valida os campos obrigatórios do formulário e abre o modal de pagamento.
Visitante seleciona a forma de pagamento (Pix, cartão ou boleto).
Sistema exibe os campos específicos do método escolhido.
Visitante clica em “Confirmar Pedido”.
Sistema exibe mensagem de agradecimento informando que nenhuma cobrança real foi realizada.
Sistema fecha os modais e limpa os formulários.
Fluxo Alternativo A1 — Campo obrigatório do checkout vazio
Sistema impede o avanço para a etapa de pagamento enquanto houver campo obrigatório vazio.
Sistema mantém o visitante no modal de dados pessoais/endereço.
Fluxo Alternativo A2 — CEP inválido ou não encontrado
Sistema aplica o mesmo tratamento definido no RN-12 da Semana 3 (CEP com 8 dígitos, consulta ao ViaCEP, mensagem de erro em caso de falha ou CEP inexistente).
UC-010: Realizar Doação Direta
Pré-Condições
Visitante está na página “Compre e Ajude”.
Pós-Condições — Sucesso
Doação confirmada na tela, com nome do doador.
Modal fechado e formulário limpo.
Fluxo Principal
Visitante clica em “Apenas Doar” no card “Apoie o Projeto”.
Sistema abre o modal “Realizar Doação Direta”, já ocultando a seção de endereço de entrega.
Visitante preenche nome completo, CPF e e-mail.
Visitante clica em “Continuar para pagamento”.
Sistema valida os campos obrigatórios (sem exigir endereço) e abre o modal de pagamento.
Visitante escolhe a forma de pagamento.
Visitante clica em “Confirmar Pedido”.
Sistema exibe mensagem de agradecimento específica para doação.
Sistema fecha os modais e limpa os formulários.
Fluxo Alternativo A1 — Alternar entre produto e doação no mesmo acesso
Visitante fecha o modal de doação e clica em “Comprar e Ajudar” em um produto.
Sistema reabre o modal já no modo de compra, com a seção de endereço visível e obrigatória novamente (ver RN-17).
UC-011: Selecionar Forma de Pagamento no Checkout
Pré-Condições
Etapa de dados pessoais/endereço já validada (UC-009 ou UC-010).
Pós-Condições — Sucesso
Campos específicos do método de pagamento exibidos corretamente.
Fluxo Principal
Sistema exibe o modal de pagamento com o resumo do produto/doação.
Visitante seleciona “Pix”, “Cartão de Crédito” ou “Boleto Bancário”.
Sistema exibe os campos de número do cartão, validade e CVV apenas quando “Cartão” é selecionado.
Sistema exibe um aviso informativo quando “Pix” ou “Boleto” é selecionado, indicando que a geração real ainda depende de um provedor de pagamento.
Sistema mantém, em qualquer método, o aviso de que a tela é demonstrativa e não deve receber dados reais de cartão.
Fluxo Alternativo A1 — Trocar de forma de pagamento antes de confirmar
Visitante seleciona outro método de pagamento.
Sistema atualiza os campos exibidos e os campos obrigatórios correspondentes, removendo a exigência dos campos do método anterior.
UC-012: Consultar Páginas Institucionais (Termos de Uso, Política de Privacidade, Trocas e Devoluções)
Pré-Condições
Visitante está em qualquer página pública do site.
Pós-Condições — Sucesso
Página institucional correspondente exibida, com rodapé completo.
Fluxo Principal
Visitante clica em “Termos de Uso”, “Política de Privacidade” ou “Trocas e Devoluções” no rodapé.
Sistema abre a página correspondente, dividida em seções numeradas.
Visitante lê o conteúdo e pode retornar à navegação normal pelo cabeçalho ou pelo rodapé.
Fluxo Alternativo A1 — Acesso direto a partir de qualquer página do site
Como as três páginas reutilizam o mesmo rodapé e cabeçalho padrão, o visitante pode alternar entre elas e as demais páginas públicas sem precisar voltar à página inicial.
UC-013: Rastrear Pedido
Pré-Condições
Visitante possui um código de pedido ou rastreio.
Pós-Condições — Sucesso
Sistema reconhece o código informado e inicia a consulta (funcionalidade ainda simulada).
Fluxo Principal
Visitante acessa a página “Rastrear Pedido”.
Visitante informa o código do pedido (ex.: SW-123456) no campo de busca.
Visitante clica em “Buscar Pedido”.
Sistema exibe uma mensagem informando que a pesquisa de rastreio está em desenvolvimento.
Fluxo Alternativo A1 — Campo vazio
Sistema impede o envio enquanto o campo obrigatório não for preenchido, por meio da validação nativa do formulário.
Regras de Negócio (RN)
RN-17: A seção de endereço de entrega é obrigatória apenas para compra de produto; para doação direta, ela é ocultada e os campos deixam de ser obrigatórios.
RN-18: O avanço para a etapa de pagamento só é permitido após a validação de todos os campos obrigatórios da etapa de dados pessoais/endereço.
RN-19: Os campos de cartão de crédito (número, validade, CVV) só se tornam obrigatórios quando o método “Cartão de Crédito” é selecionado.
RN-20: Toda tela de pagamento deve exibir aviso de que se trata de uma demonstração e que nenhuma cobrança real é processada.
RN-21: O CEP do checkout segue a mesma validação de 8 dígitos e a mesma integração com o ViaCEP definidas no RN-12 (Semana 3), incluindo máscara automática de preenchimento.
RN-22: A busca na página “Rastrear Pedido” ainda não consulta uma base real de pedidos; o sistema deve deixar essa limitação explícita ao usuário.
RN-23: As páginas de Termos de Uso e Política de Privacidade devem referenciar a legislação aplicável (Código de Defesa do Consumidor e LGPD) nos tópicos pertinentes.

Requisitos Não-Funcionais (RNF)
RNF-14: Os modais de checkout e de pagamento devem abrir e fechar sem recarregar a página, preservando a performance da navegação.
RNF-15: O style.css da Semana 4 deve reaproveitar os estilos já definidos nas semanas anteriores por meio de @import (ver ADR-007), evitando duplicação de regras.
RNF-16: Todos os links do rodapé institucional (Sobre Nós, Impacto Social, Compre e Ajude, Termos de Uso, Política de Privacidade, Trocas e Devoluções e Rastrear Pedido) devem apontar para páginas existentes — pendência do RNF-12 (Semana 3) considerada resolvida nesta entrega.
RNF-17: A funcionalidade de busca da página “Rastrear Pedido” deve, em entrega futura, consumir um endpoint real de rastreamento — permanece como pendência técnica desta entrega.

4️⃣ PROTÓTIPOS/FLUXOS DE TELAS (HTML+CSS) (20%)
Objetivo: Visualizar como o requisito aparece na interface por meio do protótipo HTML+CSS.

Tela 1 — Vitrine "Compre e Ajude"
┌───────────────────────────────────────────────────────────┐
│  Sleep Well        INÍCIO  SOBRE NÓS  COMPRE E AJUDE  ...  │
├───────────────────────────────────────────────────────────┤
│  Faça parte da mudança                                     │
│  Ao adquirir um produto ecológico, você financia colchonetes│
│  para pessoas em situação de vulnerabilidade.               │
│                                                              │
│  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐     │
│  │ Colchonete    │ │ Colchonete    │ │ Apoie o       │     │
│  │ Solteiro Eco  │ │ Casal Eco     │ │ Projeto       │     │
│  │ R$ 149,90     │ │ R$ 229,90     │ │ R$ 80,00      │     │
│  │[COMPRAR E     │ │[COMPRAR E     │ │[APENAS DOAR]  │     │
│  │ AJUDAR]       │ │ AJUDAR]       │ │               │     │
│  └───────────────┘ └───────────────┘ └───────────────┘     │
└───────────────────────────────────────────────────────────┘
Tela 2 — Checkout de Compra (com endereço)
┌───────────────────────────────────────────┐
│  Finalizar Pedido                      [×] │
│  Colchonete Solteiro Eco — R$ 149,90        │
├─────────────────────────────────────────────┤
│  Dados Pessoais                             │
│  Nome: [ ___________________ ]              │
│  CPF: [ _____ ]   E-mail: [ _____ ]         │
│                                             │
│  Endereço de Entrega                        │
│  CEP: [ 00000-000 ]  Rua: [ ___________ ]   │
│  Número: [ ]  Complemento: [ ]              │
│  Bairro: [ ]  Cidade: [ ]  UF: [ ]          │
│                                             │
│  Forma de Pagamento                         │
│  [ -- Selecione -- ▼ ]                      │
│              [ CONTINUAR PARA PAGAMENTO ]   │
└───────────────────────────────────────────┘
Tela 3 — Checkout de Doação (sem endereço)
┌───────────────────────────────────────────┐
│  Realizar Doação Direta                [×] │
│  Doação Direta - Projeto Sleep Well — R$80  │
├─────────────────────────────────────────────┤
│  Dados Pessoais                             │
│  Nome: [ ___________________ ]              │
│  CPF: [ _____ ]   E-mail: [ _____ ]         │
│                                             │
│  (seção de endereço oculta para doação)     │
│                                             │
│  Forma de Pagamento                         │
│  [ -- Selecione -- ▼ ]                      │
│              [ CONTINUAR PARA PAGAMENTO ]   │
└───────────────────────────────────────────┘
Tela 4 — Modal de Pagamento (Cartão de Crédito selecionado)
┌───────────────────────────────────────────┐
│  Pagamento com Cartão de Crédito       [×] │
│  Colchonete Solteiro Eco — R$ 149,90        │
├─────────────────────────────────────────────┤
│  ⚠️ Tela demonstrativa. Não informe dados    │
│     reais do cartão.                        │
│                                             │
│  Número do Cartão: [ 0000 0000 0000 0000 ]  │
│  Validade: [ MM/AA ]   CVV: [ 123 ]          │
│                                             │
│              [ CONFIRMAR PEDIDO ]           │
└───────────────────────────────────────────┘
Tela 5 — Página "Rastrear Pedido"
┌───────────────────────────────────────────────────────────┐
│  Rastrear Pedido                                            │
│  Acompanhe o status do envio do seu produto.                 │
│                                                              │
│  Código de Rastreio ou Pedido: [ Ex: SW-123456     ]         │
│                                       [ BUSCAR PEDIDO ]       │
│                                                              │
│  (ao buscar, sistema informa: "Pesquisa de rastreio em       │
│   desenvolvimento.")                                         │
└───────────────────────────────────────────────────────────┘
Tela 6 — Páginas Institucionais (Termos de Uso / Privacidade / Trocas e Devoluções)
┌───────────────────────────────────────────────────────────┐
│  Termos de Uso                                               │
│  1. Aceitação e Visão Geral                                  │
│  2. Objeto e Propósito Social                                │
│  3. Cadastro do Usuário e Segurança da Conta                 │
│  4. Conduta do Usuário e Usos Proibidos                      │
│  5. Propriedade Intelectual                                  │
│  6. Preços, Pagamentos e Disponibilidade                     │
│  7. Limitação de Responsabilidade                            │
│  8. Modificações nos Termos de Uso                           │
│  9. Foro e Legislação Aplicável                               │
└───────────────────────────────────────────────────────────┘
As páginas "Política de Privacidade" (com seção específica sobre LGPD) e "Trocas e Devoluções" (com seção sobre direito de arrependimento) seguem o mesmo padrão visual de seções numeradas, reaproveitando o cabeçalho, o rodapé e a tipografia do restante do site.

Critérios de Aceite
 compre_e_ajude.html, rastreio.html, termo_de_uso.html, privacidade.html e trocas-devolucoes.html presentes no protótipo.
 Modal de checkout distingue compra (com endereço) de doação (sem endereço).
 Três formas de pagamento com campos específicos (Pix, cartão, boleto).
 Aviso de demonstração presente em todas as etapas de pagamento.
 Busca de CEP no checkout reaproveita o padrão já validado no painel administrativo.
 Rodapé institucional com todos os links apontando para páginas existentes.
 Busca real de pedidos na página "Rastrear Pedido" (RNF-17).
 Processamento real de pagamento (fora do escopo deste protótipo).
Os itens não marcados representam pendências explícitas da entrega e não devem ser apresentados como concluídos.

5️⃣ ARQUITETURA E ADR (20%)
Objetivo: Descrever como o requisito será implementado.

Arquitetura da Solução
┌──────────────────────────────┐
│          Frontend            │
│ HTML + CSS + JavaScript      │
│ Vitrine + Checkout + Páginas │
│ Institucionais               │
└──────────────┬───────────────┘
               │ HTTPS
               ▼
┌──────────────────────────────┐
│       API / Backend          │
│       Express.js / Node.js   │
│ Validação de pedido/doação   │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│          MySQL                │
│ Tabelas: produtos, pedidos,   │
│ doacoes (já previstas)        │
└──────────────────────────────┘

               ▲
               │ HTTPS
               │
┌──────────────────────────────┐
│           ViaCEP             │
│ Consulta de endereço por CEP │
└──────────────────────────────┘
ADR-007: Modularização do CSS via @import entre Semanas
Status: ACEITO

Contexto: cada entrega semanal introduz novas páginas, e repetir todo o CSS a cada semana geraria duplicação e risco de inconsistência visual entre o site público e o painel administrativo.

Decisão: encadear os arquivos style.css por @import: o CSS da Semana 4 importa o CSS da Semana 3, que por sua vez importa o CSS-base da Semana 2. Cada semana adiciona apenas as regras específicas de suas novas telas (ex.: modal de checkout, páginas institucionais).

Alternativas:

Duplicar todo o CSS em cada pasta semanal — não adotado, por aumentar o risco de divergência visual entre as páginas.
Unificar todo o CSS em um único arquivo global desde já — não adotado nesta fase, para preservar o histórico de cada entrega semanal como protótipo independente.
Consequências: manutenção mais simples do estilo visual entre as semanas, com a contrapartida de que o CSS de uma semana passa a depender da existência do CSS da semana anterior no mesmo caminho relativo.

ADR-008: Modal Único de Checkout para Compra e Doação
Status: ACEITO

Contexto: compra de produto e doação direta compartilham a maior parte dos campos (dados pessoais e forma de pagamento), diferindo apenas na exigência do endereço de entrega.

Decisão: reaproveitar o mesmo modal e o mesmo formulário de checkout para os dois fluxos, alternando via JavaScript a exibição e a obrigatoriedade da seção de endereço conforme o tipo de operação (compra ou doacao) selecionado ao abrir o modal.

Alternativas:

Criar dois modais completamente separados para compra e doação — não adotado, por duplicar código e aumentar o esforço de manutenção.
Consequências: menos duplicação de código, com a contrapartida de exigir atenção redobrada ao alternar corretamente os atributos required dos campos de endereço entre um fluxo e outro (ver RN-17).

Continuidade das ADRs anteriores
ADR-001 a ADR-003 (Semana 2): autenticação, recuperação de senha e práticas de segurança.
ADR-004 e ADR-005 (Semana 3): integração com ViaCEP e navegação do painel sem recarregamento completo — ambas reaproveitadas integralmente nesta entrega (RN-21 e RNF-14).
ADR-006 (Semana 3): estrutura de dados de parceiros, fornecedores e clientes — segue como PROPOSTO, ainda não incorporada ao DicionariodeDados.md nesta entrega. As tabelas produtos, pedidos e doacoes, por outro lado, já existiam no dicionário e são compatíveis com os campos capturados no checkout desta semana (nome/e-mail do doador, quantia, mensagem, endereço, produto, quantidade, total, forma de pagamento).
Tecnologias Escolhidas
Camada	Tecnologia	Versão	Justificativa
Frontend	HTML5 + CSS3 + JavaScript	ES2015+	Web padrão e continuidade do projeto
Backend	Express.js / Node.js	4.18+	API e regras de negócio
BD	MySQL	8.0+	Continuidade da decisão já registrada para o projeto
Validação	express-validator	7+	Validação no backend
CEP	ViaCEP	—	Consulta automática de endereço no checkout
Tipografia	Google Fonts (Montserrat)	—	Continuidade da identidade visual do site
6️⃣ QUALIDADE E CONFORMIDADE (10%)
Objetivo: Verificar se o documento e o protótipo seguem os padrões de qualidade definidos pelo template.

Checklist de Qualidade
 Estrutura compatível com o Template v12.2.
 Identificação, atores, casos de uso, protótipos, arquitetura e qualidade presentes.
 Markdown estruturado para renderização no GitHub.
 Blocos de código com linguagem definida quando aplicável.
 Diagramas ASCII legíveis.
 Referências internas consistentes: RF-004, UC-009 a UC-013, RN-17 a RN-23 e RNF-14 a RNF-17.
 Pendências explicitamente identificadas.
 Pendência do RNF-12 (Semana 3) marcada como resolvida nesta entrega.
 Busca real de pedidos implementada.
 Processamento real de pagamento implementado.
 Tabelas parceiros, fornecedores e clientes incorporadas ao dicionário de dados (pendência herdada da Semana 3).
As pendências são mantidas visíveis para acompanhamento na próxima entrega e não são contabilizadas como funcionalidades concluídas.

📊 RESUMO DE PONTUAÇÃO
Tópico	Peso	Conteúdo entregue
1. Identificação do Requisito	10%	RF-004, prioridade, complexidade, status e descrição
2. Descrição e Atores	15%	contexto, atores e permissões
3. Especificação de Casos de Uso	25%	UC-009 a UC-013, RN e RNF
4. Protótipos/Telas (HTML+CSS)	20%	vitrine, checkout, pagamento e páginas institucionais
5. Arquitetura e ADR	20%	componentes, CSS modular, modal único e tecnologias
6. Qualidade e Conformidade	10%	checklist e pendências
TOTAL	100%	Estrutura completa para avaliação
Importante: a tabela apresenta os pesos dos critérios, conforme o modelo. Ela não atribui antecipadamente nota 100/100 à entrega; a avaliação final cabe ao professor.

✅ PENDÊNCIAS PARA A SEMANA 05
Implementar a busca real de pedidos na página "Rastrear Pedido" (RNF-17).
Integrar um provedor de pagamento real (Pix, cartão e boleto) — atualmente o checkout é apenas demonstrativo (RN-20).
Atualizar sistema/banco-de-dados/DicionariodeDados.md com parceiros, fornecedores e clientes (pendência herdada da Semana 3, ADR-006).
Implementar validação completa de CPF/CNPJ no cadastro de Cliente do painel (pendência herdada da Semana 3, RN-16).
Conectar o checkout desta entrega às tabelas pedidos e doacoes já existentes no dicionário de dados, persistindo de fato os pedidos e doações registrados.
Avançar a reorganização de diretórios em Backend/, Frontend/, Dados/, Imagens/ e MD/, planejada desde a Semana 2.
Template v12.2 — Entrega Semanal de Requisitos
Laboratório de Inovação Prof. Edilberto Silva — 2026

"Cada entrega vale 100%. Seja minucioso, justificado, exemplificado!"

"Fé, Força e Foco!"
