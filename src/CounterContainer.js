import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = dispatch => ({
  addAction: () => dispatch({ type: "ADD" }),
  removeAction: () => dispatch({ type: "REMOVE" }),
  add10Action: () => dispatch({ type: "ADD10" }),
  remove10Action: () => dispatch({ type: "REMOVE10" }),
  reset: () => dispatch({ type: "RESET" })
});

const CounterContainer = ({
  count,
  addAction,
  removeAction,
  add10Action,
  remove10Action,
  reset
}) => (
  <div>
    <p>{count}</p>
    <button onClick={addAction}>ADD</button>
    <button onClick={removeAction}>REMOVE</button>
    <button onClick={add10Action}>ADD</button>
    <button onClick={remove10Action}>REMOVE</button>
    <button onClick={reset}>RESET</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
