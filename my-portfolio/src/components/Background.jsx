export default function Background() {

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[length:400%_400%] bg-gradient-to-r from-cyan-500 via-purple-600 to-blue-500 animate-gradient"
      />
      <style>{`
            .animate-gradient { animation: gradientMove 12s ease infinite; }
            .animate-gradient-slow { animation: gradientMove 20s ease infinite; }
            @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
            }
        `}
     </style>
    </>
  );
}
