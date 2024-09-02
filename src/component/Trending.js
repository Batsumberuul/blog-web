const Trending = (props) => {
  const { coverIimage } = props;
  return (
    <div
      style={{
        backgroundImage: `url (${coverIimage})`,
        backgroundSize: "500px 300px",
      }}
    ></div>
  );
};
export default Trending;
