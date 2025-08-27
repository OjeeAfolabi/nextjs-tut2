const Loading = async () => {
  await new Promise((resolve) =>
    setTimeout(() => resolve("Content is loading..."), 3000)
  );
  return <div>Loading...</div>;
};

export default Loading;
