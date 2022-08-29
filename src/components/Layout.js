import React, { Component } from "react";
import styled from 'styled-components';
import { withRouter } from "next/router";
import { Container } from 'react-bootstrap';
import Footer from "./Footer";
import Navbar from "./Navbar";

const PagesContainer = styled.div`
  min-height: calc(100vh + 54px);
`

const FooterContainer = styled.div`
  width: 100%;
`

class Layout extends Component {

  render() {
    return (<>

      <header>
        <Navbar />
      </header>

      <PagesContainer>
        <Container>
          {this.props.children}
        </Container>
      </PagesContainer>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>)
  }
}

export default withRouter(Layout)
