export const Greetings = () => {
  const today = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const formattedDate = `${today}/${month}/${year}`;

  return (
    <div className="greetings">
      <h1>Olá! O que temos para hoje?</h1>
      <span>{formattedDate}</span>
    </div>
  );
};
