import React, { Component } from "react";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import SearchForm from "../SearchForm";
import Container from "../Container";
import API from "../../utils/API";

class Directory extends Component {
  state = {
    search: "",
    error: "",
    results: [],
    filtered: []
  };

  componentDidMount() {
    this.searchArchive("cups");
  }

  searchArchive = (query) => {
    API.getResults(query)
      .then((res) => this.setState({ results: res.data.Items, filtered: res.data.Items }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
      filtered: this.state.results.filter(result => result.DisplayLocation !== "Not On View")
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchArchive(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <SearchForm
            search={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <Col size="md-12">
            <Card results={this.state.filtered} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Directory;
