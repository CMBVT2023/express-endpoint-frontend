import AddForm from "./containers/add-form";

export default function AddCar() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1>Add New Car</h1>
      <AddForm />
    </div>
  );
}
