Galeria de Fotos - Upload de Imagens
Este projeto é uma aplicação web para upload, exibição e gerenciamento de imagens. Ele utiliza Node.js, Express, MongoDB e Multer para lidar com o backend e armazenamento de imagens, enquanto o frontend é construído com HTML, CSS e JavaScript.

Funcionalidades
Upload de imagens com limite de tamanho (5MB).
Exibição de imagens em uma galeria responsiva.
Exclusão de imagens.
Armazenamento de imagens no MongoDB como Buffer.
Interface amigável com notificações e modal para upload.



Estrutura do Projeto

.env
.vscode/
    settings.json
app.js
config/
    multer.js
controllers/
    PictureController.js
db.js
index.html
models/
    Picture.js
package.json
routes/
    picture.js
    Pictures.js
script.js
styles.css
uploads/



Descrição dos Arquivos
app.js: Configura o servidor Express, define as rotas e inicializa o servidor.

config/multer.js: Configura o Multer para lidar com uploads de arquivos.

controllers/PictureController.js: Contém as funções para criar, buscar, exibir e deletar imagens.

db.js: Configura a conexão com o banco de dados MongoDB.

models/Picture.js: Define o modelo de dados para as imagens no MongoDB.

routes/picture.js: Define as rotas para upload, busca e exclusão de imagens.

index.html: Página principal da aplicação.

script.js: Lida com a lógica do frontend, como exibição de imagens e interações do usuário.

styles.css: Estilização da interface.

.env: Contém variáveis de ambiente, como credenciais do banco de dados e porta do servidor.

Pré-requisitos

Node.js instalado.

MongoDB Atlas ou uma instância local do MongoDB.

Navegador moderno para acessar a interface.

Instalação

Clone o repositório:
git clone 
cd 

Instale as dependências:
npm install

Configure o arquivo .env:
DB_USER=
DB_PASS=
PORT=4001

Inicie o servidor:
npm start

Acesse a aplicação no navegador:
http://localhost:4001

Rotas da API
POST /pictures: Faz upload de uma imagem.
GET /pictures: Retorna todas as imagens.
GET /pictures/:id/image: Retorna uma imagem específica pelo ID.
DELETE /pictures/:id: Deleta uma imagem pelo ID.

Tecnologias Utilizadas

Backend: Node.js, Express, Multer, Mongoose.
Frontend: HTML, CSS, JavaScript.
Banco de Dados: MongoDB.

Melhorias Futuras
Adicionar autenticação para proteger as rotas.
Implementar edição de imagens.
Melhorar a experiência do usuário com animações e feedback visual.
Adicionar suporte para armazenamento em serviços como AWS S3.
