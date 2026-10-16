Markdown
# 🤝 Projeto Social — Sleep Well

Um sistema web completo desenvolvido para a gestão, apoio e facilitação de ações e doações para iniciativas sociais. Este projeto inclui documentação completa de requisitos, protótipos de interface, modelo de banco de dados e arquivos de desenvolvimento.

---

## 📌 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [📁 Estrutura do Repositório](#-estrutura-do-repositório)
- [📅 Planejamento e Requisitos por Semana](#-planejamento-e-requisitos-por-semana)
- [🗄️ Banco de Dados](#️-banco-de-dados)
- [🎨 Protótipos e Telas](#-protótipos-e-telas)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)

---

## 📖 Sobre o Projeto
O **Projeto Social — Sleep Well** tem como objetivo conectar doadores, voluntários e administradores em uma plataforma centralizada. A aplicação oferece desde a autenticação e cadastro de usuários até painéis (*dashboards*) intuitivos para gestão de doações, compras e acompanhamento de impacto social através de itens reciclados e doações diretas.

---

## 📁 Estrutura do Repositório

```text
Projeto-social/
├── docs/
│   └── requisitos-semanais/    # Documentação dos Requisitos Funcionais (RFs) por semana
│       ├── SEMANA-01/          # RF-001: Autenticação e Cadastro
│       ├── SEMANA-02/          # RF-002: Alteração e Recuperação de Senha
│       ├── SEMANA-03/          # RF-003: Painel Administrativo / Dashboard
│       ├── SEMANA-04/          # RF-004: Fluxo de Compra, Doação e Telas Institucionais
│       └── SEMANA-05/          # RF-005: Dashboard financeiro 
├── sistema/
│   └── banco-de-dados/         # Modelagem do Banco de Dados e Dicionário de Dados
│       └── DicionariodeDados.md
├── src/
│   └── prototipos/             # Protótipos HTML e recursos visuais por semana
└── README.md                   # Documentação principal do projeto
📅 Planejamento e Requisitos por Semana
O desenvolvimento do projeto foi organizado em entregas semanais, cobrindo requisitos específicos:

🔹 Semana 01 — Autenticação e Cadastro
RF-001: Funcionalidade de cadastro de novos usuários e autenticação no sistema.

Protótipos disponíveis em src/prototipos/SEMANA-01/RF-001-autenticacao-cadastro/.

🔹 Semana 02 — Gestão de Acesso e Segurança
RF-002: Funcionalidade de recuperação e alteração de senha de usuário com melhorias de autenticação.

🔹 Semana 03 — Painel de Controle (Dashboard)
RF-003: Interface principal (Dashboard) com métricas, gestão de cadastros, relatórios de impacto e rodapé institucional.

🔹 Semana 04 — Fluxo de Doações, Compras e Institucional
RF-004: Vitrine de produtos ("Compre & Ajude"), checkout em etapas (compra vs. doação), integração com ViaCEP e páginas institucionais (Rastreio, Termos de Uso, Privacidade, Trocas/Devoluções).

🔹 Semana 05 — Dashboard Financeiro & Validação de Acesso por Perfil
RF-005:

Dashboard Financeiro: Criação de painel exclusivo para acompanhamento e controle das métricas financeiras, receitas, custos e fluxo de doações.

Validação e Redirecionamento: Implementação do fluxo de verificação de login e nível de permissão/perfil do usuário, redirecionando automaticamente para a tela correspondente (Administrador ou Financeiro).



🗄️ Banco de Dados
A documentação da estrutura do banco de dados encontra-se na pasta sistema/banco-de-dados/:

DicionariodeDados.md: Detalhamento de todas as tabelas (usuários, clientes, pedidos, doações, parceiros, fornecedores), tipos de dados, chaves primárias/estrangeiras e restrições da aplicação.

🎨 Protótipos e Telas
Os protótipos desenvolvidos para validação de interface estão localizados na pasta src/prototipos/:

Exemplos de páginas disponíveis:

login.html — Autenticação e acesso ao sistema.

tela_Adm.html — Painel administrativo e métricas.

compre_e_ajude.html — Vitrine de produtos e checkout de compra/doação.

rastreio.html — Acompanhamento de pedidos.

termo_de_uso.html, privacidade.html, trocas-devolucoes.html — Páginas institucionais.

🚀 Como Executar o Projeto
Clonar o repositório:

Bash
git clone [https://github.com/seu-usuario/Projeto-social.git](https://github.com/seu-usuario/Projeto-social.git)
cd Projeto-social
Visualizar a documentação e requisitos:

Navegue até a pasta docs/requisitos-semanais/ para conferir a especificação detalhada de cada requisito da Semana 01 à Semana 05.

Visualizar os Protótipos:

Abra os arquivos .html dentro de src/prototipos/ diretamente no seu navegador de preferência.

🛠️ Tecnologias Utilizadas
Documentação: Markdown (.md)

Front-end: HTML5, CSS3, JavaScript (consulta ViaCEP e manipuladores de checkout/modais)

Back-end / API: Node.js / Express.js com express-validator

Banco de Dados: MySQL 8.0+

✨ Projeto desenvolvido para promover o impacto social através da tecnologia.
