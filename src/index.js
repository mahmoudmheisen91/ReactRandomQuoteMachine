"use strict";

function App() {
  return (
    <div>
      <HeaderComp text="FCC: Front End Libraries - Project 1, Random Quote Machine" />

      <QuoteController />

      <FooterComp />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
