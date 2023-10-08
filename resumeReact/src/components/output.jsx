function Header({ input }) {
  return (
    <>
      <div className="paperHeader">
        <h1>{input.name}</h1>
        <h2>
          <div>{input.number} </div>
          <div>{input.email}</div>
        </h2>
      </div>
    </>
  );
}

export { Header};
