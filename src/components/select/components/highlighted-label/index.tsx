interface Props {
  text: string;
  search?: string;
}

const HighlightedLabel = ({ text, search }: Props) => {
  if (!search || !search.trim) return text;

  const regex = new RegExp(`(${search})`, "gi");
  const parts = text.split(regex);

  return parts.map((part) =>
    regex.test(part) ? <span className="bg-blue-300">{part}</span> : part,
  );
};

export default HighlightedLabel;
