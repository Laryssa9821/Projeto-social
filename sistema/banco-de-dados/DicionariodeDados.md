tabela: perfis (Gerente, Administrativo, Financeiro)

Field Name | Data Type | Description | Allowed Values/Range | Notes

id | INT | Identificador único de perfil | Inteiros positivos | Primary Key(AI)

nome | VARCHAR(50) | nome da função ou cargo | máximo 50 caracteres | Unique, Not Null

descricao | VARCHAR(255) | detalhamento das permissões | máximo 255 caracteres | Nullable



tabela: recursos

Field Name | Data Type | Description | Allowed Values/Range | Notes

id | INT | Identificador único do recurso | Inteiros positivos | Primary Key(AI)

nome | VARCHAR(50) | nome do módulo no sistema | máximo 50 caracteres | Unique, Not Null

descricao | VARCHAR(255) | o que o módulo gerencia | máximo 255 caracteres | Nullable



tabela: categorias

Field Name | Data Type | Description | Allowed Values/Range | Notes

id | INT | Identificador único da categoria | Inteiros positivos | Primary Key(AI)

nome | VARCHAR(50) | nome da categoria | máximo 50 caracteres | Unique, Not Null

slug | VARCHAR(60) | identificador amigável para URL | máximo 60 caracteres | Unique, Not Null

criado_em | TIMESTAMP | data de cadastro | data e hora válida do sistema | Default CURRENT_TIMESTAMP



tabela: produtos

Field Name | Data Type | Description | Allowed Values/Range | Notes

produto_id | INT | Identificador único do produto | Inteiros positivos | Primary Key(AI)

nome | VARCHAR(150) | nome do produto | máximo 150 caracteres | Not Null

descricao | VARCHAR(255) | detalhamento do produto | máximo 255 caracteres | Nullable

preco | DECIMAL(10,2) | valor de venda do produto | valores monetários positivos | Not Null

imagem | VARCHAR(255) | link ou caminho da imagem | máximo 255 caracteres | Nullable

estoque | INT | quantidade física disponível | números inteiros(>=0) | Default 0

categoria_id | INT | vínculo com a categoria | IDs da tabela categorias | Foreign Key, Not Null

ativo | BOOLEAN | status de visibilidade no site | TRUE ou FALSE | Default TRUE

criado_em | TIMESTAMP | data de cadastro do produto | data e hora válida do sistema | Default CURRENT_TIMESTAMP

atualizado_em | TIMESTAMP | data e hora da última alteração | data e hora válida do sistema | Default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP



tabela: doacoes

Field Name | Data Type | Description | Allowed Values/Range | Notes

id | INT | Identificador único da doação | Inteiros positivos | Primary Key(AI)

usuario_id | INT | vínculo com o usuário logado | IDs da tabela usuarios | Foreign Key, Nullable

doador_nome | VARCHAR(150) | nome da pessoa que doou | máximo 150 caracteres | Not Null

doador_email | VARCHAR(150) | e-mail de contato do doador | formato padrão de e-mail | Not Null

quantia | DECIMAL(10,2) | valor financeiro arrecadado | valores monetários positivos | Not Null

mensagem | TEXT | Guarda um recado do usuário | Usado para textos longos | Nullable

status | VARCHAR(30) | situação da doação | ex: confirmado, pendente | Default 'confirmado'

criado_em | TIMESTAMP | data da realização da doação | data e hora válida do sistema | Default CURRENT_TIMESTAMP



Tabela: usuarios

Field Name | Data Type | Description | Allowed Values/Range | Notes

id | INT | Identificador único de usuário | Inteiros positivos | Primary Key(AI)

nome | VARCHAR(150) | nome completo do colaborador | máximo 150 caracteres | Not Null

email | VARCHAR(150) | e-mail de login unificado | formato padrão de e-mail | Unique, Not Null

senha | VARCHAR(245) | hash da senha de acesso | hash irreversível (Bcrypt) | Not Null

telefone | VARCHAR(50) | telefone de contato do usuário | formato válido para o Brasil | Nullable

perfil_id | INT | vínculo com o cargo do usuário | IDs da tabela perfis | Foreign Key, Not Null

ativo | BOOLEAN | status de acesso da conta | TRUE ou FALSE | Default TRUE

criado_em | TIMESTAMP | registro de data/hora do cadastro | data e hora válida do sistema | Default CURRENT_TIMESTAMP

atualizado_em | TIMESTAMP | data e hora da última alteração | data e hora válida do sistema | Default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP



tabela: recuperacao_senha

Field Name | Data Type | Description | Allowed Values/Range | Notes

id | INT | Identificador único da solicitação | Inteiros positivos | Primary Key(AI)

