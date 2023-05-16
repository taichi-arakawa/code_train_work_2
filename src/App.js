//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Image, List, Layout, Descriptions, Col, Row, Avatar } from "antd";
import { ExtendButton } from "./ExtendButton";
import { AnimatedItem } from "./AnimatedItem";

const { Content, Footer } = Layout;

function App() {
  let images = [
    "https://pbs.twimg.com/media/Fvmt5seaAAAu2qe?format=jpg&name=medium",
    "https://pbs.twimg.com/media/FvmtrJCaMAA-bwr?format=jpg&name=medium",
    "https://pbs.twimg.com/media/Fvcdbu0aMAIrKQG?format=jpg&name=medium",
    "https://pbs.twimg.com/media/FvcdUblaEAUSRVf?format=jpg&name=medium",
    "https://pbs.twimg.com/media/FwGLZQZakAAP7PK?format=jpg&name=medium",
    "https://pbs.twimg.com/media/FvwqZeJakAAg0Hg?format=jpg&name=medium",
    "https://pbs.twimg.com/media/Fu-eMTIagAA51ox?format=jpg&name=medium",
    "https://pbs.twimg.com/media/Fu-dyyiacAErXZa?format=jpg&name=medium",
    "https://pbs.twimg.com/media/FvZdP_6agAIqAbQ?format=jpg&name=medium",
    "https://pbs.twimg.com/media/Fut5ohHaUAIoyi_?format=jpg&name=medium",
    "https://pbs.twimg.com/media/Fut5mrragAEVhNt?format=jpg&name=medium",
    "https://pbs.twimg.com/media/Fut5iuxaQAInP1n?format=jpg&name=medium",
  ];
  return (
    <Layout className="layout">
      {/* <Header>
        <Title style={{ color: "white", margin: "10px" }}>
          
        </Title>
      </Header> */}
      <Content
        style={{
          margin: "0 0 50px",
          padding: "150px",
          background:
            "url(https://pbs.twimg.com/media/FwDRGqaaIAAmRu4?format=jpg&name=4096x4096)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          justifyItems: "center",
        }}
      >
        <Row justifyContent="center">
          <Col xs={24} lg={8} style={{ textAlign: "center" }}>
            <Avatar size={300} src="/images/taichi_arakawa.jpg" />
          </Col>
          <Col xs={24} lg={16}>
            <Descriptions
              title="Taichi Arakawa"
              style={{ background: "#fff", padding: "50px", margin: "25px 0" }}
            >
              <Descriptions.Item label="Live">Tokyo, Japan</Descriptions.Item>
              <Descriptions.Item label="Motto">
                Kawaii idol ha Kamisama
              </Descriptions.Item>
              <Descriptions.Item label="Like LiveHouse">
                Shibuya WOMB
              </Descriptions.Item>
              <Descriptions.Item label="Like Idol">
                Nippon Wachacha
              </Descriptions.Item>
              <Descriptions.Item label="Like Idol">Agemon</Descriptions.Item>
              <Descriptions.Item label="Like Idol">
                Call My Name
              </Descriptions.Item>
              <p>
                はじめまして。私の名前はTaichi
                Arakawaです。アイドルが大好きです。
                <br />
                アイドルの歌やダンス、そして生き生きとした姿にいつも元気をもらっています。
                <br />
                アイドルのファン活動を通して、たくさんの人と出会い、楽しい時間を過ごしています。
                <br />
                アイドルに出会えて、本当に幸せです。
              </p>

              {/* 私はアイドルオタクです。
              アイドルを愛しています。
              彼らの歌と踊りに夢中です。
              彼らの笑顔に癒されます。

              私はアイドルの追っかけです。
              ライブには必ず行きます。
              グッズは全部集めます。
              応援は欠かせません。

              私はアイドルオタクです。
              ちょっと変わってるかもしれません。
              でも、私は誇りに思います。
              アイドルを愛しています。 */}
            </Descriptions>
          </Col>
        </Row>
      </Content>
      <Content
        style={{
          padding: "0 50px",
          textAlign: "center",
        }}
      >
        <Image.PreviewGroup>
          <List
            grid={{
              gutter: 60, //グリッド間の間隔
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            dataSource={images}
            renderItem={(item) => (
              <List.Item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AnimatedItem>
                  <Image
                    src={item}
                    alt={item}
                    width={400}
                    height={400}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </AnimatedItem>
              </List.Item>
            )}
          />
        </Image.PreviewGroup>
        <ExtendButton />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        &copy; 2023 Taichi Arakawa By And Design
      </Footer>
    </Layout>
  );
}

export default App;
