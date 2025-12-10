export const Submit = ({ text, handler }) => {
  return (
    <button
      type="submit"
      className="w-full bg-secondary text-white hover:bg-primary hover:text-black py-2 rounded-md font-semibold transition-colors cursor-pointer"
      onClick={handler}
    >
      {text}
    </button>
  );
};
