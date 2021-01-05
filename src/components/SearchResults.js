
import React from "react"

class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      
    <section className="">
      { this.props.results.Title }
      { this.props.results.Actors }
    </section>
    
    )
  }
}

export default SearchResults;

