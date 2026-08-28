tabela: perfis (Gerente, Administrativo, Financeiro)
Field Name         |       Data Type       |           Description                 |           Allowed Values/Range             |     Notes
    id             |          INT          |       Identificador único de perfil   |            Inteiros positivos              |   Primary Key(AI)
   nome            |       VARCHAR(50)     |    nome da função ou cargo            |        máximo 50 caracteres                |   Unique, Not Null
   descricao       |        VARCHAR(255)   |       detalhamento das permissões     |           máximo 255 caracteres            |   Nullable

tabela: recursos
Field Name         |       Data Type       |           Description                 |           Allowed Values/Range             |     Notes
    id             |          INT          |       Identificador único de usuário  |            Inteiros positivos              |   Primary Key(AI)
   nome            |       VARCHAR(50)     |    nome do módulo no sistema          |        máximo 50 caracteres                |   Unique, Not Null
   descricao       |        VARCHAR(255)   |      o que o módulo gerencia          |         máximo 255 caracteres              |   Nullable

tabela: produtos
Field Name         |       Data Type       |           Description                 |           Allowed Values/Range             |     Notes
 produto_id        |          INT          |       Identificador único do produto  |            Inteiros positivos              |   Primary Key(AI)
   nome            |       VARCHAR(150)    |            nome do produto            |        máximo 150 caracteres               |   Not Null
   descricao       |        VARCHAR(255)   |       detalhamento do produto         |           máximo 255 caracteres            |   Nullable
    preco          |      DECIMAL(10,2)    |       valor de venda do produto       |          valores monetários positivos      |   Not Null
   image_url       |       VARCHAR(255)    |    link ou caminho da imagem          |        máximo 255 caracteres               |   Nullable
  estoque          |          INT          |       quantidade física disponível    |          números inteiros(>-0)             |   Default 0
   categoria       |       VARCHAR(50)     |         classificação do produto      |        máximo 50 caracteres                |   Nullable
   ativo           |       BOOLEAN         |      status de visibilidade no site   |           TRUE ou FALSE                    |   Default TRUE
criado_em          |        TIMESTAMP      |    data de cadastro do produto        |         data e hora válida do sistema      |   Default 1 

tabela: doacoes
Field Name         |       Data Type       |           Description                 |           Allowed Values/Range             |     Notes
    id             |          INT          |       Identificador único de usuário  |            Inteiros positivos              |   Primary Key(AI)
doador_nome        |       VARCHAR(150)    |    nome da pessoa que doou            |        máximo 150 caracteres               |   Not Null
doador_email       |        VARCHAR(150)   |       e-mail de contato do doador     |            formato padrão de e-mail        |   Unique, Not Null
    quantia        |      DECIMAL(10,2)    |       valor financeiro arrecado       |          valores monetários positivos      |   Not Null
    mensagem       |       TEXT            |        Quarda um recado do usuário    |           Usado para textos longos         |   Not null
    Status         |        Varchar(30)    |       Nome da coluna                  |     máxima de coluna de 30 característica  |  DFAULT CURRENT_TIMESTAMP

Tabela: usuarios  
Field Name         |       Data Type       |           Description                 |           Allowed Values/Range             |     Notes
    id             |          INT          |       Identificador único de usuário  |            Inteiros positivos              |   Primary Key(AI)
   nome            |       VARCHAR(150)    |    nome completo do colaborador       |        máximo 150 caracteres               |   Not Null
   email           |        VARCHAR(150)   |       e-mail de login unificado       |            formato padrão de e-mail        |   Unique, Not Null
   senha           |       VARCHAR(245)    |    hash da senha de acesso            |        hash irreversível (Bcrypt)          |   Ver RN-01
   telefone        |       VARCHAR(50)     |       telefone de contato do usuário  |       formato válido para o Brasil         |   Nullable
   perfil_id       |          INT          |       vínculo com o cargo do usuário  |            IDs da tabela perfis            |   Foreign Key   
   ativo           |       BOOLEAN         |      status de acesso da conta        |           TRUE ou FALSE                    |   Default TRUE
criado_em          |        TIMESTAMP      |    registro de data/hora do cadastro  |         data e hora válida do sistema      |   Default CURRENT_TIMESTAMP

tabela: recuperacao_senha 
Field Name         |       Data Type       |           Description                 |           Allowed Values/Range             |     Notes
    id             |          INT          |  Identificador único da solicitação   |            Inteiros positivos              |   Primary Key(AI)
  email            |        VARCHAR(150)   |      e-mail vinculado à recuperação   |            formato padrão de e-mail        |   Foreign Key, Not Null
   expira_em       |        DATETIME       | data/hora limite de validade do link  |           data/hora futura válida          |   Not Null
  usado            |        TINYINY(1)     | indica se token já foi utilizado      |            1(sim) ou 0 (não)               |   Default
   criado_em       |        TIMESTAMP      | momento exato da solicitação          |           data/hora válida do sistema      |   Default CURRENT_TIMESTAMP

Tabela: permissoes  
Field Name         |       Data Type       |           Description                 |           Allowed Values/Range             |     Notes
 perfil_id         |          INT          |       vínculo com o perfil de acesso  |            IDs da tabela de perfis         |   Primary Key, FK
  recurso_id       |          INT          |    vinculo com o módulo do sistema    |        IDs da tabela de recurso            |   Primary Key, FK
   pode_criar      |        BOOLEAN        |   autorização para a ação CREATE      |            TRUE ou FALSE                   |   Default FALSE
   pode_ler        |        BOOLEAN        |   autorização para a ação READ        |            TRUE ou FALSE                   |   Default FALSE
pode_atualizar     |        BOOLEAN        |   autorização para a ação UPTADE      |            TRUE ou FALSE                   |   Default FALSE
 pode_deletar      |        BOOLEAN        |   autorização para a ação DELETE      |            TRUE ou FALSE                   |   Default FALSE
   
tabela: pedidos
Field Name         |       Data Type       |           Description                 |           Allowed Values/Range             |     Notes
    id             |          INT          |  Identificador único do pedido        |            Inteiros positivos              |   Primary Key(AI)
custome_name       |        VARCHAR(150)   |      nome do cliente/comprador        |           máximo 150 caracteres            |   Not Null
custome_email      |       VARCHAR(150)    |    e-mail do contato do cliente       |        formato padrão de e-mail            |   Not Null
custome_cel        |        VARCHAR(50 )   |      telefone de contato do cliente   |         formato válido                     |   Nullable
endereco           |        VARCHAR(250)   |          local de entrega             |            máximo de 255 caracteres        |   Nullable
produto_id         |        INT            |   referência ao produto comprado      |           IDs da tabela produtos           |   Foreign Key
quantidade         |          INT          |   número de itens comprados           |        inteiros positivos(>0)              |   Default 1
total              |        DECIMAL(10,2)  |      valor final da compra            |         valores monetários positivos       |   Not Null
status             |        VARCHAR(30 )   |      situação de processamento        |         ex: pendente, pago, enviado        |   Default 'pendente'
payment_method     |        VARCHAR(50)    |          forma de pagamento           |            cartão, pix, boleto, etc        |   Nullable
created_at         |        TIMESTAMP      |    registro de data/hora do pedido    |       data e hora válida do sistema        |   Default CURRENT_TIMESTAMP

