const Shimmer = () => {
  return (
    <div
      className="h-full w-full grid grid-cols-5 gap-4 p-5"
      data-testid="shimmer"
    >
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="h-full w-full bg-white rounded-lg border"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
