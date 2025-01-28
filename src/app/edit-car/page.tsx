import { CarObject } from "@/utils/typescript-types";
import EditForm from "./containers/edit-form";

interface EditCarProps {
  searchParams: Omit<CarObject, "deleted_flag">;
}

export default function EditCar({ searchParams }: EditCarProps) {
  const { make, model, year, id } = searchParams;

  return <EditForm make={make} model={model} year={year} id={id} />;
}
