export default function Brands(props) {
  const { brands } = props;

  return (
    <div>
      <h3>Brands</h3>
      {brands.map((brand) => (
        <p key={brand.id}>{brand.name}</p>
      ))}
    </div>
  );
}