email | VARCHAR(150) | e-mail vinculado à recuperação | formato padrão de e-mail | Foreign Key, Not Null

token | VARCHAR(10) | token/código único de validação | hash de segurança único | Not Null, Unique

expira_em | DATETIME | data/hora limite de validade do link | data/hora futura válida | Not Null

usado | TINYINT(1) | indica se token já foi utilizado | 1(sim) ou 0 (não) | Default 0

criado_em | TIMESTAMP | momento exato da solicitação | data/hora válida do sistema | Default CURRENT_TIMESTAMP



Tabela: permissoes

Field Name | Data Type | Description | Allowed Values/Range | Notes

perfil_id | INT | vínculo com o perfil de acesso | IDs da tabela de perfis | Primary Key, FK

recurso_id | INT | vínculo com o módulo do sistema | IDs da tabela de recurso | Primary Key, FK

pode_criar | BOOLEAN | autorização para a ação CREATE | TRUE ou FALSE | Default FALSE

pode_ler | BOOLEAN | autorização para a ação READ | TRUE ou FALSE | Default FALSE

pode_atualizar | BOOLEAN | autorização para a ação UPDATE | TRUE ou FALSE | Default FALSE

pode_deletar | BOOLEAN | autorização para a ação DELETE | TRUE ou FALSE | Default FALSE



tabela: pedidos

Field Name | Data Type | Description | Allowed Values/Range | Notes

id | INT | Identificador único do pedido | Inteiros positivos | Primary Key(AI)

cliente_nome | VARCHAR(150) | nome do cliente/comprador | máximo 150 caracteres | Not Null

cliente_email | VARCHAR(150) | e-mail de contato do cliente | formato padrão de e-mail | Not Null

cliente_cel | VARCHAR(50) | telefone de contato do cliente | formato válido | Nullable

cpf | VARCHAR(14) | CPF do comprador | 000.000.000-00 | Nullable

cep | VARCHAR(9) | CEP do comprador | 00000-00 | Nullable

logradouro | VARCHAR(200) | rua/avenida de entrega | máximo de 200 caracteres | Nullable

numero | VARCHAR(20) | número do imóvel | máximo 20 caracteres | Nullable

complemento | VARCHAR(100) | complemento do endereço | máximo de 100 caracteres | Nullable

bairro | VARCHAR(100) | bairro de entrega | máximo de 100 caracteres | Nullable

cidade | VARCHAR(100) | cidade de entrega | máximo de 100 caracteres | Nullable

uf | VARCHAR(2) | estado (UF) | siglas de estados | Nullable

total | DECIMAL(10,2) | valor final da compra | valores monetários positivos | Not Null

status | VARCHAR(30) | situação de processamento | ex: pendente, pago, enviado | Default 'pendente'

metodo_pagamento | VARCHAR(50) | forma de pagamento | cartão, pix, boleto, etc | Nullable

codigo_rastreio | VARCHAR(50) | código de rastreamento do envio | ex: SW-123456 | Nullable

criado_em | TIMESTAMP | registro de data/hora do pedido | data e hora válida do sistema | Default CURRENT_TIMESTAMP

atualizado_em | TIMESTAMP | data e hora da última alteração | data e hora válida do sistema | Default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP



tabela: pedido_itens

Field Name | Data Type | Description | Allowed Values/Range | Notes

id | INT | Identificador único do item do pedido | Inteiros positivos | Primary Key(AI)

pedido_id | INT | vínculo com o pedido | IDs da tabela pedidos | Foreign Key, Not Null

produto_id | INT | vínculo com o produto | IDs da tabela produtos | Foreign Key, Not Null

quantidade | INT | quantidade comprada do item | inteiros positivos (>0) | Not Null, Default 1

preco_unitario | DECIMAL(10,2) | preço unitário no momento da compra | valores monetários positivos | Not Null



tabela:Fornecedor 

Field Name | Data Type | Description | Allowed Values/Range | Notes

racao_social | Varchar (150 ) | Acao social da empresa | Obrigatório | Not null

CNPJ| Varchar(18)| CNPJ da empresa | Obrigatório | Not null

Ramo | Varchar (100) | Ramo de atuação da empresa |  Default null

telefone | Varchar (100) |  telefone para contato | Default null

Email | Varchar (150) | Email corporativo | Default null

Cep | Varchar (9) | CEP do endereço| Default null

logradouro | Varchar (200) | nome da rua/avenida | Default null 

Numero | Varchar (20) | numero do endereço | Default null 

Bairro | Varchar (100) | bairro da empresa | Default null 

Cidade | Varchar (100) | cidade da empresa | Default null 

UF | Varchar (100) | Unidade Federativa (Estado) | Siglas dos estados brasileiros | Default null 

