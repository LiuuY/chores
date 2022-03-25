import { useDemo } from "@hooks/query/useDemo";

const Home = () => {
  const { data, error, isLoading } = useDemo();
  console.log(data, error, isLoading);
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
