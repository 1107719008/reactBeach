import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"



const { Header, Content, Footer } = Layout;

function Introduction() {
  return (
    <Layout className="container main-layout">
        
      <Header className="layout-header">
        <AppHeader title="Introduction" />
      </Header>
      <Content className="layout-content">
    {/* <ProductList products={tableware} />*/}
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Introduction;