Nullable ativo | TINYINT(1) | Indica se o fornecedor está ativo | 1 (ativo) ou 0 (inativo) | Default 1 criado_em

TIMESTAMP | Momento da criação do registro | Data/hora válida do sistema | Default CURRENT_TIMESTAMP atualizado_em | TIMESTAMP | Momento 
 
ùltima atualização do registro | Data/hora válida do sistema | CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP


Table: Vendas 

Field Name | Data Type | Description | Allowed Values/Range | Notes

id_venda | INT | Identificador único da venda | Inteiros positivos | Primary Key 

id_cliente | INT | Identificador do cliente relacionado à venda | Inteiros positivos | Foreign Key, Nullable

id_pedido | INT | Identificador do pedido relacionado à venda | Inteiros positivos | Foreign Key, Nullable

id_produto | INT | Identificador do produto vendido | Inteiros positivos | Foreign Key, Nullable

quantidade | INT | Quantidade de produtos vendidos | Valores inteiros maiores que 0 | Not Null, Default 1

tipo_pagamento | VARCHAR(50) | Forma de pagamento utilizada na venda | Pix, Cartão de Crédito, Cartão de Débito, Boleto, Dinheiro, etc. | Not Null

total | DECIMAL(12,2) | Valor total da venda | Valores maiores ou iguais a 0 | Not Null, Check (total >= 0)

nota_fiscal | VARCHAR(60) | Número ou código da nota fiscal emitida | Texto até 60 caracteres | Nullable

data_venda | DATE | Data em que a venda foi realizada | Data válida | Not Null

criado_em | TIMESTAMP | Momento exato do registro da venda | Data/hora válida do sistema | Default CURRENT_TIMESTAMP

Foreign Key | Referência | Regra de Exclusão | Regra de Atualização

id_cliente | clientes(id_cliente) | ON DELETE SET NULL | ON UPDATE CASCADE

id_pedido | pedidos(id_pedido) | ON DELETE SET NULL | ON UPDATE CASCADE

id_produto | produtos(id_produto) | ON DELETE SET NULL | ON UPDATE CASCADE

Table: Transacoes
Field Name | Data Type | Description | Allowed Values/Range | Notes

id_transacoes | INT | Identificador único da venda | Inteiros positivos | Primary Key 

data_transacoes | Date  | Data em que a transação foi realizada/ Data valida | Not null | 

Descricao | Varchar (200) | detalhada da transação | Not null | 

Categoria  | Varchar (60) | Categoria da movimentação financeira | Nullable 

Tipo  | Enum(Entrada ou saida) | Tipo da transação financeira  | Not null 

Valor | Decimal (12,2)| Valor monetário da transação/ valores maior que 0 | Not null 

status | ENUM('pendente','pago','cancelado') | Situação atual da transação | Not Null, Default 'pago'

Foreign Key | Referência | Regra de Exclusão | Regra de Atualização

id_fornecedor | fornecedores(id_fornecedor) | ON DELETE SET NULL | ON UPDATE CASCADE

id_parceiro | parceiros(id_parceiro) | ON DELETE SET NULL | ON UPDATE CASCADE

id_venda | vendas(id_venda) | ON DELETE SET NULL | ON UPDATE CASCADE

id_doacao | doacoes(id_doacao) | ON DELETE SET NULL | ON UPDATE CASCADE

id_usuario | usuarios(id_usuario) | ON DELETE SET NULL | ON UPDATE CASCADE

Idx_Transacoes_Data = data_transacao 
idx_transacoes_fornecedor = id_fornecedor 
idx_transacoes_parceiro = id_parceiro
idx_transacoes_venda = id_venda
idx_transacoes_doacoes = id_doacoes
idx_transacoes_usuario = id_usuario
ck_transacao_valor | Validação: valor > 0

Table: anexos

id_anexos | INT | Identificador único da venda | Inteiros positivos | Primary Key 

id_parceiro | INT | Identificador do parceiro associado ao anexo | Inteiros positivos | Primary Key, nullable

id_fornecedor | INT | Identificador do fornecedor associado ao anexo| Inteiros positivos | Primary Key, Nullable

nome_arquivo | VARCHAR(255) | Nome original do arquivo anexado | Not Null

caminho | VARCHAR(255) | Localização do arquivo no sistema | Not Null

tipo_mime | VARCHAR(100) | Tipo MIME do arquivo | Ex.: application/pdf, image/jpeg, image/png | Nullable

criado_em | TIMESTAMP | Momento exato do envio do anexo | Data/hora válida do sistem| Default CURRENT_TIMESTAMP

Foreign Key | Referência | Regra de Exclusão | Regra de Atualização

id_parceiro | parceiros(id_parceiro) | ON DELETE CASCADE | ON UPDATE CASCADE

