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
    API.getResults("whistler")
      .then((res) => this.setState({ results: res.Items }))
      .catch((err) => console.log(err));
  }

  searchArchive = () => {
    API.getResults(this.state.search)
      .then((res) => this.setState({ results: res.data.Items }))
      .catch((err) => console.log(err));
  };

  // startArchive = () => {
  //   API.getResults()
  //     .then((res) => this.setState({ results: res.data.Items }))
  //     .catch((err) => console.log(err));
  // };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(event.target);
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchArchive(this.state.search);
  };

  render() {
    console.log(this.state.search);
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
