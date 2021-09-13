const Posts = ({ title, subtitle }) => {
  return (
    <div className="post border">
      <div className="imgPost"></div>
      <h5>{subtitle}</h5>
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        perferendis pariatur autem deleniti eos inventore quidem a veritatis
        quos nihil sunt ea explicabo exercitationem aspernatur unde quam,
        voluptate dignissimos quae.
      </p>
      <div className="flex pt-2">
        <div className="imgProfile"></div>
        <div className="descriptionProfile ml-2">
          <h6 className="color-blue">Fulano de tal</h6>
          <p>September, 13 - 5 min ago</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
