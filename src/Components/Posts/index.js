const Posts = (props) => {
  return (
    <div className="post">
      <div className="imgPost"></div>
      <h6>{props.subtitle}</h6>
      <h4>{props.title}</h4>
      <p>{props.children}</p>
      <div className="flex pt-2">
        <div className="imgProfile"></div>
        <div className="descriptionProfile ml-2">
          <h6 className="color-blue">{props.author}</h6>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
