import React, { Component } from "react";
import styled from 'styled-components';
import { withRouter } from "next/router";
import { Container } from 'react-bootstrap';
import Footer from "./Footer";
import Navbar from "./Navbar";

const PagesContainer = styled.div`
    min-height: calc(100vh - 54px);
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

      <footer>
        <Footer />
      </footer>
    </>)
  }
}

export default withRouter(Layout)
