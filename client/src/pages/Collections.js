import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import FavoriteResults from "../components/FavoriteResults";
import API from "../utils/API";
class Collections extends Component {
  state = {
    search: "",
    error: "",
    results: [],
  };

  componentDidMount() {
    this.getExhibitionsfromAPI("Egypt");
  }

  getExhibitionsfromAPI = (exhibitions) => {
    API.getExhibitions(exhibitions)
      .then((res) => this.setState({ results: res.data.Items }))
      .catch((err) => console.log(err));
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
    this.getExhibitionsfromAPI(this.state.search);
  };

  render() {
    return (
      <div>
        <Container style={{ marginTop: 25 }}>
          <Row>
            <Col size="md-12">
              <h3>My Collections</h3>
            </Col>
          </Row>
          <Row>
            <Col size="md-4">
              <hr />
              <SearchForm
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              <hr />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              {/* <Card results={this.state.results} /> */}
              <FavoriteResults user={this.props.user} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Collections;
