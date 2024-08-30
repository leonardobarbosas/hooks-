import { listaProdutos } from "../../listaProdutos";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import styled from "styled-components";

const MinhaTabela = styled.table`
  background-color: #f1f1f1;
  border-radius: 10px;
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px 0;
  font-size: 1.2rem;
  text-align: center;

  & thead {
    background-color: #333;
    color: white;

    & th {
      padding: 10px;
      border: 1px solid #f1f1f1;
    }
  }

  & tbody {
    & tr {
      background-color: white;

      &:nth-child(even) {
        background-color: #f1f1f1;
      }

      & td {
        padding: 10px;
        border: 1px solid #f1f1f1;
      }
    }
  }

  & tfoot {
    background-color: #333;
    color: white;
    font-weight: bold;

    & td {
      padding: 10px;
      border: 1px solid #f1f1f1;
    }
  }
`;

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
                <img
                  src={`/assets/${produto.imagem}`}
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
