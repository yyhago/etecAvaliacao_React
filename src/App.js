import React, { useState } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Modal from "./components/Modal";
import "./App.css";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Análise de Sentimentos em Redes Sociais",
      description:
        "Desenvolver um sistema de análise de sentimentos que utiliza técnicas de processamento de linguagem natural para identificar e classificar emoções em posts de redes sociais.",
      observation:
        " Este TCC pode explorar algoritmos de aprendizado de máquina para melhorar a precisão da análise de sentimentos.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQ-Et_fxdvBL07xsfySPXdBWaxjaRzzmVrA6DYJvS4OvAQ4PAKdsJsslDRosLK4R6T7Q&usqp=CAU",
    },
    {
      id: 2,
      name: "Internet das Coisas (IoT) para Monitoramento Ambiental",
      description:
        " Implementar uma solução de IoT para monitoramento ambiental, coletando dados em tempo real de sensores e exibindo as informações de maneira acessível.",
      observation:
        "Pode-se explorar a integração com dispositivos como Raspberry Pi e sensores de qualidade do ar.",
      image:
        "https://www.tecnoset.com.br/wp-content/uploads/2019/01/original-5c134a6326db16e46f81d5adca341559.jpg",
    },
    {
      id: 3,
      name: "Realidade Virtual no Ensino à Distância",
      description:
        "Desenvolver um ambiente de ensino à distância utilizando tecnologias de realidade virtual para proporcionar uma experiência mais imersiva e envolvente aos alunos.",
      observation:
        "O TCC pode avaliar a eficácia da realidade virtual comparada aos métodos tradicionais de ensino online.",
      image:
        "https://www.findup.com.br/wp-content/uploads/2022/08/curso-tecnico-de-ti.jpg",
    },
    {
      id: 4,
      name: "Segurança em Sistemas Blockchain",
      description:
        "Explorar e aprimorar as técnicas de segurança em sistemas blockchain, abordando desafios como a proteção contra ataques de 51% e vulnerabilidades em contratos inteligentes.",
      observation:
        "Este TCC pode investigar abordagens para aumentar a resistência a ataques e melhorar a segurança geral em redes blockchain.",
      image:
        "https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2022/10/post_thumbnail-56f8522ff42eb3d9a65edeb2cbb641a3.jpeg",
    },
    {
      id: 5,
      name: "Reconhecimento Facial em Sistemas de Vigilância",
      description:
        "Desenvolver um sistema de reconhecimento facial para sistemas de vigilância, explorando algoritmos de aprendizado profundo para identificação de indivíduos em tempo real.",
      observation:
        "O TCC pode discutir questões éticas relacionadas à privacidade e implementar medidas para mitigar preocupações.",
      image:
        "https://gaea.com.br/wp-content/uploads/2016/05/x_dicas_para_melhorar_a_produtividade_da_equipe_de_TI.jpg.jpeg",
    },
  ]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // usei o operador 'spread' pra colocar o novo post sempre la em cima
    closeModal();
  };

  return (
    <AppContainer>
      <Header openModal={openModal} />
      <main>
        <PostsContainer>
          {posts.map((post) => (
            <Post key={post.id}>
              <PostName>{post.name}</PostName>
              <PostDescription>{post.description}</PostDescription>
              <PostObservation>{post.observation}</PostObservation>
              {post.image && (
                <PostImage
                  src={post.image}
                  alt="Imagem do post"
                />
              )}
            </Post>
          ))}
        </PostsContainer>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          addPost={addPost}
        />
      </main>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  font-family: "Arial", sans-serif;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Post = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 80%;
  max-width: 700px;
  margin: 20px auto;
  box-sizing: border-box;
  box-shadow: 1px 1px 1px 1px black;
`;

const PostName = styled.h3`
  margin-bottom: 5px;
`;

const PostDescription = styled.p`
  margin-bottom: 5px;
`;

const PostObservation = styled.p`
  margin-bottom: 5px;
`;

const PostImage = styled.img`
  display: block;
  margin: auto;
  max-width: 100%;
  height: auto;
  margin-top: 50px;
`;

export default App;
