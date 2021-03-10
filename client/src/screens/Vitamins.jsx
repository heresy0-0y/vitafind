export default function Vitamins(props) {
  const { vitamins } = props;

  return (
    <div>
      <h3>Vitamins</h3>
      {vitamins.map((vitamin) => (
        <p key={vitamin.id}>{vitamin.name}</p>
      ))}
    </div>
  );
}
