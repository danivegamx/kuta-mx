import "./styles.sass";

export default function Button({ data }: any) {
  const {
    title,
    type,
    metadata: { url, action, color, sin_borde },
  } = data;
  return (
    <>
      {url ? (
        <a
          className={`${
            sin_borde
              ? ` text-white`
              : "bg-transparent border hover:bg-gradient-to-r from-purple to-violet-900 hover:text-white hover:border-transparent transition duration-300 ease-in-out text-purple"
          } flex flex-1 rounded-md py-2 justify-center`}
          style={
            sin_borde ? { backgroundColor: color } : { borderColor: color }
          }
          href={url}
        >
          {title}
        </a>
      ) : (
        <button onClick={() => action()} className="w-full">
          {title}
        </button>
      )}
    </>
  );
}
