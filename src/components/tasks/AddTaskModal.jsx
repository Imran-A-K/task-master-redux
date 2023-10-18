import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";

function AddTaskModal({ isOpen, setIsOpen, title }) {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };
  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register("name")}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </Modal>
  );
}

export default AddTaskModal;
