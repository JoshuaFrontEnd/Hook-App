export const Character = ({ image, name, species }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={ image } className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <p className="card-text"><b>Species:</b> { species }</p>
      </div>
    </div>
  )
}
