function ProductCard(props) {
  return (
    <div style={{width: '100px'}}>
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" style={{height: '100px'}}/>
      <h4>{props.shoes[props.index].title}</h4>
      <p>{props.shoes[props.index].content}</p>
    </div>
  );
}
export default ProductCard;
