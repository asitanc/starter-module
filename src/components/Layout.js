import React, { Component } from "react";
import { withRouter } from "next/router";
import { Container } from 'react-bootstrap'
import Footer from "./Footer";
import Navbar from "./Navbar";

class Layout extends Component {

  render() {
    return (<>

      <header>
        <Navbar />
      </header>

      <main>
        <Container>
          {this.props.children}
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </>)
  }
}

export default withRouter(Layout)