import { listaProdutos } from "../../listaProdutos";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { ImgProdutos } from "../../style/styled";
import { MinhaTabela } from "../../style/styled";


export default function Produtos() {
  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "PRODUTOS";

  return (
    <div>
      <h1>Produtos Eletrônicos</h1>

      <MinhaTabela>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Descrição</th>
            <th>Imagem</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {listaProdutos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>{produto.qtd}</td>
              <td>{produto.descricao}</td>
              <td>
                <ImgProdutos
                  src={`${produto.imagem}`}
                  alt={produto.nome}
                  width="100"
                />
              </td>
              <td>
                <Link to={`/editar/produtos/${produto.id}`}>
                  <FaCartPlus />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>
              Quantidades de Produtos = {listaProdutos.length}
            </td>
          </tr>
        </tfoot>
      </MinhaTabela>
    </div>
  );
}
