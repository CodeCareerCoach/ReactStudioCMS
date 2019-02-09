import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Home = () => {
  return (
    <div>
      <h1 className="mar-0">Home</h1>
      <p>Welcome home!</p>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Home);
