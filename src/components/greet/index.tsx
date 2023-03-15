type GreetProps = { name?: string };

const Greet = ({ name }: GreetProps) => {
  return <div>Hello {name? name: 'Guest'}</div>;
};

export default Greet;
