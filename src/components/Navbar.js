export default function NavBar() {
  return (
    <h1>
      {" "}
      <nav style={{ padding: "1rem", backgroundColor: "#333", color: "white" }}>
        <h1>MyPortfolio</h1>
        <ul className="flex flex-row">
          <li className="flex-item mr-2 hover:color-black">github</li>
          <li className="flex-item mr-2">linkedin</li>
          <li className="flex-item mr-2">resume</li>
          <li className="flex-item mr-2">projects</li>
          <li className="flex-item mr-2">personal</li>
        </ul>
      </nav>
    </h1>
  );
}
