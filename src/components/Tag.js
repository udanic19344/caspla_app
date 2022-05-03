const Tag = (props) => {
  return (
    <>
      <div
        className="btn"
        style={{
          margin: "auto 0",
          backgroundColor: "#E6E8EA",
          padding: "0 10px",
          borderRadius: "2px",
          margin: "2px",
        }}
      >
        <a
          href="#"
          style={{
            backgroundColor: props.state ? "#3F4D5F" : "#E6E8EA",
            color: props.state ? "#FFFFFF" : "#000000",
            textDecoration: "none",
            // color: "#3F4D5F",
          }}
        >
          {props.tagName}
        </a>
      </div>
    </>
  );
};

export default Tag;
