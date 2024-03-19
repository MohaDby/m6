const Section = (props) => {
  return (
    <div className="section">
      <div className="col1">
        <p>{props.time}</p>
      </div>

      <img src={props.image} alt="" />
      <div className="col2">
        <h1>{props.title}</h1>
        <p>{props.type}</p>
        <div>
          <p>{props.duration}</p>
          {props.direct && <p>Direct</p>}
          {props.isUnseen && <p>Inédit</p>}
        </div>
      </div>
    </div>
  );
};

export default Section;
