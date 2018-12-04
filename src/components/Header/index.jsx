import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { withRouter } from "react-router-dom";
import "./header.scss";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

class HeaderComponent extends Component {
  goToPage = ({ selected }) => this.props.history.push(`/page/${selected + 1}`);

  render() {
    const { routeParams, lastPage } = this.props;
    const pageId = routeParams.id ? routeParams.id : 1;

    return (
      <header className="main-header">
        <div className="logo" />
        <div>Новости</div>
        <nav className="pages">
          <ReactPaginate
            previousLabel={<FaLongArrowAltLeft size={16} />}
            nextLabel={<FaLongArrowAltRight size={16} />}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={lastPage}
            initialPage={pageId - 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.goToPage}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </nav>
      </header>
    );
  }
}

export const Header = withRouter(HeaderComponent);
