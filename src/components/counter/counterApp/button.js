function Button(props) {
  return (
    <>
      <button
        onClick={() => props.myClick()}
        style={{ padding: "5px", fontSize: "50px", width: "50px" }}
      >
        {props.title}
      </button>
    </>
  );
}
export default Button;
