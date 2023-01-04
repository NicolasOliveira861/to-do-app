export const Greetings = () => {
  const today = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const formattedDate = `${today}/${month}/${year}`;

  return (
    <div className="greetings">
      <h1>Hello there! What do we have for today?</h1>
      <span>{formattedDate}</span>
    </div>
  );
};
