interface Props {
  content: string;
}

const ToDoItem = ({ content }: Props) => {
  return (
    <div className="to-do-item">
      <input type="checkbox" />
      <span>{content}</span>
    </div>
  );
};

export default ToDoItem;
