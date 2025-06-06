// Importa o models Picture para interagir com o DB
const Picture = require("../models/Picture");

// Função para criar uma nova imagem no banco de dados
exports.create = async (req, res) => {
  try {
    // Obtém o nome da img do corpo da requisição
    const { name } = req.body;

    // Obtém o arquivo da req. (Usado pelo Multer para fazer o Upload)
    const file = req.file;

    // Cria uma nova instância com nome  e imagem
    const picture = new Picture({
      name,
      image: file.buffer,
      contentType: file.mimetype,
    });

    // Salva a imagem no DB
    await picture.save();

    // Retorna a resposta com a img. e uma msg. de sucesso
    res.json({ picture, msg: "Imagem salva com sucesso!" });
  } catch (err) {
    // Em caso de erro, retorna uma msg. com erro 500
    res.status(500).json({ message: "Erro ao salvar imagem!" });
  }
};

// Função para encontrar todas as imagens no banco de dados
exports.findAll = async (req, res) => {
  try {
    // Busca todas as imagens no banco de dados
    const pictures = await Picture.find();

    // Retorna todas as imagens do DB
    res.json({ pictures, msg: "Imagens buscadas com sucesso!" });
  } catch (err) {
    // Em caso de erro, retorna uma resposta de erro com código 500
    res.status(500).json({ message: "Erro ao buscar imagens!" });
  }
};

// Função para obter somente uma imagem especifica
exports.getImage = async (req, res) => {
  try {
    // Buscando a img. pelo ID fornececido pelo DB
    const picture = await Picture.findById(req.params.id);

    // Se a img. não foi encontrada, retorna uma erro 404
    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }

    // Define o tipo da resposta para o tipo da imagem
    res.set("Content-Type", picture.contentType);

    // Mostra a imagem na resposta
    res.send(picture.image);
  } catch (error) {
    // Caso ocorra erro, retorna para o usuario
    res.status(500).json({ message: "Erro ao buscar imagem!" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const picture = await Picture.findByIdAndDelete(id);
    
     if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }
    
    res.json({ message: "Imagem deletada com sucesso!" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao deletar imagem!" });
  }
};