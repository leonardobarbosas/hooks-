import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Lista } from "../../types";
import { listaProdutos } from "../../listaProdutos";

export default function EditarProdutos() {
  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "EDITAR PRODUTOS";

  //Realizando um destructuring para recuperar o parâmetro que foi passado na rota:
  //Ex: Se a rota criada foi: /meus-dados/:dados
  //O destructuring irá recuperar o dado que foi passado na rota e atribuir a propriedade de um elemento cuja o nome é aquele criado na rota, antes do dois pontos,ou seja, (:dados)
  //Então teriamos que realizar a seguinte ação para receber esta informação.
  // const{dados} = useParams(), um detalhe aqui é que o useParams() pertence ao react-router e deve ser importado dele
  const { id } = useParams();

  const [produto, setProduto] = useState<Lista>();

  useEffect(() => {
    //Aqui é onde iremos realizar a requisição para a API, para recuperar os dados do produto que queremos editar
    setProduto(listaProdutos.find((item) => item.id === Number(id)));
  }, [id]);

  return (
    <div>
      <h1>Olá, mundo sou o EditarProdutos!</h1>
      <div>
        <h2>ID: {id}</h2>
        <div>
          <label>Nome: {produto?.nome}</label>
          <p>Preco: {produto?.preco}</p>
          <p>Quantidade: {produto?.qtd}</p>
          <p>Descrição: {produto?.descricao}</p>
          <figure>
            <img src={produto?.imagem} alt={produto?.nome} />
          </figure>
        </div>
      </div>
    </div>
  );
}
