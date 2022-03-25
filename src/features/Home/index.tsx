import { useDemo } from "../../hooks/query/useDemo";

const Home = () => {
  const { data, error } = useDemo();
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
    </>
  );
};

export { Home };
