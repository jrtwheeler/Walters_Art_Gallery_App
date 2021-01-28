import React, { Component } from "react";
import Row from "../Row";
import Col from "../Col";
import Table from "../Table";
import SearchForm from "../SearchForm";
import Container from "../Container";
import API from "../../utils/API";

class Directory extends Component {
  state = {
    search: "",
    error: "",
    results: [],
  };

  componentDidMount() {
    this.searchArchive("cups");
  }

  searchArchive = (query) => {
    API.getResults(query)
      .then((res) => this.setState({ results: res.data.Items }))
      .catch ((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchArchive(this.state.search);
  };

  render() {
    console.log(this.state.results);
    console.log(this.state.results);
    return (
      <Container>
        <Row>
          <SearchForm
            search={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <Col size="md-12">
            <Table results={this.state.results} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Directory;
