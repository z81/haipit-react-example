import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { withRouter } from "react-router-dom";
import "./header.scss";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

class HeaderComponent extends Component {
  goToPage = ({ selected }) => this.props.history.push(`/page/${selected + 1}`);

  render() {
    const { routeParams, lastPage } = this.props;

    return (
      <div className="main-header">
        <div className="logo" />
        <div>Новости</div>
        <div className="pages">
          <ReactPaginate
            previousLabel={<FaLongArrowAltLeft size={16} />}
            nextLabel={<FaLongArrowAltRight size={16} />}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={lastPage}
            initialPage={routeParams.id - 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.goToPage}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    );
  }
}

export const Header = withRouter(HeaderComponent);
