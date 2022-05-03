const Tag = (props) => {
  return (
    <>
      <p
        className="btn"
        style={{
          margin: "auto 0",
          backgroundColor: "#E6E8EA",
          padding: "0 10px",
          borderRadius: "2px",
        }}
      >
        <a href="#" style={{ textDecoration: "none", color: "#3F4D5F" }}>
          {props.tagName}
        </a>
      </p>
    </>
  );
};

export default Tag;