id_fornecedor | fornecedores(id_fornecedor) | ON DELETE CASCADE | ON UPDATE CASCADE

idx_anexos_parceiros = id_parceiros
idx_anexos_fornecedor =id_fornecedor

Table:Repasses 
Field Name | Data Type | Description | Allowed Values/Range | Notes

id_repasses | INT | Identificador único da venda | Inteiros positivos | Primary Key 

id_parceiros | INT | Identificador do parceiro associado ao anexo | Inteiros positivos | Primary Key, nullable

id_transacoes | INT | Identificador único da venda | Inteiros positivos | Primary Key, nullable

data_repasse | DATE | Data em que o repasse foi efetuado/Data válida | Not Null

valor | DECIMAL(12,2) | Valor financeiro do repasse/Valores maiores que 0 | Not Null, Check (valor > 0)

comprovante | VARCHAR(255) | Caminho ou localização do comprovante do repasse  | Nullable

observacao | VARCHAR(255) | Informações adicionais sobre o repasse | Nullable

Foreign Key | Referência | Regra de Exclusão | Regra de Atualização

id_parceiro | parceiros(id_parceiro) | ON DELETE RESTRICT | ON UPDATE CASCADE

id_transacao  transacoes(id_transacao) | ON DELETE SET NULL | ON UPDATE CASCADE
idx_repasses_parceiro = id_parceiro 
idx_repasses_transacoes = id_transacoes

ck_repasse_valor | valor > 0 

Tabela : contas_pagas  

Field Name | Data Type | Description | Allowed Values/Range | Notes

id_conta_pagar | INT | Identificador único da conta a pagar | Inteiros positivos | Primary Key (AI)

id_fornecedor | INT | Identificador do fornecedor relacionado | Inteiros positivos | Foreign Key, Nullable

credor | VARCHAR(150) | Nome do credor que receberá o pagamento | Not Null

categoria | VARCHAR(60) | Categoria da despesa  | Nullable

valor | DECIMAL(12,2) | Valor da conta a pagar | Valores maiores que 0 | Not Null, Check (valor > 0)

vencimento | DATE | Data de vencimento da obrigação | Data válida | Not Null

status | ENUM('aberta','paga','cancelada') | Situação da conta | Not Null, Default 'aberta'

pago_em | DATE | Data em que o pagamento foi realizado | Data válida | Nullable

id_transacao | INT | Identificador da transação financeira associada | Inteiros positivos | Foreign Key, Nullable

criado_em | TIMESTAMP | Momento exato do cadastro da conta | Data/hora válida do sistema | Default CURRENT_TIMESTAMP

Foreign Key | Referência | Regra de Exclusão | Regra de Atualização

id_fornecedor | fornecedores(id_fornecedor) | ON DELETE SET NULL | ON UPDATE CASCADE

id_transacao | transacoes(id_transacao) | ON DELETE SET NULL | ON UPDATE CASCADE
idx_cp_vencimento = id_vencimento
idx_cp_fornecedor = id_fornecedor
idx_cp_transacao = id_transacao


tabela: contas_receber 

Field Name | Data Type | Description | Allowed Values/Range | Notes

id_conta_receber | INT | Identificador único da conta a receber | Inteiros positivos | Primary Key 

id_parceiro | INT | Identificador do parceiro relacionado ao recebimento | Inteiros positivos | Foreign Key, Nullable

origem | VARCHAR(150) | Origem do valor a ser recebido | Not Null

tipo | ENUM('doacao','patrocinio','venda','outro') | Tipo de receita prevista | Not Null, Default 'doacao'

valor | DECIMAL(12,2) | Valor previsto para recebimento/ Valores maiores que 0 | Not Null, Check (valor > 0)

previsao | DATE | Data prevista para recebimento | Data válida | Not Null

status | ENUM('aguardando','recebida','cancelada') | Situação do recebimento | Not Null, Default 'aguardando'

recebido_em | DATE | Data efetiva do recebimento | Data válida | Nullable

id_transacao | INT | Identificador da transação financeira relacionada | Inteiros positivos | Foreign Key, Nullable

criado_em | TIMESTAMP | Momento exato do cadastro da conta | Data/hora válida do sistema | Default CURRENT_TIMESTAMP

Foreign Key | Referência | Regra de Exclusão | Regra de Atualização

id_parceiro | parceiros(id_parceiro) | ON DELETE SET NULL | ON UPDATE CASCADE

id_transacao | transacoes(id_transacao) | ON DELETE SET NULL | ON UPDATE CASCADE
idx__cr_previsao = previsao
idx_cr_parceiro = id_parceiro
idx_cr_valor = id_valor

ck_cr_valor  | valor > 0































